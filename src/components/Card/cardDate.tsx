import React from 'react'

import * as C from './styled'

interface CardDateProps {
  children: React.ReactNode
}

const CardDate: React.FC<CardDateProps> = ({ children }) => {
  return <C.CardDate>{children}</C.CardDate>
}

export default CardDate
