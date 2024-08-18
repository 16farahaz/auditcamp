const express = require('express');
const { getChartData } = require('../controllers/PieController'); // Adjust path as needed

const router = express.Router();

// Define the route to get chart data
router.get('/graph', getChartData);

module.exports = router;