import express from 'express';
import { getAllBlocks, createNewBlock, checkChainValidity } from '../controllers/blockController.js';

const router = express.Router();

router.get('/', getAllBlocks);

router.post('/', createNewBlock);

router.get('/validate', checkChainValidity);

export default router;
