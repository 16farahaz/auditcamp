const path = require("path");
const Security_asp = require("../models/Security_asp");

// Create a new security aspect
exports.createSecurity_asp = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;

        let filePath = "";
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const newSecurity_asp = new Security_asp({
            idste:idste,
            nomste:nomste,
            State: State || "blocked",
            file: filePath,
            ...rest
        });

        const savedSecurity_asp = await newSecurity_asp.save();
        res.status(201).json(savedSecurity_asp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all security aspects
exports.getAllSecurity_asps = async (req, res) => {
    try {
        const security_asps = await Security_asp.find();
        res.status(200).json(security_asps);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a security aspect by ID
exports.getSecurity_aspById = async (req, res) => {
    try {
        const security_asp = await Security_asp.findById(req.params.id);
        if (!security_asp) {
            return res.status(404).json({ message: "Security aspect not found" });
        }
        res.status(200).json(security_asp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a security aspect by ID
exports.updateSecurity_aspById = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;
        const security_asp = await Security_asp.findById(req.params.id);
        if (!security_asp) {
            return res.status(404).json({ message: "Security aspect not found" });
        }

        let filePath = security_asp.file;
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const updatedSecurity_asp = await Security_asp.findByIdAndUpdate(
            req.params.id,
            { idste:idste,
                nomste:nomste,
                State: State || "blocked",
                file: filePath,
                ...rest },
            { new: true }
        );

        res.status(200).json(updatedSecurity_asp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a security aspect by ID
exports.deleteSecurity_aspById = async (req, res) => {
    try {
        const security_asp = await Security_asp.findById(req.params.id);
        if (!security_asp) {
            return res.status(404).json({ message: "Security aspect not found" });
        }

        await security_asp.remove();
        res.status(200).json({ message: "Security aspect deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
