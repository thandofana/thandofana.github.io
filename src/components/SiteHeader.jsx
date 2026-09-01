import { useEffect, useRef, useState } from 'react'
import profile from '../data/profile.js'
import Container from './Container.jsx'

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#background' },
  { label: 'Contact', href: '#contact' },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="brand" href="#top" aria-label={`${profile.name}, home`}>
          <span className="brand__initials" aria-hidden="true">TD</span>
          <span>{profile.name}</span>
        </a>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="site-nav__resume" href={profile.resume} target="_blank" rel="noreferrer">
            CV <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </nav>
      </Container>
    </header>
  )
}

export default SiteHeader
