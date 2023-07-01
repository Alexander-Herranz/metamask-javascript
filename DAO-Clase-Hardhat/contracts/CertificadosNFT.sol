// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CertificadosNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;

    mapping(address => bool) public allowedToMint;

    constructor(string memory tokenName, string memory tokenSymbol) ERC721(tokenName, tokenSymbol) {
        allowedToMint[owner()];
    }


    function createNFT(address user)
        public
        returns (uint256)
    {
        string memory tokenURI = "https://pin.ski/3MT0BBe";
        _tokenIds++;
        uint256 newItemId = _tokenIds;
        _safeMint(user, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function setPermissionToMint(address user, bool state) external onlyOwner returns(bool){
        allowedToMint[user] = state;
    }

}
