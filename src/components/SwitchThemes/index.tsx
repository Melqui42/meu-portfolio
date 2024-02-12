import React, { ButtonHTMLAttributes } from 'react'

import Icon from 'utils/iconImport'

import * as C from './styled'

interface SwitchThemesProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state: boolean
}

const SwitchThemes: React.FC<SwitchThemesProps> = ({ state, ...props }) => {
  return (
    <C.SwitchThemes {...props} className={state ? 'ligth' : 'dark'}>
      <Icon.Io5.IoSunnySharp className="icon sun" />
      <Icon.Fa.FaMoon className="icon moon" />
    </C.SwitchThemes>
  )
}

export default SwitchThemes
