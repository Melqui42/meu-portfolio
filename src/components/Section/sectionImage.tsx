import React, { ImgHTMLAttributes } from 'react'

import * as C from './styled'

type SectionImageProps = ImgHTMLAttributes<HTMLImageElement>

const SectionImage: React.FC<SectionImageProps> = ({ ...props }) => {
  return <C.SectionImage {...props} />
}

export default SectionImage
