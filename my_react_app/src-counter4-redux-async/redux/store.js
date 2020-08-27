/*
  createStore生成store对象
*/
import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {counter} from './reducers.js'

// 生成一个store对象
const store = createStore(
  counter,
  composeWithDevTools( // 想用redux-devtool需要composeWithDevTools包起来
    applyMiddleware(thunk) // 应用异步中间件
  ) 
) //内部会第一次调用reducer函数得到初始值state

export default store