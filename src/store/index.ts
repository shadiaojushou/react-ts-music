import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'

// 模块的store
import counterReducer from './modules/counter'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// 导出store的类型
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
// useAppSelector的Hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppIDispatch: () => AppDispatch = useDispatch
export const useShallowEqual = shallowEqual

export default store
