const { User, LegalCase }= require('../models/user'); // Import the User model
const bcrypt = require('bcryptjs');

// Get user info
const getUserController = async (req, res) => {
    try {
        // Find user
        const user = await User.findById(req.body.id);
        // Validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found!",
            });
        }
        // Hide password
        user.password = undefined;
        res.status(200).send({
            success: true,
            message: 'Get User Successful',
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error In Getting User',
        });
    }
};

// Update user info
const updateUserController = async (req, res) => {
    try {
        // Find user
        const user = await User.findById(req.body.id);
        // Validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found!',
            });
        }
        // Update
        const { userName, phone } = req.body;
        if (userName) user.userName = userName;
        if (phone) user.phone = phone;
        await user.save();
        res.status(200).send({
            success: true,
            message: 'User updated Successfully',
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error In Updating User',
            error,
        });
    }
};

// Reset password
const resetPasswordController = async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        if (!email || !newPassword) {
            return res.status(500).send({
                success: false,
                message: 'Please provide all fields',
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(500).send({
                success: false,
                message: 'User not found',
            });
        }
        // Hashed password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        user.password = hashedPassword;
        await user.save();
        res.status(200).send({
            success: true,
            message: 'Password reset successful',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in resetting password',
            error,
        });
    }
};

//Request for legal aid
const legalAidController = async (req, res) => {
    try {
        const {caseType, description, urgency} = req.body;
        //validation
        if (!caseType || !description || !urgency) {
            return res.status(400).send({
                success: false,
                message: 'Please provide all fields',
            });
        }
        if (!req.user || !req.user.id) {
            return res.status(401).send({
                success: false,
                message: 'Unauthorized: User not found',
            });
        }
        //create new case
        const userId = req.user.id;
        const newCase = new LegalCase({
            user: userId,
            caseType,
            description,
            urgency,
        });
        await newCase.save();
        res.status(200).send({
            success: true,
            message: 'New Case Saved Successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error saving new case',
            error,
        });
    }
};

//Delete User
const deleteUserController = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        return res.status(200).send({
            success: true,
            message: "Your account has been deleted",
          });
    } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Erorr In Deleting account",
          error,
        }); 
    }
}


module.exports = { getUserController, updateUserController, resetPasswordController, legalAidController, deleteUserController};