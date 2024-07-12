// server.js
const express = require('express');
const app = express();
const port = 5000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('this working');
});

// Require and use the audit route
const auditRoute = require('./routes/Audit');
app.use('/audit', auditRoute);

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
