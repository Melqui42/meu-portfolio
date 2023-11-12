import styled from 'styled-components'

export const Root = styled.div`
  width: 450px;
  gap: 2rem;
  display: flex;
  cursor: pointer;
  padding: 2.5rem;
  transition: 0.3s;
  border-radius: 0.6rem;
  background-color: #2d2e32;

  .centerRoot {
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      width: 90%;
    }
  }

  .icon {
    color: #64f4ab;
    font-size: 1.8rem;
  }

  &:hover {
    padding: 2.8rem;
  }

  @media (min-width: 320px) and (max-width: 1050px) {
    width: 250px;
    padding: 1rem;

    .centerRoot {
      width: 270px;

      h1,
      p {
        font-size: 0.8rem;
      }

      span {
        margin-top: 1rem;
      }
    }

    &:hover {
      padding: 1.6rem;
    }
  }

  @media (min-width: 1050px) and (max-width: 1160px) {
    width: 300px;
    padding: 1rem;

    .centerRoot {
      width: 270px;

      h1,
      p {
        font-size: 0.8rem;
      }

      span {
        margin-top: 1rem;
      }
    }

    &:hover {
      padding: 1.6rem;
    }
  }

  @media (min-width: 1160px) and (max-width: 1734px) {
    width: 290px;
    padding: 1rem;
    background-color: #64f4ab;

    .centerRoot {
      width: 290px;

      h1,
      p {
        font-size: 1rem;
      }

      span {
        margin-top: 1rem;
      }
    }

    &:hover {
      padding: 1.6rem;
    }
  }
`
export const Title = styled.h1`
  color: #64f4ab;
  font-weight: 500;
  font-size: 1.8rem;
  font-family: 'Roboto Mono', monospace;
`
export const Description = styled.p`
  color: #95959d;
  line-height: 1.8;
  overflow-wrap: break-word;
  font-family: 'Roboto Mono', monospace;
`
export const Count = styled.span`
  color: #ffffff;
  margin-top: 1.5rem;
  font-size: 0.8rem;
`
