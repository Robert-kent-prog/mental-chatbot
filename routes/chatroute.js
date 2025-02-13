// server/routes/chat.js
import { Router } from 'express';
const router = Router();
import { sendMessage, getChatHistory } from '../controllers/chatcontroller';

router.post('/message', sendMessage);
router.get('/history', getChatHistory);

export default router;