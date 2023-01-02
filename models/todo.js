//import mongoose/or use the already existing one
const mongoose = require('mongoose');

// adding schemas for input field 
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    date: {
        type: Date
    }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;