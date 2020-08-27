import React from 'react';

// 模拟从后台获取的数据
const allMessages = [
  {id: 1, title: 'message001', content: 'wwwyyy1'},
  {id: 3, title: 'message003', content: 'wwwyyy3'},
  {id: 5, title: 'message005', content: 'wwwyyy5'}
]

export default function MessageDetail(props) {
  // 得到请求参数中的id
  const {id} = props.match.params
  // 查询得到对应的message
  const message = allMessages.find(m => m.id === id*1) // 返回第一个结果为true的元素
  return (
    <ul>
      <li>Id：{message.id}</li>
      <li>Title：{message.title}</li>
      <li>Content: {message.content}</li>
    </ul>
  );
}