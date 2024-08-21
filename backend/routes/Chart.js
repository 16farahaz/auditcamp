const express = require('express');
const { getChartData } = require('../controllers/ChartspaceController.js'); // Adjust path as needed

const router = express.Router();


// Route to get chart data by idste
router.get('/chart/:idste', getChartData);

module.exports = router;