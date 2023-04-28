/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, ReactNode, useEffect } from 'react'
import type { FC } from 'react'

interface IProps {
  children?: ReactNode
}

// 测试store
// import { shallowEqual } from 'react-redux'
import { useAppSelector, useAppIDispatch, useShallowEqual } from '@/store'
import { changeMessageAction } from '@/store/modules/counter'
import request from '@/service'

// 正确获取redux中的数据类型
/* import store from '@/store'
type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType> */

// 测试网络请求

const Test: FC<IProps> = () => {
  // 测试网络请求
  useEffect(() => {
    request
      .get({
        url: '/banner'
      })
      .then((res) => {
        console.log(res)
      })
  }, [])
  const { count, message, address } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message,
      address: state.counter.address
    }),
    useShallowEqual
  )

  /*   const store = useSelector(
    (state: IRootState) => ({
      count: state.counter.count,
      message: state.counter.message,
      address: state.counter.address
    }),
    shallowEqual
  ) */
  // const dispatch = useDispatch()
  const dispatch = useAppIDispatch()
  function handleChangeMessage() {
    dispatch(changeMessageAction('哈哈哈哈'))
  }

  return (
    <div>
      <h1>Test</h1>
      <h2>当前计数：{count}</h2>
      <h2>当前消息：{message}</h2>
      <h2>当前地址：{address}</h2>
      <button onClick={handleChangeMessage}>修改message</button>
    </div>
  )
}

export default memo(Test)
function useAppDispatch() {
  throw new Error('Function not implemented.')
}
