const block = require("./block");

class Blockchain {
  constructor() {
    // create a chain and start with genesis block
    this.chain = [block.Block.createGenesis()];
  }

  addBlock(blockdata) {
    this.chain.push(
      Block.mineBlock(this.chain[this.chain.length - 1], blockdata)
    );
  }
}

module.exports = {
  Blockchain: Blockchain
};
