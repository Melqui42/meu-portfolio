import { ElementType, ReactNode } from 'react'
import * as C from './styled'

interface CardRootProps {
  children: ReactNode
  icon: ElementType
  cardColor: boolean
}

const CardRoot: React.FC<CardRootProps> = ({
  children,
  icon: Icon,
  cardColor,
}) => {
  return (
    <C.Root style={{ backgroundColor: cardColor ? '#2d2e32' : '#25262a' }}>
      <div className="centerRoot">{children}</div>
      <Icon className="icon" />
    </C.Root>
  )
}

export default CardRoot
