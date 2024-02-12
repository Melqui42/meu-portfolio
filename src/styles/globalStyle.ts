import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	* {
		margin: 0%;
		padding: 0%;
		list-style: none;
		text-decoration: none;
		font-family: "Poppins", sans-serif;

		button, a {
			border: none;
			display: flex;
			font-size: 1rem;
			cursor: pointer;
			align-items: center;
			justify-content: center;
		}
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		&::-webkit-scrollbar {
			width: 20px;
			background-color: #545454;
		}

		&::-webkit-scrollbar-thumb {
			background-color: #898989;
		}
	}
`
export const Page = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${(props) => props.theme.body.primary};
`

export default GlobalStyle
