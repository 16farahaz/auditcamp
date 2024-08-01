    const Audit = require('../models/Audit');
    const User=require('../models/User');
    const Company = require('../models/Company')
    const bcrypt = require('bcrypt');
    const { validationResult } = require('express-validator');


    // Function to generate a random password
    function generatePassword() {
        return Math.random().toString(36).slice(-8); // Simple password of 8 characters
    }

    // Create Audit function
    exports.createAudit = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            // Extract data from the request body
            const { 
                nom, emailc, numt, rssi, emailr, auditor, norme, date,at1, at2, at3, at4, at5, at6,
                at7, at8, at9, at10, at11, at12, at13, at14, at15, at16, at17, at18, at19, at20,
                at21, at22, at23, at24, at25, at26, at27, at28, at29, at30, at31, at32,
                at33, at34, at35, at36, at37, at38, at39, at40, at41, at42, at43, at44, at45, at46, at47, at48, at49, at50, at51, at52,
                at53, at54, at55, at56, at57, at58, at59, at60, at61, at62, at63, at64, at65, at66, at67, at68, at69, at70, at71, at72, at73, at74, at75, at76, at77, at78, at79, at80,
                at81, at82, at83, at84,
                at85, at86, at87, at88, at89, at90, at91, at92, at93, at94, at95, at96, at97, at98, at99, at100, at101, at102, at103, at104, at105, at106, at107, at108, at109, at110, at111, at112,
                at113, at114,
                at115, at116, at117, at118, at119, at120, at121, at122, at123, at124, at125, at126, at127, at128, at129, at130, at131, at132, at133, at134, at135, at136, at137, at138, at139, at140, at141, at142, at143, at144,
                at145, at146, at147, at148, at149, at150, at151, at152, at153, at154, at155, at156, at157, at158, at159, at160,
                at161, at162, at163, at164, at165, at166, at167, at168,
                at169, at170,
                at171, at172,
                at173, at174, at175, at176,
                at177, at178, at179, at180, at181, at182, at183, at184, at185, at186, at187, at188, at189, at190,
            
            } = req.body;

            console.log(req.body);

        
            
            // Find or create user by emailr
            let user = await User.findOne({ email: emailr });
            if (!user) {
                const password = generatePassword();
                const hashedPassword = await bcrypt.hash(password, 10);
                user = new User({ email: emailr, motpasse: hashedPassword });
                await user.save();
            }
            // Find or create company by emailc
            let company = await Company.findOne({ email: emailc });
            if (!company) {
                company = new Company({ email: emailc, nom: nom, num:numt });
                await company.save();
            }
            // Create a new audit
            const audit = new Audit({
                nom,
                emailc,
                numt,
                rssi,
                emailr,
                auditor,
                norme,
                date,
            at1, at2, at3, at4, at5, at6,
            at7, at8, at9, at10, at11, at12, at13, at14, at15, at16, at17, at18, at19, at20,
            at21, at22, at23, at24, at25, at26, at27, at28, at29, at30, at31, at32,
            at33, at34, at35, at36, at37, at38, at39, at40, at41, at42, at43, at44, at45, at46, at47, at48, at49, at50, at51, at52,
            at53, at54, at55, at56, at57, at58, at59, at60, at61, at62, at63, at64, at65, at66, at67, at68, at69, at70, at71, at72, at73, at74, at75, at76, at77, at78, at79, at80,
            at81, at82, at83, at84,
            at85, at86, at87, at88, at89, at90, at91, at92, at93, at94, at95, at96, at97, at98, at99, at100, at101, at102, at103, at104, at105, at106, at107, at108, at109, at110, at111, at112,
            at113, at114,
            at115, at116, at117, at118, at119, at120, at121, at122, at123, at124, at125, at126, at127, at128, at129, at130, at131, at132, at133, at134, at135, at136, at137, at138, at139, at140, at141, at142, at143, at144,
            at145, at146, at147, at148, at149, at150, at151, at152, at153, at154, at155, at156, at157, at158, at159, at160,
            at161, at162, at163, at164, at165, at166, at167, at168,
            at169, at170,
            at171, at172,
            at173, at174, at175, at176,
            at177, at178, at179, at180, at181, at182, at183, at184, at185, at186, at187, at188, at189, at190,
            
                user: user._id, // Link with the created user
                company: company._id // Link with the created company
            });

            const savedAudit = await audit.save();
            console.log(savedAudit);
            res.status(201).json(savedAudit);

        } catch (error) {
            console.error('Error adding audit:', error.message);
            res.status(500).send('Internal Server Error');
        }
    };

    // Get all audits
    exports.getAllAudits = async (req, res) => {
        try {
            const audits = await Audit.find();
            res.status(200).json(audits);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
    // Get a single audit by ID
    exports.getAuditById = async (req, res) => {
        try {
            const audit = await Audit.findById(req.params.id);
            console.log(id);
            if (!audit) return res.status(404).json({ message: 'Audit not found' });
            res.status(200).json(audit);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    // Update an audit by ID
    exports.updateAuditById = async (req, res) => {
        try {
            const audit = await Audit.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
            });
            if (!audit) return res.status(404).json({ message: 'Audit not found' });
            res.status(200).json(audit);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    // Delete an audit by ID
    exports.deleteAuditById = async (req, res) => {
        try {
            const audit = await Audit.findByIdAndDelete(req.params.id);
            if (!audit) return res.status(404).json({ message: 'Audit not found' });
            res.status(200).json({ message: 'Audit deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }



    };


    exports.envoyertask=async(req,res)=>{

    };



