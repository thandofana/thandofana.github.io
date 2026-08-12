import profile from '../data/profile.js'
import Container from './Container.jsx'

function SiteFooter() {
  const contactLinks = [
    profile.email && { label: 'Email', href: `mailto:${profile.email}` },
    { label: 'GitHub', href: profile.github },
    profile.linkedin && { label: 'LinkedIn', href: profile.linkedin },
  ].filter(Boolean)

  return (
    <footer className="site-footer" id="footer">
      <Container className="site-footer__inner">
        <div>
          <p className="site-footer__name">{profile.name}</p>
          <p className="site-footer__role">{profile.professionalTitle} · {profile.location}</p>
        </div>
        <nav className="site-footer__links" aria-label="Footer navigation">
          {contactLinks.map((link) => {
            const isExternal = link.href.startsWith('http')

            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
              >
                {link.label}
                {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
              </a>
            )
          })}
        </nav>
      </Container>
      <Container className="site-footer__bottom">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top">Back to top ↑</a>
      </Container>
    </footer>
  )
}

export default SiteFooter
