const express = require("express");
const router = express.Router();
const operSecurityController = require("../controllers/Oper_securityController");

// Route to create a new oper_security
router.post("/add", operSecurityController.createOperSecurity);

// Route to get all oper_securities
router.get("/acc", operSecurityController.getAllOperSecurities);

// Route to get a specific oper_security by ID
router.get("/acc/:id", operSecurityController.getOperSecurityById);

// Route to update a specific oper_security by ID
router.put("/upd/:id", operSecurityController.updateOperSecurityById);

// Route to delete a specific oper_security by ID
router.delete("/del/:id", operSecurityController.deleteOperSecurityById);

module.exports = router;
