import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './router'

function App() {
  return (
    <div className="App">
      {/* 主页面——头部 */}
      <AppHeader />

      {/* 主页面——内容 */}
      <Suspense fallback="">
        {/* fallback 属性用于指定组件加载过程中的 loading 状态 */}
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>

      {/* 主页面——底部 */}
      <AppFooter />
      {/* 测试组件 */}
      {/* <Demo name="ikun" age={10} /> */}
    </div>
  )
}

export default App
