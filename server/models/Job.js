const { Schema } = require('mongoose');

const jobSchema = new Schema({
    jobTitle: {
        type: String,
        required: true,
        trim: true
    },
    salary: {
        type: Number,
        trim: true
    },
    jobDescription: {
        type: String
    }
});

module.exports = jobSchema