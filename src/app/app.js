const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const blockchain = require("../blockchain/blockchain");

const PORT = process.env.PORT || 3000;

const chain = new blockchain.Blockchain();

app.use(bodyParser.json());

app.get("/blocks", (req, res, next) => {
  res.json(chain.chain);
});

app.post("/mine", (req, res, next) => {
  const data = req.body.data;
  chain.addBlock(data);
  res.redirect("/blocks");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
