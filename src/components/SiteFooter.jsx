import profile from '../data/profile.js'
import Container from './Container.jsx'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <p><strong>{profile.name}</strong> / {profile.professionalTitle}</p>
        <p>© {new Date().getFullYear()} / Built with intention in {profile.location}</p>
        <div className="site-footer__links">
          <a href={profile.resume} download="Thando_Fana_Dlamini_Resume.pdf">Download CV</a>
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </Container>
    </footer>
  )
}

export default SiteFooter
