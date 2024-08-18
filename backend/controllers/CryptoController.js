const path = require("path");
const Crypto = require("../models/Crypto");

// Create a new crypto
exports.createCrypto = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;

        let filePath = "";
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const newCrypto = new Crypto({
            idste:idste,
            nomste:nomste,
            State: State || "blocked",
            file: filePath,
            ...rest
        });

        const savedCrypto = await newCrypto.save();
        console.log(savedCrypto);
        res.status(201).json(savedCrypto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all cryptos
exports.getAllCryptos = async (req, res) => {
    try {
        const cryptos = await Crypto.find();
        res.status(200).json(cryptos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a crypto by ID
exports.getCryptoById = async (req, res) => {
    try {
        const crypto = await Crypto.findById(req.params.id);
        if (!crypto) {
            return res.status(404).json({ message: "Crypto not found" });
        }
        res.status(200).json(crypto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a crypto by ID
exports.updateCryptoById = async (req, res) => {
    try {
        const {  idste,nomste,State, ...rest } = req.body;
        const crypto = await Crypto.findById(req.params.id);
        if (!crypto) {
            return res.status(404).json({ message: "Crypto not found" });
        }

        let filePath = crypto.file;
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const updatedCrypto = await Crypto.findByIdAndUpdate(
            req.params.id,
            { idste:idste,
                nomste:nomste,
                State: State || "blocked",
                file: filePath,
                ...rest},
            { new: true }
        );

        res.status(200).json(updatedCrypto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a crypto by ID
exports.deleteCryptoById = async (req, res) => {
    try {
        const crypto = await Crypto.findById(req.params.id);
        if (!crypto) {
            return res.status(404).json({ message: "Crypto not found" });
        }

        await crypto.remove();
        res.status(200).json({ message: "Crypto deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
