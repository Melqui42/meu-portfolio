import React from 'react'

import * as C from './styled'

interface CardTitleProps {
  children: React.ReactNode
}

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <C.CardTitle>{children}</C.CardTitle>
}

export default CardTitle
