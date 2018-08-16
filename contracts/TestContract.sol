pragma solidity 0.4.24;

import "./UintArrayUtils.sol";


contract TestContract {
  using UintArrayUtils for uint[];

  uint[] public testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  uint[] public testArray2 = [9, 10, 11, 12];
  uint[] public duplicatesArray = [0, 1, 2, 3, 3];

  function returnMax() public view returns (uint) {
    return testArray.getMax();
  }

  function returnMin() public view returns (uint) {
    return testArray.getMin();
  }

  function returnSum() public view returns (uint) {
    return testArray.sum();
  }

  function returnCheckDuplicates() public view returns (bool) {
    return duplicatesArray.checkDuplicates();
  }

  function returnCheckMatchingValues() public view returns (uint) {
    return testArray.checkMatchingValues(testArray2);
  }

  function returnConcat() public view returns (uint[]) {
    return testArray.concat(testArray2);
  }
}
