import styled from 'styled-components'

export const SectionRoot = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  .section-center {
    width: 75%;
    display: flex;
    align-items: center;

    &.section-home-center {
      flex-direction: row;
      justify-content: space-between;

      @media (min-width: 320px) and (max-width: 1064px) {
        gap: 1rem;
        width: 90%;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
      }
    }

    &.section-aboutme-center,
    &.section-skills-center,
    &.section-projects-center {
      gap: 4rem;
      flex-direction: column;
      justify-content: center;
    }
  }

  @media (min-width: 320px) and (max-width: 1064px) {
    height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`
export const SectionImage = styled.img`
  width: 400px;

  &.section-home-image {
    border-radius: 100%;
  }

  &.section-aboutme-image {
    border-radius: 2rem;
  }

  @media (min-width: 320px) and (max-width: 1064px) {
    width: 150px;

    &.section-aboutme-image {
      display: none;
    }
  }

  @media (min-width: 755px) and (max-width: 1064px) {
    width: 270px;
  }
`
export const SectionContainer = styled.div`
  display: flex;

  &.section-home-container {
    gap: 6rem;
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

    @media (min-width: 320px) and (max-width: 1064px) {
      .social-media-list {
        display: none;
      }
    }
  }

  &.section-aboutme-container {
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`
export const SectionContent = styled.article`
  display: flex;
  flex-direction: column;

  &.section-home-content {
    gap: 1.5rem;
    align-items: flex-start;
    justify-content: center;

    .section-title {
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

    .section-subtitle {
      gap: 1rem;
      display: flex;
      color: ${(props) => props.theme.text.secondry};
      font-weight: 400;
      font-size: 1.6rem;
      align-items: center;

      .line {
        width: 80px;
        height: 1px;
        background-color: ${(props) => props.theme.backgroundColor.quaternary};
      }
    }

    .section-description {
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
      background-color: transparent;

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

    @media (min-width: 320px) and (max-width: 1064px) {
      text-align: center;
      align-items: center;

      .section-title {
        font-size: 1.8rem;

        span {
          top: -15px;
          right: -25px;
          font-size: 1.8rem;
        }
      }

      .section-subtitle {
        font-size: 1.2rem;
        flex-direction: column;
      }

      .section-description {
        width: 100%;
        max-width: 500px;
      }

      .section-scroll-down {
        margin-top: 1rem;
      }
    }
  }

  &.section-aboutme-content {
    gap: 2rem;
    width: 490px;

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
        background-color: ${(props) => props.theme.backgroundColor.tertiary};
        border: 1px solid ${(props) => props.theme.borderColor.primary};
        box-shadow: 0px 5px 15px 0px ${(props) => props.theme.boxShadow.primary};

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

    @media (min-width: 320px) and (max-width: 1130px) {
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

    @media (min-width: 720px) and (max-width: 1130px) {
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

  &.section-skills-content {
    gap: 5rem;
    align-items: center;
    flex-direction: row;

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

    @media (min-width: 320px) and (max-width: 1040px) {
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

    @media (min-width: 810px) and (max-width: 1040px) {
      gap: 2rem;
      flex-direction: row;
      align-items: flex-start;
    }
  }

  &.section-projects-content {
    width: 100%;
    align-items: center;
    flex-direction: row;
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

    @media (min-width: 320px) and (max-width: 1040px) {
      .section-list {
        width: 100%;
        height: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
      }
    }
  }
`
export const SectionHeader = styled.div`
  text-align: center;

  span {
    color: ${(props) => props.theme.text.secondry};
  }

  h1 {
    color: ${(props) => props.theme.text.primary};
    font-size: 2.5rem;
  }

  @media (min-width: 320px) and (max-width: 1064px) {
    h1 {
      font-size: 2rem;
    }
  }
`
