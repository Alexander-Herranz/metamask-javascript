import abi from "./abi.js";

export async function initWeb3(addr_contract){

  let res = {};
  res.provider = new ethers.providers.Web3Provider(window.ethereum);
  res.contract = new ethers.Contract(addr_contract, abi, res.provider);

  return res;

}


export async function getNumber(sc) {

	let response;

  try {

    response = await sc.getNumber();

		console.log(response);

/*
		let bigNum = await contract.getNumber();
    console.log(bigNum);
    response = BigInt(bigNum._hex).toString();
		*/

  } catch(err){
    console.error(err);
		response = err;
  }

	return response;

}


export async function setNumber(w3, num){

  const signer = w3.provider.getSigner();
	const scWithSigner = w3.contract.connect(signer);

	let response;

	try {
		let rawTX = await scWithSigner.setNumber(num);
		console.log("SEND TX");
		console.log(rawTX);

		const receipt = await rawTX.wait(2);

		console.log("CONFIRMED TX");
		console.log(receipt);


		return receipt;

	} catch(err){

		console.error(err);
		response = err;
	}

	return response;

}
