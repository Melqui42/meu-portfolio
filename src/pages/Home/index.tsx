import React, { useEffect, useState } from 'react'

import Button from 'components/Button'
import Card from 'components/Card'
import Section from 'components/Section'
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
      <Section.Root classCenter="section-home-center">
        <Section.Container className="section-home-container">
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
          <Section.Content className="section-home-content">
            <h1 className="section-title">
              Melqui Martins
              <span>👋</span>
            </h1>
            <h2 className="section-subtitle">
              <div className="line"></div>Frontend Developer
            </h2>
            <p className="section-description">
              Sou um programador Frontend apaixonado e comprometido, sempre em
              busca de aprimoramento e dedicado a criar experiências de usuário
              excepcionais através do meu trabalho.
            </p>
            <Button
              href="https://wa.me/5581981831177"
              target="_blank"
              className="section-message"
              rel="noreferrer"
            >
              Say Hello! <Icon.Ri.RiSendPlaneLine className="icon" />
            </Button>
            <button
              className="section-scroll-down"
              onClick={() => scrollToTop(600)}
            >
              <Icon.Lu.LuMouse className="icon" />
              Scroll down
              <Icon.Fa.FaArrowDown className="icon arrow" />
            </button>
          </Section.Content>
        </Section.Container>
        <Section.Image
          src={require('assets/myPhotos/photo1.png')}
          className="section-home-image"
        />
      </Section.Root>
      <Section.Root classCenter="section-aboutme-center">
        <Section.Header title="Sobre Mim" description="Veja mais" />
        <Section.Container className="section-aboutme-container">
          <Section.Image
            src={require('assets/myPhotos/photo2.png')}
            className="section-aboutme-image"
          />
          <Section.Content className="section-aboutme-content">
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
              anos, dei meus primeiros passos nos estudos de programação em 2020
              e desde então tenho dedicado meu tempo ao aprendizado das
              tecnologias voltadas para o Frontend.
            </p>
            <a href="https://download1073.mediafire.com/nsc8q44w83sg593goMNkWuA26PK0XNDTnGLCF1j4egU5UnUWG626k1HyoGzQdL29FAnzV3Hb9IFSmHOcWYXs2KfpO5gtWp__1KF-mP4vZk9pC6H4L3HMa1fDNcxl-LTuwIg0dPOecU1HcBf3lILb-1nA9Cr38Kn1xi6CTnw4DgcVFRe7/opt1ayoj4c5pkib/Meu+Curr%C3%ADculo.pdf">
              <Button>
                Download CV <Icon.Gr.GrDocumentText className="icon" />
              </Button>
            </a>
          </Section.Content>
        </Section.Container>
      </Section.Root>
      <Section.Root classCenter="section-skills-center">
        <Section.Header
          title="Habilidades"
          description="Veja todas as minhas"
        />
        <Section.Content className="section-skills-content">
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
        </Section.Content>
      </Section.Root>
      <Section.Root classCenter="section-projects-center">
        <Section.Header title="Projetos" description="Veja meus" />
        <Section.Content className="section-projects-content">
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
        </Section.Content>
      </Section.Root>
    </>
  )
}

export default Home
