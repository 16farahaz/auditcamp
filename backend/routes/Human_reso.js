const express = require("express");
const router = express.Router();
const humanResoController = require("../controllers/Human_resoController");

// Route to create a new human_reso
router.post("/add", humanResoController.createHumanReso);

// Route to get all human_resos
router.get("/acc", humanResoController.getAllHumanResos);

// Route to get a specific human_reso by ID
router.get("/acc/:id", humanResoController.getHumanResoById);

// Route to update a specific human_reso by ID
router.put("/upd/:id", humanResoController.updateHumanResoById);

// Route to delete a specific human_reso by ID
router.delete("/del/:id", humanResoController.deleteHumanResoById);

module.exports = router;
