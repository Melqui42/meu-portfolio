import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;

  .icon {
    top: 12px;
    left: 12px;
    color: #ffffff;
    font-size: 1.6rem;
    position: absolute;
  }
`
export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 1rem;
  transition: 0.3s;
  border-radius: 0.6rem;
  background-color: #25262a;
  padding: 1rem 1rem 1rem 3rem;
  border: 1px solid transparent;

  &:focus {
    border: 1px solid #64f4ab;
  }
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 290px;
  border: none;
  resize: none;
  outline: none;
  color: #ffffff;
  font-size: 1rem;
  transition: 0.3s;
  border-radius: 0.6rem;
  background-color: #25262a;
  padding: 1rem 1rem 1rem 3rem;
  border: 1px solid transparent;

  &:focus {
    border: 1px solid #64f4ab;
  }
`
export const Label = styled.label``
export const Action = styled.button`
  border: none;
  padding: 1rem;
  opacity: 0.5;
  cursor: not-allowed;
  font-size: 1.3rem;
  border-radius: 0.6rem;
  background-color: #64f4ab;
  font-family: 'Roboto Mono', monospace;
`
