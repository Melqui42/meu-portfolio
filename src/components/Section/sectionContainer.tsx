import React, { HTMLAttributes } from 'react'

import * as C from './styled'

interface SectionContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  ...props
}) => {
  return <C.SectionContainer {...props}>{children}</C.SectionContainer>
}

export default SectionContainer
