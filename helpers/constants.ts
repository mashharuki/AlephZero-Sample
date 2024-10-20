import { Chain } from "viem";

// テストネットの設定
export const alephZeroTestnet: Chain = {
    id: 2039,
    name: "Aleph Zero Testnet",
    nativeCurrency: {
      name: "Test Aleph",
      symbol: "tAZERO", // テストネット用のシンボル
      decimals: 18, // Aleph Zeroのネイティブトークンの小数点桁数
    },
    blockExplorers: {
      default: {
        name: "Aleph Zero Testnet Explorer",
        url: "https://evm-explorer-testnet.alephzero.org", // テストネット用のブロックエクスプローラーURL
      },
    },
    rpcUrls: {
      default: {
        http: ["https://alephzero-sepolia.drpc.org"], // Aleph Zero TestnetのRPC URL
        webSocket: ["wss://rpc.testnet.alephzero.org/ws"], // WebSocket RPC URL
      },
    },
    testnet: true, // テストネットなのでtrue
    contracts: {
      ensRegistry: undefined, // Aleph ZeroはENSを使用していない場合、undefined
      ensUniversalResolver: undefined,
      multicall3: undefined, // 必要であれば、Multicallコントラクトのアドレスを指定
      universalSignatureVerifier: undefined,
    },
  };