const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user'); // Assuming you have a User model



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
// Login user
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, role: user.role });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports = {registerController, loginController };