/*
  createStore生成store对象
*/
import {createStore} from 'redux'

import {counter} from './reducers.js'

// 生成一个store对象
const store = createStore(counter) //内部会第一次调用reducer函数得到初始值state

export default store