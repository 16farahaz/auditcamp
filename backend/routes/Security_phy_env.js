const express = require("express");
const router = express.Router();
const securityPhyEnvController = require("../controllers/Security_phy_envController");

// Route to create a new security_phy_env
router.post("/add", securityPhyEnvController.createSecurityPhyEnv);

// Route to get all security_phy_envs
router.get("/acc", securityPhyEnvController.getAllSecurityPhyEnvs);

// Route to get a specific security_phy_env by ID
router.get("/acc/:id", securityPhyEnvController.getSecurityPhyEnvById);

// Route to update a specific security_phy_env by ID
router.put("/upd/:id", securityPhyEnvController.updateSecurityPhyEnvById);

// Route to delete a specific security_phy_env by ID
router.delete("/del/:id", securityPhyEnvController.deleteSecurityPhyEnvById);

module.exports = router;
