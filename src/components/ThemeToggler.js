import React, { useState, useEffect } from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const ThemeToggler = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

    const handleSystemThemeChange = (event) => {
      const newTheme = event.matches ? 'dark' : 'light'
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)
      document.documentElement.setAttribute('data-theme', newTheme)
    }

    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      setTheme(prefersDarkScheme.matches ? 'dark' : 'light')
    }

    prefersDarkScheme.addListener(handleSystemThemeChange)

    return () => {
      prefersDarkScheme.removeListener(handleSystemThemeChange)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const themeIcon = theme === 'light' ? '🌑' : '🌕'

  return (
    <AnchorLink to="/#toggle-theme" onAnchorLinkClick={toggleTheme}>
      {themeIcon}
    </AnchorLink>
  )
}

export default ThemeToggler
