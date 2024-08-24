const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { checkEmailExists } = require('../middlewares/verifymiddleware');
const fileUploader = require('../Uploads/fileUploader');
const path = require('path'); // Import path module

// Register a new user
const registerUser = async (req, res) => {
    try {
        const { name, lastname, email, motpasse, role } = req.body;

        // Check if the email already exists
        const emailExists = await checkEmailExists(email);
        if (emailExists) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Handle file upload
        let image;
        if (req.files && req.files.image) {
            const uploadPath = './Uploads/';
            image = await fileUploader.upload(req.files.image, uploadPath);
        } else {
            image = 'Uploads/userr.png'; // Default image if no image is provided
        }

        // Hash the password
        const cryptedPass = await bcrypt.hash(motpasse, 10);

        // Create a new user
        const newUser = new User({
            name,
            lastname,
            email,
            motpasse: cryptedPass, // Save the hashed password
            image,
            role // Set the role
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Create a JWT token with role
        const token = jwt.sign({ _id: savedUser._id, role: savedUser.role }, '123456789', { expiresIn: '1h' });

        // Return the user and token
        res.status(201).json({ user: savedUser, token });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Login user
const loginUser = async (req, res) => {
    try {
        const { email, motpasse } = req.body;

        console.log("Login attempt:", { email, motpasse }); // Debugging log

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        console.log("User found:", user); // Debugging log

        // Validate password
        const validPass = await bcrypt.compare(motpasse, user.motpasse);
        if (!validPass) {
            return res.status(401).json({ message: 'Invalid credentials!' });
        }

        // Create a JWT token with role
        const token = jwt.sign({ _id: user._id, role: user.role }, '123456789', { expiresIn: '1h' });
        console.log("Generated Token:", token);
        
        // Return the user and token
        res.status(200).json({ user, token });
    } catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update user details
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id; // Get user ID from URL parameters
        const { name, lastname, email, motpasse, role } = req.body;

        // Find the user by ID
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        // Ensure the current user has permission to change roles or update others
        const currentUser = req.user;
        if (currentUser.role !== 'superadmin' && currentUser._id.toString() !== userId) {
            return res.status(403).json({ message: 'You do not have permission to update this user' });
        }

        // Update user details
        if (name) user.name = name;
        if (lastname) user.lastname = lastname;
        if (email) {
            // Check if the new email is not already taken
            const emailExists = await checkEmailExists(email);
            if (emailExists && email !== user.email) {
                return res.status(400).json({ message: 'Email already exists' });
            }
            user.email = email;
        }
        if (motpasse) user.motpasse = await bcrypt.hash(motpasse, 10); // Hash new password
        if (role && currentUser.role === 'superadmin') user.role = role; // Update role if provided and user is superadmin

        // Handle file upload if there's a new image
        if (req.files && req.files.image) {
            const uploadPath = './Uploads/';
            user.image = await fileUploader.upload(req.files.image, uploadPath);
        }

        // Save the updated user
        await user.save();

        res.status(200).json({ message: 'User updated successfully!', user });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update user profile image
const updateImage = async (req, res) => {
    try {
        const userId = req.params.id; // Get user ID from URL parameters

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        // Ensure the current user has permission to update the image
        const currentUser = req.user;
        if (currentUser.role !== 'superadmin' && currentUser._id.toString() !== userId) {
            return res.status(403).json({ message: 'You do not have permission to update this user' });
        }

        // Handle file upload if there's a new image
        if (req.files && req.files.image) {
            const uploadPath = path.join(__dirname, '../Uploads/');
            user.image = await fileUploader.upload(req.files.image, uploadPath);
        } else {
            return res.status(400).json({ message: 'No image file provided!' });
        }

        // Save the updated user
        await user.save();

        res.status(200).json({ message: 'Profile image updated successfully!', user });
    } catch (error) {
        console.error('Error updating profile image:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Block a user
const blockUser = async (req, res) => {
    try {
        const userId = req.params.id; // Get user ID from URL parameters

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        // Ensure the current user has permission to block users
        const currentUser = req.user;
        if (currentUser.role !== 'superadmin') {
            return res.status(403).json({ message: 'You do not have permission to block users' });
        }

        // Update user status to 'blocked'
        user.status = 'blocked';

        // Save the updated user
        await user.save();

        res.status(200).json({ message: 'User blocked successfully!', user });
    } catch (error) {
        console.error('Error blocking user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get user by ID
const getUserById = async (req, res) => {
    try {
        const userId = req.params.id; // Get user ID from URL parameters

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all users
const getUsers = async (req, res) => {
    try {
        // Ensure the current user has permission to fetch all users
        const currentUser = req.user;
        if (currentUser.role !== 'superadmin') {
            return res.status(403).json({ message: 'You do not have permission to access this resource' });
        }

        // Fetch all users from the database
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get user profile
const getUserProfile = async (req, res) => {
    try {
        // Retrieve the user ID from the JWT payload (set by the verifyJWT middleware)
        const userId = req.user._id;

        // Fetch the user's details from the database, excluding the password field
        const user = await User.findById(userId).select('-motpasse');

        // Check if the user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error('Error retrieving user profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Export the controller functions
module.exports = {
    registerUser,
    loginUser,
    updateUser,
    updateImage,
    blockUser,
    getUserById,
    getUsers,
    getUserProfile
};
