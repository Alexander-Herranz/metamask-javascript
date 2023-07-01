/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IUniswapV2Router02,
  IUniswapV2Router02Interface,
} from "../IUniswapV2Router02";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "getAmountsOut",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IUniswapV2Router02__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV2Router02Interface {
    return new utils.Interface(_abi) as IUniswapV2Router02Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapV2Router02 {
    return new Contract(address, _abi, signerOrProvider) as IUniswapV2Router02;
  }
}
