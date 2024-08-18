const path = require("path");
const Human_reso = require("../models/Human_reso");

// Create a new human_reso
exports.createHumanReso = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;

        let filePath = "";
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const newHumanReso = new Human_reso({
            idste:idste,
            nomste:nomste,
            State: State || "blocked",
            file: filePath,
            ...rest
        });

        const savedHumanReso = await newHumanReso.save();
        console.log(savedHumanReso);
        res.status(201).json(savedHumanReso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all human_resos
exports.getAllHumanResos = async (req, res) => {
    try {
        const human_resos = await Human_reso.find();
        res.status(200).json(human_resos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a human_reso by ID
exports.getHumanResoById = async (req, res) => {
    try {
        const human_reso = await Human_reso.findById(req.params.id);
        if (!human_reso) {
            return res.status(404).json({ message: "Human_reso not found" });
        }
        res.status(200).json(human_reso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a human_reso by ID
exports.updateHumanResoById = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;
        const human_reso = await Human_reso.findById(req.params.id);
        if (!human_reso) {
            return res.status(404).json({ message: "Human_reso not found" });
        }

        let filePath = human_reso.file;
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const updatedHumanReso = await Human_reso.findByIdAndUpdate(
            req.params.id,
            { idste:idste,
                nomste:nomste,
                State: State || "blocked",
                file: filePath,
                ...rest },
            { new: true }
        );

        res.status(200).json(updatedHumanReso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a human_reso by ID
exports.deleteHumanResoById = async (req, res) => {
    try {
        const human_reso = await Human_reso.findById(req.params.id);
        if (!human_reso) {
            return res.status(404).json({ message: "Human_reso not found" });
        }

        await human_reso.remove();
        res.status(200).json({ message: "Human_reso deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
