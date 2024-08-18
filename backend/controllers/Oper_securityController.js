const path = require("path");
const Oper_security = require("../models/Oper_security");

// Create a new oper_security
exports.createOperSecurity = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;

        let filePath = "";
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const newOperSecurity = new Oper_security({
            idste:idste,
            nomste:nomste,
            State: State || "blocked",
            file: filePath,
            ...rest
        });

        const savedOperSecurity = await newOperSecurity.save();
        res.status(201).json(savedOperSecurity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all oper_securities
exports.getAllOperSecurities = async (req, res) => {
    try {
        const operSecurities = await Oper_security.find();
        res.status(200).json(operSecurities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a oper_security by ID
exports.getOperSecurityById = async (req, res) => {
    try {
        const operSecurity = await Oper_security.findById(req.params.id);
        if (!operSecurity) {
            return res.status(404).json({ message: "Oper_security not found" });
        }
        res.status(200).json(operSecurity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a oper_security by ID
exports.updateOperSecurityById = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;
        const operSecurity = await Oper_security.findById(req.params.id);
        if (!operSecurity) {
            return res.status(404).json({ message: "Oper_security not found" });
        }

        let filePath = operSecurity.file;
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const updatedOperSecurity = await Oper_security.findByIdAndUpdate(
            req.params.id,
            { State: State || "blocked", file: filePath, ...rest },
            { new: true }
        );

        res.status(200).json(updatedOperSecurity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a oper_security by ID
exports.deleteOperSecurityById = async (req, res) => {
    try {
        const operSecurity = await Oper_security.findById(req.params.id);
        if (!operSecurity) {
            return res.status(404).json({ message: "Oper_security not found" });
        }

        await operSecurity.remove();
        res.status(200).json({ message: "Oper_security deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
