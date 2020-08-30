/*
  包含所有action creator(创建action的工厂函数)
*/
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from './action-types'

// 同步添加
export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})
// 同步删除
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})

// 同步接收comments(没有必要暴露，内部使用)
const receiveComments = (comments) => ({type: RECEIVE_COMMENTS, data: comments})

// 异步从后台获取数据
export const getComments = () => (
  dispatch => {
    // 模拟发送ajax请求异步获取数据（异步代码应该封装到actions里）
    setTimeout(() => {
      const comments = [
        {username: 'Tom', content: 'React挺好的！'},
        {username: 'Jack', content: 'React太难了！'},
      ]
      // 分发同步action
      dispatch(receiveComments(comments))
    }, 1000)

  }
)