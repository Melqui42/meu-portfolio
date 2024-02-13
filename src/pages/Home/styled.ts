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
