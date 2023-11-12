import { ReactNode } from 'react'

import * as C from './styled'

interface CardCountProps {
  children: ReactNode
}

const CardCount: React.FC<CardCountProps> = ({ children }) => {
  return <C.Count>{children}</C.Count>
}

export default CardCount
