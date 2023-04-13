import express from 'express';
import { weatherController } from '../controllers/weather';

const router = express.Router();

router.get('/', weatherController.get);

export default router;
