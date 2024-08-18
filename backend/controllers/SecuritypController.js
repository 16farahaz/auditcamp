const path = require("path");
const Securityp = require("../models/Securityp");

// Create a new securityp
exports.createSecurityp = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;

        let filePath = "";
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const newSecurityp = new Securityp({
            idste:idste,
            nomste:nomste,
            State: State || "blocked",
            file: filePath,
            ...rest
        });

        const savedSecurityp = await newSecurityp.save();
        console.log(savedSecurityp);
        res.status(201).json(savedSecurityp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all securityps
exports.getAllSecurityps = async (req, res) => {
    try {
        const securityps = await Securityp.find();
        res.status(200).json(securityps);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a securityp by ID
exports.getSecuritypById = async (req, res) => {
    try {
        const securityp = await Securityp.findById(req.params.id);
        if (!securityp) {
            return res.status(404).json({ message: "Securityp not found" });
        }
        res.status(200).json(securityp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a securityp by ID
exports.updateSecuritypById = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;
        const securityp = await Securityp.findById(req.params.id);
        if (!securityp) {
            return res.status(404).json({ message: "Securityp not found" });
        }

        let filePath = securityp.file;
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const updatedSecurityp = await Securityp.findByIdAndUpdate(
            req.params.id,
            { idste:idste,
                nomste:nomste,
                State: State || "blocked",
                file: filePath,
                ...rest },
            { new: true }
        );

        res.status(200).json(updatedSecurityp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a securityp by ID
exports.deleteSecuritypById = async (req, res) => {
    try {
        const securityp = await Securityp.findById(req.params.id);
        if (!securityp) {
            return res.status(404).json({ message: "Securityp not found" });
        }

        await securityp.remove();
        res.status(200).json({ message: "Securityp deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
