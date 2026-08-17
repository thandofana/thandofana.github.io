import { useEffect, useRef, useState } from 'react'
import profile from '../data/profile.js'
import Container from './Container.jsx'

const navigation = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Background', href: '#background' },
  { label: 'Contact', href: '#contact' },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const navigationRef = useRef(null)

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

  useEffect(() => {
    if (menuOpen) navigationRef.current?.querySelector('a')?.focus()
  }, [menuOpen])

  const closeMenu = (event) => {
    const targetId = event.currentTarget.hash
    setMenuOpen(false)

    if (targetId) {
      window.requestAnimationFrame(() => {
        document.querySelector(targetId)?.focus({ preventScroll: true })
      })
    }
  }

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="brand" href="#top" aria-label={`${profile.name}, home`}>
          <span className="brand__mark" aria-hidden="true">TD</span>
          <span className="brand__name">{profile.name}</span>
        </a>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <span className="menu-toggle__icon" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>

        <nav
          ref={navigationRef}
          id="primary-navigation"
          className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  )
}

export default SiteHeader
