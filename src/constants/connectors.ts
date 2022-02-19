import { BscConnector } from '@binance-chain/bsc-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { AbstractConnector } from '@web3-react/abstract-connector'
import { CHAIN_ID, NETWORK_URL, APP_NETWORKS_NAME, BSC_CHAIN_ID, ETH_CHAIN_ID, POLYGON_CHAIN_ID } from './network'
// import {WalletLinkConnector} from '@web3-react/walletlink-connector'

export const injected = new InjectedConnector({})
export const injectedBinance = new BscConnector({})

//todo to be defined
export const walletConnect = new WalletConnectConnector({
  rpc: {
    [Number(CHAIN_ID)]: NETWORK_URL || 'https://bsc-dataseed.binance.org/',
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  //@ts-ignore
  pollingInterval: 10000,
})

export const walletConnectBsc = new WalletConnectConnector({
  rpc: {
    [Number(ETH_CHAIN_ID)]: process.env.REACT_APP_NETWORK_URL as string,
    [Number(BSC_CHAIN_ID)]: process.env.REACT_APP_BSC_RPC_URL as string,
    [Number(POLYGON_CHAIN_ID)]: process.env.REACT_APP_POLYGON_RPC_URL as string,
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  //@ts-ignore
  pollingInterval: 10000,
})

//todo to be define
export const walletConnectPolygon = new WalletConnectConnector({
  rpc: {
    [Number(ETH_CHAIN_ID)]: NETWORK_URL as string,
    [Number(BSC_CHAIN_ID)]: 'https://bsc-dataseed.binance.org/',
    [Number(POLYGON_CHAIN_ID)]: 'https://rpc-mainnet.maticvigil.com',
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  //@ts-ignore
  pollingInterval: 10000,
})

//todo WalletLinkConnector impport to enable this

// mainnet only
// export const walletLinkConnect = new WalletLinkConnector({
//   url: process.env.REACT_APP_NETWORK_URL || '',
//   appName: 'Red Kite',
//   appLogoUrl: 'https://redkite.polkafoundry.com/images/logo-red-kite.svg',
//   darkMode: true,
//   // supportedChainIds: [1,4,5],
// })

// mainnet only
// export const fortmatic = new FortmaticConnector({
//   apiKey: FORMATIC_KEY ?? '',
//   chainId: 1
// })

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  description: string
  href: string | null
  primary?: true
  mobile?: true
  mobileOnly?: true
  disableIcon: string
  icon: any
  deepLink?: string
}

export enum ConnectorNames {
  MetaMask = 'MetaMask',
  BSC = 'BSC Wallet',
  WalletConnect = 'Wallet Connect',
  WalletConnectBsc = 'WalletConnectBsc',
  WalletConnectPolygon = 'WalletConnectPolygon',
  WalletLinkConnect = 'Coinbase Wallet',
  Fortmatic = 'Fortmatic',
}

export type ConnectorName = Extract<
  ConnectorNames,
  ConnectorNames.MetaMask | ConnectorNames.BSC | ConnectorNames.WalletConnect
>

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  METAMASK: {
    connector: injected,
    name: ConnectorNames.MetaMask,
    icon: '/images/metamask.svg',
    disableIcon: '/images/metamask-disabled.svg',
    description: 'Easy-to-use browser extension.',
    href: null,
    mobile: true,
  },
  BSC_WALLET: {
    connector: injectedBinance,
    name: ConnectorNames.BSC,
    icon: '/images/bnb.svg',
    description: 'Connect to Binance Chain Wallet',
    disableIcon: '/images/injected-binance-disabled.svg',
    href: null,
  },
  WALLET_CONNECT: {
    connector: walletConnect,
    name: ConnectorNames.WalletConnect,
    icon: '/images/walletconnect.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    disableIcon: '/images/wallet-connect-disabled.svg',
    href: null,
  },
}

export const SUPPORTED_WALLETS_BSC: { [key: string]: WalletInfo } = {
  METAMASK: SUPPORTED_WALLETS.METAMASK,
  BSC_WALLET: SUPPORTED_WALLETS.BSC_WALLET,
  WALLET_CONNECT: {
    connector: walletConnectBsc,
    name: ConnectorNames.WalletConnect,
    icon: '/images/walletconnect.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    disableIcon: '/images/wallet-connect-disabled.svg',
    href: null,
  },
}

export const SUPPORTED_WALLETS_POLYGON: { [key: string]: WalletInfo } = {
  METAMASK: SUPPORTED_WALLETS.METAMASK,
  WALLET_CONNECT: {
    connector: walletConnectPolygon,
    name: ConnectorNames.WalletConnect,
    icon: '/images/walletconnect.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    disableIcon: '/images/wallet-connect-disabled.svg',
    href: null,
  },
}

export const connectorsByName: { [key in ConnectorNames]: AbstractConnector } = {
  [ConnectorNames.MetaMask]: injected,
  [ConnectorNames.BSC]: injectedBinance,
  [ConnectorNames.WalletConnect]: walletConnect,
  [ConnectorNames.WalletConnectBsc]: walletConnectBsc,
  [ConnectorNames.WalletConnectPolygon]: walletConnectPolygon,
  [ConnectorNames.WalletLinkConnect]: walletConnectBsc,
  //todo  shoul be fortmatic instance
  [ConnectorNames.Fortmatic]: walletConnectBsc,
}

export const connectorsSupportByNetwork: { [key: string]: { [key: string]: WalletInfo } } = {
  [APP_NETWORKS_NAME.METAMASK]: SUPPORTED_WALLETS,
  [APP_NETWORKS_NAME.BSC]: SUPPORTED_WALLETS_BSC,
  [APP_NETWORKS_NAME.POLYGON]: SUPPORTED_WALLETS_POLYGON,
}
