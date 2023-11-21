const { Schema, model } = require('mongoose');

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

const Job = model('Job', jobSchema);

module.exports = Job;
