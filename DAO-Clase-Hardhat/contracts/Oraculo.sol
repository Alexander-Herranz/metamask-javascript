// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

// Interface for the UniswapV2Router02 contract
interface IUniswapV2Router02 {
    function getAmountsOut(uint amountIn, address[] memory path) external view returns (uint[] memory amounts);
}

contract Oraculo {
    address private constant UNISWAP_ROUTER_ADDRESS = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D; // Uniswap V2 Router address
    address private constant WETH_ADDRESS = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2; // Wrapped Ether (WETH) address
    address private constant USDT_ADDRESS = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;//USDC
    //0xdAC17F958D2ee523a2206206994597C13D831ec7; // Tether (USDT) address

    IUniswapV2Router02 private uniswapRouter;

    constructor() {
        uniswapRouter = IUniswapV2Router02(UNISWAP_ROUTER_ADDRESS);
    }

    function getETHUSDPrice() external view returns (uint256) {
        address[] memory pair = new address[](2);
        pair[0] = WETH_ADDRESS;
        pair[1] = USDT_ADDRESS;

        uint256 amountIn = 1*10**18;

        uint256[] memory amountsOut = uniswapRouter.getAmountsOut(amountIn, pair);
        uint256 price = amountsOut[1];

        return price;
    }

}
