const user = require('../models/user');
const bcrypt = require('bcryptjs');

//get user info
const getUserController = async (req, res) => {
    try {
        //find user
        const user = await user.findById({_id: req.body.id});
        //validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found!",
            });
        }
        //hide password
        user.password = undefined;
        res.status(200).send({
            success: true,
            message: 'Get User Successful',
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error In Getting User',
        });
    }
};

//update user info
const updateUserController = async (req, res) => {
    try {
        //find user
        const user = await user.findById({_id: req.body.id});
        //validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found!',
            });
        }
        //update
        const {userName, phone} = req.body;
        if (userName) user.userName = userName;
        if (phone) user.phone = phone;
        await user.save();
        res.status(200).send({
            success: true,
            message: 'User updated Successfully',
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

//reset password
const resetPasswordController = async (req, res) => {
    try {
        const {email, newPassword} = req.body;
        if (!email || !newPassword) {
            return res.status(500).send({
                success: false,
                message: 'Please provide all fields',
            });
        }
        const user =await user.findOne({email});
        if (!user) {
            return res.status(500).send({
                success: false,
                message: 'User not found',
            });
        }
        //hashed password
        var salt = bcrypt.genSaltSync(10);
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
        })
    }
}

module.exports = {getUserController, updateUserController, resetPasswordController}