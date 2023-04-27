import React, { memo, ReactNode } from 'react'
import type { FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = () => {
  return (
    <div>
      <h1>Download</h1>
    </div>
  )
}

export default memo(Download)
