const express = require('express');
const mongoose = require('mongoose');

// Initialize Express router
const router = express.Router();

// Array of collection names
const collectionNames = [
    'accesscontrols',
    'assets',
    'compliances',
    'cryptos',
    'human_resos',
    'oper_sercurities',
    'security_phy_envs',
    'security_asp',
    'securityos',
    'securitycs',
    'securityis',
    'securityps',
    'suppliers',
    'systems'
];

// Function to fetch and aggregate state data
const fetchAndAggregateStates = async () => {
    // Iterate over each collection name and fetch state counts
    const promises = collectionNames.map(async (collectionName) => {
        const model = mongoose.connection.collection(collectionName); // Access the collection directly

        // Perform aggregation to group by idste and nomste and count states
        const aggregationPipeline = [
            {
                $group: {
                    _id: {
                        idste: '$idste',
                        nomste: '$nomste',
                        State: '$State'
                    },
                    count: { $sum: 1 }
                }
            },
            {
                $group: {
                    _id: {
                        idste: '$_id.idste',
                        nomste: '$_id.nomste'
                    },
                    states: {
                        $push: {
                            state: '$_id.State',
                            count: '$count'
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    idste: '$_id.idste',
                    nomste: '$_id.nomste',
                    states: 1
                }
            }
        ];

        return model.aggregate(aggregationPipeline).toArray(); // Aggregate and convert to array
    });

    const results = await Promise.all(promises); // Wait for all queries to complete
    console.log(results);

    // Flatten and combine results
    const flattenedResults = results.flat();
    console.log(flattenedResults);

    // Aggregate the state counts across all collections
    const stateCounts = flattenedResults.reduce((acc, doc) => {
        const { idste, nomste, states } = doc;
        if (!acc[idste]) {
            acc[idste] = {};
        }
        if (!acc[idste][nomste]) {
            acc[idste][nomste] = { blocked: 0, running: 0, completed: 0 };
        }
        states.forEach(({ state, count }) => {
            acc[idste][nomste][state] = (acc[idste][nomste][state] || 0) + count;
        });
        return acc;
    }, {});

    console.log(stateCounts);
    return stateCounts;
};

// Define the API route
const getChartData = async (req, res) => {
    try {
        const stateCounts = await fetchAndAggregateStates();
        res.json(stateCounts); // Send the aggregated data as a JSON response
    } catch (error) {
        res.status(500).json({ error: 'Server error' }); // Handle any errors
    }
};

// Export the router and functions
module.exports = {
    router,
    getChartData
};
