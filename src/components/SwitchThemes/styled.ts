import styled from 'styled-components'

export const SwitchThemes = styled.button`
  gap: 1rem;
  width: 64px;
  padding: 0.5rem;
  position: relative;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.backgroundColor.secondry};

  .icon {
    z-index: 1;
    color: ${(props) => props.theme.text.tertiary};
    transition: 0.3s;
    font-size: 1rem;
  }

  &.ligth {
    .sun {
      color: ${(props) => props.theme.text.quaternary};
    }

    &::before {
      left: 0px;
      content: '';
      width: 32px;
      height: 32px;
      transition: 0.3s;
      position: absolute;
      border-radius: 2rem;
      background-color: ${(props) => props.theme.backgroundColor.primary};
    }
  }

  &.dark {
    .moon {
      color: ${(props) => props.theme.text.quaternary};
    }

    &::before {
      left: 32px;
      content: '';
      width: 32px;
      height: 32px;
      transition: 0.3s;
      position: absolute;
      border-radius: 2rem;
      background-color: ${(props) => props.theme.backgroundColor.primary};
    }
  }
`
