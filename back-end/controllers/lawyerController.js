const Lawyers = require('../models/lawyer'); // import lawyers model
const bycrypt = require('bcryptjs'); // import bycrypt for hashing passwords


// register lawyers 

exports.registerLawyer = async (req, res) => {
    try{
        const { name, email, niche, password } = req.body;

        // check if lawyer already exists
        let lawyer = await Lawyers.findOne({email});
        if(lawyer){
            return res.status(400).json({msg: 'Lawyer already exists'});
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

         // Create and save lawyer
        const newlawyer = new lawyer({ name, email, password: hashedPassword });
        await newlawyer.save();

        res.status(201).json({ message: 'lawyer registered successfully', lawyer: newlawyer });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Get all lawyers
exports.getAllLawyers = async (req, res) => {
    try {
        const lawyers = await lawyer.find();
        res.status(200).json(lawyers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get lawyer by ID
exports.getLawyerById = async (req, res) => {
    try {
        const lawyer = await lawyer.findById(req.params.id);
        if (!lawyer) {
            return res.status(404).json({ message: 'lawyer not found' });
        }
        res.status(200).json(lawyer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



exports.updateLawyerProfile = async (req, res) => {
    try {
        const userId = req.params.id; // Get user ID from URL
        const updates = req.body; // Get new profile data

        // Find user and update
        const updatedUser = await User.findByIdAndUpdate(userId, updates, { 
            new: true, // Return updated user
            runValidators: true // Ensure validation rules apply
        });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Profile updated", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating profile", error: error.message });
    }
};


// Delete lawyer by ID
exports.deleteLawyer = async (req, res) => {
    try {
        const lawyer = await lawyer.findByIdAndDelete(req.params.id);
        if (!lawyer) {
            return res.status(404).json({ message: 'lawyer not found' });
        }
        res.status(200).json({ message: 'lawyer deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};