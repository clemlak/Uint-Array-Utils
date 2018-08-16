/* eslint-env node */
/* global artifacts */

const UintArrayUtils = artifacts.require('UintArrayUtils');
const TestContract = artifacts.require('TestContract');

function deployContracts(deployer) {
  deployer.deploy(UintArrayUtils);
  deployer.link(UintArrayUtils, TestContract);
  deployer.deploy(TestContract);
}

module.exports = deployContracts;
