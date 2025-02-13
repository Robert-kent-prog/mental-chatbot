// server/controllers/chatController.js
import ChatHistory, { find } from '../models/chathistory';
import { post } from 'axios';

// Replace with a free AI API endpoint (e.g., OpenAI, Hugging Face, etc.)
const AI_API_URL = 'https://api.example.com/generate'; // Replace with actual API URL
const API_KEY = 'your-api-key'; // Replace with your API key

export async function sendMessage(req, res) {
    const { message } = req.body;

    try {
        // Call the AI API
        const response = await post(AI_API_URL, {
            prompt: message,
            max_tokens: 100,
        }, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });

        const botResponse = response.data.choices[0].text;

        // Save to database
        const chat = new ChatHistory({ userMessage: message, botResponse });
        await chat.save();

        res.json({ response: botResponse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate response' });
    }
}

export async function getChatHistory(req, res) {
    try {
        const history = await find().sort({ timestamp: -1 });
        res.json(history);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch chat history' });
    }
}