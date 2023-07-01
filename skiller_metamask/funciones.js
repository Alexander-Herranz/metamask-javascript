export async function initWeb3(){

  let res;

  if (window.ethereum){ //Check if Metamask is installed
    res = new Web3(window.ethereum);
  }

  return res;

}


export async function addNetwork(){

  try {

    let my_web3 = await initWeb3();
    console.log(my_web3);

    let addNetMetamask = {};
    addNetMetamask.method = 'wallet_addEthereumChain';

    let params = {};
    params.chainId = my_web3.utils.toHex(100);
    params.chainName = 'Gnosis Skiller';
    params.nativeCurrency = {'name': 'XDAI', 'symbol': 'SKILL', 'decimals': 18 };
    params.rpcUrls = ['https://rpc.gnosischain.com'];
    params.blockExplorerUrls = ['https://gnosisscan.io'];

    addNetMetamask.params = [params];

    await window.ethereum.request(addNetMetamask);


  } catch (err) {
    console.error(err);
  }

}


export async function switchNetwork(){

  try {

    let my_web3 = await initWeb3();
    console.log(my_web3);

    let switchNeMetamask = {};
    switchNeMetamask.method = 'wallet_switchEthereumChain';
    //let params = {'chainId': my_web3.utils.toHex(100)};
    let params = {};
    params.chainId = my_web3.utils.toHex(100);
    switchNeMetamask.params = [params];

    window.ethereum.request(switchNeMetamask);

  } catch(err){
    console.log("ERROR !!!");
    console.log(err);
/*
    if(err.code === 4902){
      console.log("Añade la red de GNOSIS primero!!!");
    } else {
      console.log("El error es: " + err.code);
    }
    */

  }

}

export async function addToken(){

  try {

    let params = {};
    params.type = 'ERC20';
    params.options = {
      address: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
      symbol: 'FOO',
      decimals: 18,
      image: 'https://foo.io/token-image.svg',
    };


    let addTokenMetamask = {};
    addTokenMetamask.method = 'wallet_watchAsset';
    addTokenMetamask.params = params;

    window.ethereum.request(addTokenMetamask);


  } catch(err){

  }


}
