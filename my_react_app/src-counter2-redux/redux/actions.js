/*
  包含所有的 action creator（创建action）
*/

import {INCREMENT, DECREMENT} from './action-types'

// 增加
export const increment = (number) => ({type: INCREMENT, data: number})
// 减少
export const decrement = (number) => ({type: DECREMENT, data: number})
