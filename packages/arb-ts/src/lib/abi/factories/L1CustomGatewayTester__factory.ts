/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L1CustomGatewayTester } from '../L1CustomGatewayTester'

export class L1CustomGatewayTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L1CustomGatewayTester> {
    return super.deploy(overrides || {}) as Promise<L1CustomGatewayTester>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1CustomGatewayTester {
    return super.attach(address) as L1CustomGatewayTester
  }
  connect(signer: Signer): L1CustomGatewayTester__factory {
    return super.connect(signer) as L1CustomGatewayTester__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1CustomGatewayTester {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as L1CustomGatewayTester
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'InboundTransferFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'OutboundTransferInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'TokenSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'TransferAndCallTriggered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL2',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'newData',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'madeExternalCall',
        type: 'bool',
      },
    ],
    name: 'WithdrawRedirected',
    type: 'event',
  },
  {
    inputs: [],
    name: 'STORAGE_GAP',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
    ],
    name: 'encodeWithdrawal',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_l1Addresses',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_l2Addresses',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'forceRegisterTokenToL2',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gasReserveIfCallRevert',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_initialData',
        type: 'bytes',
      },
    ],
    name: 'getExternalCall',
    outputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'inboundEscrowAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l1Router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'l1ToL2Token',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: 'res',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'parseInboundData',
    outputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_extraData',
        type: 'bytes',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'redirectedExits',
    outputs: [
      {
        internalType: 'address',
        name: '_newTo',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'registerTokenToL2',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_shouldUseInbox',
        type: 'bool',
      },
    ],
    name: 'setInboxUse',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_newDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferExitAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50612b8c806100206000396000f3fe60806040526004361061011e5760003560e01c8063a0c76a96116100a0578063f26bdead11610064578063f26bdead146108d4578063f398744c1461090c578063f68a908214610921578063f8c8765e146109e7578063fb0e722b14610a325761011e565b8063a0c76a96146105d0578063a7e28d48146106a9578063bcf2e6eb146106dc578063bd5f3e7d1461074f578063d2ce7d651461083a5761011e565b80632e567b36116100e75780632e567b361461035757806369ec2bed1461046257806386ee20501461048e5780638a2dc014146105885780638da5cb5b146105bb5761011e565b8062aa3a9b14610123578063020a6058146101fc5780630f09eb51146102475780631d3a689f1461025c5780632db09c1c14610326575b600080fd5b34801561012f57600080fd5b506101fa600480360360a081101561014657600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561018657600080fd5b82018360208201111561019857600080fd5b803590602001918460018302840111600160201b831117156101b957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a47945050505050565b005b34801561020857600080fd5b506102356004803603604081101561021f57600080fd5b50803590602001356001600160a01b0316610c41565b60408051918252519081900360200190f35b34801561025357600080fd5b50610235610c76565b610235600480360360a081101561027257600080fd5b810190602081018135600160201b81111561028c57600080fd5b82018360208201111561029e57600080fd5b803590602001918460208302840111600160201b831117156102bf57600080fd5b919390929091602081019035600160201b8111156102dc57600080fd5b8201836020820111156102ee57600080fd5b803590602001918460208302840111600160201b8311171561030f57600080fd5b919350915080359060208101359060400135610c7d565b34801561033257600080fd5b5061033b610ee7565b604080516001600160a01b039092168252519081900360200190f35b6103ed600480360360a081101561036d57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156103af57600080fd5b8201836020820111156103c157600080fd5b803590602001918460018302840111600160201b831117156103e257600080fd5b509092509050610efb565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561042757818101518382015260200161040f565b50505050905090810190601f1680156104545780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561046e57600080fd5b506101fa6004803603602081101561048557600080fd5b50351515611244565b34801561049a57600080fd5b50610509600480360360208110156104b157600080fd5b810190602081018135600160201b8111156104cb57600080fd5b8201836020820111156104dd57600080fd5b803590602001918460018302840111600160201b831117156104fe57600080fd5b509092509050611257565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561054c578181015183820152602001610534565b50505050905090810190601f1680156105795780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561059457600080fd5b5061033b600480360360208110156105ab57600080fd5b50356001600160a01b0316611304565b3480156105c757600080fd5b5061033b61131f565b3480156105dc57600080fd5b506103ed600480360360a08110156105f357600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561063557600080fd5b82018360208201111561064757600080fd5b803590602001918460018302840111600160201b8311171561066857600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061132e945050505050565b3480156106b557600080fd5b5061033b600480360360208110156106cc57600080fd5b50356001600160a01b0316611516565b3480156106e857600080fd5b50610706600480360360208110156106ff57600080fd5b5035611529565b604080516001600160a01b03841681526020808201838152845193830193909352835191929160608401918501908083836000831561054c578181015183820152602001610534565b34801561075b57600080fd5b506101fa600480360360a081101561077257600080fd5b8135916001600160a01b03602082013581169260408301359091169190810190608081016060820135600160201b8111156107ac57600080fd5b8201836020820111156107be57600080fd5b803590602001918460018302840111600160201b831117156107df57600080fd5b919390929091602081019035600160201b8111156107fc57600080fd5b82018360208201111561080e57600080fd5b803590602001918460018302840111600160201b8311171561082f57600080fd5b5090925090506115dd565b6103ed600480360360c081101561085057600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561089657600080fd5b8201836020820111156108a857600080fd5b803590602001918460018302840111600160201b831117156108c957600080fd5b5090925090506118b6565b610235600480360360808110156108ea57600080fd5b506001600160a01b038135169060208101359060408101359060600135611a46565b34801561091857600080fd5b5061033b611cb9565b34801561092d57600080fd5b506107066004803603606081101561094457600080fd5b8135916001600160a01b0360208201351691810190606081016040820135600160201b81111561097357600080fd5b82018360208201111561098557600080fd5b803590602001918460018302840111600160201b831117156109a657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611cc8945050505050565b3480156109f357600080fd5b506101fa60048036036080811015610a0a57600080fd5b506001600160a01b038135811691602081013582169160408201358116916060013516611e24565b348015610a3e57600080fd5b5061033b611e54565b333014610a9b576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b610aad826001600160a01b0316611e63565b610afe576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b610b09858386611e69565b6000610b13610c76565b5a039050805a11610b555760405162461bcd60e51b815260040180806020018281038252602b815260200180612b02602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610bd2578181015183820152602001610bba565b50505050905090810190601f168015610bff5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b158015610c2057600080fd5b5087f1158015610c34573d6000803e3d6000fd5b5050505050505050505050565b604080516020808201949094526001600160a01b03929092168282015280518083038201815260609092019052805191012090565b6175305b90565b6005546000906001600160a01b03163314610ccc576040805162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b604482015290519081900360640190fd5b868514610d12576040805162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4c454e4754485360881b604482015290519081900360640190fd5b60005b87811015610e1b57868682818110610d2957fe5b905060200201356001600160a01b0316600460008b8b85818110610d4957fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550868682818110610da957fe5b905060200201356001600160a01b03166001600160a01b0316898983818110610dce57fe5b905060200201356001600160a01b03166001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a3600101610d15565b50606063d4f5532f60e01b898989896040516024018080602001806020018381038352878782818152602001925060200280828437600083820152601f01601f19169091018481038352858152602090810191508690860280828437600081840152601f19601f8201169050808301925050509650505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050610eda33600085888886611e88565b9998505050505050505050565b60005461010090046001600160a01b031681565b600254606090600090610f16906001600160a01b0316611ebe565b9050610f2181611ec9565b610f6d576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60006060610f7b8686611257565b91509150610f8a828983611cc8565b8051919950915015611185576000306001600160a01b031662aa3a9b8c8a8d8d876040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561104557818101518382015260200161102d565b50505050905090810190601f1680156110725780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b15801561109557600080fd5b505af19250505080156110a6575060015b6110ba576110b58b8b8a611e69565b6110be565b5060015b886001600160a01b03168a6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838b86604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561114357818101518382015260200161112b565b50505050905090810190601f1680156111705780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a350611190565b6111908a8989611e69565b81886001600160a01b03168a6001600160a01b03167f179a84706122b1b806f7d61c28c5caef276b7ff474ae596df3cad4bbaf0eb97d8d8b8b8b60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a4505060408051602081019091526000815298975050505050505050565b6000805460ff1916911515919091179055565b600060608383604081101561126b57600080fd5b81359190810190604081016020820135600160201b81111561128c57600080fd5b82018360208201111561129e57600080fd5b803590602001918460018302840111600160201b831117156112bf57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b6004602052600090815260409020546001600160a01b031681565b6005546001600160a01b031681565b606080604051806020016040528060008152509050632e567b3660e01b878787878588604051602001808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561139557818101518382015260200161137d565b50505050905090810190601f1680156113c25780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156113f55781810151838201526020016113dd565b50505050905090810190601f1680156114225780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152908290526001600160a01b03808c16602484019081528b82166044850152908a1660648401526084830189905260a060a48401908152825160c48501528251929850909650945060e4909101925060208601915080838360005b838110156114a257818101518382015260200161148a565b50505050905090810190601f1680156114cf5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a1699909917909852509597505050505050505095945050505050565b600061152182611ee2565b90505b919050565b6003602090815260009182526040918290208054600180830180548651600261010094831615949094026000190190911692909204601f81018690048602830186019096528582526001600160a01b039092169492939092908301828280156115d35780601f106115a8576101008083540402835291602001916115d3565b820191906000526020600020905b8154815290600101906020018083116115b657829003601f168201915b5050505050905082565b60006115f9888860405180602001604052806000815250611cc8565b509050336001600160a01b0382161461164f576040805162461bcd60e51b81526020600482015260136024820152722727aa2fa2ac2822a1aa22a22fa9a2a72222a960691b604482015290519081900360640190fd5b61169188888888888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611f0092505050565b81156117f9576116a9866001600160a01b0316611e63565b6116ec576040805162461bcd60e51b815260206004820152600f60248201526e1513d7d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b6000866001600160a01b031663592e2070838b87876040518563ffffffff1660e01b815260040180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050602060405180830381600087803b15801561178257600080fd5b505af1158015611796573d6000803e3d6000fd5b505050506040513d60208110156117ac57600080fd5b50519050806117f7576040805162461bcd60e51b81526020600482015260126024820152711514905394d1915497d213d3d2d7d190525360721b604482015290519081900360640190fd5b505b87866001600160a01b0316826001600160a01b03167f56735ccb9dc7d2222ce4177fc3aea44c33882e2a2c73e0fb1c6b93c9c13a04d48888888860008b8b905011604051808060200180602001841515151581526020018381038352888882818152602001925080828437600083820152601f01601f191690910184810383528681526020019050868680828437600083820152604051601f909101601f1916909201829003995090975050505050505050a45050505050505050565b6060600080600060606118fe87878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611f7392505050565b919550925090506119176001600160a01b038d16611e63565b61195a576040805162461bcd60e51b815260206004820152600f60248201526e130c57d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b60006119658d611ee2565b90506119728d868d612139565b6119828d868e8e8e8e8989612154565b935050505080896001600160a01b0316836001600160a01b03167f9c003a9d1163eca79021710dcd5d9f657218bf2bd67aaa13389009a6047894a88d8c8a8a60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a46040805160208082019390935281518082039093018352810190529998505050505050505050565b6000611a5133611e63565b611a95576040805162461bcd60e51b815260206004820152601060248201526f135554d517d09157d0d3d395149050d560821b604482015290519081900360640190fd5b336000908152600460205260409081902080546001600160a01b0388166001600160a01b03199091161790558051600180825281830190925260609181602001602082028036833750506040805160018082528183019092529293506060929150602080830190803683370190505090503382600081518110611b1457fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508681600081518110611b4257fe5b60200260200101906001600160a01b031690816001600160a01b03168152505080600081518110611b6f57fe5b60200260200101516001600160a01b031682600081518110611b8d57fe5b60200260200101516001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a3606063d4f5532f60e01b8383604051602401808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015611c1d578181015183820152602001611c05565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015611c5c578181015183820152602001611c44565b50505050905001945050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050611cad336000878a8a86611e88565b98975050505050505050565b6001546001600160a01b031681565b600060606000611cd88686610c41565b9050611ce2612a2b565b6000828152600360209081526040918290208251808401845281546001600160a01b03168152600180830180548651600261010094831615949094026000190190911692909204601f8101869004860283018601909652858252919492938581019391929190830182828015611d995780601f10611d6e57610100808354040283529160200191611d99565b820191906000526020600020905b815481529060010190602001808311611d7c57829003601f168201915b5050509190925250508151919250506001600160a01b031660011415611df7576040805162461bcd60e51b815260206004820152600e60248201526d1053149150511657d1561255115160921b604482015290519081900360640190fd5b80516001600160a01b031615611e0e578051611e10565b855b602090910151909350915050935093915050565b611e2f848484612171565b600580546001600160a01b0319166001600160a01b0392909216919091179055505050565b6002546001600160a01b031681565b3b151590565b611e836001600160a01b038416838363ffffffff61217c16565b505050565b600254600080549091611eb3916001600160a01b0391821691610100909104168989898989896121ce565b979650505050505050565b6000611521826121e0565b60005461010090046001600160a01b0390811691161490565b6001600160a01b039081166000908152600460205260409020541690565b6000611f0c8585610c41565b6040805180820182526001600160a01b038681168252602080830187815260008681526003835294909420835181546001600160a01b03191693169290921782559251805194955091939092611f69926001850192910190612a43565b5050505050505050565b6000806060611f8133612203565b1561205c57838060200190516040811015611f9b57600080fd5b815160208301805160405192949293830192919084600160201b821115611fc157600080fd5b908301906020820185811115611fd657600080fd5b8251600160201b811182820188101715611fef57600080fd5b82525081516020918201929091019080838360005b8381101561201c578181015183820152602001612004565b50505050905090810190601f1680156120495780820380516001836020036101000a031916815260200191505b5060405250929550909250612062915050565b50339150825b80806020019051604081101561207757600080fd5b815160208301805160405192949293830192919084600160201b82111561209d57600080fd5b9083019060208201858111156120b257600080fd5b8251600160201b8111828201881017156120cb57600080fd5b82525081516020918201929091019080838360005b838110156120f85781810151838201526020016120e0565b50505050905090810190601f1680156121255780820380516001836020036101000a031916815260200191505b506040525095979296509094509092505050565b611e836001600160a01b03841683308463ffffffff61230f16565b6000610eda88600085888861216c8f8f8f8f8c61132e565b611e88565b611e8383838361236f565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611e8390849061242c565b6000610eda89898989898989896124dd565b6000805460ff16156121fc576121f5826125b2565b9050611524565b5033611524565b60408051600481526024810182526020810180516001600160e01b03166363851c3160e01b1781529151815160009384936060936001600160a01b03881693919290918291908083835b6020831061226c5780518252601f19909201916020918201910161224d565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146122cc576040519150601f19603f3d011682016040523d82523d6000602084013e6122d1565b606091505b50915091506122e8846001600160a01b0316611e63565b6122f757600092505050611524565b8161230757600092505050611524565b519392505050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261236990859061242c565b50505050565b612379838361274a565b6001600160a01b0382166123c1576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b6001600160a01b038116612408576040805162461bcd60e51b81526020600482015260096024820152680848288be929c849eb60bb1b604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b03929092169190911790555050565b6060612481826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166127589092919063ffffffff16565b805190915015611e83578080602001905160208110156124a057600080fd5b5051611e835760405162461bcd60e51b815260040180806020018281038252602a815260200180612b2d602a913960400191505060405180910390fd5b6000806060896001600160a01b031688856040518082805190602001908083835b6020831061251d5780518252601f1990920191602091820191016124fe565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461257f576040519150601f19603f3d011682016040523d82523d6000602084013e612584565b606091505b509150915081600081146125975761259f565b815160208301fd5b506105399b9a5050505050505050505050565b600080826001600160a01b031663e78cea926040518163ffffffff1660e01b815260040160206040518083038186803b1580156125ee57600080fd5b505afa158015612602573d6000803e3d6000fd5b505050506040513d602081101561261857600080fd5b50516040805163ab5d894360e01b815290516001600160a01b039092169163ab5d894391600480820192602092909190829003018186803b15801561265c57600080fd5b505afa158015612670573d6000803e3d6000fd5b505050506040513d602081101561268657600080fd5b505160408051634032458160e11b815290519192506000916001600160a01b038416916380648b02916004808301926020929190829003018186803b1580156126ce57600080fd5b505afa1580156126e2573d6000803e3d6000fd5b505050506040513d60208110156126f857600080fd5b505190506001600160a01b038116612743576040805162461bcd60e51b81526020600482015260096024820152682727afa9a2a72222a960b91b604482015290519081900360640190fd5b9392505050565b612754828261276f565b5050565b6060612767848460008561283b565b949350505050565b6001600160a01b0382166127c0576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b60005461010090046001600160a01b031615612812576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b50600080546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b60608247101561287c5760405162461bcd60e51b8152600401808060200182810382526026815260200180612adc6026913960400191505060405180910390fd5b61288585611e63565b6128d6576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106129155780518252601f1990920191602091820191016128f6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612977576040519150601f19603f3d011682016040523d82523d6000602084013e61297c565b606091505b5091509150611eb382828660608315612996575081612743565b8251156129a65782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156129f05781810151838201526020016129d8565b50505050905090810190601f168015612a1d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60408051808201909152600081526060602082015290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612a8457805160ff1916838001178555612ab1565b82800160010185558215612ab1579182015b82811115612ab1578251825591602001919060010190612a96565b50612abd929150612ac1565b5090565b610c7a91905b80821115612abd5760008155600101612ac756fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220ae912c0eb09647ee837da356c230bde1c9501d70d970f725fe9b19ba1014378564736f6c634300060b0033'
