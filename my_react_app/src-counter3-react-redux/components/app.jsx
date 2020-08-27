import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {increment, decrement} from '../redux/actions'

class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
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
    setTimeout(() => {
      this.props.increment(number)
    }, 1000)
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
// 用connect包装App组件再返回出去
export default connect(
  state => ({count: state}), // 函数返回一个对象，count的值是从state中取出的
  {increment, decrement} // 对象中有两个函数，increment和decrement
  // 这两个对象中的属性都会被解构赋值传递给App组件
)(App)