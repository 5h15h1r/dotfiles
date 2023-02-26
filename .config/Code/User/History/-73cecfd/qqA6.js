const {createContractInstance} = require('./connection');

const addition = async (num1,num2)=>{
    const {accounts, instance} = await createContractInstance();

    const response = await instance.methods.addNum(num1,num2)
                     .call({from:accounts[0]})
    console.log("response",response)
}

addition(60,9)

module.exports = {addition}