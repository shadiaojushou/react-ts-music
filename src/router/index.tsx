import React from 'react'

// 导入react-router
import { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

// 导入页面组件
import Discover from '@/views/discover'
import Mine from '@/views/mine'
import Focus from '@/views/focus'
import Download from '@/views/download'

// 路由配置
const routes: RouteObject[] = [
  // 默认路由 - 重定向到 /discover
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  // 发现音乐
  {
    path: '/discover',
    element: <Discover />
  },
  // 我的
  {
    path: '/mine',
    element: <Mine />
  },
  // 关注
  {
    path: '/focus',
    element: <Focus />
  },
  // 下载音乐
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
