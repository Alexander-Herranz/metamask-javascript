import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { ethers, Provider, Signer, Contract, Transaction, BytesLike, SigningKey } from "ethers";
import abiJson from './abi.json';
//const abiJson  = require("./abi.json");


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

interface Web3Info {
  signer: Signer;
  provider: Provider;
  //contract: Contract;
};


app.get('/', (req: Request, res: Response):void  => {
  res.send('Express + TypeScript Server');
});







app.get('/gettBlockNum', async (req: Request, res: Response):Promise<void>  => {

  //testWeb3();
  let result: number = await gettBlockNum();

  console.log("/gettBlockNum --> " + result);

  res.send({"gettBlockNum":result});
});





app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  //let res: Web3Info = await testWeb3();
  //console.log(res);
});


async function gettBlockNum(): Promise<number> {

  let provider: Provider = new ethers.JsonRpcProvider(process.env.URL); //Ethers v6
  console.log(provider);
  //let provider = new ethers.providers.JsonRpcProvider(process.env.URL); //Ethers v5
  // If no %%url%% is provided, it connects to the default

  let blockNum: number = await provider.getBlockNumber(); //TEST PROVIDER
  console.log(" ---- Block Number " + blockNum);

  //signer = new ethers.Wallet(<BytesLike>process.env.PRIVATE_KEY, provider);//Ethers v6
  let signer: Signer = new ethers.Wallet((process.env.PRIVATE_KEY as unknown) as SigningKey, provider); //Ethers v5

  let contract: Contract = new ethers.Contract(<string>process.env.CONTRACT_ADDRESS, abiJson, provider);

  //let scWithSigner = contract.connect(signer);

  //let response: Web3Info = { provider: provider, signer: signer, contract: contract};
  let response: Web3Info = { provider: provider, signer: signer }

  return blockNum;
}
