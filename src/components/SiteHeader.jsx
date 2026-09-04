import profile from '../data/profile.js'
import Container from './Container.jsx'

function SiteHeader({ projectView = false }) {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="brand" href={projectView ? '#/' : '#top'} aria-label={`${profile.name}, home`}>
          {profile.name}
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href={projectView ? '#/' : '#projects'}>
            {projectView ? '← All projects' : 'Projects'}
          </a>
        </nav>
      </Container>
    </header>
  )
}

export default SiteHeader
