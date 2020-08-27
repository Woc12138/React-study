import React, { Component } from 'react';
import PubSub from 'pubsub-js'

import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

// style={{display: 'none'}} 不能写成style='display: none'
// className= 不能用class=
// /> 标签必须有结束标记
export default class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     comments: [
  //       {username: 'Tom', content: 'React挺好的！'},
  //       {username: 'Jack', content: 'React太难了！'},
  //     ],
  //   }
  // }
  // 简化写法：给组件对象指定state属性
  state = {
    comments: [
      {username: 'Tom', content: 'React挺好的！'},
      {username: 'Jack', content: 'React太难了！'},
    ],
  }

  componentDidMount() {
    PubSub.subscribe('deleteComment', (msg, index) => {
      this.deleteComment(index)
    })
  }
  // 添加评论
  addComment = (comment) => {
    const {comments} = this.state
    comments.unshift(comment)
    this.setState({comments})
    // 更新状态
    this.setState({comments})
  }
  // 删除指定评论
  deleteComment = (index) => {
    const {comments} = this.state
    comments.splice(index, 1)
    // 更新状态
    this.setState({comments})
  }
  render() {
    const {comments} = this.state
    return (
      <div>
      <header className="site-header jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <CommentAdd addComment={this.addComment}/>
        <CommentList comments={comments}/>
      </div>
    </div>
    );
  }
}