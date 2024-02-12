import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'

import useThemes from 'hooks/useThemes'

import GlobalStyle, { Page } from 'styles/globalStyle'
import themes from 'styles/themes'

import Home from 'pages/Home'

import reportWebVitals from './reportWebVitals'

const App = () => {
  const { theme } = useThemes()
  const selectedTheme = theme as keyof typeof themes

  const [toggleTheme, setToggleTheme] = useState(selectedTheme)

  return (
    <React.StrictMode>
      <GlobalStyle />
      <ThemeProvider
        theme={
          toggleTheme === 'lightTheme' ? themes.lightTheme : themes.darkTheme
        }
      >
        <Page>
          <Home theme={toggleTheme} setTheme={setToggleTheme} />
        </Page>
      </ThemeProvider>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
reportWebVitals()
