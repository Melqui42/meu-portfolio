import React, { HTMLAttributes } from 'react'

import * as C from './styled'

interface SectionContentProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const SectionContent: React.FC<SectionContentProps> = ({
  children,
  ...props
}) => {
  return <C.SectionContent {...props}>{children}</C.SectionContent>
}

export default SectionContent
