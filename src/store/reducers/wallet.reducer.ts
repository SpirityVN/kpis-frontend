import { ConnectorNames } from '@/constants/connectors'
import { CHAIN_ID } from '@/constants/network'
import { createActions, handleActions } from 'redux-actions'

export const actions: any = createActions({
  ALL_WALLETS_INIT_LOADING: [(meta) => meta, (payload) => payload],
  ALL_WALLETS_INIT_SUCCESS: [(meta) => meta, (payload) => payload],
  ALL_WALLETS_INIT_ERROR: [(meta) => meta, (payload) => payload],

  WALLET_CONNECT_SUCCESS: [(meta) => meta, (payload) => payload],
  WALLET_UPDATE_BALANCE: [(meta) => meta, (payload) => payload],
  WALLET_CONNECT_SUCCESS_WITHOUT_LAYER2: [(meta) => meta, (payload) => payload],
  WALLET_CONNECT_LAYER2_SUCCESS: [(meta) => meta, (payload) => payload],
  WALLET_DISCONNECT_SUCCESS: [(meta) => meta, (payload) => payload],
})
export enum WalletConnectionState {
  READY = 'readyForConnection',
  CONNECTED = 'connected',
}

export enum TwoFactors {
  Layer1 = 'Layer1',
  Layer2 = 'Layer2',
}

type ConnectorName = Extract<
  ConnectorNames,
  ConnectorNames.WalletConnect | ConnectorNames.BSC | ConnectorNames.MetaMask
>

type WalletState = {
  entities: { [key: string]: WalletType }
  loading: boolean
  error: string
  twoFactor: TwoFactors | undefined
  walletConnect: boolean
}

const wallets = {
  [ConnectorNames.WalletConnect]: {
    title: 'WalletConnect',
    typeId: 'wallet-connect',
  },
  [ConnectorNames.BSC]: {
    title: 'Binance Chain Wallet',
    typeId: 'injected-binance',
  },
  [ConnectorNames.MetaMask]: {
    title: 'Web3',
    typeId: 'metamask',
  },
}

export type WalletType = {
  addresses: string[]
  balances: {}
  connectionState: WalletConnectionState
  title: string
  typeId: string
}

const walletInitialState = Object.keys(wallets).reduce<Record<string, WalletType>>((acc, key) => {
  const wallet = wallets[key as ConnectorName]

  const walletsInfo = {
    ...acc,
    [key]: {
      ...wallet,
      balances: {},
      connectionState: WalletConnectionState.READY,
      addresses: [],
    },
  }

  return walletsInfo
}, {})

const initialState = {
  entities: walletInitialState,
  loading: false,
  error: '',
  twoFactor: undefined,
  walletConnect: false,
}
