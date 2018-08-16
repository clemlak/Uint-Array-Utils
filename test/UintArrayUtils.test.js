/* eslint-env node, mocha */
/* global artifacts, contract, it, assert */

const UintArrayUtils = artifacts.require('UintArrayUtils');

let instance;
const simpleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const duplicatesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0];
const array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayToConcat1 = [0, 1, 2];
const arrayToConcat2 = [3, 4, 5, 6];

contract('UintArrayUtils', () => {
  it('Should deploy an instance of the UintArrayUtils contract', () => UintArrayUtils.deployed()
    .then((contractInstance) => {
      instance = contractInstance;
    }));

  it('Should get the maximum value of the simpleArray', () => instance.getMax(simpleArray)
    .then((max) => {
      assert.equal(max.toNumber(), 9, 'Maximum value is wrong');
    }));

  it('Should get the minimum value of the simpleArray', () => instance.getMin(simpleArray)
    .then((min) => {
      assert.equal(min.toNumber(), 0, 'Minimum value is wrong');
    }));

  it('Should get the sum of all the values in the simpleArray', () => instance.sum(simpleArray)
    .then((sum) => {
      assert.equal(sum.toNumber(), 45, 'Sum is wrong');
    }));

  it('Should check for duplicate values in the duplicatesArray', () => instance.checkDuplicates(duplicatesArray)
    .then((duplicates) => {
      assert.equal(duplicates, true, 'Duplicates total is wrong!');
    }));

  it('Sould concatenate the array arrayToConcat1 and arrayToConcat2', () => instance.concat(arrayToConcat1, arrayToConcat2)
    .then((concat) => {
      assert.equal(concat.length, 7, 'Concatenated array length is wrong');
    }));

  it('Should check for matching values between simpleArray and array2', () => instance.checkMatchingValues(simpleArray, array2)
    .then((matchingValues) => {
      assert.equal(matchingValues.toNumber(), 10, 'Matching values total is wrong');
    }));
});
