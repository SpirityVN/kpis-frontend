import { CHAIN_ID } from '@/constants/network'
import { createActions, handleActions } from 'redux-actions'

export const actions: any = createActions({
  APP_NETWORKS_SETTING_LOADING: [(meta) => meta, (payload) => payload],
  APP_NETWORKS_SETTING_SUCCESS: [(meta) => meta, (payload) => payload],
  APP_NETWORKS_SETTING_ERROR: [(meta) => meta, (payload) => payload],

  CONNECTOR_SETTING_LOADING: [(meta) => meta, (payload) => payload],
  CONNECTOR_SETTING_SUCCESS: [(meta) => meta, (payload) => payload],
  CONNECTOR_SETTING_ERROR: [(meta) => meta, (payload) => payload],

})
type AppNetworkState = {
  data: {
    appChainID: string | undefined
    walletChainID: string | undefined
    currentConnector: string | undefined
  }
  loading: boolean
  error: string
}

type ConnectorState = {
  data: string | undefined
  loading: boolean
  error: string
}

const initialState = {
  data: {
    appChainID: CHAIN_ID,
    walletChainID: undefined,
    currentConnector: undefined,
  },
  loading: false,
  error: '',
}

const connectorInitialState = {
  data: undefined,
  loading: false,
  error: '',
}