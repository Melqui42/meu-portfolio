import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as C from './styled'

interface FieldActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const FieldAction: React.FC<FieldActionProps> = ({ children, ...rest }) => {
  return <C.Action {...rest}>{children}</C.Action>
}

export default FieldAction
