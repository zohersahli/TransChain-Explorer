import Block from '../models/Block.js';

describe('Block', () => {
  it('should create a block with correct data', () => {
    const data = { from: 'Zoher', to: 'Ali', amount: 100 };
    const block = new Block(1, '2025-06-01T00:00:00Z', data, '0000prevhash');

    expect(block.index).toBe(1);
    expect(block.data).toEqual(data);
    expect(block.previousHash).toBe('0000prevhash');
    expect(block.hash).toBeDefined();
  });

  it('should mine a block with hash starting with 0000', () => {
    const data = { from: 'Zoher', to: 'Ali', amount: 200 };
    const block = new Block(2, new Date().toISOString(), data, 'abc123');

    block.mineBlock(4);

    expect(block.hash.startsWith('0000')).toBe(true);
  });
});
