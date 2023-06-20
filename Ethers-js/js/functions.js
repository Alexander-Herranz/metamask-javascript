import abi from './abi.js';
let addr_contract = '0x71b5ebCe1dd6f529E7DD4F3a8C2ccAD5e610b71E';

//////////////////////////////////////////////////////////////////////////////////
// ETHERS JS
// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
/*
let web3 = new ethers.providers.Web3Provider(window.ethereum);
// MetaMask requires requesting permission to connect users accounts
web3.send("eth_requestAccounts", []);
// The MetaMask plugin also allows signing transactions
const signer = web3.getSigner();
*/

export async function sign(msg) {
  let web3 = new ethers.providers.Web3Provider(window.ethereum);
  // MetaMask requires requesting permission to connect users accounts
  web3.send("eth_requestAccounts", []);
  // The MetaMask plugin also allows signing transactions
  const signer = web3.getSigner();

  let signature = await signer.signMessage(msg);
  console.log(signature);
  return signature;
}

export async function setNumber(num) {

  let web3 = new ethers.providers.Web3Provider(window.ethereum);
  // MetaMask requires requesting permission to connect users accounts
  web3.send("eth_requestAccounts", []);
  // The MetaMask plugin also allows signing transactions
  const signer = web3.getSigner();

  // The Contract is currently connected to the Provider,
  // which is read-only. You need to connect to a Signer, so
  // that you can pay to send state-changing transactions.

  let sc = new ethers.Contract(addr_contract, abi, web3);
  let scWithSigner = sc.connect(signer);

  let response = {};

  try {

    let rawTX = await scWithSigner.setNumber(num);

    console.log("--- RAW TX ---");
    console.log(rawTX);
    const receipt = await rawTX.wait(2);

    console.log("--- CONFIRMED TX ---");
    console.log(receipt);

    response.response = receipt;
    response.result = true;

  } catch (error) {
    console.error(error);
    response.error = error;
    response.result = false;
    throw error;
  }

  console.log(response);

  return response;

}


export async function getNumber() {

  let web3 = new ethers.providers.Web3Provider(window.ethereum);
  let sc = new ethers.Contract(addr_contract, abi, web3);

  let response;

  try {
    let bigNum = await sc.getNumber();
    console.log(bigNum);
    response = BigInt(bigNum._hex).toString();

  } catch (error) {
    console.error(error);
    
    throw error;
  }


  console.log(response);

  return response;
}
