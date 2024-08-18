const path = require("path");
const Accesscontrol = require("../models/Accesscontrol");

// Create a new access control
exports.createAccesscontrol = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;

        let filePath = "";
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const newAccesscontrol = new Accesscontrol({
            idste:idste,
            nomste:nomste,
            State: State || "blocked",
            file: filePath,
            ...rest
        });

        const savedAccesscontrol = await newAccesscontrol.save();
        res.status(201).json(savedAccesscontrol);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all access controls
exports.getAllAccesscontrols = async (req, res) => {
    try {
        const accesscontrols = await Accesscontrol.find();
        res.status(200).json(accesscontrols);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get an access control by ID
exports.getAccesscontrolById = async (req, res) => {
    try {
        const accesscontrol = await Accesscontrol.findById(req.params.id);
        if (!accesscontrol) {
            return res.status(404).json({ message: "Access control not found" });
        }
        res.status(200).json(accesscontrol);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an access control by ID
exports.updateAccesscontrolById = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;
        const accesscontrol = await Accesscontrol.findById(req.params.id);
        if (!accesscontrol) {
            return res.status(404).json({ message: "Access control not found" });
        }

        let filePath = accesscontrol.file;
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const updatedAccesscontrol = await Accesscontrol.findByIdAndUpdate(
            req.params.id,
            { idste:idste, nomste:nomste ,State: State || "blocked", file: filePath, ...rest },
            { new: true }
        );

        res.status(200).json(updatedAccesscontrol);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an access control by ID
exports.deleteAccesscontrolById = async (req, res) => {
    try {
        const accesscontrol = await Accesscontrol.findById(req.params.id);
        if (!accesscontrol) {
            return res.status(404).json({ message: "Access control not found" });
        }

        await accesscontrol.remove();
        res.status(200).json({ message: "Access control deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
