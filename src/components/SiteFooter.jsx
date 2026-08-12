import profile from '../data/profile.js'
import Container from './Container.jsx'

function SiteFooter() {
  return (
    <footer className="site-footer" id="footer">
      <Container className="site-footer__bottom">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top">Back to top ↑</a>
      </Container>
    </footer>
  )
}

export default SiteFooter
