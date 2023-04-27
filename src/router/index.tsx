import React from 'react'

// 导入react-router
import { RouteObject } from 'react-router-dom'

// 导入页面组件
import Discover from '@/views/discover'

// 路由配置
const routes: RouteObject[] = [
  {
    path: '/discover',
    element: <Discover />
  }
]

export default routes
