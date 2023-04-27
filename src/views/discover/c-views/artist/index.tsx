import React, { memo, ReactNode } from 'react'
import type { FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = () => {
  return (
    <div>
      <h1>Artist</h1>
    </div>
  )
}

export default memo(Artist)
