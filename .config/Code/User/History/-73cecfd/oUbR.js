const {createContractInstance} = require('./connection');

const addition = async (num1,num2)=>{
    const {accounts, instance} = await createContractInstance();

    const response = await instance.methods
}