/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  ValidatorWalletCreator,
  ValidatorWalletCreatorInterface,
} from '../ValidatorWalletCreator'

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'TemplateUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'walletAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'userAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'adminProxy',
        type: 'address',
      },
    ],
    name: 'WalletCreated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'createWallet',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
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
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_template',
        type: 'address',
      },
    ],
    name: 'setTemplate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'template',
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
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5060006100246001600160e01b036100bc16565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35060405161007a906100c0565b604051809103906000f080158015610096573d6000803e3d6000fd5b50600180546001600160a01b0319166001600160a01b03929092169190911790556100cd565b3390565b610e2280611d4083390190565b611c64806100dc6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806311ebbf24146100675780636f2ddd931461008b578063715018a61461009357806389c716d11461009d5780638da5cb5b146100c3578063f2fde38b146100cb575b600080fd5b61006f6100f1565b604080516001600160a01b039092168252519081900360200190f35b61006f6102e3565b61009b6102f2565b005b61009b600480360360208110156100b357600080fd5b50356001600160a01b031661039f565b61006f610449565b61009b600480360360208110156100e157600080fd5b50356001600160a01b0316610458565b60008060405161010090610560565b604051809103906000f08015801561011c573d6000803e3d6000fd5b506001546040519192506000916001600160a01b039091169083906101409061056e565b6001600160a01b03928316815291166020820152606060408083018290526000918301829052519182900360a0019190f080158015610183573d6000803e3d6000fd5b506040805163f2fde38b60e01b815233600482015290519192506001600160a01b0384169163f2fde38b9160248082019260009290919082900301818387803b1580156101cf57600080fd5b505af11580156101e3573d6000803e3d6000fd5b50505050806001600160a01b0316638129fc1c6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561022257600080fd5b505af1158015610236573d6000803e3d6000fd5b50506040805163f2fde38b60e01b815233600482015290516001600160a01b038516935063f2fde38b9250602480830192600092919082900301818387803b15801561028157600080fd5b505af1158015610295573d6000803e3d6000fd5b5050604080516001600160a01b038681168252915133945091851692507fca0b7dde26052d34217ef1a0cee48085a07ca32da0a918609937a307d496bbf5919081900360200190a391505090565b6001546001600160a01b031681565b6102fa61055c565b6001600160a01b031661030b610449565b6001600160a01b031614610355576040805162461bcd60e51b8152602060048201819052602482015260008051602062001c0f833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6103a761055c565b6001600160a01b03166103b8610449565b6001600160a01b031614610402576040805162461bcd60e51b8152602060048201819052602482015260008051602062001c0f833981519152604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0383161790556040517f6eb26f176dd9180849dd4874d3530de0e5c1f62a6e6798d34e3abfc11f1db2cc90600090a150565b6000546001600160a01b031690565b61046061055c565b6001600160a01b0316610471610449565b6001600160a01b0316146104bb576040805162461bcd60e51b8152602060048201819052602482015260008051602062001c0f833981519152604482015290519081900360640190fd5b6001600160a01b0381166105015760405162461bcd60e51b815260040180806020018281038252602681526020018062001be96026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b61090c806200057d83390190565b610d608062000e898339019056fe608060405234801561001057600080fd5b5060006100246001600160e01b0361007316565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350610077565b3390565b610886806100866000396000f3fe60806040526004361061006b5760003560e01c8063204e1c7a14610070578063715018a6146100bf5780637eff275e146100d65780638da5cb5b146101115780639623609d1461012657806399a88ec4146101e5578063f2fde38b14610220578063f3b7dead14610253575b600080fd5b34801561007c57600080fd5b506100a36004803603602081101561009357600080fd5b50356001600160a01b0316610286565b604080516001600160a01b039092168252519081900360200190f35b3480156100cb57600080fd5b506100d4610318565b005b3480156100e257600080fd5b506100d4600480360360408110156100f957600080fd5b506001600160a01b03813581169160200135166103c4565b34801561011d57600080fd5b506100a361049a565b6100d46004803603606081101561013c57600080fd5b6001600160a01b03823581169260208101359091169181019060608101604082013564010000000081111561017057600080fd5b82018360208201111561018257600080fd5b803590602001918460018302840111640100000000831117156101a457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506104a9945050505050565b3480156101f157600080fd5b506100d46004803603604081101561020857600080fd5b506001600160a01b03813581169160200135166105eb565b34801561022c57600080fd5b506100d46004803603602081101561024357600080fd5b50356001600160a01b03166106a5565b34801561025f57600080fd5b506100a36004803603602081101561027657600080fd5b50356001600160a01b03166107a7565b6000806060836001600160a01b03166040518080635c60da1b60e01b8152506004019050600060405180830381855afa9150503d80600081146102e5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ea565b606091505b5091509150816102f957600080fd5b80806020019051602081101561030e57600080fd5b5051949350505050565b610320610806565b6001600160a01b031661033161049a565b6001600160a01b03161461037a576040805162461bcd60e51b81526020600482018190526024820152600080516020610831833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6103cc610806565b6001600160a01b03166103dd61049a565b6001600160a01b031614610426576040805162461bcd60e51b81526020600482018190526024820152600080516020610831833981519152604482015290519081900360640190fd5b816001600160a01b0316638f283970826040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b03168152602001915050600060405180830381600087803b15801561047e57600080fd5b505af1158015610492573d6000803e3d6000fd5b505050505050565b6000546001600160a01b031690565b6104b1610806565b6001600160a01b03166104c261049a565b6001600160a01b03161461050b576040805162461bcd60e51b81526020600482018190526024820152600080516020610831833981519152604482015290519081900360640190fd5b826001600160a01b0316634f1ef2863484846040518463ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610581578181015183820152602001610569565b50505050905090810190601f1680156105ae5780820380516001836020036101000a031916815260200191505b5093505050506000604051808303818588803b1580156105cd57600080fd5b505af11580156105e1573d6000803e3d6000fd5b5050505050505050565b6105f3610806565b6001600160a01b031661060461049a565b6001600160a01b03161461064d576040805162461bcd60e51b81526020600482018190526024820152600080516020610831833981519152604482015290519081900360640190fd5b816001600160a01b0316633659cfe6826040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b03168152602001915050600060405180830381600087803b15801561047e57600080fd5b6106ad610806565b6001600160a01b03166106be61049a565b6001600160a01b031614610707576040805162461bcd60e51b81526020600482018190526024820152600080516020610831833981519152604482015290519081900360640190fd5b6001600160a01b03811661074c5760405162461bcd60e51b815260040180806020018281038252602681526020018061080b6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000806060836001600160a01b031660405180806303e1469160e61b8152506004019050600060405180830381855afa9150503d80600081146102e5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ea565b339056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a264697066735822122005019646333ea388b0c67bda202f0b0f9e694623274a3b0b0cd706bdc2821b5464736f6c634300060b0033608060405260405162000d6038038062000d60833981810160405260608110156200002957600080fd5b815160208301516040808501805191519395929483019291846401000000008211156200005557600080fd5b9083019060208201858111156200006b57600080fd5b82516401000000008111828201881017156200008657600080fd5b82525081516020918201929091019080838360005b83811015620000b55781810151838201526020016200009b565b50505050905090810190601f168015620000e35780820380516001836020036101000a031916815260200191505b5060408181527f656970313936372e70726f78792e696d706c656d656e746174696f6e0000000082525190819003601c01902086935084925060008051602062000cbd8339815191526000199091011490506200013c57fe5b62000150826001600160e01b03620001e016565b80511562000171576200016f82826200024660201b620003841760201c565b505b5050604080517f656970313936372e70726f78792e61646d696e000000000000000000000000008152905190819003601301902060008051602062000c9d83398151915260001990910114620001c357fe5b620001d7826001600160e01b036200027e16565b50505062000461565b620001f6816200029160201b620003b01760201c565b620002335760405162461bcd60e51b815260040180806020018281038252603681526020018062000d046036913960400191505060405180910390fd5b60008051602062000cbd83398151915255565b606062000277838360405180606001604052806027815260200162000cdd602791396001600160e01b036200029716565b9392505050565b60008051602062000c9d83398151915255565b3b151590565b6060620002ad846001600160e01b036200029116565b620002ea5760405162461bcd60e51b815260040180806020018281038252602681526020018062000d3a6026913960400191505060405180910390fd5b60006060856001600160a01b0316856040518082805190602001908083835b602083106200032a5780518252601f19909201916020918201910162000309565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146200038c576040519150601f19603f3d011682016040523d82523d6000602084013e62000391565b606091505b509092509050620003ad8282866001600160e01b03620003b716565b9695505050505050565b60608315620003c857508162000277565b825115620003d95782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620004255781810151838201526020016200040b565b50505050905090810190601f168015620004535780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b61082c80620004716000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100655780634f1ef286146100985780635c60da1b146101185780638f28397014610149578063f851a4401461017c5761005d565b3661005d5761005b610191565b005b61005b610191565b34801561007157600080fd5b5061005b6004803603602081101561008857600080fd5b50356001600160a01b03166101ab565b61005b600480360360408110156100ae57600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100d957600080fd5b8201836020820111156100eb57600080fd5b8035906020019184600183028401116401000000008311171561010d57600080fd5b5090925090506101e5565b34801561012457600080fd5b5061012d610262565b604080516001600160a01b039092168252519081900360200190f35b34801561015557600080fd5b5061005b6004803603602081101561016c57600080fd5b50356001600160a01b031661029f565b34801561018857600080fd5b5061012d610359565b6101996103b6565b6101a96101a4610416565b61043b565b565b6101b361045f565b6001600160a01b0316336001600160a01b031614156101da576101d581610484565b6101e2565b6101e2610191565b50565b6101ed61045f565b6001600160a01b0316336001600160a01b031614156102555761020f83610484565b61024f8383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061038492505050565b5061025d565b61025d610191565b505050565b600061026c61045f565b6001600160a01b0316336001600160a01b031614156102945761028d610416565b905061029c565b61029c610191565b90565b6102a761045f565b6001600160a01b0316336001600160a01b031614156101da576001600160a01b0381166103055760405162461bcd60e51b815260040180806020018281038252603a8152602001806106f8603a913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61032e61045f565b604080516001600160a01b03928316815291841660208301528051918290030190a16101d5816104c4565b600061036361045f565b6001600160a01b0316336001600160a01b031614156102945761028d61045f565b60606103a98383604051806060016040528060278152602001610732602791396104e8565b9392505050565b3b151590565b6103be61045f565b6001600160a01b0316336001600160a01b0316141561040e5760405162461bcd60e51b81526004018080602001828103825260428152602001806107b56042913960600191505060405180910390fd5b6101a96101a9565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e80801561045a573d6000f35b3d6000fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b61048d816105eb565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b60606104f3846103b0565b61052e5760405162461bcd60e51b815260040180806020018281038252602681526020018061078f6026913960400191505060405180910390fd5b60006060856001600160a01b0316856040518082805190602001908083835b6020831061056c5780518252601f19909201916020918201910161054d565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146105cc576040519150601f19603f3d011682016040523d82523d6000602084013e6105d1565b606091505b50915091506105e1828286610653565b9695505050505050565b6105f4816103b0565b61062f5760405162461bcd60e51b81526004018080602001828103825260368152602001806107596036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b606083156106625750816103a9565b8251156106725782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156106bc5781810151838201526020016106a4565b50505050905090810190601f1680156106e95780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe5472616e73706172656e745570677261646561626c6550726f78793a206e65772061646d696e20697320746865207a65726f2061646472657373416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c65645570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e74726163745472616e73706172656e745570677261646561626c6550726f78793a2061646d696e2063616e6e6f742066616c6c6261636b20746f2070726f787920746172676574a2646970667358221220175110956fa0a7ff1615f55e1422acff6edcec0099d7ea0bae101f4f6228c8bd64736f6c634300060b0033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c65645570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e74726163744f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220d3f714d9feb233da916d5dbdbe6b78cc8dc32c4556252caafa6d0add1aaa604164736f6c634300060b0033608060405234801561001057600080fd5b506065805460ff19166001179055610df58061002d6000396000f3fe6080604052600436106100765760003560e01c80636f791d291461007b578063715018a6146100a657806372f45866146100bd5780638129fc1c146100d057806381aac2d9146100e55780638da5cb5b14610105578063944f449514610127578063ce1d571f14610147578063f2fde38b1461015a575b600080fd5b34801561008757600080fd5b5061009061017a565b60405161009d9190610c29565b60405180910390f35b3480156100b257600080fd5b506100bb610183565b005b6100bb6100cb366004610a57565b610203565b3480156100dc57600080fd5b506100bb61039a565b3480156100f157600080fd5b506100bb610100366004610aed565b610425565b34801561011157600080fd5b5061011a61053e565b60405161009d9190610c15565b34801561013357600080fd5b506100bb610142366004610bb2565b61054d565b6100bb610155366004610b2d565b610672565b34801561016657600080fd5b506100bb610175366004610a34565b61075a565b60655460ff1690565b61018b610809565b6001600160a01b031661019c61053e565b6001600160a01b0316146101cb5760405162461bcd60e51b81526004016101c290610cf1565b60405180910390fd5b6033546040516000916001600160a01b031690600080516020610da0833981519152908390a3603380546001600160a01b0319169055565b61020b610809565b6001600160a01b031661021c61053e565b6001600160a01b0316146102425760405162461bcd60e51b81526004016101c290610cf1565b8460005b8181101561039057600088888381811061025c57fe5b905060200281019061026e9190610d43565b905011156102c4576102a886868381811061028557fe5b905060200201602081019061029a9190610a34565b6001600160a01b031661080d565b6102c45760405162461bcd60e51b81526004016101c290610c34565b60008686838181106102d257fe5b90506020020160208101906102e79190610a34565b6001600160a01b03168585848181106102fc57fe5b905060200201358a8a8581811061030f57fe5b90506020028101906103219190610d43565b60405161032f929190610c05565b60006040518083038185875af1925050503d806000811461036c576040519150601f19603f3d011682016040523d82523d6000602084013e610371565b606091505b5050905080610387576040513d806000833e8082fd5b50600101610246565b5050505050505050565b600054610100900460ff16806103b357506103b3610813565b806103c1575060005460ff16155b6103dd5760405162461bcd60e51b81526004016101c290610ca3565b600054610100900460ff16158015610408576000805460ff1961ff0019909116610100171660011790555b610410610824565b8015610422576000805461ff00191690555b50565b61042d610809565b6001600160a01b031661043e61053e565b6001600160a01b0316146104645760405162461bcd60e51b81526004016101c290610cf1565b8060005b818110156105385783838281811061047c57fe5b90506020020160208101906104919190610a34565b6001600160a01b03166370dea79a6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156104cb57600080fd5b505af19250505080156104dc575060015b610530573d80801561050a576040519150601f19603f3d011682016040523d82523d6000602084013e61050f565b606091505b50805161052e5760405162461bcd60e51b81526004016101c290610d26565b505b600101610468565b50505050565b6033546001600160a01b031690565b610555610809565b6001600160a01b031661056661053e565b6001600160a01b03161461058c5760405162461bcd60e51b81526004016101c290610cf1565b8060005b8181101561066b57846001600160a01b0316637427be518585848181106105b357fe5b90506020020160208101906105c89190610a34565b6040518263ffffffff1660e01b81526004016105e49190610c15565b600060405180830381600087803b1580156105fe57600080fd5b505af192505050801561060f575060015b610663573d80801561063d576040519150601f19603f3d011682016040523d82523d6000602084013e610642565b606091505b5080516106615760405162461bcd60e51b81526004016101c290610d26565b505b600101610590565b5050505050565b61067a610809565b6001600160a01b031661068b61053e565b6001600160a01b0316146106b15760405162461bcd60e51b81526004016101c290610cf1565b82156106e5576106c9826001600160a01b031661080d565b6106e55760405162461bcd60e51b81526004016101c290610c34565b6000826001600160a01b0316828686604051610702929190610c05565b60006040518083038185875af1925050503d806000811461073f576040519150601f19603f3d011682016040523d82523d6000602084013e610744565b606091505b505090508061066b576040513d806000833e8082fd5b610762610809565b6001600160a01b031661077361053e565b6001600160a01b0316146107995760405162461bcd60e51b81526004016101c290610cf1565b6001600160a01b0381166107bf5760405162461bcd60e51b81526004016101c290610c5d565b6033546040516001600160a01b03808416921690600080516020610da083398151915290600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b3b151590565b600061081e3061080d565b15905090565b600054610100900460ff168061083d575061083d610813565b8061084b575060005460ff16155b6108675760405162461bcd60e51b81526004016101c290610ca3565b600054610100900460ff16158015610892576000805460ff1961ff0019909116610100171660011790555b61089a6108a2565b610410610923565b600054610100900460ff16806108bb57506108bb610813565b806108c9575060005460ff16155b6108e55760405162461bcd60e51b81526004016101c290610ca3565b600054610100900460ff16158015610410576000805460ff1961ff0019909116610100171660011790558015610422576000805461ff001916905550565b600054610100900460ff168061093c575061093c610813565b8061094a575060005460ff16155b6109665760405162461bcd60e51b81526004016101c290610ca3565b600054610100900460ff16158015610991576000805460ff1961ff0019909116610100171660011790555b600061099b610809565b603380546001600160a01b0319166001600160a01b03831690811790915560405191925090600090600080516020610da0833981519152908290a3508015610422576000805461ff001916905550565b60008083601f8401126109fc578182fd5b50813567ffffffffffffffff811115610a13578182fd5b6020830191508360208083028501011115610a2d57600080fd5b9250929050565b600060208284031215610a45578081fd5b8135610a5081610d8a565b9392505050565b60008060008060008060608789031215610a6f578182fd5b863567ffffffffffffffff80821115610a86578384fd5b610a928a838b016109eb565b90985096506020890135915080821115610aaa578384fd5b610ab68a838b016109eb565b90965094506040890135915080821115610ace578384fd5b50610adb89828a016109eb565b979a9699509497509295939492505050565b60008060208385031215610aff578182fd5b823567ffffffffffffffff811115610b15578283fd5b610b21858286016109eb565b90969095509350505050565b60008060008060608587031215610b42578384fd5b843567ffffffffffffffff80821115610b59578586fd5b81870188601f820112610b6a578687fd5b8035925081831115610b7a578687fd5b886020848301011115610b8b578687fd5b6020908101965091945050850135610ba281610d8a565b9396929550929360400135925050565b600080600060408486031215610bc6578283fd5b8335610bd181610d8a565b9250602084013567ffffffffffffffff811115610bec578283fd5b610bf8868287016109eb565b9497909650939450505050565b6000828483379101908152919050565b6001600160a01b0391909116815260200190565b901515815260200190565b6020808252600f908201526e2727afa1a7a222afa0aa2fa0a2222960891b604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526003908201526247415360e81b604082015260600190565b6000808335601e19843603018112610d59578283fd5b8084018035925067ffffffffffffffff831115610d74578384fd5b60200192505036819003821315610a2d57600080fd5b6001600160a01b038116811461042257600080fdfe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a2646970667358221220757deac6911ab4949ca231e684a8ece7962e00a8829e22cfe8cd9c6ace11e0bb64736f6c634300060b0033'

export class ValidatorWalletCreator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ValidatorWalletCreator> {
    return super.deploy(overrides || {}) as Promise<ValidatorWalletCreator>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): ValidatorWalletCreator {
    return super.attach(address) as ValidatorWalletCreator
  }
  connect(signer: Signer): ValidatorWalletCreator__factory {
    return super.connect(signer) as ValidatorWalletCreator__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ValidatorWalletCreatorInterface {
    return new utils.Interface(_abi) as ValidatorWalletCreatorInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ValidatorWalletCreator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ValidatorWalletCreator
  }
}
