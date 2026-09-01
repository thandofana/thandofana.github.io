import profile from '../data/profile.js'
import Container from './Container.jsx'

function SiteFooter() {
  return (
    <footer className="site-footer" id="footer">
      <Container className="site-footer__inner">
        <div>
          <strong>{profile.name}</strong>
          <p>{profile.professionalTitle}</p>
        </div>
        <div className="site-footer__links">
          <a href={profile.resume} download="Thando_Fana_Dlamini_Resume.pdf">Download CV</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <p className="site-footer__copyright">© {new Date().getFullYear()} {profile.name}</p>
      </Container>
    </footer>
  )
}

export default SiteFooter
