const express = require("express");
const router = express.Router();
const securitypController = require("../controllers/SecuritypController");

// Route to create a new securityp
router.post("/add", securitypController.createSecurityp);

// Route to get all securityps
router.get("/all", securitypController.getAllSecurityps);

// Route to get a specific securityp by ID
router.get("/:id", securitypController.getSecuritypById);

// Route to update a specific securityp by ID
router.put("/update/:id", securitypController.updateSecuritypById);

// Route to delete a specific securityp by ID
router.delete("/delete/:id", securitypController.deleteSecuritypById);

module.exports = router;
