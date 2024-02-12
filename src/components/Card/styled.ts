import styled from 'styled-components'

export const CardRoot = styled.div`
  width: 320px;
  display: flex;
  padding: 1rem;
  position: relative;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.backgroundColor.tertiary};
  border: 1px solid ${(props) => props.theme.borderColor.primary};
  box-shadow: 0px 5px 15px 0px ${(props) => props.theme.boxShadow.primary};

  &:hover {
    .card-links {
      opacity: 1;
    }

    .card-content {
      opacity: 0.5;
    }
  }

  @media (min-width: 320px) and (max-width: 1040px) {
    width: 100%;
    max-width: 320px;
    justify-content: center;
  }
`
export const CardContainer = styled.div`
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  align-items: flex-start;
`
export const CardLinks = styled.ul`
  top: 90px;
  gap: 1rem;
  opacity: 0;
  z-index: 1;
  left: 110px;
  display: flex;
  transition: 0.3s;
  position: absolute;
  align-items: center;

  .card-item a {
    color: ${(props) => props.theme.text.quaternary};
    padding: 0.5rem;
    border-radius: 100%;
    background-color: ${(props) => props.theme.backgroundColor.primary};

    .icon {
      font-size: 1.4rem;
    }
  }
`
export const CardImage = styled.img`
  width: 290px;
  height: 180px;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.borderColor.primary};

  @media (min-width: 320px) and (max-width: 1040px) {
    max-width: 100%;
    max-height: 100%;
  }
`
export const CardTitle = styled.h1`
  color: ${(props) => props.theme.text.primary};
  font-size: 1.3rem;
`
export const CardDate = styled.p`
  color: ${(props) => props.theme.text.secondry};
  font-size: 0.9rem;
  line-height: 1.3rem;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  border: 1px solid ${(props) => props.theme.borderColor.secondry};
`
