const path = require("path");
const Securityi = require("../models/Securityi");

// Create a new security incident
exports.createSecurityi = async (req, res) => {
    try {
        const { State, ...rest } = req.body;

        let filePath = "";
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const newSecurityi = new Securityi({
            State: State || "blocked",
            file: filePath,
            ...rest
        });

        const savedSecurityi = await newSecurityi.save();
        res.status(201).json(savedSecurityi);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all security incidents
exports.getAllSecurityis = async (req, res) => {
    try {
        const securityis = await Securityi.find();
        res.status(200).json(securityis);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a security incident by ID
exports.getSecurityiById = async (req, res) => {
    try {
        const securityi = await Securityi.findById(req.params.id);
        if (!securityi) {
            return res.status(404).json({ message: "Security incident not found" });
        }
        res.status(200).json(securityi);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a security incident by ID
exports.updateSecurityiById = async (req, res) => {
    try {
        const { State, ...rest } = req.body;
        const securityi = await Securityi.findById(req.params.id);
        if (!securityi) {
            return res.status(404).json({ message: "Security incident not found" });
        }

        let filePath = securityi.file;
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const updatedSecurityi = await Securityi.findByIdAndUpdate(
            req.params.id,
            { State: State || "blocked", file: filePath, ...rest },
            { new: true }
        );

        res.status(200).json(updatedSecurityi);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a security incident by ID
exports.deleteSecurityiById = async (req, res) => {
    try {
        const securityi = await Securityi.findById(req.params.id);
        if (!securityi) {
            return res.status(404).json({ message: "Security incident not found" });
        }

        await securityi.remove();
        res.status(200).json({ message: "Security incident deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
