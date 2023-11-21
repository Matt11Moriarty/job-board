const { Schema, model } = require('mongoose');

const Job = require('./Job')

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
    job: {Job}
});

const Candidate = model('Candidate', candidateSchema);

module.exports = Candidate;