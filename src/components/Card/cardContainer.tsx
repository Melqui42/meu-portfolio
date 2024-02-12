import React, { HTMLAttributes } from 'react'

import * as C from './styled'

interface CardContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardContainer: React.FC<CardContainerProps> = ({
  children,
  ...props
}) => {
  return <C.CardContainer {...props}>{children}</C.CardContainer>
}

export default CardContainer
