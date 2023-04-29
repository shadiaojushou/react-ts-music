// 类组件和TS集合类型约束

import React, { PureComponent } from 'react'

interface IProps {
  name: string
  age?: number
}

interface IState {
  message: string
  counter: number
}

class Demo extends PureComponent<IProps, IState> {
  state = {
    message: 'hello world',
    counter: 99
  }
  // constructor(props: IProps) {
  //   super(props)

  //   this.state = {
  //     message: 'hello world',
  //     counter: 100
  //   }
  // }
  render(): React.ReactNode {
    return (
      <div>
        <h1>类组件</h1>
        <h2>name:{this.props.name}</h2>
        <h2>age:{this.props.age}</h2>
        <h2>name:{this.state.message}</h2>
        <h2>counter:{this.state.counter}</h2>
      </div>
    )
  }
}

export default Demo
