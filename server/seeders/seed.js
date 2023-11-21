const db = require('../config/connection');
const { User, Job, Candidate } = require('../models');
const userSeeds = require('./userSeeds.json');
const jobSeeds = require('./jobSeeds.json');
const candidateSeeds = require('./candidateSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Job', 'jobs');
    await cleanDB('User', 'users');
    await cleanDB('Candidate', 'candidates');

    await User.create(userSeeds);
    await Job.create(jobSeeds);
    await Candidate.create(candidateSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
