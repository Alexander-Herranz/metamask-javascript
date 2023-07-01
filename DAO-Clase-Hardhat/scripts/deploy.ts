// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import hre from "hardhat";


let nftName = "Certificados NFT";
let nftSymbol = "CursoNFT";

let cryptoName = "Moneda de Alumnos";
let cryptoSymbol = "MdA";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  const certificadosNFT_Factory = await ethers.getContractFactory("CertificadosNFT");
  const contractCertificadosNFT = await certificadosNFT_Factory.deploy(nftName, nftSymbol);
  await contractCertificadosNFT.deployed();
  console.log("CertificadosNFT Contract deployed to:", contractCertificadosNFT.address);

  //await contractCertificadosNFT.deploymentTransaction().wait(6); //Ethers v6
  await contractCertificadosNFT.deployTransaction.wait(6); //Ethers v5


  await hre.run("verify:verify", {
      address: contractCertificadosNFT.address,
      constructorArguments: [
        nftName,
        nftSymbol
      ]
  });


  const coin_ICO_Factory = await ethers.getContractFactory("Coin_ICO");
  const contractCoin_ICO = await coin_ICO_Factory.deploy(cryptoName, cryptoSymbol);
  await contractCoin_ICO.deployed();
  console.log("Coin_ICO Contract deployed to:", contractCoin_ICO.address);

  await contractCoin_ICO.deployTransaction.wait(6); //Ethers v5


  await hre.run("verify:verify", {
      address: contractCoin_ICO.address,
      constructorArguments: [
        cryptoName,
        cryptoSymbol
      ]
  });


  const cursoBlockchain_Factory = await ethers.getContractFactory("CursoBlockchain");
  const contracCursoBlockchain = await cursoBlockchain_Factory.deploy(contractCoin_ICO.address, contractCertificadosNFT.address);
  await contracCursoBlockchain.deployed(contractCoin_ICO.address, contractCertificadosNFT.address);
  console.log("Curso Blockchain Contract deployed to:", contracCursoBlockchain.address);

  await contracCursoBlockchain.deployTransaction.wait(6); //Ethers v5


  await hre.run("verify:verify", {
      address: contracCursoBlockchain.address,
      constructorArguments: [
        contractCoin_ICO.address,
        contractCertificadosNFT.address
      ]
  });


}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
