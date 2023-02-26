var Web3 = require("web3");
const Calculator = require('../build/contracts/Calc.json')
const provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545/')
var web3 = new Web3(provider);

const connection = async () =>{
    accounts = await web3.eth.getAccounts()
    console.log("accounts",accounts);
}

const createContractInstance = async () =>{
    var accounts = await web3.eth.getAccounts()
    const networkId = await web3.eth.net.getId();
    const {address} = Calculator.networks[networkId]

    var instance = await new web3.eth.Contract(
        Calculator.abi,
        address
    )
    console.log("isntance", accounts);
    return {accounts,instance}
}
createContractInstance()

module.exports = { createContractInstance}