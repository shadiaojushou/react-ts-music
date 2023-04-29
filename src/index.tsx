import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

// CSS样式
import 'normalize.css'
import './assets/css/index.less'
import theme from './assets/theme'

// 路由
import { HashRouter } from 'react-router-dom'

// 导入store
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    {/* Thme混入 */}
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
)
