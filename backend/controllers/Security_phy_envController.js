const path = require("path");
const Security_phy_env = require("../models/Security_phy_env");

// Create a new security_phy_env
exports.createSecurityPhyEnv = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;

        let filePath = "";
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const newSecurityPhyEnv = new Security_phy_env({
            idste:idste,
            nomste:nomste,
            State: State || "blocked",
            file: filePath,
            ...rest
        });

        const savedSecurityPhyEnv = await newSecurityPhyEnv.save();
        console.log(savedSecurityPhyEnv);
        res.status(201).json(savedSecurityPhyEnv);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all security_phy_envs
exports.getAllSecurityPhyEnvs = async (req, res) => {
    try {
        const securityPhyEnvs = await Security_phy_env.find();
        res.status(200).json(securityPhyEnvs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a security_phy_env by ID
exports.getSecurityPhyEnvById = async (req, res) => {
    try {
        const securityPhyEnv = await Security_phy_env.findById(req.params.id);
        if (!securityPhyEnv) {
            return res.status(404).json({ message: "Security_phy_env not found" });
        }
        res.status(200).json(securityPhyEnv);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a security_phy_env by ID
exports.updateSecurityPhyEnvById = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;
        const securityPhyEnv = await Security_phy_env.findById(req.params.id);
        if (!securityPhyEnv) {
            return res.status(404).json({ message: "Security_phy_env not found" });
        }

        let filePath = securityPhyEnv.file;
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const updatedSecurityPhyEnv = await Security_phy_env.findByIdAndUpdate(
            req.params.id,
            { idste:idste,
                nomste:nomste,
                State: State || "blocked",
                file: filePath,
                ...rest },
            { new: true }
        );

        res.status(200).json(updatedSecurityPhyEnv);
    } catch (error) {
        res.status500().json({ message: error.message });
    }
};

// Delete a security_phy_env by ID
exports.deleteSecurityPhyEnvById = async (req, res) => {
    try {
        const securityPhyEnv = await Security_phy_env.findById(req.params.id);
        if (!securityPhyEnv) {
            return res.status(404).json({ message: "Security_phy_env not found" });
        }

        await securityPhyEnv.remove();
        res.status(200).json({ message: "Security_phy_env deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
