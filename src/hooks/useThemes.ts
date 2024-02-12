import { useState, useEffect } from 'react'

const useThemes = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('defaultTheme')
    return savedTheme ? JSON.parse(savedTheme) : 'lightTheme'
  })

  const toggleTheme = () => {
    setTheme((prevTheme: string) =>
      prevTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme',
    )
  }

  useEffect(() => {
    localStorage.setItem('defaultTheme', JSON.stringify(theme))
  }, [theme])

  return { theme, toggleTheme }
}

export default useThemes
