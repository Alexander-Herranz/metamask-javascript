const { ethers } = require("hardhat");
const provider = ethers.getDefaultProvider();

const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");


describe("Oraculo Test Cases", function () {

  const WETH_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const USDT_ADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";


  async function myFixture() {
    const my_address = await ethers.getSigners();

    //const UniswapPriceGetter = await ethers.getContractFactory("UniswapPriceGetter");
    //const uniswapPriceGetter = await UniswapPriceGetter.deploy();

    const Oraculo = await ethers.getContractFactory("Oraculo");
    const oraculo = await Oraculo.deploy();

      // Wait for the contract to be mined
    await oraculo.deployed();

    console.log("Oraculo deployed to:", oraculo.address);


    return { oraculo };


  }

  it("should get current price of BTC/USD price from Uniswap", async function () {
    //const [owner] = await ethers.getSigners();
    //const ownerBalance = await myERC20.balanceOf(owner.address);

    const { oraculo } = await loadFixture(myFixture);

    const ethUSDTPrice = await oraculo.getETHUSDPrice();

    console.log("Current price of ETH/USDT pair is: " + ethUSDTPrice /1000000);

    expect(await oraculo.getETHUSDPrice()).to.equal(ethUSDTPrice);

  });


});
