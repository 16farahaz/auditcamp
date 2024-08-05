const express = require("express");
const router = express.Router();
const securitycController = require("../controllers/SecuritycController");

// Route to create a new securityc
router.post("/add", securitycController.createSecurityc);

// Route to get all securitycs
router.get("/acc", securitycController.getAllSecuritycs);

// Route to get a specific securityc by ID
router.get("/acc/:id", securitycController.getSecuritycById);

// Route to update a specific securityc by ID
router.put("/upd/:id", securitycController.updateSecuritycById);

// Route to delete a specific securityc by ID
router.delete("/del/:id", securitycController.deleteSecuritycById);

module.exports = router;
