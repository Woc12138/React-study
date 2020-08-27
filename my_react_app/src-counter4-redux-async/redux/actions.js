/*
  包含所有的action-creator（创建action）
  dispatch(action)
  同步action 返回对象
  异步action 返回的是函数
*/

import {INCREMENT, DECREMENT} from './action-types'

// 增加
export const increment = (number) => ({type: INCREMENT, data: number})
// 减少
export const decrement = (number) => ({type: DECREMENT, data: number})

// 异步action
export const incrementAsync = (number) => {
  return dispatch => { // 返回一个函数
    // 异步的代码
    setTimeout(() => {
      // 1s后才去分发一个同步的增加action
      dispatch(increment(number))
    }, 1000)
  }
}

