import React, { Component } from 'react'

export default class App extends Component {

  state = {
    count: 0,
    number: 0
  }

  // 受控组件的方式得到select数据
  handleChange = (e) => {
    const number = e.target.value*1
    this.setState({number})
  }
  
  increment = () => {
    // 1.得到选择增加数量
    const {number} = this.state
    // 2.得到原本的count状态
    const count = this.state.count
    // 3.更新状态
    this.setState({count: count + number})
  }

  decrement = () => {
    // 1.得到选择增加数量
    const {number} = this.state
    // 2.得到原本的count状态
    const count = this.state.count
    // 3.更新状态
    this.setState({count: count - number})
  }

  incrementIfOdd = () => {
    // 1.得到选择增加数量
    const {number} = this.state
    // 2.得到原本的count状态
    const count = this.state.count
    // 3.判断，满足条件才更新
    if(count%2===1) {
      // 4.更新状态
      this.setState({count: count + number})
    }
  }

  incrementAsync = () => {
    // 1.得到选择增加数量
    const {number} = this.state
    // 2.得到原本的count状态
    const count = this.state.count
    // 3.启动延时定时器
    setTimeout(() => {
      this.setState({count: count + number})
    }, 1000)
  }
  render() {
    const {count, number} = this.state
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select value={number} onChange={this.handleChange}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
          <button onClick={this.incrementAsync}>increment async</button>
        </div>
      </div>
    );
  }
}