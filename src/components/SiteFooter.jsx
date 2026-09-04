import profile from '../data/profile.js'
import Container from './Container.jsx'

function SiteFooter() {
  return (
    <footer className="site-footer" id="footer">
      <Container className="site-footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <nav className="site-footer__links" aria-label="Footer navigation">
          <a href={`mailto:${profile.email}`}>Email</a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </Container>
    </footer>
  )
}

export default SiteFooter
