//CONSTANTS for Smart Connection connection
import abi from './abi.js';
const addr_contract = '0x71b5ebCe1dd6f529E7DD4F3a8C2ccAD5e610b71E';
const chainId = 11155111;
////////////////////////////////////////////////////////////////////

export async function initWeb3() {
  let res = {};
  res.addr_contract = addr_contract;
  res.chainId = chainId;

  if (window.ethereum) {
    await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
    res.web3 = new Web3(window.ethereum);

    await window.ethereum.enable();
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    res.account = accounts[0];

    res.sc = new res.web3.eth.Contract(abi, res.addr_contract);

/*
    window.ethereum.on('accountsChanged', function(accounts) {
      // Time to reload your interface with accounts[0]!
      console.log(accounts[0])
      account = accounts[0];
    });
*/

    return res;
  }
};


export async function getNumber(w3) {

  let response;
  try {
    //let bigNum = await sc.getNumber();
    let bigNum = await w3.sc.methods.getNumber().call();
    return bigNum;
    //response = BigInt(bigNum._hex).toString();

  } catch (error) {
    console.error(error);
    //return res.error = error;
    throw error;
  }

  console.log(response);
  return response;
}



export async function setNumber(w3, num) {

  try {
    ///WEB3 JS /////////////
    //We can get this information with Web3.js (for Node.JS Backend):
    //  - Nonce (from connected wallet address)
    //  - Gas price (recommended)
    //  - Gas Limit (estimated gas)

    //For browser usage, we can get all the information from Metamask,
    //or wathever the connected wallet.

    //If we want to ensure the value of these parameters,
    //we can automate this task with the commented code.


    let nonce = await w3.web3.eth.getTransactionCount(w3.account); //optional (using with Metamask)
    let gasPrice = await w3.web3.eth.getGasPrice(); //optional (using with Metamask)


    let gas = await w3.sc.methods.setNumber(num) //optional (using with Metamask)
      .estimateGas({
        from: w3.account,
        to: w3.addr_contract,
        nonce: w3.web3.utils.toHex(nonce), //optional even if estimateGas is used (using with Metamask)
        gasPrice: gasPrice, //optional even if estimateGas is used (using with Metamask)
        chainId: w3.web3.utils.toHex(chainId) //optional even if estimateGas is used (using with Metamask)
      });

    let gasLimit = w3.web3.utils.toHex(gas); //optional (using with Metamask)
    let tx = await w3.sc.methods.setNumber(num)
      .send({
        from: w3.account,
        to: w3.addr_contract,
        nonce: w3.web3.utils.toHex(nonce), //optional (using with Metamask)
        gasPrice: gasPrice, //optional (using with Metamask)
        gasLimit: gasLimit, //optional (using with Metamask)
        chainId: w3.web3.utils.toHex(chainId) //optional (using with Metamask)
      });

    console.log(tx);

  } catch (error) {
    console.error(error);

    throw error;
  }

}
