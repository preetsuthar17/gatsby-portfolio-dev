import React, { useEffect, useState } from 'react'
import { useSiteMeta } from '../../utils/hooks/useSiteMeta'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import brandLogo from './svgs/nano-favicon.png'
import '../../theme/partials/_navbar.css'
import ThemeToggler from '../ThemeToggler'
import ColorMenu from '../ColorMenu'

const Navbar = () => {
  const { title } = useSiteMeta()
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navbarClassName = isSticky ? 'navbar sticky' : 'navbar'

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav id="top-nav" className={navbarClassName}>
      <div className="brand-title">
        <img
          style={{
            transform:
              'translate(0.000000,1080.000000) scale(0.100000,-0.100000)',
          }}
          width="60px"
          height="60px"
          id="brand_logo"
          src={brandLogo}
          alt="Preet suthar"
        />
      </div>

      <button
        className="toggle-button"
        style={{ border: 'none', outline: 'none', color: '#454647' }}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <ColorMenu />
          </li>
          <li>
            <ThemeToggler />
          </li>
          <li>
            <AnchorLink className="" to="/#top-nav">
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="" to="/#projects">
              Projects
            </AnchorLink>
          </li>

          <li>
            <a href="https://blog.preetsuthar.me">Blogs</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
