const express = require('express');
const { 
    getAllRecords, 
    getRecordById, 
    createRecord, 
    updateRecord, 
    deleteRecord 
} = require('../Controllers/recordController');
const router = express.Router();

// Routes for Records
router.get('/', getAllRecords);           // Get all records
router.get('/:id', getRecordById);        // Get record by ID
router.post('/', createRecord);           // Add a new record
router.put('/:id', updateRecord);         // Update record details
router.delete('/:id', deleteRecord);      // Delete a record

module.exports = router;
