import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// redux中 state类型约束
interface IState {
  count: number
  message: string
  address: string
}

const initialState: IState = {
  count: 1000,
  message: 'Hello Redux Toolkit!',
  address: '北京'
}

const counterSlice = createSlice({
  name: 'counter',
  // initialState: {
  //   count: 1000,
  //   message: 'Hello Redux Toolkit!',
  //   address: '北京'
  // },
  initialState,
  reducers: {
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})

export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
