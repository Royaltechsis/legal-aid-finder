const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user'); // Assuming you have a User model
//const { recompileSchema } = require('../models/lawyer');


// Register a new user
const registerController = async (req, res) => {
    try {
        const { userName, email, password, phone, role } = req.body;
        if (!userName || !email || !password || !phone || !role ) {
            return res.status(500).send({
                sucess: false,
                message: "Please Provide All Fields",
            });
        }
        //check user
        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(500).send({
                success: false,
                message: "Email Already Registered Please Login",
            });
        }
        //hashing password
        var salt = bcrypt.genSaltSync(10);
        const hashedpassword = await bcrypt.hash(password, salt);
        //create new user
        const user = await User.create({
            userName,
            email,
            password: hashedpassword,
            phone, 
        });
        res.status(201).send({
            success: true,
            message: "Successfully Registered",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In Registering API",
        });
    }
};
//LOGIN
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: "Please Provide Email Or Password",
            });
        }
        //check user
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User Not Found",
            });
        }
        //check user password and compare password
        const ismatch = await bcrypt.compare(password, user.password);
        if (!ismatch) {
            return res.status(500).send({
                success:false,
                message: "Invalid Login Details!",
            });
        }
        //token
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        user.password = undefined;
        res.status(200).send({
            success: true,
            message: "Login Successful",
            token,
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In Login",
            error,
        });
    }
};


module.exports = {registerController, loginController };