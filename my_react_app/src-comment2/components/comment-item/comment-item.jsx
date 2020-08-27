import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import PropTypes from 'prop-types'

import './commentItem.css'

export default class CommentItem extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  }

  handleClick = () => {
    const {comment, index} = this.props
    // 提示
    if(window.confirm(`确定删除${comment.username}的评论吗？`)) {
      // 确定后删除
      // 发布消息
      PubSub.publish('deleteComment', index)
    }
  }

  render() {
    const {comment} = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:" onClick={this.handleClick}>删除</a>
        </div>
    <p className="user"><span >{comment.username}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    );
  }
}
// 简化写法：写到里面的静态去
// CommentItem.propTypes = {
//   comment: PropTypes.object.isRequired,
// }