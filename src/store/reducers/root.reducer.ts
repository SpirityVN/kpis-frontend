// @ts-nocheck
import { combineReducers } from 'redux'
import WalletReducer from './wallet.reducer'
const rootReducer = combineReducers({
  wallet: WalletReducer,
})
export default rootReducer
