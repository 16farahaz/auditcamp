const path = require("path");
const Compliance = require("../models/Compliance");

// Create a new compliance record
exports.createCompliance = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;

        let filePath = "";
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const newCompliance = new Compliance({
            idste:idste,
            nomste:nomste,
            State: State || "blocked",
            file: filePath,
            ...rest
        });

        const savedCompliance = await newCompliance.save();
        res.status(201).json(savedCompliance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all compliance records
exports.getAllCompliances = async (req, res) => {
    try {
        const compliances = await Compliance.find();
        res.status(200).json(compliances);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a compliance record by ID
exports.getComplianceById = async (req, res) => {
    try {
        const compliance = await Compliance.findById(req.params.id);
        if (!compliance) {
            return res.status(404).json({ message: "Compliance record not found" });
        }
        res.status(200).json(compliance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a compliance record by ID
exports.updateComplianceById = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;
        const compliance = await Compliance.findById(req.params.id);
        if (!compliance) {
            return res.status(404).json({ message: "Compliance record not found" });
        }

        let filePath = compliance.file;
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const updatedCompliance = await Compliance.findByIdAndUpdate(
            req.params.id,
            { idste:idste,
                nomste:nomste,
                State: State || "blocked",
                file: filePath,
                ...rest },
            { new: true }
        );

        res.status(200).json(updatedCompliance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a compliance record by ID
exports.deleteComplianceById = async (req, res) => {
    try {
        const compliance = await Compliance.findById(req.params.id);
        if (!compliance) {
            return res.status(404).json({ message: "Compliance record not found" });
        }

        await compliance.remove();
        res.status(200).json({ message: "Compliance record deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
