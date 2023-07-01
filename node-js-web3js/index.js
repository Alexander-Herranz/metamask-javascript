import dotenv from 'dotenv';//.config();
import express from 'express';
import Web3 from 'web3';
import abiJson from './abi.json' assert { type: 'json' };

dotenv.config();

/*
const dotenv = require('dotenv').config();
const express = require('express');
const ethers = require('ethers');
const abiJson = require('./abi.js');
*/
//"type": "module"


const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});


app.post('/setNumber', async (req, res) => {

  let web3_data = await initWeb3();

  let response;
  const number = req.body.number;

  try {

    const data = web3_data.contract.methods.setNumber().encodeABI(number);
    //response = await sendWeb3Transaction(data, process.env.CONTRACT_ADDRESS_TEST);
    response = await sendWeb3Transaction(data, process.env.CONTRACT_ADDRESS);
    response.result = true;

  } catch (error) {
    console.log(error);
    response = error;
  }


  res.send({
    'status': response.status,
    'result': response
  });

});


app.get('/getNumber', async (req, res) => {

  let web3_data = await initWeb3();
  let response = {};
  response.status = false;
  //let itemID = req.query.itemID;
  //console.log(itemID);
  console.log("hola");

  try {

    let bigNum = await web3_data.contract.methods.getNumber().call();
    console.log(bigNum);
    return bigNum;
    response.status = true;

  } catch (error) {
    console.log(error);
    response = error;
  }

  res.send({
    'status': response.status,
    'result': response
  });

});

async function sendWeb3Transaction(data, contract){
  // Creating a signing account from a private key
  const signer = web3.eth.accounts.privateKeyToAccount(
    process.env.SIGNER_PRIVATE_KEY
  );
  web3.eth.accounts.wallet.add(signer);

  const count = await web3.eth.getTransactionCount(signer.address);
  const nonce = web3.utils.toHex(count);
  let block = await web3.eth.getBlock("latest");
  const value = web3.utils.toHex(web3.utils.toWei('0', 'wei'));
  let gasPrice = await web3.eth.getGasPrice();

  const txbase = {
    from: signer.address,
    nonce,
    to: contract,
    data
  };


  let gasLimit = await web3.eth.estimateGas(txbase);
  gasLimit = gasLimit;// * 1.1;

  const txData = {
    nonce,
    gasLimit,
    gasPrice,
    value,
    data,
    from: signer.address,
    to: contract,
  };

  web3.eth.accounts.wallet.add(process.env.SIGNER_PRIVATE_KEY);

  const sentTx = await web3.eth.sendTransaction(txData);

  let obj = {};
  obj.transactionHash = sentTx.transactionHash;
  obj.gasPrice = sentTx.effectiveGasPrice;
  obj.gasUsed = sentTx.gasUsed;
  obj.totalCost = obj.gasPrice * obj.gasUsed;
  obj.status = sentTx.status;

  return obj;
}


async function initWeb3(){

  let web3 = new Web3(
    //new Web3.providers.HttpProvider(
    process.env.URL
    //process.env.WSS_WEB3_TEST
  );

  console.log(abiJson);
  //network = process.env.POLYGON_NETWORK;
  //let abi = JSON.parse(fs.readFileSync("abi.json"));
  let contract = new web3.eth.Contract(
    abiJson,
    process.env.CONTRACT_ADDRESS
  );

  return {web3: web3, contract: contract}
}


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
