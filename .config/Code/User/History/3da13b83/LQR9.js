var Migrations = artifacts.require("./calc.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
