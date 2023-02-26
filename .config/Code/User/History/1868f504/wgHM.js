const {createContractInstance} = require('./connection');

const substraction = async (num1,num2)=>{
    const {accounts, instance} = await createContractInstance();

    const response = await instance.methods.subNum(num1,num2)
                     .call({from:accounts[0]})
    console.log("response",response)
}

substraction(60,9)

module.exports = {addition}