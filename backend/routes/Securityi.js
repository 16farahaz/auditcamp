const express = require("express");
const router = express.Router();
const securityiController = require("../controllers/SecurityiController");

// Route to create a new security incident
router.post("/add", securityiController.createSecurityi);

// Route to get all security incidents
router.get("/acc", securityiController.getAllSecurityis);

// Route to get a specific security incident by ID
router.get("/acc/:id", securityiController.getSecurityiById);

// Route to update a specific security incident by ID
router.put("/upd/:id", securityiController.updateSecurityiById);

// Route to delete a specific security incident by ID
router.delete("/del/:id", securityiController.deleteSecurityiById);

module.exports = router;
