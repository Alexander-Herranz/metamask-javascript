/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CertificadosNFT,
  CertificadosNFTInterface,
} from "../CertificadosNFT";

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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "createNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "setPermissionToMint",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001bae38038062001bae833981016040819052620000349162000264565b8151829082906200004d9060009060208501906200010b565b508051620000639060019060208401906200010b565b505050620000806200007a620000a660201b60201c565b620000aa565b600960006200008e620000fc565b6001600160a01b0316815260200152506200031e9050565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6007546001600160a01b031690565b8280546200011990620002cb565b90600052602060002090601f0160209004810192826200013d576000855562000188565b82601f106200015857805160ff191683800117855562000188565b8280016001018555821562000188579182015b82811115620001885782518255916020019190600101906200016b565b50620001969291506200019a565b5090565b5b808211156200019657600081556001016200019b565b600082601f830112620001c2578081fd5b81516001600160401b0380821115620001df57620001df62000308565b604051601f8301601f19908116603f011681019082821181831017156200020a576200020a62000308565b8160405283815260209250868385880101111562000226578485fd5b8491505b838210156200024957858201830151818301840152908201906200022a565b838211156200025a57848385830101525b9695505050505050565b6000806040838503121562000277578182fd5b82516001600160401b03808211156200028e578384fd5b6200029c86838701620001b1565b93506020850151915080821115620002b2578283fd5b50620002c185828601620001b1565b9150509250929050565b600281046001821680620002e057607f821691505b602082108114156200030257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611880806200032e6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063715018a6116100ad578063b88d4fde11610071578063b88d4fde14610243578063c520e27514610256578063c87b56dd14610269578063e985e9c51461027c578063f2fde38b1461028f57610121565b8063715018a6146102055780638da5cb5b1461020d57806395d89b4114610215578063a22cb4651461021d578063a89da3731461023057610121565b806317e5883c116100f457806317e5883c1461019957806323b872dd146101b957806342842e0e146101cc5780636352211e146101df57806370a08231146101f257610121565b806301ffc9a71461012657806306fdde031461014f578063081812fc14610164578063095ea7b314610184575b600080fd5b6101396101343660046112bb565b6102a2565b60405161014691906113b7565b60405180910390f35b6101576102ea565b60405161014691906113c2565b6101776101723660046112f3565b61037c565b6040516101469190611366565b610197610192366004611292565b6103a3565b005b6101ac6101a73660046110fc565b610444565b6040516101469190611787565b6101976101c7366004611148565b6104ad565b6101976101da366004611148565b6104e5565b6101776101ed3660046112f3565b610500565b6101ac6102003660046110fc565b610534565b610197610578565b61017761058c565b61015761059b565b61019761022b366004611258565b6105aa565b61013961023e3660046110fc565b6105c0565b610197610251366004611183565b6105d5565b610139610264366004611258565b610614565b6101576102773660046112f3565b61064a565b61013961028a366004611116565b61074f565b61019761029d3660046110fc565b61077d565b60006001600160e01b031982166380ac58cd60e01b14806102d357506001600160e01b03198216635b5e139f60e01b145b806102e257506102e2826107b7565b90505b919050565b6060600080546102f9906117bc565b80601f0160208091040260200160405190810160405280929190818152602001828054610325906117bc565b80156103725780601f1061034757610100808354040283529160200191610372565b820191906000526020600020905b81548152906001019060200180831161035557829003601f168201915b5050505050905090565b6000610387826107d0565b506000908152600460205260409020546001600160a01b031690565b60006103ae82610500565b9050806001600160a01b0316836001600160a01b031614156103eb5760405162461bcd60e51b81526004016103e2906116e9565b60405180910390fd5b806001600160a01b03166103fd6107f5565b6001600160a01b0316148061041957506104198161028a6107f5565b6104355760405162461bcd60e51b81526004016103e29061172a565b61043f83836107f9565b505050565b60408051808201909152601781527f68747470733a2f2f70696e2e736b692f334d5430424265000000000000000000602082015260088054600092918361048a836117f7565b909155505060085461049c8482610867565b6104a68183610881565b9392505050565b6104be6104b86107f5565b826108c5565b6104da5760405162461bcd60e51b81526004016103e2906113d5565b61043f838383610923565b61043f838383604051806020016040528060008152506105d5565b60008061050c83610a60565b90506001600160a01b0381166102e25760405162461bcd60e51b81526004016103e2906116b2565b60006001600160a01b03821661055c5760405162461bcd60e51b81526004016103e2906115b1565b506001600160a01b031660009081526003602052604090205490565b610580610a7b565b61058a6000610aba565b565b6007546001600160a01b031690565b6060600180546102f9906117bc565b6105bc6105b56107f5565b8383610b0c565b5050565b60096020526000908152604090205460ff1681565b6105e66105e06107f5565b836108c5565b6106025760405162461bcd60e51b81526004016103e2906113d5565b61060e84848484610baf565b50505050565b600061061e610a7b565b6001600160a01b03929092166000908152600960205260409020805460ff191691151591909117905590565b6060610655826107d0565b6000828152600660205260408120805461066e906117bc565b80601f016020809104026020016040519081016040528092919081815260200182805461069a906117bc565b80156106e75780601f106106bc576101008083540402835291602001916106e7565b820191906000526020600020905b8154815290600101906020018083116106ca57829003601f168201915b5050505050905060006106f8610be2565b905080516000141561070c575090506102e5565b81511561073e578082604051602001610726929190611337565b604051602081830303815290604052925050506102e5565b61074784610bf4565b949350505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610785610a7b565b6001600160a01b0381166107ab5760405162461bcd60e51b81526004016103e290611474565b6107b481610aba565b50565b6001600160e01b031981166301ffc9a760e01b14919050565b6107d981610c5a565b6107b45760405162461bcd60e51b81526004016103e2906116b2565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061082e82610500565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6105bc828260405180602001604052806000815250610c77565b61088a82610c5a565b6108a65760405162461bcd60e51b81526004016103e2906115fa565b6000828152600660209081526040909120825161043f9284019061104c565b6000806108d183610500565b9050806001600160a01b0316846001600160a01b031614806108f857506108f8818561074f565b806107475750836001600160a01b03166109118461037c565b6001600160a01b031614949350505050565b826001600160a01b031661093682610500565b6001600160a01b03161461095c5760405162461bcd60e51b81526004016103e2906114ba565b6001600160a01b0382166109825760405162461bcd60e51b81526004016103e290611536565b61098f838383600161060e565b826001600160a01b03166109a282610500565b6001600160a01b0316146109c85760405162461bcd60e51b81526004016103e2906114ba565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a461043f838383600161060e565b6000908152600260205260409020546001600160a01b031690565b610a836107f5565b6001600160a01b0316610a9461058c565b6001600160a01b03161461058a5760405162461bcd60e51b81526004016103e29061167d565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b03161415610b3e5760405162461bcd60e51b81526004016103e29061157a565b6001600160a01b0383811660008181526005602090815260408083209487168084529490915290819020805460ff1916851515179055517f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190610ba29085906113b7565b60405180910390a3505050565b610bba848484610923565b610bc684848484610caa565b61060e5760405162461bcd60e51b81526004016103e290611422565b60408051602081019091526000815290565b6060610bff826107d0565b6000610c09610be2565b90506000815111610c2957604051806020016040528060008152506104a6565b80610c3384610dc5565b604051602001610c44929190611337565b6040516020818303038152906040529392505050565b600080610c6683610a60565b6001600160a01b0316141592915050565b610c818383610e70565b610c8e6000848484610caa565b61043f5760405162461bcd60e51b81526004016103e290611422565b6000610cbe846001600160a01b0316610f65565b15610dba57836001600160a01b031663150b7a02610cda6107f5565b8786866040518563ffffffff1660e01b8152600401610cfc949392919061137a565b602060405180830381600087803b158015610d1657600080fd5b505af1925050508015610d46575060408051601f3d908101601f19168201909252610d43918101906112d7565b60015b610da0573d808015610d74576040519150601f19603f3d011682016040523d82523d6000602084013e610d79565b606091505b508051610d985760405162461bcd60e51b81526004016103e290611422565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610747565b506001949350505050565b60606000610dd283610f74565b600101905060008167ffffffffffffffff811115610e0057634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610e2a576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610e6357610e68565b610e34565b509392505050565b6001600160a01b038216610e965760405162461bcd60e51b81526004016103e290611648565b610e9f81610c5a565b15610ebc5760405162461bcd60e51b81526004016103e2906114ff565b610eca60008383600161060e565b610ed381610c5a565b15610ef05760405162461bcd60e51b81526004016103e2906114ff565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a46105bc60008383600161060e565b6001600160a01b03163b151590565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610fb35772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610fdf576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610ffd57662386f26fc10000830492506010015b6305f5e1008310611015576305f5e100830492506008015b612710831061102957612710830492506004015b6064831061103b576064830492506002015b600a83106102e25760010192915050565b828054611058906117bc565b90600052602060002090601f01602090048101928261107a57600085556110c0565b82601f1061109357805160ff19168380011785556110c0565b828001600101855582156110c0579182015b828111156110c05782518255916020019190600101906110a5565b506110cc9291506110d0565b5090565b5b808211156110cc57600081556001016110d1565b80356001600160a01b03811681146102e557600080fd5b60006020828403121561110d578081fd5b6104a6826110e5565b60008060408385031215611128578081fd5b611131836110e5565b915061113f602084016110e5565b90509250929050565b60008060006060848603121561115c578081fd5b611165846110e5565b9250611173602085016110e5565b9150604084013590509250925092565b60008060008060808587031215611198578081fd5b6111a1856110e5565b93506111af602086016110e5565b925060408501359150606085013567ffffffffffffffff808211156111d2578283fd5b818701915087601f8301126111e5578283fd5b8135818111156111f7576111f761181e565b604051601f8201601f19908116603f0116810190838211818310171561121f5761121f61181e565b816040528281528a6020848701011115611237578586fd5b82602086016020830137918201602001949094529598949750929550505050565b6000806040838503121561126a578182fd5b611273836110e5565b915060208301358015158114611287578182fd5b809150509250929050565b600080604083850312156112a4578182fd5b6112ad836110e5565b946020939093013593505050565b6000602082840312156112cc578081fd5b81356104a681611834565b6000602082840312156112e8578081fd5b81516104a681611834565b600060208284031215611304578081fd5b5035919050565b60008151808452611323816020860160208601611790565b601f01601f19169290920160200192915050565b60008351611349818460208801611790565b83519083019061135d818360208801611790565b01949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906113ad9083018461130b565b9695505050505050565b901515815260200190565b6000602082526104a6602083018461130b565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b6020808252601c908201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260600190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b60208082526029908201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616040820152683634b21037bbb732b960b91b606082015260800190565b6020808252602e908201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60408201526d32bc34b9ba32b73a103a37b5b2b760911b606082015260800190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526018908201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604082015260600190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b6020808252603d908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60408201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000606082015260800190565b90815260200190565b60005b838110156117ab578181015183820152602001611793565b8381111561060e5750506000910152565b6002810460018216806117d057607f821691505b602082108114156117f157634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561181757634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146107b457600080fdfea2646970667358221220c0ab03fc6fc5773f4c2731cfe8567707c3dea4358e881ded8f13b36c4efe7afe64736f6c63430008010033";

export class CertificadosNFT__factory extends ContractFactory {
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
  ): Promise<CertificadosNFT> {
    return super.deploy(
      tokenName,
      tokenSymbol,
      overrides || {}
    ) as Promise<CertificadosNFT>;
  }
  getDeployTransaction(
    tokenName: string,
    tokenSymbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(tokenName, tokenSymbol, overrides || {});
  }
  attach(address: string): CertificadosNFT {
    return super.attach(address) as CertificadosNFT;
  }
  connect(signer: Signer): CertificadosNFT__factory {
    return super.connect(signer) as CertificadosNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CertificadosNFTInterface {
    return new utils.Interface(_abi) as CertificadosNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CertificadosNFT {
    return new Contract(address, _abi, signerOrProvider) as CertificadosNFT;
  }
}