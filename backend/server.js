const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const port = 5000;
require('./config/dbconfig');
// Define a simple route
app.get('/', (req, res) => {
    res.send('This is working');
});

// Use fileUpload middleware
app.use(fileUpload());

// Require and use the audit route
const auditRoute = require('./routes/Audit');
const accesscontrolRoutes = require('./routes/Accesscontrol');
const securitypRoutes = require("./routes/Securityp");
const securityoRoutes = require("./routes/Securityo");
const Human_resoRoutes = require("./routes/Human_reso");
const AssetRoutes= require("./routes/Asset");
const CryptoRoutes= require("./routes/Crypto");
const speRoutes= require("./routes/Security_phy_env");
const OperRoutes= require("./routes/Oper_security");
const SecuritycRoutes=require("./routes/Securityc");
const SystemRoutes=require("./routes/System");
const SupliersRoutes=require("./routes/Suppliers");
const SecurityiRoutes=require("./routes/Securityi");
const Security_aspRoutes=require("./routes/Security_asp");
const ComplianceRoutes=require("./routes/Compliance");
const UserRoutes=require("./routes/User");

const PieRoutes=require("./routes/Pie");
const   ChartRoutes=require("./routes/Chart");

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(__dirname + "/uploads"));
// Routes
app.use("/access", accesscontrolRoutes);
app.use("/securityp",securitypRoutes);
app.use("/securityo",securityoRoutes);
app.use("/human",Human_resoRoutes);
app.use("/asset",AssetRoutes);
app.use('/audit', auditRoute);
app.use("/crypto",CryptoRoutes);
app.use("/spe",speRoutes);
app.use("/oper",OperRoutes);
app.use("/securityc",SecuritycRoutes);
app.use("/system",SystemRoutes);
app.use("/suppliers",SupliersRoutes);
app.use("/securityi",SecurityiRoutes);
app.use("/secasp",Security_aspRoutes);
app.use("/compliance",ComplianceRoutes);
app.use("/graph",PieRoutes);
app.use("/graph1",ChartRoutes);
app.use("/user",UserRoutes);



// Start the server
app.listen(port, () => { 
    console.log(`Server listening on port ${port}`);
});
