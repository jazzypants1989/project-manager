const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Waiting on your lazy butt', 'You are literally doing it right now', 'Donezo, my friend'],
    },
});

module.exports = mongoose.model('Project', ProjectSchema);