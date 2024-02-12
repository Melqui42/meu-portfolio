import React from 'react'

import Icon from 'utils/iconImport'

import * as C from './styled'

interface CardLinksProps {
  github: string
  vercel: string
}

const CardLinks: React.FC<CardLinksProps> = ({ github, vercel }) => {
  return (
    <C.CardLinks className="card-links">
      <li className="card-item">
        <a href={github} target="_blank" rel="noreferrer">
          <Icon.Vsc.VscGithubAlt className="icon" />
        </a>
      </li>
      <li className="card-item">
        <a href={vercel} target="_blank" rel="noreferrer">
          <Icon.Vsc.VscLinkExternal className="icon" />
        </a>
      </li>
    </C.CardLinks>
  )
}

export default CardLinks
