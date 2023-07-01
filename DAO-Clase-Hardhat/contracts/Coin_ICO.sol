// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Coin_ICO is ERC20, Ownable {

    uint256 public holders;

    //ICO - CROWDSALE
    address public wallet;
    uint256 public currentRate;
    uint256 public startDate;
    uint256 public lastDate;

    uint256 public secondPhase;
    uint256 public thirdPhase;

    mapping(address => bool) public allowedToMint;

    modifier onlyAllowedToMint {
        require(allowedToMint[msg.sender], "Esta address no esta autorizada.");
        _;
    }

    constructor(string memory tokenName, string memory tokenSymbol) ERC20(tokenName, tokenSymbol) {
        wallet = msg.sender;
        currentRate = 10;

        startDate = block.timestamp + 1 days;
        lastDate = startDate + 30 days;

        secondPhase = startDate + 5 days;
        thirdPhase = startDate + 25 days;

        allowedToMint[msg.sender] = true;
    }


    function investInProject() external payable returns(bool){
        //inversor =>           msg.sender
        //cantidad invertida => msg.value

        require(block.timestamp < lastDate, "The Crowdsale is closed.");

        uint256 actualRate = currentRate;
        if(block.timestamp > secondPhase && block.timestamp < thirdPhase ){
            actualRate = currentRate/2;
        }
        else if (block.timestamp > thirdPhase ){
            actualRate = currentRate/3;
        }

        uint256 tokens = msg.value * actualRate;
        _mint(msg.sender, tokens);

        (bool sent, ) = wallet.call{value: msg.value}("");
        require(sent, "Failed to send ETH to the owner.");

        return true;
    }


    //Minar nuevos tokens (para los fundadores)
    function mint(address receiver, uint256 amount) external onlyAllowedToMint returns(bool) {
        _mint(receiver, amount*10**18);
        return true;
    }

    //Quemar tokens existentes (a cualquier holder)
    function burn(uint256 amount) external returns(bool){
        _burn(msg.sender, amount*10**18);
        return true;
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) internal override {
        if (balanceOf(to) == 0){
            holders++;
        }
    }

    function _afterTokenTransfer(address from, address to, uint256 amount) internal override {
        if (balanceOf(from) == 0) {
            holders--;
        }
    }

    function setAllowed(address addr, bool allow) public onlyOwner returns(bool) {
        allowedToMint[addr] = allow;
        return true;
    }





}
