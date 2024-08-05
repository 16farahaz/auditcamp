const express = require("express");
const router = express.Router();
const suppliersController = require("../controllers/SuppliersController");

// Route to create a new supplier
router.post("/add", suppliersController.createSupplier);

// Route to get all suppliers
router.get("/acc", suppliersController.getAllSuppliers);

// Route to get a specific supplier by ID
router.get("/acc/:id", suppliersController.getSupplierById);

// Route to update a specific supplier by ID
router.put("/upd/:id", suppliersController.updateSupplierById);

// Route to delete a specific supplier by ID
router.delete("/del/:id", suppliersController.deleteSupplierById);

module.exports = router;
