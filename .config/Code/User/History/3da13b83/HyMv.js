var Calc = artifacts.require("./calc.sol");

module.exports = function(deployer) {
  deployer.deploy(Calc);
};
