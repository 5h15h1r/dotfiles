var Web3 = require("web3");
const provider = new Web3.providers.HttpProvider('http://localhost:8545')
var web3 = new Web3(provider);

const connection = async () =>{
    accounts = await web3.eth.get
}