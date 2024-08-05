const express = require("express");
const router = express.Router();
const systemController = require("../controllers/SystemController");

// Route to create a new system
router.post("/add", systemController.createSystem);

// Route to get all systems
router.get("/acc", systemController.getAllSystems);

// Route to get a specific system by ID
router.get("/acc/:id", systemController.getSystemById);

// Route to update a specific system by ID
router.put("/upd/:id", systemController.updateSystemById);

// Route to delete a specific system by ID
router.delete("/del/:id", systemController.deleteSystemById);

module.exports = router;
