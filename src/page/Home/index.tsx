import { useState } from 'react'

import Card from '../../components/Card'
import Field from '../../components/Field'

import * as Bi from 'react-icons/bi'
import * as Ai from 'react-icons/ai'
import * as Fa from 'react-icons/fa'
import * as Bs from 'react-icons/bs'
import * as Hi from 'react-icons/hi'
import * as Io5 from 'react-icons/io5'
import * as Im from 'react-icons/im'
import * as Md from 'react-icons/md'

import * as C from './styled'

const Home: React.FC = () => {
  const [menuMobile, setMenuMobile] = useState(false)
  return (
    <>
      <C.Header id="Home">
        <div className="container">
          <div className="center">
            <div className="content">
              <a href="#" className="logo">
                <span className="firstName">Melqui</span>
                <span className="lastName">Martins</span>
              </a>
              <nav className={!menuMobile ? 'menuClosed' : 'menuOpen'}>
                <ul className="navigationLinks">
                  <li className="item">
                    <a href="#Home">
                      <span>&lt;</span>Início<span>&gt;</span>
                    </a>
                  </li>
                  <li className="item">
                    <a href="#AboutMe">
                      <span>&lt;</span>Sobre Mim<span>&gt;</span>
                    </a>
                  </li>
                  <li className="item">
                    <a href="#Skills">
                      <span>&lt;</span>Habilidades<span>&gt;</span>
                    </a>
                  </li>
                  <li className="item">
                    <a href="#Projects">
                      <span>&lt;</span>Projetos<span>&gt;</span>
                    </a>
                  </li>
                  <li className="item">
                    <a href="#ContactMe">
                      <span>&lt;</span>Contatos<span>&gt;</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <ul className="socialLinks">
                <li className="item">
                  <a
                    href="https://www.linkedin.com/in/melquisedeque-martins-54108a25a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Ai.AiFillLinkedin className="icon" />
                    Linkedin
                  </a>
                </li>
                <li className="item">
                  <a
                    href="https://github.com/Melqui42"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Ai.AiOutlineGithub className="icon" />
                    Github
                  </a>
                </li>
                <li className="item">
                  <a
                    href="https://www.instagram.com/melqui_m4rtins/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Ai.AiFillInstagram className="icon" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="menuMobileButton"
              onClick={() => setMenuMobile(!menuMobile)}
            >
              {!menuMobile ? (
                <Hi.HiMenu className="icon" />
              ) : (
                <Ai.AiOutlineClose className="icon" />
              )}
            </button>
          </div>
        </div>
      </C.Header>
      <C.HomeSection>
        <div className="center">
          <article className="content">
            <span className="job">Front-End Developer</span>
            <h1 className="title">Falar é fácil. mostre-me o código</h1>
            <p className="description">
              Olá, meu nome é Melquisedeque, mas podem me chamar de Melqui.
              Tenho 17 anos e iniciei meus estudos em programação em 2020. Ao
              longo desse período, tenho me dedicado ao aprendizado de
              tecnologias voltadas para o Front-End.
            </p>
            <button className="downloadCVButton">DONWLOAD MY CV!</button>
            <ul className="statsList">
              <li className="item">
                <div className="card">
                  <h1 className="count">2</h1>
                  <div className="text">
                    <p>ANOS DE</p>
                    <p>ESTUDOS</p>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="card">
                  <h1 className="count">14</h1>
                  <div className="text">
                    <p>PROJETOS</p>
                    <p>COMPLETOS</p>
                  </div>
                </div>
              </li>
            </ul>
          </article>
          <img
            src={require('../../assets/images/myPhotos/myPhoto.png')}
            alt="Melqui's Photo"
            className="personalPhoto"
          />
        </div>
      </C.HomeSection>
      <C.Sections>
        <C.AboutMeSection id="AboutMe">
          <div className="center">
            <ul className="cardList">
              <li className="item">
                <Card.Root icon={Fa.FaFigma} cardColor={true}>
                  <Card.Title>Design</Card.Title>
                  <Card.Description>
                    Eu projetei várias páginas de destino e também criei um
                    sistema de design.
                  </Card.Description>
                  <Card.Count>20 PROJETOS</Card.Count>
                </Card.Root>
              </li>
              <li className="item">
                <Card.Root icon={Bs.BsCodeSlash} cardColor={true}>
                  <Card.Title>Front-End</Card.Title>
                  <Card.Description>
                    Sou desenvolvedor front-end com experiência na construção de
                    sites responsivos e otimizados.
                  </Card.Description>
                  <Card.Count>20 PROJETOS</Card.Count>
                </Card.Root>
              </li>
              <li className="item">
                <Card.Root icon={Ai.AiOutlineCode} cardColor={true}>
                  <Card.Title>Back-End</Card.Title>
                  <Card.Description>
                    Tenho experiência no desenvolvimento de sistemas back-end e
                    APIs rápidos e otimizados.
                  </Card.Description>
                  <Card.Count>20 PROJETOS</Card.Count>
                </Card.Root>
              </li>
            </ul>
            <article className="content">
              <span className="heading">Introdução</span>
              <h1 className="title">Olá, eu sou Melqui Martins!</h1>
              <p className="text">
                Tenho foco no desenvolvimento com JavaScript, ReactJS e Sass.
                Além disso, venho estudando tecnologias voltadas para o Back
                End, como o Node.js. Considero-me ágil na aprendizagem de novas
                linguagens de programação, sempre me preparando para superar
                desafios e alcançar meus objetivos. Estou ansioso para integrar
                minha primeira oportunidade de trabalho, onde poderei adquirir
                conhecimentos e aplicar minhas habilidades. Se eu pudesse me
                definir em duas palavras, certamente seriam: esforçado e
                otimista.
              </p>
            </article>
          </div>
        </C.AboutMeSection>
        <C.SkillsSection id="Skills">
          <div className="center">
            <ul className="skillsList">
              <li className="item">
                <img
                  src={require('../../assets/images/icons/javaScript.png')}
                  alt="JavaScript Logo"
                />
              </li>
              <li className="item">
                <img
                  src={require('../../assets/images/icons/typeScript.png')}
                  alt="TypeScript Logo"
                />
              </li>
              <li className="item">
                <img
                  src={require('../../assets/images/icons/nodeJS.png')}
                  alt="Node.js Logo"
                />
              </li>
              <li className="item">
                <img
                  src={require('../../assets/images/icons/reactJS.png')}
                  alt="React.js Logo"
                />
              </li>
              <li className="item">
                <img
                  src={require('../../assets/images/icons/mySQL.png')}
                  alt="MySQL Logo"
                />
              </li>
              <li className="item">
                <img
                  src={require('../../assets/images/icons/mongoDB.png')}
                  alt="MongoDB Logo"
                />
              </li>
            </ul>
          </div>
        </C.SkillsSection>
      </C.Sections>
      <C.ContactMeSection id="ContactMe">
        <div className="center">
          <div className="top">
            <p className="heading">Contatos</p>
            <h1 className="title">Entre em contato comigo</h1>
          </div>
          <article className="container">
            <ul className="cardList">
              <li className="item">
                <Card.Root icon={Io5.IoCallSharp} cardColor={false}>
                  <Card.Title>Telefone</Card.Title>
                  <Card.Description>+55 81 98183-1177</Card.Description>
                </Card.Root>
              </li>
              <li className="item">
                <Card.Root icon={Md.MdEmail} cardColor={false}>
                  <Card.Title>Email</Card.Title>
                  <Card.Description>
                    melquisedeque.martins42@gmail.com
                  </Card.Description>
                </Card.Root>
              </li>
              <li className="item">
                <Card.Root icon={Im.ImLocation2} cardColor={false}>
                  <Card.Title>Localização</Card.Title>
                  <Card.Description>
                    Brasil - Pernambuco, Paulista
                  </Card.Description>
                </Card.Root>
              </li>
            </ul>
            <div className="content">
              <ul className="inputList">
                <li className="item">
                  <Field.Root icon={Bi.BiSolidUser}>
                    <Field.Input placeholder="Seu nome..." />
                  </Field.Root>
                </li>
                <li className="item">
                  <Field.Root icon={Md.MdEmail}>
                    <Field.Input placeholder="Seu email..." />
                  </Field.Root>
                </li>
              </ul>
              <Field.Root icon={Ai.AiFillProject}>
                <Field.Input placeholder="O projeto..." />
              </Field.Root>
              <Field.Root icon={Ai.AiFillMessage} style={{ height: '100%' }}>
                <Field.TextArea placeholder="Mensagem..." />
              </Field.Root>
              <Field.Action>Enviar</Field.Action>
            </div>
          </article>
        </div>
      </C.ContactMeSection>
      <C.Footer>
        <div className="center">
          <article className="content">
            <a href="#" className="logo">
              <span className="firstName">Melqui</span>
              <span className="lastName">Martins</span>
            </a>
            <div className="line"></div>
            <div className="texts">
              <ul className="navigationLinks">
                <li className="item">
                  <a href="#Home">
                    <span>&lt;</span>Início<span>&gt;</span>
                  </a>
                </li>
                <li className="item">
                  <a href="#AboutMe">
                    <span>&lt;</span>Sobre Mim<span>&gt;</span>
                  </a>
                </li>
                <li className="item">
                  <a href="#Skills">
                    <span>&lt;</span>Habilidades<span>&gt;</span>
                  </a>
                </li>
                <li className="item">
                  <a href="#Projects">
                    <span>&lt;</span>Projetos<span>&gt;</span>
                  </a>
                </li>
                <li className="item">
                  <a href="#ContactMe">
                    <span>&lt;</span>Contatos<span>&gt;</span>
                  </a>
                </li>
              </ul>
              <p>@2023 Melqui Martins - Portfolio criador por mim</p>
            </div>
          </article>
          <div className="others">
            <ul className="socialLinks">
              <li className="item">
                <a
                  href="https://www.linkedin.com/in/melquisedeque-martins-54108a25a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Ai.AiFillLinkedin className="icon" />
                  Linkedin
                </a>
              </li>
              <li className="item">
                <a
                  href="https://github.com/Melqui42"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Ai.AiOutlineGithub className="icon" />
                  Github
                </a>
              </li>
              <li className="item">
                <a
                  href="https://www.instagram.com/melqui_m4rtins/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Ai.AiFillInstagram className="icon" />
                  Instagram
                </a>
              </li>
            </ul>
            <p>melquisedeque.martins42@gmail.com</p>
          </div>
        </div>
      </C.Footer>
    </>
  )
}

export default Home
