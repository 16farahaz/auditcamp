// routes/Audit.js
const express = require('express');
const router = express.Router();
const auditController = require('../controllers/AuditController');

// Define the route and use the controller's get method
router.get('/', auditController.get);  // Use '/' instead of '/audit'

module.exports = router;
