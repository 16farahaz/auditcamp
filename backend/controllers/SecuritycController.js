const path = require("path");
const Securityc = require("../models/Securityc");

// Create a new securityc
exports.createSecurityc = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;

        let filePath = "";
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const newSecurityc = new Securityc({
            idste:idste,
            nomste:nomste,
            State: State || "blocked",
            file: filePath,
            ...rest
        });

        const savedSecurityc = await newSecurityc.save();
        res.status(201).json(savedSecurityc);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all securitycs
exports.getAllSecuritycs = async (req, res) => {
    try {
        const securitycs = await Securityc.find();
        res.status(200).json(securitycs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a securityc by ID
exports.getSecuritycById = async (req, res) => {
    try {
        const securityc = await Securityc.findById(req.params.id);
        if (!securityc) {
            return res.status(404).json({ message: "Securityc not found" });
        }
        res.status(200).json(securityc);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a securityc by ID
exports.updateSecuritycById = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;
        const securityc = await Securityc.findById(req.params.id);
        if (!securityc) {
            return res.status(404).json({ message: "Securityc not found" });
        }

        let filePath = securityc.file;
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const updatedSecurityc = await Securityc.findByIdAndUpdate(
            req.params.id,
            { idste:idste,
                nomste:nomste,
                State: State || "blocked",
                file: filePath,
                ...rest },
            { new: true }
        );

        res.status(200).json(updatedSecurityc);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a securityc by ID
exports.deleteSecuritycById = async (req, res) => {
    try {
        const securityc = await Securityc.findById(req.params.id);
        if (!securityc) {
            return res.status(404).json({ message: "Securityc not found" });
        }

        await securityc.remove();
        res.status(200).json({ message: "Securityc deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
