// SPDX-License-Identifier: GPL-3.0

pragma solidity =0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Storage {

    uint256 number;
    string text;

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function setNumber(uint256 num) public {
        number = num;
    }

    /**
     * @dev Return value
     * @return value of 'number'
     */
    function getNumber() public view returns (uint256){
        return number;
    }

    /**
     * @dev Store value in variable
     * @param txt value to store
     */
    function setText(string memory txt) public {
        text = txt;
    }

    /**
     * @dev Return value
     * @return value of 'number'
     */
    function getText() public view returns (string memory){
        return text;
    }

}
