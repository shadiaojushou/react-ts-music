import React, { memo, ReactNode } from 'react'
import type { FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Alubum: FC<IProps> = () => {
  return (
    <div>
      <h1>Alubum</h1>
    </div>
  )
}

export default memo(Alubum)
