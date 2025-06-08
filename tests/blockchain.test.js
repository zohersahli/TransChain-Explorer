import Blockchain from '../models/Blockchain.js';
import Block from '../models/Block.js';

describe('Blockchain', () => {
  it('should add a new block to the chain', () => {
    const blockchain = new Blockchain();

    const data = { from: 'Zoher', to: 'Ali', amount: 300 };
    const newBlock = new Block(1, new Date().toISOString(), data, blockchain.getLatestBlock().hash);

    blockchain.addBlock(newBlock);

    expect(blockchain.chain.length).toBe(2); // Genesis + 1
    expect(blockchain.chain[1].data).toEqual(data);
  });

    it('should return true for a valid chain', () => {
    const blockchain = new Blockchain();

    const data1 = { from: 'A', to: 'B', amount: 50 };
    const data2 = { from: 'B', to: 'C', amount: 75 };

    const block1 = new Block(1, new Date().toISOString(), data1, blockchain.getLatestBlock().hash);
    blockchain.addBlock(block1);

    const block2 = new Block(2, new Date().toISOString(), data2, blockchain.getLatestBlock().hash);
    blockchain.addBlock(block2);

    const isValid = blockchain.isChainValid();
    expect(isValid).toBe(true);
  });

  it('should return false if a block is tampered', () => {
  const blockchain = new Blockchain();

  const data = { from: 'X', to: 'Y', amount: 999 };
  const block = new Block(1, new Date().toISOString(), data, blockchain.getLatestBlock().hash);
  blockchain.addBlock(block);

  blockchain.chain[1].data = { from: 'Hacker', to: 'Y', amount: 999 };

  const isValid = blockchain.isChainValid();
  expect(isValid).toBe(false);
});


});
