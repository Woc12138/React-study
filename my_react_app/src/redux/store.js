/*
  redux最核心的管理对象
*/
import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers'

export default createStore(
  reducers, // 将多个reducer合并为一个reducers
  composeWithDevTools(applyMiddleware(thunk))
)