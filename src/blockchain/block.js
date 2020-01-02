const sha256 = require("crypto-js/sha256");

class Block {
  constructor(timestamp, prevhash, hash, data) {
    this.timestamp = timestamp;
    this.prevhash = prevhash;
    this.hash = hash;
    this.data = data;
  }

  showBlock() {
    return `Block - Timestamp : ${this.timestamp} PreviousHash : ${this.prevhash} Hash : ${this.hash} data : ${this.data}`;
  }

  static createGenesis() {
    return new Block("genesis timestamp", "---", "hash", "genesis data");
  }

  static mineBlock(lastblock, data) {
    // add mine algorithm
    const lasthash = lastblock.hash;
    const timestamp = Date.now().toString();
    const blockHash = this.hash(lasthash + timestamp + data);
    return new Block(timestamp, lasthash, blockHash, data);
  }

  static hash(data) {
    return sha256(data).toString();
  }
}

module.exports = {
  Block: Block
};
