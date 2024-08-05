const express = require("express");
const router = express.Router();
const cryptoController = require("../controllers/CryptoController");

// Route to create a new crypto
router.post("/add", cryptoController.createCrypto);

// Route to get all cryptos
router.get("/acc", cryptoController.getAllCryptos);

// Route to get a specific crypto by ID
router.get("/acc/:id", cryptoController.getCryptoById);

// Route to update a specific crypto by ID
router.put("/upd/:id", cryptoController.updateCryptoById);

// Route to delete a specific crypto by ID
router.delete("/del/:id", cryptoController.deleteCryptoById);

module.exports = router;
