// server/app.js
import express, { json } from 'express';
import { connect, connection } from 'mongoose';
import cors from 'cors';
import chatRoutes from './routes/chat';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use('/api/chat', chatRoutes);

// Connect to MongoDB
connect(process.env.MONGO_URI);
const db = connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
    console.log('Successfully Connected to MongoDB...');
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});