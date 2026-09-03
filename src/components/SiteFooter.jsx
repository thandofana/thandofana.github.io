import profile from '../data/profile.js'
import Container from './Container.jsx'

function SiteFooter() {
  return (
    <footer className="site-footer" id="footer">
      <Container className="site-footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <nav className="site-footer__links" aria-label="Footer navigation">
          {profile.linkedin && <a href={profile.linkedin}>LinkedIn</a>}
          <a href={`mailto:${profile.email}`}>Email</a>
        </nav>
      </Container>
    </footer>
  )
}

export default SiteFooter
