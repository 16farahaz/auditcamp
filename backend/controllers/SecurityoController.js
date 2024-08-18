const path = require("path");
const Securityo = require("../models/Securityo");

// Create a new securityo
exports.createSecurityo = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;

        let filePath = "";
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const newSecurityo = new Securityo({
            idste:idste,
            nomste:nomste,
            State: State || "blocked",
            file: filePath,
            ...rest
        });

        const savedSecurityo = await newSecurityo.save();
        console.log(savedSecurityo);
        res.status(201).json(savedSecurityo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all securityos
exports.getAllSecurityos = async (req, res) => {
    try {
        const securityos = await Securityo.find();
        res.status(200).json(securityos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a securityo by ID
exports.getSecurityoById = async (req, res) => {
    try {
        const securityo = await Securityo.findById(req.params.id);
        if (!securityo) {
            return res.status(404).json({ message: "Securityo not found" });
        }
        res.status(200).json(securityo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a securityo by ID
exports.updateSecurityoById = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;
        const securityo = await Securityo.findById(req.params.id);
        if (!securityo) {
            return res.status(404).json({ message: "Securityo not found" });
        }

        let filePath = securityo.file;
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const updatedSecurityo = await Securityo.findByIdAndUpdate(
            req.params.id,
            { idste:idste,
                nomste:nomste,
                State: State || "blocked",
                file: filePath,
                ...rest },
            { new: true }
        );

        res.status(200).json(updatedSecurityo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a securityo by ID
exports.deleteSecurityoById = async (req, res) => {
    try {
        const securityo = await Securityo.findById(req.params.id);
        if (!securityo) {
            return res.status(404).json({ message: "Securityo not found" });
        }

        await securityo.remove();
        res.status(200).json({ message: "Securityo deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
