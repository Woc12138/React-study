import React from 'react'
import {render} from 'react-dom'

import App from './components/app'
// 配置按需加载后就不需要把所有样式都打包了
// import 'antd-mobile/dist/antd-mobile.css'

render(<App />, document.getElementById('root'))