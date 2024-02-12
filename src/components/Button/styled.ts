import styled from 'styled-components'

export const Button = styled.a`
  gap: 0.4rem;
  max-width: 140px;
  padding: 1rem;
  display: flex;
  color: ${(props) => props.theme.text.quaternary};
  margin-top: 1rem;
  align-items: center;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.backgroundColor.primary};

  .icon {
    font-size: 1.5rem;
  }
`
