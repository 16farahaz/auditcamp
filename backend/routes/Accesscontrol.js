const express = require("express");
const router = express.Router();
const accesscontrolController = require("../controllers/AccesscontrolController");

// Route to create a new access control
router.post("/add", accesscontrolController.createAccesscontrol);

// Route to get all access controls
router.get("/acc", accesscontrolController.getAllAccesscontrols);

// Route to get a specific access control by ID
router.get("/acc/:id", accesscontrolController.getAccesscontrolById);

// Route to update a specific access control by ID
router.put("/upd/:id", accesscontrolController.updateAccesscontrolById);

// Route to delete a specific access control by ID
router.delete("/del/:id", accesscontrolController.deleteAccesscontrolById);

module.exports = router;
