import crypto from 'crypto';

export default class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data; 
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    let blockData = this.index + this.previousHash + this.timestamp;
    blockData += JSON.stringify(this.data) + this.nonce;
    return crypto.createHash('sha256').update(blockData).digest('hex');
  }

  mineBlock(difficulty) {
    let zeros = '0'.repeat(difficulty);
    while (!this.hash.startsWith(zeros)) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    console.log(`✅ Block mined: ${this.hash}`);
  }
}
