import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '@/store/config.store'

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
