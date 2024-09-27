import express from 'express';
const router = express.Router();
import { sendEmail } from '../controllers/emailController.js';

router.post('/send', sendEmail);

export default router;
