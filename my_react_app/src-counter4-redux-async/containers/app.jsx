/*
  容器组件，用了redux api，放在containers文件夹下
  用Redux包装Counter组件（UI组件），生成了新的App组件
*/
import React from 'react'
import {connect} from 'react-redux'

import {increment, decrement, incrementAsync} from '../redux/actions'
import Counter from '../components/counter'

// 用connect包装Counter组件再返回出去
export default connect(
  state => ({count: state}), // 函数返回一个对象，count的值是从state中取出的
  {increment, decrement, incrementAsync} // 对象中有两个函数，increment和decrement
  // 这两个对象中的属性都会被解构赋值传递给Counter组件
)(Counter)