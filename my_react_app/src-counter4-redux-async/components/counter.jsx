/*
  没有用Redux的api，是UI组件，保存在components文件夹
  没有redux之前只有state状态，用redux之后数据交给redux处理，传递进来了redux中的属性props
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired
  }
  
  increment = () => {
    const number = this.select.value * 1
    // this.props.store.dispatch(actions.increment(number))
    // 不依赖redux的store直接写
    this.props.increment(number)
  }

  decrement = () => {
    const number = this.select.value * 1
    this.props.decrement(number)
  }

  incrementIfOdd = () => {
    const number = this.select.value * 1
    // const count = this.props.store.getState()
    // count 也在props中
    const {count} = this.props
    if(count%2===1) {
      this.props.increment(number)
    }
  }

  incrementAsync = () => {
    const number = this.select.value * 1
    // setTimeout(() => {
    //   this.props.increment(number)
    // }, 1000)
    this.props.incrementAsync(number)
  }

  render() {
    const {count} = this.props
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select ref={select => {this.select = select}}>
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
