import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 1000,
    message: 'Hello Redux Toolkit!',
    address: '北京'
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload
    }
  }
})

export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
