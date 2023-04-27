import React, { memo, ReactNode } from 'react'
import type { FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Focus: FC<IProps> = () => {
  return (
    <div>
      <h1>Focus</h1>
    </div>
  )
}

export default memo(Focus)
