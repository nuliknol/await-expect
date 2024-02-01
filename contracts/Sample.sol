// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Sample {
	uint256 stateVar = 0;
    function method() public {
		stateVar = 1;
        require(false, "You can't run me");
    }
}
