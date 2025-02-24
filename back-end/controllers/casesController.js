const { response } = require('express');
const Cases = require('../models/cases');


exports.createCase = async (req, res) => {
    try {

        const {caseName, caseCategory, caseDescription,  } = req.body;
        console.log('Request Body:', req.body);

        const newCase = new Cases ({
            caseName,
            caseCategory,
            caseDescription
        });

        await newCase.save();
        res.status(201).json({message: 'new case registered successfully', case: newCase});
        
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({error:error.message})
    }
}

exports.fetchCases = async(req, res) => {
    try {
        const Cases = await Cases.find();
        res.status(200).json(Cases)
    } catch (error) {
        res.status(500).json({ error: err.message });

    }
}

exports.getCaseById = async(req, res) => {
    try {
        const Case = await Cases.findById(req.params.id);
    if(!Case){
        return res.status(404).json({message: 'Case not found'});
    }
    res.status(200).json(Case);
    } catch (error) {
        res.status(500).json({ error: err.message });
   
    }
}

exports.updateCase = async(req, res) => {
    try {
        const {caseName, caseCategory, caseDescription, caseStatus} = req.body;
        const Case = await Cases.findById(req.params.id);
        if(!Case){
            return res.status(404).json({message: 'Case not found'});
        }
       
        if(Case.caseStatus === true){
            response.status(400).json({message: 'Case already closed'});
        }
        else{
            Case.caseName = caseName;
            Case.caseCategory = caseCategory;
            Case.caseDescription = caseDescription;
            Case.caseStatus = caseStatus;

            await Case.save();
            res.status(200).json({message: 'Case updated successfully', Case});
        }

       
    } catch (error) {
        res.status(500).json({ error: err.message });
    }   
}
