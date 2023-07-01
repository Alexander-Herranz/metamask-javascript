import abi from "./abi.js";

export async function initWeb3(addr_contract){

  let res = {};

  if (window.ethereum){ //Check if Metamask is installed

    res.provider = new Web3(window.ethereum);
    res.sc = new res.provider.eth.Contract(abi, addr_contract);
  }

  return res;

}

export async function getNumber(sc){

  try {
      let num = await sc.methods.getNumber().call();
      return num;
  }
  catch (err) {
    console.error(err);
    //throw err;
  }

}


export async function setNumber(w3, inputVal){

  try {

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    console.log(accounts);

    let tx = await w3.sc.methods.setNumber(inputVal)
      .send({
        from: accounts[0],
        //nonce: w3.web3.utils.toHex(nonce), //optional (using with Metamask)
        //gasPrice: gasPrice, //optional (using with Metamask)
        //gasLimit: gasLimit, //optional (using with Metamask)
        //chainId: w3.web3.utils.toHex(chainId) //optional (using with Metamask)
      });

      console.log(tx);
  }
  catch(err){
    console.error(err);
  }


}
