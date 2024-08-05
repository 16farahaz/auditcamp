const express = require("express");
const router = express.Router();
const complianceController = require("../controllers/ComplianceController");

// Route to create a new compliance record
router.post("/add", complianceController.createCompliance);

// Route to get all compliance records
router.get("/acc", complianceController.getAllCompliances);

// Route to get a specific compliance record by ID
router.get("/acc/:id", complianceController.getComplianceById);

// Route to update a specific compliance record by ID
router.put("/upd/:id", complianceController.updateComplianceById);

// Route to delete a specific compliance record by ID
router.delete("/del/:id", complianceController.deleteComplianceById);

module.exports = router;
