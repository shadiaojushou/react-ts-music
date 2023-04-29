import React, { memo, ReactNode } from 'react'
import type { FC } from 'react'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import headerTiitles from '@/assets/data/header_titles.json'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  // 定义组件内部的状态

  // 展示头部link 组件展示逻辑
  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTiitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
