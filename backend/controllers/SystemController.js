const path = require("path");
const System = require("../models/System");

// Create a new system
exports.createSystem = async (req, res) => {
    try {
        const { State, ...rest } = req.body;

        let filePath = "";
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const newSystem = new System({
            State: State || "blocked",
            file: filePath,
            ...rest
        });

        const savedSystem = await newSystem.save();
        res.status(201).json(savedSystem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all systems
exports.getAllSystems = async (req, res) => {
    try {
        const systems = await System.find();
        res.status(200).json(systems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a system by ID
exports.getSystemById = async (req, res) => {
    try {
        const system = await System.findById(req.params.id);
        if (!system) {
            return res.status(404).json({ message: "System not found" });
        }
        res.status(200).json(system);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a system by ID
exports.updateSystemById = async (req, res) => {
    try {
        const { State, ...rest } = req.body;
        const system = await System.findById(req.params.id);
        if (!system) {
            return res.status(404).json({ message: "System not found" });
        }

        let filePath = system.file;
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const updatedSystem = await System.findByIdAndUpdate(
            req.params.id,
            { State: State || "blocked", file: filePath, ...rest },
            { new: true }
        );

        res.status(200).json(updatedSystem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a system by ID
exports.deleteSystemById = async (req, res) => {
    try {
        const system = await System.findById(req.params.id);
        if (!system) {
            return res.status(404).json({ message: "System not found" });
        }

        await system.remove();
        res.status(200).json({ message: "System deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
