
//////////////////////////////////////////////////////////////////////////////////
// ETHERS JS
// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page

export async function initWeb3(abi, addr_contract){
  let res = {};
  res.web3 = new ethers.providers.Web3Provider(window.ethereum);
  res.sc = new ethers.Contract(addr_contract, abi, res.web3);
  return res;
}


export async function sign(www3, msg) {
  // MetaMask requires requesting permission to connect users accounts
  //www3.send("eth_requestAccounts", []);
  // The MetaMask plugin also allows signing transactions
  const signer = www3.getSigner();

  let signature = await signer.signMessage(msg);
  console.log(signature);
  return signature;
}

export async function setNumber(w3, num) {

  // MetaMask requires requesting permission to connect users accounts
  w3.web3.send("eth_requestAccounts", []);
  // The MetaMask plugin also allows signing transactions
  const signer = w3.web3.getSigner();
  console.log("signer: ");
  console.log(signer);
  // The Contract is currently connected to the Provider,
  // which is read-only. You need to connect to a Signer, so
  // that you can pay to send state-changing transactions.

  let scWithSigner = w3.sc.connect(signer);

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


export async function getNumber(sc) {

  console.log("getNumber SC");
  console.log(sc);

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
