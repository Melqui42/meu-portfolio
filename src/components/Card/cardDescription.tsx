import { ReactNode } from 'react'

import * as C from './styled'

interface CardDescriptionProps {
  children: ReactNode
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => {
  return <C.Description>{children}</C.Description>
}

export default CardDescription
