
# Uint Array Utils
A small library with useful functions for Solidity Uint arrays.

**Please keep in mind that this library is a work in progress, new things will be added or modified in the future.**

## Installation
npm package will be released later.

For now, simply copy the `UintArrayUtils.sol` file in your contracts folder, import it with `import "./UintArrayUtils.sol"` and use it with `using UintArrayUtils for uint[];`.

Additionally, you may need to link the library to your contract with `deployer.link(UintArrayUtils, YourContract);` in your migration files.

(If you're stuck, take a look at the project files, you'll find a complete example there!)

## Usage
Available functions:
`getMax(uint[] a)`
`getMin(uint[] a)`
`sum(uint[] a)`
`checkDuplicates(uint[] a)`
`checkMatchingValues(uint[] a, uint[] b)`
`concat(uint[] a, uint[] b)`

## Contribution
Feel free to share any ideas to improve this library!

## License
MIT
