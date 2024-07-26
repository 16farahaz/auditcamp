const express = require('express');

const router = express.Router();
const auditController = require('../controllers/AuditController');





// Create a new audit with validation
router.post('/',auditController.createAudit);

// Get all audits
router.get('/', auditController.getAllAudits);

// Get a single audit by ID
router.get('/:id', auditController.getAuditById);

// Update an audit by ID with validation
router.put('/:id', auditController.updateAuditById);

// Delete an audit by ID
router.delete('/:id', auditController.deleteAuditById);

module.exports = router;
