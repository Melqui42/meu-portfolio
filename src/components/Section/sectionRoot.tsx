import React, { HTMLAttributes } from 'react'

import * as C from './styled'

interface SectionRootProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  classCenter: string
}

const SectionRoot: React.FC<SectionRootProps> = ({
  children,
  classCenter,
  ...props
}) => {
  return (
    <C.SectionRoot {...props}>
      <div className={`section-center ${classCenter}`}>{children}</div>
    </C.SectionRoot>
  )
}

export default SectionRoot
