export async function checkMetamaskNetwork(
  www3,
  chainId
) {

  try {
    let networkId = await www3.eth.net.getId();
    if (networkId != chainId) {
      alert("NO estás conectado a la red " + chainId + "  --  Estás conectado a la red  " + networkId);
    } else {
      alert("Estás conectado a la red " + chainId);
    }
  } catch (err) {
    console.error(err);
  }

}


export async function addMetamaskNetwork(
  www3,
  chainId,
  chainName,
  coinName,
  coinSymbol,
  decimals,
  rpcUrls,
  blockExplorerUrls
) {

  try {
    window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: www3.utils.toHex(chainId),
        chainName: chainName,
        nativeCurrency: {
          name: coinName,
          symbol: coinSymbol,
          decimals: decimals
        },
        rpcUrls: rpcUrls,
        blockExplorerUrls: blockExplorerUrls
      }],
    })
  } catch (err) {
    console.error(err);
  }

}


export async function switchMetamaskNetwork(
  www3,
  chainId
) {

  try {
    window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{
        chainId: www3.utils.toHex(chainId)
      }],
    });
    console.log('network has been set')

  } catch (err) {
    if (err.code === 4902) {
      console.error('network is not available, add it')
    } else {
      console.error('could not set network')
      console.error(err);
    }
  }

}



export async function addTokenMetamask() {

  window.ethereum
    .request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
          symbol: 'FOO',
          decimals: 18,
          image: 'https://foo.io/token-image.svg',
        },
      },
    })
    .then((success) => {
      if (success) {
        console.log('FOO successfully added to wallet!');
      } else {
        throw new Error('Something went wrong.');
      }
    })
    .catch(console.error);


}



export async function signMessage(
  w3,
  message
) {

  try {

    const msg = w3.web3.utils.sha3(message);
    //const msg = `0x${bops.from(message, 'utf8').toString('hex')}`;
    //document.getElementById("messageHex").innerHTML = JSON.stringify(msg);
    console.log('msg : ' + msg);
    const signResult = await ethereum.request({
      method: 'personal_sign',
      params: [msg, w3.account, 'Random text'],
    });
    console.log('sign : ' + signResult);

    //document.getElementById("signature").innerHTML = JSON.stringify(sign);

    return JSON.stringify(signResult);

  } catch (err) {
    console.error(err);
  }
}


export async function verifyMessage(w3, message, signResult) {

  try {
    //const msg = `0x${bops.from(message, 'utf8').toString('hex')}`;
    const msg = w3.web3.utils.sha3(message);
    const recoveredAddr = w3.web3.eth.accounts.recover(msg, signResult);
    console.log('recoveredAddr : ' + recoveredAddr);

    if (recoveredAddr.toLowerCase() === w3.account.toLowerCase()) {
      console.log(`Successfully Recovered signer as ${recoveredAddr}`);
      return `Successfully Recovered signer as ${recoveredAddr}`;

    } else {
      console.log(`Failed to verify signer when comparing ${recoveredAddr} to ${w3.account}`);

      return `Failed to verify signer when comparing ${recoveredAddr} to ${w3.account}`;
    }
  } catch (err) {
    console.error(err);
  }
}
