import Block from './Block.js';

export default class Blockchain {
  constructor() {
    this.chain = [];
    this.difficulty = 4; 
    this.createFirstBlock();
  }

  createFirstBlock() {
    const genesis = new Block(0, new Date().toISOString(), { info: 'First Block' }, '0');
    genesis.mineBlock(this.difficulty);
    this.chain.push(genesis);
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    const lastBlock = this.chain[this.chain.length - 1];
    newBlock.previousHash = lastBlock.hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) return false;
      if (currentBlock.previousHash !== previousBlock.hash) return false;
    }
    return true;
  }
}
