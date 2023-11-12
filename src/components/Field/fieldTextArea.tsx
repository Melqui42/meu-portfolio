import { TextareaHTMLAttributes } from 'react'

import * as C from './styled'

type FieldTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

const FieldTextArea: React.FC<FieldTextAreaProps> = ({ ...rest }) => {
  return <C.TextArea {...rest} />
}

export default FieldTextArea
