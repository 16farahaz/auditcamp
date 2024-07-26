// server.js
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
require('./config/dbconfig');
// Define a simple route
app.get('/', (req, res) => {
    res.send('this working');
});

// Require and use the audit route
const auditRoute = require('./routes/Audit');

app.use(express.json());
app.use(cors()); // Add this line

app.use('/audit', auditRoute);

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
