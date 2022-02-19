export const CHAIN_ID = process.env.REACT_APP_CHAIN_ID
export const NETWORK_URL = process.env.REACT_APP_NETWORK_URL
export const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string
// export const BSC_CHAIN_ID = '56'

export const ETH_CHAIN_ID = process.env.REACT_APP_ETH_CHAIN_ID as string
export const BSC_CHAIN_ID = process.env.REACT_APP_BSC_CHAIN_ID as string
export const POLYGON_CHAIN_ID = process.env.REACT_APP_POLYGON_CHAIN_ID as string

export enum ChainId {
  GOERLI = 5,
  BSC_TESTNET = 97,
  BSC_MAINNET = 56,
}

export type chainId = Extract<ChainId, ChainId.GOERLI | ChainId.BSC_MAINNET | ChainId.BSC_TESTNET>

export const ChainIdNameMapping: { [key in ChainId]: string } = {
  [ChainId.GOERLI]: 'Goerli',
  [ChainId.BSC_MAINNET]: 'BSC Mainnet',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
}

export const NETWORK_NAME_MAPPINGS: any = {
  '1': 'Mainnet',
  '3': 'Ropsten',
  '5': 'Goerli',
  '42': 'Kovan',
  '4': 'Rinkeby',
  '56': 'BSC Mainnet',
  '97': 'BSC Testnet',
  '137': 'Polygon Mainnet',
  '80001': 'Mumbai Testnet',
}

export interface NetworkInfo {
  name: string
  id?: string | undefined
  currency?: string
  [k: string]: any
}

export const APP_NETWORKS_SUPPORT: { [key: number]: NetworkInfo } = {
  [BSC_CHAIN_ID]: {
    name: 'BSC Mainnet',
    id: BSC_CHAIN_ID,
    currency: 'BNB',
    networkName: NETWORK_NAME_MAPPINGS[BSC_CHAIN_ID],
    details: {
      chainId: `0x${(+BSC_CHAIN_ID).toString(16)}`,
      chainName: NETWORK_NAME_MAPPINGS[BSC_CHAIN_ID],
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: [process.env.REACT_APP_BSC_RPC_URL],
      blockExplorerUrls: [process.env.REACT_APP_BSCSCAN_BASE_URL],
    },
  },
  [ETH_CHAIN_ID]: {
    name: 'BSC Mainnet',
    id: BSC_CHAIN_ID,
    currency: 'ETH',
    networkName: NETWORK_NAME_MAPPINGS[ETH_CHAIN_ID],
    details: {
      chainId: `0x${(+ETH_CHAIN_ID).toString(16)}`,
      chainName: NETWORK_NAME_MAPPINGS[ETH_CHAIN_ID],
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [process.env.REACT_APP_BSC_RPC_URL],
      blockExplorerUrls: [process.env.REACT_APP_BSCSCAN_BASE_URL],
    },
  },
}

export enum APP_NETWORKS_NAME {
  METAMASK = 'METAMASK',
  BSC = 'BSC',
  POLYGON = 'POLYGON',
}

export type appNetworkType = Extract<
  APP_NETWORKS_NAME,
  APP_NETWORKS_NAME.METAMASK | APP_NETWORKS_NAME.BSC | APP_NETWORKS_NAME.POLYGON
>

export const APP_NETWORKS: { [key in APP_NETWORKS_NAME]: NetworkInfo } = {
  [APP_NETWORKS_NAME.METAMASK]: {
    name: 'Ethereum',
    id: ETH_CHAIN_ID,
    icon: '/images/eth.svg',
    disableIcon: '/images/eth-disabled.png',
  },
  [APP_NETWORKS_NAME.BSC]: {
    name: 'BSC',
    id: BSC_CHAIN_ID,
    icon: '/images/bsc.svg',
    disableIcon: '/images/binance-disabled.png',
  },
  [APP_NETWORKS_NAME.POLYGON]: {
    name: 'Polygon',
    id: POLYGON_CHAIN_ID,
    icon: '/images/matic.svg',
    disableIcon: '/images/polygon-matic-disabled.svg',
  },
}
