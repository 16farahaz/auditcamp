const express = require("express");
const router = express.Router();
const security_aspController = require("../controllers/Security_aspController");

// Route to create a new security aspect
router.post("/add", security_aspController.createSecurity_asp);

// Route to get all security aspects
router.get("/acc", security_aspController.getAllSecurity_asps);

// Route to get a specific security aspect by ID
router.get("/acc/:id", security_aspController.getSecurity_aspById);

// Route to update a specific security aspect by ID
router.put("/upd/:id", security_aspController.updateSecurity_aspById);

// Route to delete a specific security aspect by ID
router.delete("/del/:id", security_aspController.deleteSecurity_aspById);

module.exports = router;
