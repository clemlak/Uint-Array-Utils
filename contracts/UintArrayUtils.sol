/* We use a fixed version of Solidity */
pragma solidity 0.4.24;


/**
 * @title Useful functions for Uint arrays
 * @author clemlak https://github.com/clemlak
 * @dev Be careful Work In Progress :)
 */
library UintArrayUtils {
  /**
   * @dev Returns the highest value in an array
   * @param a The array to inspect
   * @return The highest value
   */
  function getMax(uint[] a) internal pure returns (uint) {
    uint max = a[0];

    for (uint i = 0; i < a.length; i += 1) {
      if (a[i] > max) {
        max = a[i];
      }
    }

    return max;
  }

  /**
   * @dev Returns the lowest value in an array
   * @param a The array to inspect
   * @return The lowest value
   */
  function getMin(uint[] a) internal pure returns (uint) {
    uint min = a[0];

    for (uint i = 0; i < a.length; i += 1) {
      if (a[i] < min) {
        min = a[i];
      }
    }

    return min;
  }

  /**
   * @dev Returns the sum of all the values in an array
   * @param a The array to inspect
   * @return The sum of all the values in the array
   */
  function sum(uint[] a) internal pure returns (uint) {
    uint s = 0;

    for (uint i = 0; i < a.length; i += 1) {
      s += a[i];
    }

    return s;
  }

  /**
   * @dev Checks duplicate values in an array
   * @param a The array to inspect
   * @return True if the array contains duplicate values
   */
  function checkDuplicates(uint[] a) internal pure returns (bool) {
    bool duplicates = false;

    for (uint i = 0; i < a.length; i += 1) {
      uint k = 0;

      for (uint j = 0; j < a.length; j += 1) {
        if (a[i] == a[j]) {
          k += 1;
        }

        if (k > 1) {
          duplicates = true;
        }
      }
    }

    return duplicates;
  }

  /**
   * @dev Checks matching values between 2 arrays
   *      Caution: Arrays must have the same length
   * @param a The first array to inspect
   * @param b The second array to inspect
   * @return The amount of matching values
   */
  function checkMatchingValues(uint[] a, uint[] b) internal pure returns (uint) {
    uint k = 0;

    for (uint i = 0; i < a.length; i += 1) {
      for (uint j = 0; j < b.length; j += 1) {
        if (a[i] == b[j]) {
          k += 1;
        }
      }
    }

    return k;
  }

  /**
   * @dev Concatenates 2 arrays
   * @param a The first array to merge
   * @param b The second array to merge
   * @return A new array (merging of a and b)
   */
  function concat(uint[] a, uint[] b) internal pure returns (uint[]) {
    uint[] memory c = new uint[](a.length + b.length);

    for (uint i = 0; i < a.length; i += 1) {
      c[i] = a[i];
    }

    for (i = 0; i < b.length; i += 1) {
      c[i+a.length] = b[i];
    }

    return c;
  }
}
