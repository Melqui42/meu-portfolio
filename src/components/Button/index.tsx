import React, { AnchorHTMLAttributes } from 'react'

import * as C from './styled'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <C.Button {...props}>{children}</C.Button>
}

export default Button
