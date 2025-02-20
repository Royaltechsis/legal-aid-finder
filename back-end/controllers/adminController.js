const admin = require('../models/user');
const User = require("../models/userModel");
const Lawyer = require("../models/lawyerModel");
const Complaint = require("../models/complaintModel");

// Approve a lawyer
exports.approveLawyer = async (req, res) => {
    try {
        if (req.user.role !== "Admin") {
            return res.status(401).json({ message: "Unauthorized" });
        }
        else{
            const lawyer = await Lawyer.findById(req.params.id);
            if (!lawyer) return res.status(404).json({ message: "Lawyer not found" });

            lawyer.isApproved = true;
            await lawyer.save();
            res.status(200).json({ message: "Lawyer approved" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a user or lawyer
exports.deleteAccount = async (req, res) => {
    try {
        if(req.user.role !== "Admin") {
            return res.status(401).json({ message: "Unauthorized" });
        }
        else{
            const { role, id } = req.params;
            let model = role === "user" ? User : Lawyer;
    
            const deletedAccount = await model.findByIdAndDelete(id);
            if (!deletedAccount) return res.status(404).json({ message: `${role} not found` });
    
            res.status(200).json({ message: `${role} deleted successfully` });
        }
       
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// View all complaints
exports.viewComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find().populate("user", "name email").populate("lawyer", "name email");
        res.status(200).json(complaints);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Resolve a complaint
exports.resolveComplaint = async (req, res) => {
    try {
        const complaint = await Complaint.findById(req.params.id);
        if (!complaint) return res.status(404).json({ message: "Complaint not found" });

        complaint.status = "Resolved";
        await complaint.save();
        res.status(200).json({ message: "Complaint resolved" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
