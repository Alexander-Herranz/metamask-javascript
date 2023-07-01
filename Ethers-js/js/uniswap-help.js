//const ethers = require('ethers');



export async function getBTCPriceInUSDC(www3) {

  try {

    //const provider = new ethers.providers.InfuraProvider(1, 'https://polygon-mainnet.g.alchemy.com/v2/sQWaZbp5uXeJe2NqKgYPFbr6ZuVDsXJ8');
    const uniswapFactoryAddress = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
    const usdcTokenAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
    const btcTokenAddress = '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599';

    const uniswapFactoryAbi = [
      'function getPair(address tokenA, address tokenB) external view returns (address pair)',
    ];
    const uniswapPairAbi = [
      'function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)',
    ];
    const usdcDecimals = 6;

    const uniswapFactoryContract = new ethers.Contract(uniswapFactoryAddress, uniswapFactoryAbi, www3);
    const usdcBtcPairAddress = await uniswapFactoryContract.getPair(usdcTokenAddress, btcTokenAddress);

    const uniswapPairContract = new ethers.Contract(usdcBtcPairAddress, uniswapPairAbi, www3);
    const [reserve0, reserve1] = await uniswapPairContract.getReserves();

    const btcPriceInUSDC = reserve1 / 10 ** usdcDecimals / (reserve0 / 10 ** 18);
    console.log('Current BTC price in USDC:', btcPriceInUSDC);

    return 'Current BTC price in USDC:' + btcPriceInUSDC ;

  } catch (err) {
    console.error(err);
  }

}

//getBTCPriceInUSDC().catch((err) => console.error(err));
