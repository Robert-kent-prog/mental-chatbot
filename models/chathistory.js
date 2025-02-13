// server/models/ChatHistory.js
const mongoose = require('mongoose');

const chatHistorySchema = new mongoose.Schema({
    userMessage: String,
    botResponse: String,
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ChatHistory', chatHistorySchema);