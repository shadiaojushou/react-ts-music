import React, { memo, ReactNode } from 'react'
import type { FC } from 'react'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return (
    <div>
      <h1>AppFooter</h1>
    </div>
  )
}

export default memo(AppFooter)
