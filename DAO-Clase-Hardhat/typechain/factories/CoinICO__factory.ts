/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoinICO, CoinICOInterface } from "../CoinICO";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowedToMint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "holders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "investInProject",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "secondPhase",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allow",
        type: "bool",
      },
    ],
    name: "setAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "thirdPhase",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "wallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001716380380620017168339810160408190526200003491620002b8565b8151829082906200004d9060039060208501906200015f565b508051620000639060049060208401906200015f565b505050620000806200007a6200010960201b60201c565b6200010d565b600780546001600160a01b03191633179055600a600855620000a642620151806200031f565b6009819055620000ba9062278d006200031f565b600a55600954620000cf90620697806200031f565b600b55600954620000e4906220f5806200031f565b600c555050336000908152600d60205260409020805460ff1916600117905562000397565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200016d9062000344565b90600052602060002090601f016020900481019282620001915760008555620001dc565b82601f10620001ac57805160ff1916838001178555620001dc565b82800160010185558215620001dc579182015b82811115620001dc578251825591602001919060010190620001bf565b50620001ea929150620001ee565b5090565b5b80821115620001ea5760008155600101620001ef565b600082601f83011262000216578081fd5b81516001600160401b038082111562000233576200023362000381565b604051601f8301601f19908116603f011681019082821181831017156200025e576200025e62000381565b816040528381526020925086838588010111156200027a578485fd5b8491505b838210156200029d57858201830151818301840152908201906200027e565b83821115620002ae57848385830101525b9695505050505050565b60008060408385031215620002cb578182fd5b82516001600160401b0380821115620002e2578384fd5b620002f08683870162000205565b9350602085015191508082111562000306578283fd5b50620003158582860162000205565b9150509250929050565b600082198211156200033f57634e487b7160e01b81526011600452602481fd5b500190565b6002810460018216806200035957607f821691505b602082108114156200037b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61136f80620003a76000396000f3fe6080604052600436106101815760003560e01c806370a08231116100d15780639e469dc41161008a578063a9059cbb11610064578063a9059cbb146103f6578063dd62ed3e14610416578063f2fde38b14610436578063f9f8bdb71461045657610181565b80639e469dc4146103ae578063a457c2d7146103b6578063a89da373146103d657610181565b806370a0823114610323578063715018a6146103435780638188f71c1461035a5780638da5cb5b1461036f57806395d89b41146103845780639e44d48f1461039957610181565b8063395093511161013e5780634697f05d116101185780634697f05d146102b7578063521eb273146102d757806355a2be24146102f95780635622ce161461030e57610181565b8063395093511461025757806340c10f191461027757806342966c681461029757610181565b806306fdde0314610186578063095ea7b3146101b15780630b97bc86146101de57806318160ddd1461020057806323b872dd14610215578063313ce56714610235575b600080fd5b34801561019257600080fd5b5061019b61046b565b6040516101a89190610e4f565b60405180910390f35b3480156101bd57600080fd5b506101d16101cc366004610dec565b6104fd565b6040516101a89190610e44565b3480156101ea57600080fd5b506101f361051f565b6040516101a89190611248565b34801561020c57600080fd5b506101f3610525565b34801561022157600080fd5b506101d1610230366004610d77565b61052b565b34801561024157600080fd5b5061024a610559565b6040516101a89190611251565b34801561026357600080fd5b506101d1610272366004610dec565b61055e565b34801561028357600080fd5b506101d1610292366004610dec565b61058a565b3480156102a357600080fd5b506101d16102b2366004610e15565b6105e6565b3480156102c357600080fd5b506101d16102d2366004610db2565b61060c565b3480156102e357600080fd5b506102ec610645565b6040516101a89190610e30565b34801561030557600080fd5b506101f3610654565b34801561031a57600080fd5b506101f361065a565b34801561032f57600080fd5b506101f361033e366004610d24565b610660565b34801561034f57600080fd5b5061035861067b565b005b34801561036657600080fd5b506101f361068f565b34801561037b57600080fd5b506102ec610695565b34801561039057600080fd5b5061019b6106a4565b3480156103a557600080fd5b506101f36106b3565b6101d16106b9565b3480156103c257600080fd5b506101d16103d1366004610dec565b6107cb565b3480156103e257600080fd5b506101d16103f1366004610d24565b610813565b34801561040257600080fd5b506101d1610411366004610dec565b610828565b34801561042257600080fd5b506101f3610431366004610d45565b610840565b34801561044257600080fd5b50610358610451366004610d24565b61086b565b34801561046257600080fd5b506101f36108a5565b60606003805461047a906112cd565b80601f01602080910402602001604051908101604052809291908181526020018280546104a6906112cd565b80156104f35780601f106104c8576101008083540402835291602001916104f3565b820191906000526020600020905b8154815290600101906020018083116104d657829003601f168201915b5050505050905090565b6000806105086108ab565b90506105158185856108af565b5060019392505050565b60095481565b60025490565b6000806105366108ab565b9050610543858285610963565b61054e8585856109ad565b506001949350505050565b601290565b6000806105696108ab565b905061051581858561057b8589610840565b610585919061125f565b6108af565b336000908152600d602052604081205460ff166105c25760405162461bcd60e51b81526004016105b99061102c565b60405180910390fd5b6105dd836105d884670de0b6b3a7640000611297565b610aae565b50600192915050565b6000610603336105fe84670de0b6b3a7640000611297565b610b5c565b5060015b919050565b6000610616610c38565b506001600160a01b0382166000908152600d60205260409020805482151560ff19909116179055600192915050565b6007546001600160a01b031681565b600a5481565b600b5481565b6001600160a01b031660009081526020819052604090205490565b610683610c38565b61068d6000610c77565b565b60065481565b6005546001600160a01b031690565b60606004805461047a906112cd565b600c5481565b6000600a5442106106dc5760405162461bcd60e51b81526004016105b990611096565b600854600b54421180156106f15750600c5442105b1561070c5760026008546107059190611277565b9050610728565b600c544211156107285760036008546107259190611277565b90505b60006107348234611297565b90506107403382610aae565b6007546040516000916001600160a01b031690349061075e90610e2d565b60006040518083038185875af1925050503d806000811461079b576040519150601f19603f3d011682016040523d82523d6000602084013e6107a0565b606091505b50509050806107c15760405162461bcd60e51b81526004016105b990611061565b6001935050505090565b6000806107d66108ab565b905060006107e48286610840565b9050838110156108065760405162461bcd60e51b81526004016105b9906111cc565b61054e82868684036108af565b600d6020526000908152604090205460ff1681565b6000806108336108ab565b90506105158185856109ad565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610873610c38565b6001600160a01b0381166108995760405162461bcd60e51b81526004016105b990610f27565b6108a281610c77565b50565b60085481565b3390565b6001600160a01b0383166108d55760405162461bcd60e51b81526004016105b990611188565b6001600160a01b0382166108fb5760405162461bcd60e51b81526004016105b990610f6d565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610956908590611248565b60405180910390a3505050565b600061096f8484610840565b905060001981146109a7578181101561099a5760405162461bcd60e51b81526004016105b990610faf565b6109a784848484036108af565b50505050565b6001600160a01b0383166109d35760405162461bcd60e51b81526004016105b990611143565b6001600160a01b0382166109f95760405162461bcd60e51b81526004016105b990610ea2565b610a04838383610cc9565b6001600160a01b03831660009081526020819052604090205481811015610a3d5760405162461bcd60e51b81526004016105b990610fe6565b6001600160a01b0380851660008181526020819052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610a9b908690611248565b60405180910390a36109a7848484610cf0565b6001600160a01b038216610ad45760405162461bcd60e51b81526004016105b990611211565b610ae060008383610cc9565b8060026000828254610af2919061125f565b90915550506001600160a01b038216600081815260208190526040808220805485019055517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610b44908590611248565b60405180910390a3610b5860008383610cf0565b5050565b6001600160a01b038216610b825760405162461bcd60e51b81526004016105b990611102565b610b8e82600083610cc9565b6001600160a01b03821660009081526020819052604090205481811015610bc75760405162461bcd60e51b81526004016105b990610ee5565b6001600160a01b0383166000818152602081905260408082208585039055600280548690039055519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610c1f908690611248565b60405180910390a3610c3383600084610cf0565b505050565b610c406108ab565b6001600160a01b0316610c51610695565b6001600160a01b03161461068d5760405162461bcd60e51b81526004016105b9906110cd565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610cd282610660565b610c335760068054906000610ce683611308565b9190505550505050565b610cf983610660565b610c335760068054906000610ce6836112b6565b80356001600160a01b038116811461060757600080fd5b600060208284031215610d35578081fd5b610d3e82610d0d565b9392505050565b60008060408385031215610d57578081fd5b610d6083610d0d565b9150610d6e60208401610d0d565b90509250929050565b600080600060608486031215610d8b578081fd5b610d9484610d0d565b9250610da260208501610d0d565b9150604084013590509250925092565b60008060408385031215610dc4578182fd5b610dcd83610d0d565b915060208301358015158114610de1578182fd5b809150509250929050565b60008060408385031215610dfe578182fd5b610e0783610d0d565b946020939093013593505050565b600060208284031215610e26578081fd5b5035919050565b90565b6001600160a01b0391909116815260200190565b901515815260200190565b6000602080835283518082850152825b81811015610e7b57858101830151858201604001528201610e5f565b81811115610e8c5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604082015261636560f01b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252601d908201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604082015260600190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b6020808252818101527f457374612061646472657373206e6f2065737461206175746f72697a6164612e604082015260600190565b6020808252818101527f4661696c656420746f2073656e642045544820746f20746865206f776e65722e604082015260600190565b60208082526018908201527f5468652043726f776473616c6520697320636c6f7365642e0000000000000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60ff91909116815260200190565b6000821982111561127257611272611323565b500190565b60008261129257634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156112b1576112b1611323565b500290565b6000816112c5576112c5611323565b506000190190565b6002810460018216806112e157607f821691505b6020821081141561130257634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561131c5761131c611323565b5060010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220442c9e93547e032541ad7d0f98c33eb8de2ac281f8900c698b5c52f88d1d53bd64736f6c63430008010033";

export class CoinICO__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    tokenName: string,
    tokenSymbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoinICO> {
    return super.deploy(
      tokenName,
      tokenSymbol,
      overrides || {}
    ) as Promise<CoinICO>;
  }
  getDeployTransaction(
    tokenName: string,
    tokenSymbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(tokenName, tokenSymbol, overrides || {});
  }
  attach(address: string): CoinICO {
    return super.attach(address) as CoinICO;
  }
  connect(signer: Signer): CoinICO__factory {
    return super.connect(signer) as CoinICO__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoinICOInterface {
    return new utils.Interface(_abi) as CoinICOInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoinICO {
    return new Contract(address, _abi, signerOrProvider) as CoinICO;
  }
}
