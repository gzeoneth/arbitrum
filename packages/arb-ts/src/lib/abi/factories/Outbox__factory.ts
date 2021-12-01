/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { Outbox, OutboxInterface } from '../Outbox'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'destAddr',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'l2Sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'outboxEntryIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'merklePath',
        type: 'uint256',
      },
    ],
    name: 'OutBoxTransactionExecuted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'batchNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'outboxEntryIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'outputRoot',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'numInBatch',
        type: 'uint256',
      },
    ],
    name: 'OutboxEntryCreated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'OUTBOX_VERSION',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridge',
    outputs: [
      {
        internalType: 'contract IBridge',
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
        name: 'l2Sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'destAddr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'l2Block',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'l1Block',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'l2Timestamp',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'calldataForL1',
        type: 'bytes',
      },
    ],
    name: 'calculateItemHash',
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
        internalType: 'bytes32[]',
        name: 'proof',
        type: 'bytes32[]',
      },
      {
        internalType: 'uint256',
        name: 'marklePath',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: 'item',
        type: 'bytes32',
      },
    ],
    name: 'calculateMerkleRoot',
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
        internalType: 'uint256',
        name: 'batchNum',
        type: 'uint256',
      },
      {
        internalType: 'bytes32[]',
        name: 'proof',
        type: 'bytes32[]',
      },
      {
        internalType: 'uint256',
        name: 'merklePath',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'l2Sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'destAddr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'l2Block',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'l1Block',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'l2Timestamp',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'calldataForL1',
        type: 'bytes',
      },
    ],
    name: 'executeTransaction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_rollup',
        type: 'address',
      },
      {
        internalType: 'contract IBridge',
        name: '_bridge',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isMaster',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2ToL1BatchNum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2ToL1Block',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2ToL1EthBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2ToL1OutputId',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2ToL1Sender',
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
    name: 'l2ToL1Timestamp',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'outboxEntries',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'root',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'batchNum',
        type: 'uint256',
      },
    ],
    name: 'outboxEntryExists',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'sendsData',
        type: 'bytes',
      },
      {
        internalType: 'uint256[]',
        name: 'sendLengths',
        type: 'uint256[]',
      },
    ],
    name: 'processOutgoingMessages',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rollup',
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
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506000805460ff191660011790556113158061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638515bc6a116100925780638515bc6a146102ed5780639229bab6146102f55780639c5cfe0b146103125780639f0c04bf1461040e578063b0f30537146104ad578063c75184df146104b5578063cb23bcb5146104d9578063e78cea92146104e1578063f1fd3a39146104e9576100ea565b80627436d3146100ef5780630c726847146101a75780631198527114610267578063465477901461026f578063485cc955146102775780636f791d29146102a557806372f2a8c7146102c157806380648b02146102c9575b600080fd5b6101956004803603606081101561010557600080fd5b810190602081018135600160201b81111561011f57600080fd5b82018360208201111561013157600080fd5b803590602001918460208302840111600160201b8311171561015257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505082359350505060200135610506565b60408051918252519081900360200190f35b610265600480360360408110156101bd57600080fd5b810190602081018135600160201b8111156101d757600080fd5b8201836020820111156101e957600080fd5b803590602001918460018302840111600160201b8311171561020a57600080fd5b919390929091602081019035600160201b81111561022757600080fd5b82018360208201111561023957600080fd5b803590602001918460208302840111600160201b8311171561025a57600080fd5b509092509050610541565b005b61019561062d565b610195610643565b6102656004803603604081101561028d57600080fd5b506001600160a01b0381358116916020013516610652565b6102ad6106dc565b604080519115158252519081900360200190f35b6101956106e5565b6102d16106eb565b604080516001600160a01b039092168252519081900360200190f35b6101956106fa565b6101956004803603602081101561030b57600080fd5b5035610710565b610265600480360361014081101561032957600080fd5b81359190810190604081016020820135600160201b81111561034a57600080fd5b82018360208201111561035c57600080fd5b803590602001918460208302840111600160201b8311171561037d57600080fd5b919390928235926001600160a01b03602082013581169360408301359091169260608301359260808101359260a08201359260c08301359261010081019060e00135600160201b8111156103d057600080fd5b8201836020820111156103e257600080fd5b803590602001918460018302840111600160201b8311171561040357600080fd5b509092509050610722565b610195600480360360e081101561042457600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359160808201359160a08101359181019060e0810160c0820135600160201b81111561046f57600080fd5b82018360208201111561048157600080fd5b803590602001918460018302840111600160201b831117156104a257600080fd5b509092509050610afa565b610195610b9a565b6104bd610ba9565b604080516001600160801b039092168252519081900360200190f35b6102d1610bae565b6102d1610bc2565b6102ad600480360360208110156104ff57600080fd5b5035610bd1565b60006105398484846040516020018082815260200191505060405160208183030381529060405280519060200120610be5565b949350505050565b60005461010090046001600160a01b03163314610593576040805162461bcd60e51b815260206004820152600b60248201526a04f4e4c595f524f4c4c55560ac1b604482015290519081900360640190fd5b806000805b82811015610624576106028783888888868181106105b257fe5b905060200201358601926105c8939291906112b7565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610cb392505050565b84848281811061060e57fe5b6020029190910135929092019150600101610598565b50505050505050565b600454600160801b90046001600160801b031690565b6003546001600160801b031690565b60005461010090046001600160a01b0316156106a4576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b60008054610100600160a81b0319166101006001600160a01b0394851602179055600180546001600160a01b03191691909216179055565b60005460ff1690565b60055490565b6006546001600160a01b031690565b600354600160801b90046001600160801b031690565b60026020526000908152604090205481565b6000806107358a8a8a8a8a8a8a8a610afa565b90506107848e8e8e80806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050508d84610e1b565b91508d8a6001600160a01b03168a6001600160a01b03167f20af7f3bbfe38132b8900ae295cd9c8d1914be7052d061a511f3f728dab189648e6040518082815260200191505060405180910390a4506107db611270565b60036040518060c00160405290816000820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b03168152602001600282015481526020016003820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152505090506040518060c00160405280896001600160801b03168152602001886001600160801b03168152602001876001600160801b031681526020018f6001600160801b031681526020018381526020018b6001600160a01b0316815250600360008201518160000160006101000a8154816001600160801b0302191690836001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b031602179055506080820151816002015560a08201518160030160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550905050610a6a898686868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610ffa92505050565b80516003805460208401516001600160801b03199182166001600160801b03948516178416600160801b9185168202179092556040840151600480546060870151931691851691909117841691909316909102179055608081015160055560a00151600680546001600160a01b0319166001600160a01b0390921691909117905550505050505050505050505050565b600060038960601b60601c6001600160a01b03168960601b60601c6001600160a01b0316898989898989604051602001808a60ff1660ff1660f81b815260010189815260200188815260200187815260200186815260200185815260200184815260200183838082843780830192505050995050505050505050505060405160208183030381529060405280519060200120905098975050505050505050565b6004546001600160801b031690565b600181565b60005461010090046001600160a01b031681565b6001546001600160a01b031681565b600090815260026020526040902054151590565b8251600090610100811115610bf957600080fd5b8260005b82811015610ca95760028606610c5657868181518110610c1957fe5b6020026020010151826040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209150610c9b565b81878281518110610c6357fe5b602002602001015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012091505b600286049550600101610bfd565b5095945050505050565b805160009082908290610cc257fe5b01602001516001600160f81b0319161415610e18578051606114610d1a576040805162461bcd60e51b815260206004820152600a6024820152690848288be988a9c8ea8960b31b604482015290519081900360640190fd5b6000610d2d82600163ffffffff61121716565b9050610d3881610bd1565b15610d81576040805162461bcd60e51b8152602060048201526014602482015273454e5452595f414c52454144595f45584953545360601b604482015290519081900360640190fd5b6000610d9483602163ffffffff61121716565b90506000610da984604163ffffffff61121716565b9050610db36112a5565b5060408051602080820183528382526000868152600282528390208251905582518681529081018490528083018590529151909185917fe5ccc8d7080a4904b2f4e42d91e8f06b13fe6cb2181ad1fe14644e856b44c1319181900360600190a2505050505b50565b6000610100845110610e65576040805162461bcd60e51b815260206004820152600e60248201526d50524f4f465f544f4f5f4c4f4e4760901b604482015290519081900360640190fd5b835160020a8310610eb0576040805162461bcd60e51b815260206004820152601060248201526f1410551217d393d517d352539253505360821b604482015290519081900360640190fd5b6000610ebd858585610506565b6000878152600260205260409020805491925090610f14576040805162461bcd60e51b815260206004820152600f60248201526e4e4f5f4f5554424f585f454e54525960881b604482015290519081900360640190fd5b8551604080516020808201899052818301939093528151808203830181526060909101825280519083012060008181526001850190935291205460ff1615610f93576040805162461bcd60e51b815260206004820152600d60248201526c1053149150511657d4d4115395609a1b604482015290519081900360640190fd5b81548314610fd3576040805162461bcd60e51b815260206004820152600860248201526710905117d493d3d560c21b604482015290519081900360640190fd5b6000818152600192830160205260409020805460ff19169092179091559695505050505050565b600154604051639e5d4c4960e01b81526001600160a01b03858116600483019081526024830186905260606044840181815286516064860152865160009692959490921693639e5d4c49938a938a938a93909160849091019060208501908083838e5b8381101561107557818101518382015260200161105d565b50505050905090810190601f1680156110a25780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156110c357600080fd5b505af11580156110d7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604090815281101561110057600080fd5b815160208301805160405192949293830192919084600160201b82111561112657600080fd5b90830190602082018581111561113b57600080fd5b8251600160201b81118282018810171561115457600080fd5b82525081516020918201929091019080838360005b83811015611181578181015183820152602001611169565b50505050905090810190601f1680156111ae5780820380516001836020036101000a031916815260200191505b506040525050509150915081611210578051156111ce5780518082602001fd5b6040805162461bcd60e51b81526020600482015260126024820152711094925111d157d0d0531317d1905253115160721b604482015290519081900360640190fd5b5050505050565b60008160200183511015611267576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b50016020015190565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b60408051602081019091526000815290565b600080858511156112c6578182fd5b838611156112d2578182fd5b505082019391909203915056fea2646970667358221220ba97aaff46ebcb5fe1a87ba7cadc853d3da57979952a7388ac35bdb0c825c0fc64736f6c634300060b0033'

export class Outbox__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Outbox> {
    return super.deploy(overrides || {}) as Promise<Outbox>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): Outbox {
    return super.attach(address) as Outbox
  }
  connect(signer: Signer): Outbox__factory {
    return super.connect(signer) as Outbox__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): OutboxInterface {
    return new utils.Interface(_abi) as OutboxInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Outbox {
    return new Contract(address, _abi, signerOrProvider) as Outbox
  }
}
