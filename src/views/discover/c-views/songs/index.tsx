import React, { memo, ReactNode } from 'react'
import type { FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = () => {
  return (
    <div>
      <h1>Songs</h1>
    </div>
  )
}

export default memo(Songs)
