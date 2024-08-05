const express = require("express");
const router = express.Router();
const assetController = require("../controllers/AssetController");

// Route to create a new asset
router.post("/add", assetController.createAsset);

// Route to get all assets
router.get("/acc", assetController.getAllAssets);

// Route to get a specific asset by ID
router.get("/acc/:id", assetController.getAssetById);

// Route to update a specific asset by ID
router.put("/upd/:id", assetController.updateAssetById);

// Route to delete a specific asset by ID
router.delete("/del/:id", assetController.deleteAssetById);

module.exports = router;
