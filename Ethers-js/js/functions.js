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

//export async function setNumber(addr_contract_, abi_, web3_) {

export async function sign() {
  let web3 = new ethers.providers.Web3Provider(window.ethereum);
  // MetaMask requires requesting permission to connect users accounts
  web3.send("eth_requestAccounts", []);
  // The MetaMask plugin also allows signing transactions
  const signer = web3.getSigner();

  let msg = "Hallo Welt";
  let signature = await signer.signMessage(msg);
  console.log(signature);
}

export async function setNumber() {

  let web3 = new ethers.providers.Web3Provider(window.ethereum);
  // MetaMask requires requesting permission to connect users accounts
  web3.send("eth_requestAccounts", []);
  // The MetaMask plugin also allows signing transactions
  const signer = web3.getSigner();

  // The DAI Contract is currently connected to the Provider,
  // which is read-only. You need to connect to a Signer, so
  // that you can pay to send state-changing transactions.

  let sc = new ethers.Contract(addr_contract, abi, web3);
  let scWithSigner = sc.connect(signer);
  let res = {};
  res.sc = sc;
  res.scWithSigner = scWithSigner;

  try {

    let newVal = document.getElementById("myNumber").value;

    document.getElementById("myNumber").value = ""; //Empty input

    console.log(newVal);
    let rawTX = await scWithSigner.setNumber(newVal);
    // response = await scWithSigner.setNumber(99, {value: ethers.utils.parseEther("1.0")});
    console.log("--- SEND ---");
    console.log(rawTX);
    const receipt = await rawTX.wait(2);

    console.log("--- TX ---");
    console.log(receipt);

    res.response = receipt;
    res.result = true;

  } catch (error) {
    console.error(error);
    res.error = error;
    res.result = false;
    throw error;
  }


  console.log(res);



  return res;

}


//export async function getNumber(addr_contract_, abi_, web3_) {
export async function getNumber() {

  let web3 = new ethers.providers.Web3Provider(window.ethereum);
  let sc = new ethers.Contract(addr_contract, abi, web3);

  // MetaMask requires requesting permission to connect users accounts
  web3.send("eth_requestAccounts", []);


  let response;

  try {
    let bigNum = await sc.getNumber();
    console.log(bigNum);
    response = BigInt(bigNum._hex).toString();

  } catch (error) {
    console.error(error);
    //return res.error = error;
    throw error;
  }


  console.log(response);

  return response;
}
