import React, { memo, ReactNode } from 'react'
import type { FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Diradio: FC<IProps> = () => {
  return (
    <div>
      <h1>Diradio</h1>
    </div>
  )
}

export default memo(Diradio)
