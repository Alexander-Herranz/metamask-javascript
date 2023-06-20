import abi from './abi.js';
const addr_contract = '0x71b5ebCe1dd6f529E7DD4F3a8C2ccAD5e610b71E';
const chainId = 11155111; //137;//
let w3provider;
let account;
let sc;

export async function initWeb3() {

  if (window.ethereum) {
    await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
    w3provider = new Web3(window.ethereum);

    await window.ethereum.enable();
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    account = accounts[0];
    console.log(account);

    sc = new w3provider.eth.Contract(abi, addr_contract);

    window.ethereum.on('accountsChanged', function(accounts) {
      // Time to reload your interface with accounts[0]!
      console.log(accounts[0])
      account = accounts[0];
    });

  }

};


export async function getNumber() {

  console.log('getNumber()');
  console.log(w3provider);

  let response;

  try {
    //let bigNum = await sc.getNumber();
    let bigNum = await sc.methods.getNumber().call()
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



export async function setNumber() {


  try {

    let newVal = document.getElementById("myNumber").value;
    document.getElementById("myNumber").value = ""; //Empty input

    console.log(newVal);

    ///WEB3 JS /////////////
    let gasPrice = await w3provider.eth.getGasPrice();
    let gas = await sc.methods.setNumber(newVal)
      .estimateGas({
        //nonce: web3.utils.toHex(nonce_nft),
        //gasPrice: gasPrice,
        from: account,
        to: addr_contract,
        //chainId: web3.utils.toHex(chainId),
      });

    let gasLimit = w3provider.utils.toHex(gas);


    let tx = await sc.methods.setNumber(newVal)
        .send({
            //nonce: web3.utils.toHex(nonce_nft),
            //gasPrice: gasPrice,
            //gasLimit: gasLimit,
            from: account,
            to: addr_contract,
            chainId: w3provider.utils.toHex(chainId)
          });

    console.log(tx);

  } catch (error) {
    console.error(error);

    throw error;
  }

}
