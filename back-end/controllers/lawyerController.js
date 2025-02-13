const Lawyers = require('../models/lawyer'); // Import lawyers model
const bcrypt = require('bcryptjs'); // Import bcrypt for hashing passwords

// Register lawyer
exports.registerLawyer = async (req, res) => {
    try {
        const { name, email, password, niche } = req.body;

        // Check if lawyer already exists
        let lawyer = await Lawyers.findOne({ email });
        if (lawyer) {
            return res.status(400).json({ msg: 'Lawyer already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save lawyer
        const newLawyer = new Lawyers({ name, email, niche, password: hashedPassword });
        await newLawyer.save();

        res.status(201).json({ message: 'Lawyer registered successfully', lawyer: newLawyer });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all lawyers
exports.getAllLawyers = async (req, res) => {
    try {
        const lawyers = await Lawyers.find();
        res.status(200).json(lawyers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get lawyer by ID
exports.getLawyerById = async (req, res) => {
    try {
        const lawyer = await Lawyers.findById(req.params.id);
        if (!lawyer) {
            return res.status(404).json({ message: 'Lawyer not found' });
        }
        res.status(200).json(lawyer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update lawyer profile
exports.updateLawyerProfile = async (req, res) => {
    try {
        const lawyerId = req.params.id; // Get lawyer ID from URL
        const updates = req.body; // Get new profile data

        // Find lawyer and update
        const updatedLawyer = await Lawyers.findByIdAndUpdate(lawyerId, updates, {
            new: true, // Return updated lawyer
            runValidators: true // Ensure validation rules apply
        });

        if (!updatedLawyer) {
            return res.status(404).json({ message: "Lawyer not found" });
        }

        res.status(200).json({ message: "Profile updated", lawyer: updatedLawyer });
    } catch (error) {
        res.status(500).json({ message: "Error updating profile", error: error.message });
    }
};

// Delete lawyer by ID
exports.deleteLawyer = async (req, res) => {
    try {
        const lawyer = await Lawyers.findByIdAndDelete(req.params.id);
        if (!lawyer) {
            return res.status(404).json({ message: 'Lawyer not found' });
        }
        res.status(200).json({ message: 'Lawyer deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
