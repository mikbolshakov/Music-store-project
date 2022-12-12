/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MusicStore, MusicStoreInterface } from "../MusicStore";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "uid",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "rawUid",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "customer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AlbumBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "albumUid",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "customer",
        type: "address",
      },
    ],
    name: "OrderDelivered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "uid",
        type: "string",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "addAlbum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "albums",
    outputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "uid",
        type: "string",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allAlbums",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "uid",
            type: "string",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
        ],
        internalType: "struct MusicStore.Album[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentIndex",
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
    name: "currentOrderId",
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
        name: "_index",
        type: "uint256",
      },
    ],
    name: "delivered",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "orders",
    outputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "albumUid",
        type: "string",
      },
      {
        internalType: "address",
        name: "customer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "orderAt",
        type: "uint256",
      },
      {
        internalType: "enum MusicStore.OrderStatus",
        name: "status",
        type: "uint8",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611b02806100616000396000f3fe60806040526004361061008a5760003560e01c8063a85c38ef11610059578063a85c38ef14610179578063c557f979146101ba578063d96a094a146101e3578063ea5df059146101ff578063ec34297a14610240576100ca565b806326987b60146100cf5780634b5e4108146100fa5780638da5cb5b14610123578063925931fc1461014e576100ca565b366100ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100c190610e6b565b60405180910390fd5b600080fd5b3480156100db57600080fd5b506100e461026b565b6040516100f19190610ea4565b60405180910390f35b34801561010657600080fd5b50610121600480360381019061011c9190610ef5565b610271565b005b34801561012f57600080fd5b5061013861044f565b6040516101459190610f63565b60405180910390f35b34801561015a57600080fd5b50610163610475565b6040516101709190610ea4565b60405180910390f35b34801561018557600080fd5b506101a0600480360381019061019b9190610ef5565b61047b565b6040516101b1959493929190611074565b60405180910390f35b3480156101c657600080fd5b506101e160048036038101906101dc9190611133565b610576565b005b6101fd60048036038101906101f89190610ef5565b61074e565b005b34801561020b57600080fd5b5061022660048036038101906102219190610ef5565b610a4d565b6040516102379594939291906111da565b60405180910390f35b34801561024c57600080fd5b50610255610ba3565b60405161026291906113d3565b60405180910390f35b60035481565b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610301576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f890611441565b60405180910390fd5b60006001828154811061031757610316611461565b5b9060005260206000209060050201905060018081111561033a57610339610ffd565b5b8160040160009054906101000a900460ff16600181111561035e5761035d610ffd565b5b0361039e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610395906114dc565b60405180910390fd5b60018160040160006101000a81548160ff021916908360018111156103c6576103c5610ffd565b5b02179055508060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168160010160405161041791906115ff565b60405180910390207f0428dc7031c0c35b6cfc8c2573c1f2eecf691dcffacf2a33fd549f311ae5f29d60405160405180910390a35050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b6001818154811061048b57600080fd5b90600052602060002090600502016000915090508060000154908060010180546104b49061152b565b80601f01602080910402602001604051908101604052809291908181526020018280546104e09061152b565b801561052d5780601f106105025761010080835404028352916020019161052d565b820191906000526020600020905b81548152906001019060200180831161051057829003601f168201915b5050505050908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040160009054906101000a900460ff16905085565b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610606576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fd90611441565b60405180910390fd5b60006040518060a00160405280600354815260200188888080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200186868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200184815260200183815250908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000155602082015181600101908161070191906117dc565b50604082015181600201908161071791906117dc565b506060820151816003015560808201518160040155505060036000815480929190610741906118dd565b9190505550505050505050565b600080828154811061076357610762611461565b5b90600052602060002090600502019050806003015434146107b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b090611971565b60405180910390fd5b6000816004015411610800576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f7906119dd565b60405180910390fd5b806004016000815480929190610815906119fd565b919050555060016040518060a00160405280600454815260200183600101805461083e9061152b565b80601f016020809104026020016040519081016040528092919081815260200182805461086a9061152b565b80156108b75780601f1061088c576101008083540402835291602001916108b7565b820191906000526020600020905b81548152906001019060200180831161089a57829003601f168201915b505050505081526020013373ffffffffffffffffffffffffffffffffffffffff168152602001428152602001600060018111156108f7576108f6610ffd565b5b815250908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000155602082015181600101908161094291906117dc565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff021916908360018111156109bf576109be610ffd565b5b02179055505050600460008154809291906109d9906118dd565b9190505550423373ffffffffffffffffffffffffffffffffffffffff1682600101604051610a0791906115ff565b60405180910390207fd8d6445a893c1a3a59ebb7d6d6d1c4c02b694b556710a739e2b8f4d0fcd7403d84600101604051610a419190611aaa565b60405180910390a45050565b60008181548110610a5d57600080fd5b9060005260206000209060050201600091509050806000015490806001018054610a869061152b565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab29061152b565b8015610aff5780601f10610ad457610100808354040283529160200191610aff565b820191906000526020600020905b815481529060010190602001808311610ae257829003601f168201915b505050505090806002018054610b149061152b565b80601f0160208091040260200160405190810160405280929190818152602001828054610b409061152b565b8015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b820191906000526020600020905b815481529060010190602001808311610b7057829003601f168201915b5050505050908060030154908060040154905085565b60606000808054905067ffffffffffffffff811115610bc557610bc4611616565b5b604051908082528060200260200182016040528015610bfe57816020015b610beb610db9565b815260200190600190039081610be35790505b50905060005b600080549050811015610db15760008181548110610c2557610c24611461565b5b90600052602060002090600502016040518060a001604052908160008201548152602001600182018054610c589061152b565b80601f0160208091040260200160405190810160405280929190818152602001828054610c849061152b565b8015610cd15780601f10610ca657610100808354040283529160200191610cd1565b820191906000526020600020905b815481529060010190602001808311610cb457829003601f168201915b50505050508152602001600282018054610cea9061152b565b80601f0160208091040260200160405190810160405280929190818152602001828054610d169061152b565b8015610d635780601f10610d3857610100808354040283529160200191610d63565b820191906000526020600020905b815481529060010190602001808311610d4657829003601f168201915b5050505050815260200160038201548152602001600482015481525050828281518110610d9357610d92611461565b5b60200260200101819052508080610da9906118dd565b915050610c04565b508091505090565b6040518060a0016040528060008152602001606081526020016060815260200160008152602001600081525090565b600082825260208201905092915050565b7f506c656173652075736520746865206275792066756e6374696f6e20746f207060008201527f7572636861736520616c62756d73210000000000000000000000000000000000602082015250565b6000610e55602f83610de8565b9150610e6082610df9565b604082019050919050565b60006020820190508181036000830152610e8481610e48565b9050919050565b6000819050919050565b610e9e81610e8b565b82525050565b6000602082019050610eb96000830184610e95565b92915050565b600080fd5b600080fd5b610ed281610e8b565b8114610edd57600080fd5b50565b600081359050610eef81610ec9565b92915050565b600060208284031215610f0b57610f0a610ebf565b5b6000610f1984828501610ee0565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f4d82610f22565b9050919050565b610f5d81610f42565b82525050565b6000602082019050610f786000830184610f54565b92915050565b600081519050919050565b60005b83811015610fa7578082015181840152602081019050610f8c565b60008484015250505050565b6000601f19601f8301169050919050565b6000610fcf82610f7e565b610fd98185610de8565b9350610fe9818560208601610f89565b610ff281610fb3565b840191505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6002811061103d5761103c610ffd565b5b50565b600081905061104e8261102c565b919050565b600061105e82611040565b9050919050565b61106e81611053565b82525050565b600060a0820190506110896000830188610e95565b818103602083015261109b8187610fc4565b90506110aa6040830186610f54565b6110b76060830185610e95565b6110c46080830184611065565b9695505050505050565b600080fd5b600080fd5b600080fd5b60008083601f8401126110f3576110f26110ce565b5b8235905067ffffffffffffffff8111156111105761110f6110d3565b5b60208301915083600182028301111561112c5761112b6110d8565b5b9250929050565b600080600080600080608087890312156111505761114f610ebf565b5b600087013567ffffffffffffffff81111561116e5761116d610ec4565b5b61117a89828a016110dd565b9650965050602087013567ffffffffffffffff81111561119d5761119c610ec4565b5b6111a989828a016110dd565b945094505060406111bc89828a01610ee0565b92505060606111cd89828a01610ee0565b9150509295509295509295565b600060a0820190506111ef6000830188610e95565b81810360208301526112018187610fc4565b905081810360408301526112158186610fc4565b90506112246060830185610e95565b6112316080830184610e95565b9695505050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61127081610e8b565b82525050565b600082825260208201905092915050565b600061129282610f7e565b61129c8185611276565b93506112ac818560208601610f89565b6112b581610fb3565b840191505092915050565b600060a0830160008301516112d86000860182611267565b50602083015184820360208601526112f08282611287565b9150506040830151848203604086015261130a8282611287565b915050606083015161131f6060860182611267565b5060808301516113326080860182611267565b508091505092915050565b600061134983836112c0565b905092915050565b6000602082019050919050565b60006113698261123b565b6113738185611246565b93508360208202850161138585611257565b8060005b858110156113c157848403895281516113a2858261133d565b94506113ad83611351565b925060208a01995050600181019050611389565b50829750879550505050505092915050565b600060208201905081810360008301526113ed818461135e565b905092915050565b7f4e6f7420616e206f776e65722100000000000000000000000000000000000000600082015250565b600061142b600d83610de8565b9150611436826113f5565b602082019050919050565b6000602082019050818103600083015261145a8161141e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f696e76616c696420737461747573000000000000000000000000000000000000600082015250565b60006114c6600e83610de8565b91506114d182611490565b602082019050919050565b600060208201905081810360008301526114f5816114b9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061154357607f821691505b602082108103611556576115556114fc565b5b50919050565b600081905092915050565b60008190508160005260206000209050919050565b600081546115898161152b565b611593818661155c565b945060018216600081146115ae57600181146115c3576115f6565b60ff19831686528115158202860193506115f6565b6115cc85611567565b60005b838110156115ee578154818901526001820191506020810190506115cf565b838801955050505b50505092915050565b600061160b828461157c565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020601f8301049050919050565b600082821b905092915050565b6000600883026116927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611655565b61169c8683611655565b95508019841693508086168417925050509392505050565b6000819050919050565b60006116d96116d46116cf84610e8b565b6116b4565b610e8b565b9050919050565b6000819050919050565b6116f3836116be565b6117076116ff826116e0565b848454611662565b825550505050565b600090565b61171c61170f565b6117278184846116ea565b505050565b5b8181101561174b57611740600082611714565b60018101905061172d565b5050565b601f8211156117905761176181611567565b61176a84611645565b81016020851015611779578190505b61178d61178585611645565b83018261172c565b50505b505050565b600082821c905092915050565b60006117b360001984600802611795565b1980831691505092915050565b60006117cc83836117a2565b9150826002028217905092915050565b6117e582610f7e565b67ffffffffffffffff8111156117fe576117fd611616565b5b611808825461152b565b61181382828561174f565b600060209050601f8311600181146118465760008415611834578287015190505b61183e85826117c0565b8655506118a6565b601f19841661185486611567565b60005b8281101561187c57848901518255600182019150602085019450602081019050611857565b868310156118995784890151611895601f8916826117a2565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118e882610e8b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361191a576119196118ae565b5b600182019050919050565b7f696e76616c696420707269636500000000000000000000000000000000000000600082015250565b600061195b600d83610de8565b915061196682611925565b602082019050919050565b6000602082019050818103600083015261198a8161194e565b9050919050565b7f6f7574206f662073746f636b0000000000000000000000000000000000000000600082015250565b60006119c7600c83610de8565b91506119d282611991565b602082019050919050565b600060208201905081810360008301526119f6816119ba565b9050919050565b6000611a0882610e8b565b915060008203611a1b57611a1a6118ae565b5b600182039050919050565b60008154611a338161152b565b611a3d8186610de8565b94506001821660008114611a585760018114611a6e57611aa1565b60ff198316865281151560200286019350611aa1565b611a7785611567565b60005b83811015611a9957815481890152600182019150602081019050611a7a565b808801955050505b50505092915050565b60006020820190508181036000830152611ac48184611a26565b90509291505056fea2646970667358221220bf98d46a8cc15489031e7f0d70bf1e2f7df2205f711bd40261eb98d4b1be3bcd64736f6c63430008110033";

type MusicStoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MusicStoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MusicStore__factory extends ContractFactory {
  constructor(...args: MusicStoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MusicStore> {
    return super.deploy(overrides || {}) as Promise<MusicStore>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MusicStore {
    return super.attach(address) as MusicStore;
  }
  override connect(signer: Signer): MusicStore__factory {
    return super.connect(signer) as MusicStore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MusicStoreInterface {
    return new utils.Interface(_abi) as MusicStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MusicStore {
    return new Contract(address, _abi, signerOrProvider) as MusicStore;
  }
}
