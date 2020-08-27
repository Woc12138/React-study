/*
  包含n个reducer函数（根据旧的state和action返回一个新的state）
*/
import {combineReducers} from 'redux'

import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from './action-types'

const initComments = []

function comments(state = initComments, action) { // 以要操作的数据来命名比较好
  switch (action.type) {
    case ADD_COMMENT:
      return [action.data, ...state] // 不能修改原来的state本身，必须创建一个新的
    case DELETE_COMMENT:
      return state.filter((comment, index) => index !== action.data)
    case RECEIVE_COMMENTS:
      return action.data
    default:
      return state
  }
}

export default combineReducers({ //当有多个reducer时，用combineReducer合并到一起统一暴露
  // counter,
  comments, // 指定reducer中对应的属性
})
// redux向外暴露的state是什么结构？
// {counter: 0, comments: []}