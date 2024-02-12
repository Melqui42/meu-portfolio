import React, { HTMLAttributes } from 'react'

import * as C from './styled'

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardRoot: React.FC<CardRootProps> = ({ children, ...props }) => {
  return <C.CardRoot {...props}>{children}</C.CardRoot>
}

export default CardRoot
