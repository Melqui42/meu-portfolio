import React, { HTMLAttributes } from 'react'

import * as C from './styled'

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  ...props
}) => {
  return (
    <C.SectionHeader {...props}>
      <span>{description}</span>
      <h1>{title}</h1>
    </C.SectionHeader>
  )
}

export default SectionHeader
