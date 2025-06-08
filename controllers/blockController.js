import Blockchain from '../models/Blockchain.js';
import Block from '../models/Block.js';
import fs from 'fs';

const blockchain = new Blockchain();

function saveToFile() {
  fs.writeFileSync('blockchain.json', JSON.stringify(blockchain.chain, null, 2));
}

function loadFromFile() {
  try {
    const data = fs.readFileSync('blockchain.json', 'utf-8');
    const blocks = JSON.parse(data);
    blockchain.chain = blocks.map(b => {
      const block = new Block(b.index, b.timestamp, b.data, b.previousHash);
      block.hash = b.hash;
      block.nonce = b.nonce;
      return block;
    });
  } catch (err) {
    console.log('No blockchain file found, starting new chain');
  }
}

loadFromFile();

export const getAllBlocks = (req, res) => {
  res.json(blockchain.chain);
};

export const createNewBlock = (req, res) => {
  const { from, to, amount } = req.body;
  
  if (!from || !to || !amount) {
    return res.status(400).json({ error: 'Missing data' });
  }

  const block = new Block(
    blockchain.chain.length,
    new Date().toISOString(),
    { from, to, amount }
  );

  blockchain.addBlock(block);
  saveToFile();
  res.status(201).json(block);
};

export const checkChainValidity = (req, res) => {
  const isValid = blockchain.isChainValid();
  res.json({ valid: isValid });
};