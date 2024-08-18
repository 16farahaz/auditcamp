const path = require("path");
const Asset = require("../models/Asset");

// Create a new asset
exports.createAsset = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;

        let filePath = "";
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const newAsset = new Asset({
            idste:idste,
            nomste:nomste,
            State: State || "blocked",
            file: filePath,
            ...rest
        });

        const savedAsset = await newAsset.save();
        console.log(savedAsset);
        res.status(201).json(savedAsset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all assets
exports.getAllAssets = async (req, res) => {
    try {
        const assets = await Asset.find();
        res.status(200).json(assets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get an asset by ID
exports.getAssetById = async (req, res) => {
    try {
        const asset = await Asset.findById(req.params.id);
        if (!asset) {
            return res.status(404).json({ message: "Asset not found" });
        }
        res.status(200).json(asset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an asset by ID
exports.updateAssetById = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;
        const asset = await Asset.findById(req.params.id);
        if (!asset) {
            return res.status(404).json({ message: "Asset not found" });
        }

        let filePath = asset.file;
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const updatedAsset = await Asset.findByIdAndUpdate(
            req.params.id,
            { idste:idste,
                nomste:nomste,
                State: State || "blocked",
                file: filePath,
                ...rest },
            { new: true }
        );

        res.status(200).json(updatedAsset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an asset by ID
exports.deleteAssetById = async (req, res) => {
    try {
        const asset = await Asset.findById(req.params.id);
        if (!asset) {
            return res.status(404).json({ message: "Asset not found" });
        }

        await asset.remove();
        res.status(200).json({ message: "Asset deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
