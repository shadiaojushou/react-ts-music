import React, { memo, ReactNode } from 'react'
import type { FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  return (
    <div>
      <h1>Ranking</h1>
    </div>
  )
}

export default memo(Ranking)
