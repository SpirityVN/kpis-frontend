import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/store/config.store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
