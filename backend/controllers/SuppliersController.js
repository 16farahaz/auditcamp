const path = require("path");
const Suppliers = require("../models/Suppliers");

// Create a new supplier
exports.createSupplier = async (req, res) => {
    try {
        const { State, ...rest } = req.body;

        let filePath = "";
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const newSupplier = new Suppliers({
            State: State || "blocked",
            file: filePath,
            ...rest
        });

        const savedSupplier = await newSupplier.save();
        res.status(201).json(savedSupplier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all suppliers
exports.getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Suppliers.find();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a supplier by ID
exports.getSupplierById = async (req, res) => {
    try {
        const supplier = await Suppliers.findById(req.params.id);
        if (!supplier) {
            return res.status(404).json({ message: "Supplier not found" });
        }
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a supplier by ID
exports.updateSupplierById = async (req, res) => {
    try {
        const { State, ...rest } = req.body;
        const supplier = await Suppliers.findById(req.params.id);
        if (!supplier) {
            return res.status(404).json({ message: "Supplier not found" });
        }

        let filePath = supplier.file;
        if (req.files && req.files.file) {
            const file = req.files.file;
            filePath = path.join(__dirname, "../uploads/", file.name);
            await file.mv(filePath);
        }

        const updatedSupplier = await Suppliers.findByIdAndUpdate(
            req.params.id,
            { State: State || "blocked", file: filePath, ...rest },
            { new: true }
        );

        res.status(200).json(updatedSupplier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a supplier by ID
exports.deleteSupplierById = async (req, res) => {
    try {
        const supplier = await Suppliers.findById(req.params.id);
        if (!supplier) {
            return res.status(404).json({ message: "Supplier not found" });
        }

        await supplier.remove();
        res.status(200).json({ message: "Supplier deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
