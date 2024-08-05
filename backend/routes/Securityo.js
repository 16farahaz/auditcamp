const express = require("express");
const router = express.Router();
const securityoController = require("../controllers/SecurityoController");

// Route to create a new securityo
router.post("/add", securityoController.createSecurityo);

// Route to get all securityos
router.get("/acc", securityoController.getAllSecurityos);

// Route to get a specific securityo by ID
router.get("/acc/:id", securityoController.getSecurityoById);

// Route to update a specific securityo by ID
router.put("/upd/:id", securityoController.updateSecurityoById);

// Route to delete a specific securityo by ID
router.delete("/del/:id", securityoController.deleteSecurityoById);

module.exports = router;
