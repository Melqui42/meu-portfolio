import { ElementType, HTMLProps, ReactNode } from 'react'

import * as C from './styled'

interface FieldRootProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
  icon: ElementType
}

const FieldRoot: React.FC<FieldRootProps> = ({
  icon: Icon,
  children,
  ...rest
}) => {
  return (
    <C.Root {...rest}>
      <Icon className="icon" />
      {children}
    </C.Root>
  )
}

export default FieldRoot
