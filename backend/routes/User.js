const express = require('express');
const router = express.Router();
const { registerUser, loginUser, updateUser, blockUser, getUserById, getUsers,getUserProfile,updateImage } = require('../controllers/UserController');
const verifyJWT = require('../middlewares/jwtmiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Route to register a user
router.post('/register', registerUser);

// Route to login a user
router.post('/login', loginUser);

// Route to update a user
router.put('/update/:id', verifyJWT, roleMiddleware(['superadmin']), updateUser);

// Route to block a user
router.put('/block/:id', verifyJWT, roleMiddleware(['admin', 'superadmin']), blockUser);

// Route to get a user by ID
router.get('/user/:id', verifyJWT, roleMiddleware(['admin', 'superadmin']), getUserById);

// Route to get all users
router.get('/users', verifyJWT, roleMiddleware(['superadmin']), getUsers); // Only superadmin can get all users

// Route to get my profil
router.get('/me', verifyJWT,getUserProfile); // Only superadmin can get all users
router.put('/upimg/:id', verifyJWT, roleMiddleware(['superadmin']),updateImage);

module.exports = router;
