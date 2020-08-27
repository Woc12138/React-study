import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CommentsItem from '../comment-item/comment-item'
import './commentList.css'

export default class CommentList extends Component {
  // static表示给组件类指定属性，不加static表示给组建的实例对象
  static propTypes = {
    comments: PropTypes.array.isRequired,
  }

  render () {
    const {comments} = this.props
    // 计算出是否显示
    const display = comments.length===0 ? 'block':'none'
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment, index) => <CommentsItem key={index} comment={comment} index={index}/>)
          }
        </ul>
      </div>
    );
  }
}
// 声明接收的属性
// CommentList.propTypes = {
//   comments: PropTypes.array.isRequired
// }