import styled from 'styled-components'

export const Header = styled.header`
  height: 100px;

  .container {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    background-color: #2d2e32;

    .center {
      gap: 2rem;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
          gap: 3px;
          display: flex;
          font-size: 1.8rem;

          .firstName {
            color: #ffffff;
            font-weight: bold;
          }

          .lastName {
            color: #d9d9d9;
          }
        }

        .menuClosed,
        .menuOpen {
          .navigationLinks {
            gap: 1rem;
            display: flex;
            align-items: center;

            .item {
              a {
                gap: 0.5rem;
                display: flex;
                color: #ffffff;
                transition: 0.3s;
                font-family: 'Roboto Mono', monospace;

                span {
                  opacity: 0;
                  transition: 0.3s;
                }

                &:hover {
                  color: #64f4ab;

                  span {
                    opacity: 1;
                  }
                }
              }
            }
          }
        }

        .socialLinks {
          gap: 2rem;
          display: flex;
          align-items: center;

          .item {
            a {
              gap: 0.5rem;
              display: flex;
              color: #ffffff;
              transition: 0.3s;
              align-items: center;
              justify-content: center;

              .icon {
                font-size: 1.4rem;
              }

              &:hover {
                color: #64f4ab;
              }
            }
          }
        }
      }

      .others {
        gap: 1rem;
        display: flex;
        align-items: center;

        .item {
          .emailButton,
          .menuMobileButton {
            padding: 0.8rem;
            transition: 0.3s;
            border-radius: 100%;
            background-color: transparent;

            .icon {
              color: #ffffff;
              transition: 0.3s;
              font-size: 1.5rem;
            }

            &:hover {
              background-color: #333438;

              .icon {
                color: #64f4ab;
              }
            }
          }

          .menuMobileButton {
            display: none;
          }
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 1300px) {
    .container {
      z-index: 1;
      position: fixed;

      .center {
        width: 100%;
        position: relative;

        .content {
          margin-left: 2rem;
          flex-direction: column;
          align-items: flex-start;

          .menuClosed,
          .menuOpen {
            top: 100px;
            left: 0;
            width: 100vw;
            overflow: hidden;
            max-height: 500px;
            position: absolute;
            background-color: #25262a;
            border-radius: 0rem 0rem 2rem 2rem;
            transition: max-height 0.3s ease-in-out;

            .navigationLinks {
              gap: 2rem;
              flex-direction: column;
              padding: 2rem 0rem 2rem 0rem;
            }

            &.menuClosed {
              max-height: 0;
            }

            &.menuOpen {
              max-height: 500px;
            }
          }

          .socialLinks {
            gap: 1rem;
          }
        }

        .others {
          margin-right: 2rem;

          .item {
            .emailButton {
              display: none;
            }

            .menuMobileButton {
              display: flex;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1300px) and (max-width: 1400px) {
    .container {
      .center {
        width: 90%;
      }
    }
  }
`
export const HomeSection = styled.section`
  height: 845px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d2e32;

  .center {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .content {
      gap: 1rem;
      width: 600px;
      display: flex;
      flex-direction: column;

      .job {
        width: 185px;
        padding: 0.5rem;
        border-radius: 0.2rem;
        background-color: #64f4ab;
        font-family: 'Roboto Mono', monospace;
      }

      .title {
        width: 100%;
        color: #ffffff;
        font-size: 3rem;
        font-weight: 300;
        font-family: 'Roboto Mono', monospace;
      }

      .description {
        width: 100%;
        color: #95959d;
        line-height: 1.8;
        font-family: 'Roboto Mono', monospace;
      }

      .downloadCVButton {
        width: 188px;
        color: #64f4ab;
        margin-top: 4rem;
        font-size: 1.3rem;
        font-weight: bold;
        background-color: transparent;
        border-bottom: 2px solid #64f4ab;
        font-family: 'Roboto Mono', monospace;
      }

      .statsList {
        gap: 1rem;
        width: 100%;
        height: 115px;
        display: flex;
        margin-top: 5rem;
        align-items: center;
        justify-content: left;

        .item {
          .card {
            gap: 1rem;
            height: 70px;
            width: 185px;
            display: flex;
            color: #ffffff;
            padding: 0.8rem;
            cursor: pointer;
            transition: 0.3s;
            align-items: center;
            border-radius: 0.6rem;
            background-color: #25262a;

            .count {
              font-size: 3.4rem;
            }

            .text {
              p {
                color: #ffffff;
              }
            }

            &:hover {
              padding: 1rem;
            }
          }

          &:nth-child(1) .card {
            width: 135px;
          }
        }
      }
    }

    .personalPhoto {
      border-radius: 1rem;
    }
  }

  @media (min-width: 320px) and (max-width: 920px) {
    height: 990px;

    .center {
      gap: 1rem;
      width: 90%;
      height: 100%;
      justify-content: center;
      flex-direction: column-reverse;

      .content {
        width: 100%;
        align-items: center;

        .title {
          font-size: 1.4rem;
          text-align: center;
        }

        .description {
          text-align: center;
        }

        .downloadCVButton {
          margin-top: 2rem;
        }

        .statsList {
          height: 220px;
          display: flex;
          margin-top: 2rem;
          align-items: center;
          flex-direction: column;
          justify-content: center;

          .item {
            .card {
              width: 250px;
              display: flex;
              padding: 0.8rem;
              cursor: pointer;

              .count {
                font-size: 2rem;
              }

              &:hover {
                padding: 1rem;
              }
            }

            &:nth-child(1) .card {
              width: 155px;
            }
          }
        }
      }

      .personalPhoto {
        width: 190px;
      }
    }
  }

  @media (min-width: 550px) and (max-width: 920px) {
    height: 795px;

    .center {
      .content {
        .title {
          font-size: 1.8rem;
        }

        .statsList {
          height: 120px;
          flex-direction: row;
        }
      }
    }
  }

  @media (min-width: 920px) and (max-width: 1238px) {
    .center {
      gap: 1rem;
      width: 90%;
      align-items: flex-start;
      justify-content: space-between;

      .content {
        .title {
          width: 100%;
          font-size: 1.8rem;
        }

        .description {
          width: 100%;
        }

        .downloadCVButton {
          margin-top: 2rem;
        }

        .statsList {
          height: 220px;
          display: flex;
          margin-top: 2rem;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
      }

      .personalPhoto {
        width: 340px;
      }
    }
  }
`
export const Sections = styled.div`
  gap: 6rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #25262a;
  padding: 8rem 0rem 8rem 0rem;

  @media (min-width: 320px) and (max-width: 1535px) {
    gap: 1rem;
    padding: 2rem 0rem 2rem 0rem;
  }
`
export const AboutMeSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .center {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cardList {
      gap: 1rem;
      width: 540px;
      height: 680px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    .content {
      gap: 1.5rem;
      width: 550px;
      display: flex;
      flex-direction: column;

      .heading {
        color: #95959d;
        font-family: 'Roboto Mono', monospace;
      }

      .title {
        width: 100%;
        color: #ffffff;
        font-weight: 400;
        font-size: 2.5rem;
        font-family: 'Roboto Mono', monospace;
      }

      .text {
        width: 100%;
        color: #95959d;
        line-height: 1.8;
        font-family: 'Roboto Mono', monospace;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 920px) {
    .center {
      gap: 1rem;
      width: 90%;
      height: 100%;
      justify-content: center;
      flex-direction: column-reverse;

      .content {
        width: 100%;
        text-align: center;
        align-items: center;
        justify-content: center;

        .title {
          font-size: 1.4rem;
        }

        .text {
          color: #95959d;
        }
      }

      .cardList {
        width: 100%;
        height: 640px;
      }
    }
  }

  @media (min-width: 920px) and (max-width: 1040px) {
    .center {
      width: 90%;
      flex-direction: row;
      justify-content: space-between;

      .content {
        width: 550px;
        text-align: left;
        align-items: flex-start;

        .title {
          font-size: 1.4rem;
        }

        .text {
          color: #95959d;
        }
      }

      .cardList {
        width: 480px;
        height: 640px;
      }
    }
  }

  @media (min-width: 1040px) and (max-width: 1238px) {
    .center {
      width: 90%;
      flex-direction: row;
      justify-content: space-between;

      .cardList {
        width: 350px;
        height: 640px;
      }

      .content {
        width: 550px;
        text-align: left;
        align-items: flex-start;

        .title {
          font-size: 2.2rem;
        }

        .text {
          color: #95959d;
        }
      }
    }
  }

  @media (min-width: 1160px) and (max-width: 1238px) {
    .center {
      .cardList {
        width: 350px;
        height: 740px;
      }
    }
  }

  @media (min-width: 1238px) and (max-width: 1734px) {
    .center {
      flex-direction: row;
      justify-content: space-between;

      .cardList {
        width: 350px;
        height: 740px;
      }

      .content {
        width: 550px;
        text-align: left;
        align-items: flex-start;

        .title {
          font-size: 2.2rem;
        }

        .text {
          color: #95959d;
        }
      }
    }
  }
`
export const SkillsSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .center {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    .skillsList {
      height: 205px;
      display: grid;
      grid-row-gap: 3rem;
      place-items: center;
      grid-column-gap: 6rem;
      grid-template-rows: repeat(4, 80px);
      grid-template-columns: repeat(4, 80px);

      .item:nth-child(5) {
        grid-column: 2 / span 1;
      }

      .item:nth-child(6) {
        grid-column: 3 / span 1;
      }

      .item {
        img {
          width: 70px;
          opacity: 0.5;
          cursor: pointer;
          transition: 0.3s;

          &:hover {
            opacity: 1;
            width: 80px;
          }
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 920px) {
    .center {
      width: 90%;

      .skillsList {
        height: 140px;
        grid-row-gap: 1rem;
        grid-column-gap: 1rem;
        grid-template-rows: repeat(4, 60px);
        grid-template-columns: repeat(4, 60px);

        .item {
          img {
            width: 40px;

            &:hover {
              opacity: 1;
              width: 60px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 920px) and (max-width: 1238px) {
    .center {
      width: 90%;

      .skillsList {
        height: 140px;
        grid-row-gap: 1rem;
        grid-column-gap: 3rem;
        grid-template-rows: repeat(4, 60px);
        grid-template-columns: repeat(4, 60px);

        .item {
          img {
            width: 50px;

            &:hover {
              opacity: 1;
              width: 60px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1040px) and (max-width: 1140px) {
    .center {
      width: 90%;

      .skillsList {
        height: 160px;
        grid-row-gap: 1.5rem;
        grid-column-gap: 3.5rem;
        grid-template-rows: repeat(4, 70px);
        grid-template-columns: repeat(4, 70px);

        .item {
          img {
            width: 60px;

            &:hover {
              opacity: 1;
              width: 70px;
            }
          }
        }
      }
    }
  }
`
export const ContactMeSection = styled.section`
  height: 845px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d2e32;

  .center {
    width: 80%;
    display: flex;
    flex-direction: column;

    .top {
      gap: 1rem;
      display: flex;
      flex-direction: column;

      .title {
        color: #ffffff;
        font-weight: 400;
        font-size: 2.5rem;
        font-family: 'Roboto Mono', monospace;
      }

      .heading {
        color: #95959d;
        font-family: 'Roboto Mono', monospace;
      }
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .cardList {
        gap: 1rem;
        width: 540px;
        height: 550px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      }

      .content {
        gap: 1rem;
        width: 600px;
        display: flex;
        flex-direction: column;

        .inputList {
          gap: 1rem;
          width: 100%;
          display: flex;

          .item {
            width: 100%;
          }
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 720px) {
    height: 1000px;

    .center {
      gap: 1rem;
      width: 90%;
      align-items: center;

      .top {
        text-align: center;

        .title {
          font-size: 1.1rem;
        }
      }

      .container {
        gap: 2rem;
        width: 100%;
        flex-direction: column;

        .cardList {
          width: 290px;
          height: 340px;
        }

        .content {
          width: 280px;

          .inputList {
            flex-direction: column;
          }
        }
      }
    }
  }

  @media (min-width: 720px) and (max-width: 810px) {
    height: 1000px;

    .center {
      gap: 1rem;
      width: 90%;
      align-items: flex-start;

      .top {
        .title {
          font-size: 1.4rem;
        }
      }

      .container {
        gap: 2rem;
        width: 100%;
        flex-direction: row;

        .cardList {
          width: 340px;
          height: 350px;
        }

        .content {
          width: 100%;

          .inputList {
            flex-direction: column;
          }
        }
      }
    }
  }

  @media (min-width: 810px) and (max-width: 1238px) {
    height: 740px;

    .center {
      gap: 1rem;
      width: 90%;
      align-items: flex-start;

      .top {
        .title {
          font-size: 1.4rem;
        }
      }

      .container {
        gap: 2rem;
        width: 100%;

        .cardList {
          width: 530px;
          height: 330px;
        }

        .content {
          width: 100%;
          margin-top: 10px;

          .inputList {
            flex-direction: row;
          }
        }
      }
    }
  }

  @media (min-width: 1040px) and (max-width: 1238px) {
    .center {
      width: 90%;

      .container {
        .cardList {
          width: 620px;
          height: 370px;
        }
      }
    }
  }

  @media (min-width: 1238px) and (max-width: 1734px) {
    height: 740px;

    .center {
      gap: 3rem;
      align-items: flex-start;

      .container {
        gap: 2rem;
        width: 100%;
        align-items: flex-start;

        .cardList {
          width: 620px;
          height: 370px;
        }

        .content {
          width: 100%;

          .inputList {
            flex-direction: row;
          }
        }
      }
    }
  }
`
export const Footer = styled.footer`
  height: 245px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #25262a;

  .center {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .content {
      gap: 2rem;
      display: flex;
      align-items: center;

      .logo {
        gap: 3px;
        display: flex;
        font-size: 1.8rem;

        .firstName {
          color: #ffffff;
          font-weight: bold;
        }

        .lastName {
          color: #d9d9d9;
        }
      }

      .line {
        width: 2px;
        height: 90px;
        background-color: #95959d;
      }

      .texts {
        gap: 0.8rem;
        display: flex;
        flex-direction: column;

        .navigationLinks {
          gap: 1rem;
          display: flex;
          align-items: center;

          .item {
            a {
              gap: 0.5rem;
              display: flex;
              color: #ffffff;
              transition: 0.3s;
              font-family: 'Roboto Mono', monospace;

              span {
                opacity: 0;
                transition: 0.3s;
              }

              &:hover {
                color: #64f4ab;

                span {
                  opacity: 1;
                }
              }
            }
          }
        }

        p {
          color: #95959d;
          margin-left: 1rem;
        }
      }
    }

    .others {
      gap: 0.8rem;
      display: flex;
      flex-direction: column;

      .socialLinks {
        gap: 2rem;
        display: flex;
        align-items: center;

        .item {
          a {
            gap: 0.5rem;
            display: flex;
            color: #ffffff;
            transition: 0.3s;
            align-items: center;
            justify-content: center;

            .icon {
              font-size: 1.4rem;
            }

            &:hover {
              color: #64f4ab;
            }
          }
        }
      }

      p {
        color: #95959d;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 1238px) {
    height: 200px;

    .center {
      gap: 1rem;
      width: 90%;
      flex-direction: column;

      .content {
        gap: 0.5rem;
        flex-direction: column;

        .line {
          display: none;
        }

        .texts {
          .navigationLinks {
            display: none;
          }
        }
      }

      .others {
        align-items: center;
      }
    }
  }

  @media (min-width: 736px) and (max-width: 1238px) {
    height: 160px;

    .center {
      gap: 1rem;
      width: 90%;
      flex-direction: row;

      .content {
        align-items: flex-start;
        flex-direction: column;

        .texts {
          .navigationLinks {
            display: none;
          }
        }
      }

      .others {
        align-items: flex-start;
      }
    }
  }

  @media (min-width: 1238px) and (max-width: 1481px) {
    height: 160px;

    .center {
      gap: 1rem;
      width: 80%;
      flex-direction: row;

      .content {
        align-items: flex-start;
        flex-direction: column;

        .line {
          display: none;
        }

        .texts {
          .navigationLinks {
            display: none;
          }
        }
      }

      .others {
        align-items: flex-start;
      }
    }
  }
`
