import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'

// CSS样式
import 'normalize.css'
import './assets/css/index.less'

// 路由
import { HashRouter } from 'react-router-dom'

// 导入store
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
