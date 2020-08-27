import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'

import MessageDetail from './message-detail'

export default class Message extends Component {
  state = {
    messages: []
  }
  componentDidMount() {
    // 模拟发送ajax请求异步获取数据
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'message001'},
        {id: 3, title: 'message003'},
        {id: 5, title: 'message005'}
      ]
      this.setState({messages})
    }, 1000)
  }
  showDetail = (id) => {
    this.props.history.push(`/home/message/messagedetail/${id}`)
  }
  showDetail2 = (id) => {
    this.props.history.replace(`/home/message/messagedetail/${id}`)
  }
  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  render() {
    return (
      <div>
        <ul>
        {
          this.state.messages.map((m, index) => (
            <li key={index}>
              <Link to={`/home/message/messagedetail/${m.id}`}>{m.title}</Link>
              {/*onClick调用一个回调函数，回调函数中再调用showDetail就可以传递参数*/}
              &nbsp;&nbsp;<button onClick={() => this.showDetail(m.id)}>push()查看</button>
              &nbsp;&nbsp;<button onClick={() => this.showDetail2(m.id)}>replace()查看</button>
            </li>
            
          ))
        }
        </ul>
        <p>
          <button onClick={this.back}>回退</button>
          <button onClick={this.forward}>前进</button>
        </p>
        <hr/>
        <Route path={`/home/message/messagedetail/:id`} component={MessageDetail}/>
      </div>
    );
  }
}