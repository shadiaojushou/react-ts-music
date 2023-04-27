import React, { lazy } from 'react'

// 导入react-router
import { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

// 导入页面组件
/* import Discover from '@/views/discover'
import Mine from '@/views/mine'
import Focus from '@/views/focus'
import Download from '@/views/download' */
// 懒加载组件
const Discover = lazy(() => import('@/views/discover'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Rangking = lazy(() => import('@/views/discover/c-views/ranking'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Album = lazy(() => import('@/views/discover/c-views/album'))

const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

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
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Rangking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
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
