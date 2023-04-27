import React, { memo, ReactNode } from 'react'
import type { FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Mine: FC<IProps> = () => {
  return (
    <div>
      <h1>Mine</h1>
    </div>
  )
}

export default memo(Mine)
