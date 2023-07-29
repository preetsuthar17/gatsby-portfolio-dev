import React, { useState, useEffect, useRef } from 'react'
import colors from '../utils/colors'
import '../theme/partials/colorsMenu.css'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const ColorMenu = () => {
  const [selectedColor, setSelectedColor] = useState('')

  useEffect(() => {
    const storedColor = localStorage.getItem('selectedColor')
    setSelectedColor(storedColor || '')
  }, [])

  const menuRef = useRef(null)
  const [showColorOptions, setShowColorOptions] = useState(false)

  const handleToggle = () => {
    setShowColorOptions(!showColorOptions)
  }

  const handleColorClick = (color) => {
    setSelectedColor(color)
    localStorage.setItem('selectedColor', color)
    updateThemeColor(color)
  }

  const updateThemeColor = (color) => {
    const root = document.documentElement
    root.style.setProperty('--danger-color', color)
  }

  useEffect(() => {
    if (selectedColor) {
      updateThemeColor(selectedColor)
    }
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowColorOptions(false)
      }
    }

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setShowColorOptions(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [selectedColor])

  return (
    <div className="color-menu" ref={menuRef}>
      <AnchorLink
        to="/#toggle-theme"
        className="color-toggle-btn"
        onAnchorLinkClick={handleToggle}
      >
        🎨
      </AnchorLink>
      {showColorOptions && (
        <div className="color-options">
          {Object.values(colors).map((colorValue) => (
            <button
              key={colorValue}
              className="color-option"
              style={{ backgroundColor: colorValue }}
              onClick={() => handleColorClick(colorValue)}
            ></button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ColorMenu
