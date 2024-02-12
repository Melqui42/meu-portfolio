import React, { ImgHTMLAttributes } from 'react'

import * as C from './styled'

type CardImageProps = ImgHTMLAttributes<HTMLImageElement>

const CardImage: React.FC<CardImageProps> = ({ ...props }) => {
  return <C.CardImage {...props} />
}

export default CardImage
