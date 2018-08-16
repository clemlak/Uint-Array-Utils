/* eslint-env node, mocha */
/* global artifacts, contract, it, assert */

const TestContract = artifacts.require('TestContract');

let instance;

contract('TestContract', () => {
  it('Should deploy an instance of the UintArrayUtils contract', () => TestContract.deployed()
    .then((contractInstance) => {
      instance = contractInstance;
    }));

  it('Should get the maximum value of the testArray', () => instance.returnMax()
    .then((max) => {
      assert.equal(max.toNumber(), 9, 'Maximum value is wrong');
    }));

  it('Should get the minimum value of the testArray', () => instance.returnMin()
    .then((min) => {
      assert.equal(min.toNumber(), 0, 'Minimum value is wrong');
    }));

  it('Should get the sum of the testArray', () => instance.returnSum()
    .then((sum) => {
      assert.equal(sum.toNumber(), 45, 'Sum is wrong');
    }));

  it('Should check for duplicate values in the duplicatesArray', () => instance.returnCheckDuplicates()
    .then((duplicates) => {
      assert.equal(duplicates, true, 'Duplicates bool is wrong');
    }));

  it('Should check for matching values between testArray and testArray2', () => instance.returnCheckMatchingValues()
    .then((matchingValues) => {
      assert.equal(matchingValues.toNumber(), 1, 'Matching values amount is wrong');
    }));

  it('Should concat testArray and testArray2', () => instance.returnConcat()
    .then((concat) => {
      assert.equal(concat.length, 14, 'Merged array is wrong');
    }));
});
