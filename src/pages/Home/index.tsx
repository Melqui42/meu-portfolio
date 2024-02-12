import React, { useEffect, useState } from 'react'

import Button from 'components/Button'
import Card from 'components/Card'
import SwitchThemes from 'components/SwitchThemes'

import useThemes from 'hooks/useThemes'

import Icon from 'utils/iconImport'

import projects from './data'
import * as C from './styled'

interface HomeProps {
  theme: 'lightTheme' | 'darkTheme'
  setTheme: React.Dispatch<React.SetStateAction<'lightTheme' | 'darkTheme'>>
}

const Home: React.FC<HomeProps> = ({ theme, setTheme }) => {
  const [toggle, setToggle] = useState<boolean>(false)
  const [menuMobile, setMenuMobile] = useState<boolean>(false)

  const { toggleTheme } = useThemes()

  const [scrollPosition, setScrollPosition] = useState(0)
  const [showText, setShowText] = useState(false)

  const handleSwitchThemes = () => {
    setToggle(!toggle)

    setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme')
    toggleTheme()
  }

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setShowText(scrollPosition >= 600)
  }, [scrollPosition])

  const scrollToTop = (position: number) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {showText && (
        <C.ScrollToTop onClick={() => scrollToTop(0)}>
          <Icon.Io.IoMdArrowUp className="icon" />
        </C.ScrollToTop>
      )}
      <C.Header>
        <div className="header-content">
          <div className="header-center">
            <div className="header-menu-mobile">
              <button
                className="switch-menu"
                onClick={() => setMenuMobile(!menuMobile)}
              >
                {!menuMobile ? (
                  <Icon.Im.ImMenu3 className="icon" />
                ) : (
                  <Icon.Im.ImMenu4 className="icon" />
                )}
              </button>
              <div className={!menuMobile ? 'show' : 'hide'}>
                <ul className="menu-mobile-list">
                  <li className="menu-mobile-item">
                    <button onClick={() => scrollToTop(0)}>Início</button>
                  </li>
                  <li className="menu-mobile-item">
                    <button onClick={() => scrollToTop(648)}>Sobre Mim</button>
                  </li>
                  <li className="menu-mobile-item">
                    <button onClick={() => scrollToTop(1547)}>
                      Habilidades
                    </button>
                  </li>
                  <li className="menu-mobile-item">
                    <button onClick={() => scrollToTop(2511)}>Projetos</button>
                  </li>
                  <li className="menu-mobile-item-switch">
                    <SwitchThemes state={toggle} onClick={handleSwitchThemes} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-logo">
              <span>Melqui Martins</span>
            </div>
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <button onClick={() => scrollToTop(0)}>Início</button>
                </li>
                <li className="nav-item">
                  <button onClick={() => scrollToTop(600)}>Sobre Mim</button>
                </li>
                <li className="nav-item">
                  <button onClick={() => scrollToTop(1200)}>Habilidades</button>
                </li>
                <li className="nav-item">
                  <button onClick={() => scrollToTop(1704)}>Projetos</button>
                </li>
              </ul>
            </nav>
            <ul className="header-list">
              <li className="header-item">
                <SwitchThemes state={toggle} onClick={handleSwitchThemes} />
              </li>
              <li className="header-item">
                <div className="line"></div>
              </li>
              <li className="header-item">
                <a
                  href="https://wa.me/5581981831177"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon.Bs.BsTelephone className="icon" />
                  <span>Whatsapp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </C.Header>
      <C.Home>
        <div className="section-center">
          <div className="section-container">
            <ul className="social-media-list">
              <li className="social-media-item">
                <a
                  href="https://www.instagram.com/melqui_m4rtins/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon.Bs.BsInstagram className="icon" />
                </a>
              </li>
              <li className="social-media-item">
                <a
                  href="https://www.linkedin.com/in/melquisedeque-martins-54108a25a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon.Fa.FaLinkedinIn className="icon" />
                </a>
              </li>
              <li className="social-media-item">
                <a
                  href="https://github.com/Melqui42"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon.Fa.FaGithub className="icon" />
                </a>
              </li>
            </ul>
            <article className="section-content">
              <h1>
                Melqui Martins
                <span>👋</span>
              </h1>
              <h2>
                <div className="line"></div>Frontend Developer
              </h2>
              <p>
                Sou um programador Frontend apaixonado e comprometido, sempre em
                busca de aprimoramento e dedicado a criar experiências de
                usuário excepcionais através do meu trabalho.
              </p>
              <Button
                href="https://wa.me/5581981831177"
                target="_blank"
                className="section-message"
                rel="noreferrer"
              >
                Say Hello! <Icon.Ri.RiSendPlaneLine className="icon" />
              </Button>
              <a href="#AboutMe" className="section-scroll-down">
                <Icon.Lu.LuMouse className="icon" />
                Scroll down
                <Icon.Fa.FaArrowDown className="icon arrow" />
              </a>
            </article>
          </div>
          <img src={require('assets/myPhotos/photo1.png')} alt="" />
        </div>
      </C.Home>
      <C.AboutMe>
        <div className="section-center">
          <div className="section-header">
            <span>Veja mais</span>
            <h1>Sobre Mim</h1>
          </div>
          <div className="section-container">
            <img src={require('assets/myPhotos/photo2.png')} alt="" />
            <article className="section-content">
              <ul className="section-list">
                <li className="section-item">
                  <div className="card">
                    <Icon.Pi.PiMedalLight className="icon" />
                    <h1>Estudos</h1>
                    <p>2 + Anos</p>
                  </div>
                </li>
                <li className="section-item">
                  <div className="card">
                    <Icon.Pi.PiProjectorScreenChartLight className="icon" />
                    <h1>Completados</h1>
                    <p>15 + Projetos</p>
                  </div>
                </li>
                <li className="section-item">
                  <div className="card">
                    <Icon.Io5.IoChatboxEllipsesOutline className="icon" />
                    <h1>Suporte</h1>
                    <p>Online 24/7</p>
                  </div>
                </li>
              </ul>
              <p className="text">
                Olá, sou o Melquisedeque, mas podem me chamar de Melqui. Com 19
                anos, dei meus primeiros passos nos estudos de programação em
                2020 e desde então tenho dedicado meu tempo ao aprendizado das
                tecnologias voltadas para o Frontend.
              </p>
              <Button>
                Download CV <Icon.Gr.GrDocumentText className="icon" />
              </Button>
            </article>
          </div>
        </div>
      </C.AboutMe>
      <C.Skills>
        <div className="section-center">
          <div className="section-header">
            <span>Veja todas as minhas</span>
            <h1>Habilidades</h1>
          </div>
          <div className="section-content">
            <div className="card">
              <h1 className="card-title">Desenvolvimento Frontend</h1>
              <div className="card-content">
                <ul className="card-list">
                  <li className="card-item">
                    <Icon.Pi.PiSealCheckFill className="icon" />
                    <div>
                      <h1>React</h1>
                      <p>Intermediário</p>
                    </div>
                  </li>
                  <li className="card-item">
                    <Icon.Pi.PiSealCheckFill className="icon" />
                    <div>
                      <h1>Styled-Components</h1>
                      <p>Intermediário</p>
                    </div>
                  </li>
                  <li className="card-item">
                    <Icon.Pi.PiSealCheckFill className="icon" />
                    <div>
                      <h1>Axios</h1>
                      <p>Básico</p>
                    </div>
                  </li>
                </ul>
                <ul className="card-list">
                  <li className="card-item">
                    <Icon.Pi.PiSealCheckFill className="icon" />
                    <div>
                      <h1>TypeScript</h1>
                      <p>Intermediário</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <h1 className="card-title">Desenvolvimento Backend</h1>
              <div className="card-content">
                <ul className="card-list">
                  <li className="card-item">
                    <Icon.Pi.PiSealCheckFill className="icon" />
                    <div>
                      <h1>Node JS</h1>
                      <p>Básico</p>
                    </div>
                  </li>
                  <li className="card-item">
                    <Icon.Pi.PiSealCheckFill className="icon" />
                    <div>
                      <h1>MySQL</h1>
                      <p>Básico</p>
                    </div>
                  </li>
                  <li className="card-item">
                    <Icon.Pi.PiSealCheckFill className="icon" />
                    <div>
                      <h1>Prisma</h1>
                      <p>Básico</p>
                    </div>
                  </li>
                </ul>
                <ul className="card-list">
                  <li className="card-item">
                    <Icon.Pi.PiSealCheckFill className="icon" />
                    <div>
                      <h1>Git</h1>
                      <p>Básico</p>
                    </div>
                  </li>
                  <li className="card-item">
                    <Icon.Pi.PiSealCheckFill className="icon" />
                    <div>
                      <h1>TypeScript</h1>
                      <p>Intermediário</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </C.Skills>
      <C.Projects>
        <div className="section-center">
          <div className="section-header">
            <span>Veja meus</span>
            <h1>Projetos</h1>
          </div>
          <div className="section-content">
            <ul className="section-list">
              {projects.map((item) => {
                return (
                  <li className="section-item" key={item.id}>
                    <Card.Root>
                      <Card.Links github={item.github} vercel={item.vercel} />
                      <Card.Container
                        className="card-content"
                        style={{ gap: '1rem' }}
                      >
                        <Card.Image src={item.image} />
                        <Card.Container style={{ gap: '0.8rem' }}>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Date>{item.date}</Card.Date>
                        </Card.Container>
                      </Card.Container>
                    </Card.Root>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </C.Projects>
    </>
  )
}

export default Home
