import styled from 'styled-components'

export const ScrollToTop = styled.button`
  z-index: 2;
  bottom: 50px;
  right: 20px;
  position: fixed;
  padding: 0.5rem;
  border-radius: 100%;
  background-color: #2d2d2d;
  border: 1px solid #434343;
  box-shadow: 0px 5px 15px 0px rgba(27, 27, 27, 0.489);

  .icon {
    font-size: 2rem;
    color: #ffffff;
  }
`
export const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  .header-content {
    z-index: 2;
    width: 100%;
    height: 100px;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.body.primary};

    .header-center {
      width: 90%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .header-menu-mobile {
        display: none;
        position: relative;

        .switch-menu {
          background-color: transparent;

          .icon {
            color: ${(props) => props.theme.text.primary};
            font-size: 2.8rem;
          }
        }

        div {
          transition: 0.3s;
          position: absolute;

          .menu-mobile-list {
            gap: 1rem;
            width: 150px;
            display: flex;
            padding: 1rem;
            align-items: center;
            border-radius: 0.5rem;
            flex-direction: column;
            justify-content: center;
            background-color: ${(props) =>
              props.theme.backgroundColor.tertiary};
            border: 1px solid ${(props) => props.theme.borderColor.primary};
            box-shadow: 0px 5px 15px 0px
              ${(props) => props.theme.boxShadow.primary};

            .menu-mobile-item button {
              width: 120px;
              color: ${(props) => props.theme.text.secondry};
              display: flex;
              padding: 0.5rem;
              transition: 0.3s;
              align-items: center;
              justify-content: left;
              border-radius: 0.5rem;
              background-color: transparent;

              &:hover {
                color: ${(props) => props.theme.text.primary};
                background-color: ${(props) =>
                  props.theme.backgroundColor.secondry};
              }
            }
          }

          &.show {
            top: 50px;
            opacity: 1;
          }

          &.hide {
            top: 35px;
            opacity: 0;

            .menu-mobile-list {
              visibility: hidden;
            }
          }
        }
      }

      .header-logo {
        display: flex;
        align-items: center;

        span {
          color: ${(props) => props.theme.text.primary};
          font-weight: 400;
          font-size: 1.4rem;
        }
      }

      .nav {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .nav-list {
          gap: 3rem;
          height: 100%;
          display: flex;
          align-items: center;

          .nav-item {
            height: 100%;

            button {
              height: 100%;
              color: ${(props) => props.theme.text.secondry};
              transition: 0.3s;
              background-color: transparent;
              border-bottom: 2px solid transparent;

              &:hover {
                color: ${(props) => props.theme.text.primary};
                border-color: ${(props) => props.theme.borderColor.tertiary};
              }
            }
          }
        }
      }

      .header-list {
        gap: 1rem;
        display: flex;
        align-items: center;

        .header-item {
          a {
            gap: 0.5rem;
            color: ${(props) => props.theme.text.quaternary};
            padding: 0.8rem;
            transition: 0.3s;
            font-size: 1rem;
            border-radius: 1rem;
            background-color: ${(props) => props.theme.backgroundColor.primary};

            .icon {
              font-size: 1.2rem;
            }

            &:hover {
              color: ${(props) => props.theme.text.quaternary};
              background-color: #18bc64;
            }
          }

          .line {
            width: 1px;
            height: 30px;
            background-color: ${(props) => props.theme.backgroundColor.primary};
          }
        }
      }

      @media (min-width: 320px) and (max-width: 1130px) {
        .header-menu-mobile {
          display: flex;
        }

        .header-logo {
          h1 {
            font-size: 1.3rem;
          }
        }

        .nav {
          display: none;
        }

        .header-list {
          gap: 0rem;

          .header-item {
            button {
              display: none;
            }

            .line {
              display: none;
            }

            a {
              width: 25px;
              height: 25px;
              display: flex;
              padding: 0.3rem;
              border-radius: 100%;

              span {
                display: none;
              }

              .icon {
                font-size: 0.9rem;
              }
            }
          }
        }
      }
    }
  }
`
export const Home = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  .section-center {
    gap: 6rem;
    width: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    .section-container {
      gap: 6rem;
      display: flex;
      align-items: center;

      .social-media-list {
        gap: 2rem;
        display: flex;
        margin-bottom: 4rem;
        flex-direction: column;

        .social-media-item a .icon {
          color: ${(props) => props.theme.text.primary};
          font-size: 1.2rem;
        }
      }

      .section-content {
        gap: 1.5rem;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;

        h1 {
          display: flex;
          color: ${(props) => props.theme.text.primary};
          font-size: 2.8rem;
          position: relative;

          @keyframes welcome {
            0% {
              transform: rotate(15deg);
            }
            50% {
              transform: rotate(45deg);
            }
            100% {
              transform: rotate(15deg);
            }
          }

          span {
            top: -20px;
            right: -45px;
            display: flex;
            font-size: 2.8rem;
            position: absolute;
            animation-duration: 2s;
            animation-name: welcome;
            transform-origin: bottom;
            animation-iteration-count: infinite;
          }
        }

        h2 {
          gap: 1rem;
          display: flex;
          color: ${(props) => props.theme.text.secondry};
          font-weight: 400;
          font-size: 1.6rem;
          align-items: center;

          .line {
            width: 80px;
            height: 1px;
            background-color: ${(props) =>
              props.theme.backgroundColor.quaternary};
          }
        }

        p {
          width: 500px;
          color: ${(props) => props.theme.text.secondry};
          font-size: 1.1rem;
          font-weight: 400;
          line-height: 1.3rem;
        }

        .section-message {
          gap: 0.4rem;
          padding: 1rem;
          display: flex;
          color: ${(props) => props.theme.text.quaternary};
          align-items: center;
          border-radius: 1rem;
          background-color: ${(props) => props.theme.backgroundColor.primary};

          .icon {
            font-size: 1.5rem;
          }
        }

        .section-scroll-down {
          gap: 0.5rem;
          color: ${(props) => props.theme.text.primary};
          display: flex;
          margin-top: 6rem;
          transition: 0.3s;
          position: relative;
          align-items: center;

          @keyframes arrow {
            0% {
              top: -1px;
            }
            50% {
              top: 6px;
            }
            100% {
              top: 0px;
            }
          }

          .icon {
            color: ${(props) => props.theme.text.primary};
            font-size: 1.2rem;

            &.arrow {
              top: 0px;
              right: -26px;
              position: absolute;
            }
          }

          .arrow {
            font-size: 1rem;
            animation-duration: 0.6s;
            animation-name: arrow;
            transform-origin: bottom;
            animation-iteration-count: infinite;
          }
        }
      }
    }

    img {
      width: 380px;
      border-radius: 100%;
    }

    .section-content {
      gap: 1.5rem;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;

      span {
        color: ${(props) => props.theme.text.secondry};
        font-size: 1.2rem;
        font-weight: bold;
      }

      h1 {
        color: ${(props) => props.theme.text.primary};
        font-size: 2.8rem;
      }

      h2 {
        gap: 1rem;
        display: flex;
        color: ${(props) => props.theme.text.secondry};
        font-weight: 400;
        font-size: 1.6rem;
        align-items: center;

        .line {
          width: 80px;
          height: 1px;
          background-color: ${(props) => props.theme.backgroundColor.primary};
        }
      }

      p {
        width: 500px;
        color: ${(props) => props.theme.text.secondry};
        font-size: 1.1rem;
        line-height: 1.3rem;
        font-weight: lighter;
      }

      .section-scroll-down {
        gap: 0.5rem;
        color: ${(props) => props.theme.text.primary};
        display: flex;
        margin-top: 6rem;
        transition: 0.3s;
        align-items: center;
        background-color: transparent;

        .icon {
          color: ${(props) => props.theme.text.primary};
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 1064px) {
    height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;

    .section-center {
      gap: 1rem;
      width: 90%;
      align-items: center;
      justify-content: center;
      flex-direction: column-reverse;

      img {
        width: 150px;
      }

      .section-container {
        .social-media-list {
          display: none;
        }

        .section-content {
          text-align: center;
          align-items: center;

          h1 {
            font-size: 1.8rem;

            span {
              top: -15px;
              right: -25px;
              font-size: 1.8rem;
            }
          }

          h2 {
            font-size: 1.2rem;
            flex-direction: column;
          }

          p {
            width: 100%;
            max-width: 500px;
          }

          .section-scroll-down {
            margin-top: 1rem;
          }
        }
      }

      .section-content {
        text-align: center;

        span {
          font-size: 1rem;
        }

        h1 {
          font-size: 2rem;
        }

        h2 {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (min-width: 755px) and (max-width: 1064px) {
    .section-center img {
      width: 270px;
    }
  }
`
export const AboutMe = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  .section-center {
    gap: 4rem;
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .section-header {
      text-align: center;

      span {
        color: ${(props) => props.theme.text.secondry};
      }

      h1 {
        color: ${(props) => props.theme.text.primary};
        font-size: 2.5rem;
      }
    }

    .section-container {
      gap: 8rem;
      display: flex;
      align-items: flex-start;

      img {
        width: 400px;
        border-radius: 2rem;
      }

      .section-content {
        gap: 2rem;
        width: 490px;
        display: flex;
        flex-direction: column;

        .section-list {
          gap: 2rem;
          display: flex;

          .section-item .card {
            width: 110px;
            gap: 0.6rem;
            display: flex;
            padding: 1rem;
            border-radius: 1rem;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: ${(props) =>
              props.theme.backgroundColor.tertiary};
            border: 1px solid ${(props) => props.theme.borderColor.primary};
            box-shadow: 0px 5px 15px 0px
              ${(props) => props.theme.boxShadow.primary};

            h1 {
              color: ${(props) => props.theme.text.primary};
            }

            p {
              color: ${(props) => props.theme.text.primary};
            }

            .icon {
              font-size: 1.5rem;
              color: ${(props) => props.theme.text.primary};
            }
          }
        }

        .text {
          color: ${(props) => props.theme.text.secondry};
          font-size: 1.1rem;
          line-height: 1.3rem;
        }

        a {
          max-width: 180px;
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 1130px) {
    height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;

    .section-center {
      .section-header {
        h1 {
          font-size: 2rem;
        }
      }

      .section-container {
        img {
          display: none;
        }

        .section-content {
          width: 100%;
          align-items: center;

          .section-list {
            width: 100%;
            align-items: center;
            flex-direction: column;

            .section-item .card {
              width: 250px;
            }
          }

          .text {
            text-align: center;
          }
        }
      }
    }
  }

  @media (min-width: 720px) and (max-width: 1130px) {
    .section-center .section-container .section-content {
      .section-list {
        flex-direction: row;
        justify-content: center;

        .section-item .card {
          width: 150px;
        }
      }

      .text {
        max-width: 655px;
      }
    }
  }
`
export const Skills = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  .section-center {
    gap: 4rem;
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .section-header {
      text-align: center;

      span {
        color: ${(props) => props.theme.text.secondry};
      }

      h1 {
        color: ${(props) => props.theme.text.primary};
        font-size: 2.5rem;
      }
    }

    .section-content {
      gap: 5rem;
      display: flex;
      align-items: center;

      .card {
        gap: 2rem;
        width: 400px;
        display: flex;
        padding: 1rem;
        border-radius: 1rem;
        align-items: center;
        flex-direction: column;
        background-color: ${(props) => props.theme.backgroundColor.tertiary};
        border: 1px solid ${(props) => props.theme.borderColor.primary};
        box-shadow: 0px 5px 15px 0px ${(props) => props.theme.boxShadow.primary};

        .card-title {
          color: ${(props) => props.theme.text.primary};
          font-size: 1.2rem;
        }

        .card-content {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-around;

          .card-list {
            gap: 2rem;
            display: flex;
            flex-direction: column;

            .card-item {
              gap: 1rem;
              display: flex;
              align-items: center;

              .icon {
                color: ${(props) => props.theme.text.primary};
                font-size: 1.2rem;
              }

              div {
                h1 {
                  color: ${(props) => props.theme.text.primary};
                  font-size: 1.1rem;
                }

                p {
                  color: ${(props) => props.theme.text.primary};
                  font-size: 1rem;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 1040px) {
    height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;

    .section-center {
      .section-header {
        h1 {
          font-size: 2rem;
        }
      }

      .section-content {
        gap: 2rem;
        flex-direction: column;

        .card {
          width: auto;

          .card-title {
            font-size: 1.2rem;
            text-align: center;
          }

          .card-content {
            gap: 2rem;
            flex-direction: column;
          }
        }
      }
    }
  }

  @media (min-width: 810px) and (max-width: 1040px) {
    height: 600px;

    .section-center .section-content {
      gap: 2rem;
      align-items: flex-start;
      flex-direction: row;
    }
  }
`
export const Projects = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  .section-center {
    gap: 4rem;
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .section-header {
      text-align: center;

      span {
        color: ${(props) => props.theme.text.secondry};
      }

      h1 {
        color: ${(props) => props.theme.text.primary};
        font-size: 2.5rem;
      }
    }

    .section-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .section-list {
        height: 415px;
        display: grid;
        grid-row-gap: 3rem;
        grid-column-gap: 6rem;
        grid-template-rows: 320px 320px 320px;
        grid-template-columns: 320px 320px 320px;

        .section-item {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 1040px) {
    height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;

    .section-center {
      .section-header {
        h1 {
          font-size: 2rem;
        }
      }

      .section-content .section-list {
        width: 100%;
        height: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
      }
    }
  }
`
