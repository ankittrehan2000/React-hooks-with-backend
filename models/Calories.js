const mongoose = require('mongoose');

const CaloriesSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Cals', CaloriesSchema);