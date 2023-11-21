const { Schema, model } = require('mongoose');

const jobSchema = require('./Job')

const candidateSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    phoneNumber: {
        type: String,
        required: true
    },
    job: {jobSchema}
});

const Candidate = model('Candidate', candidateSchema);

module.exports = Candidate;