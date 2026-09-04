import profile from '../data/profile.js'
import Container from './Container.jsx'

function SiteHeader({ projectView = false }) {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="brand" href={projectView ? '#/' : '#top'} aria-label={`${profile.name}, home`}>
          TD
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href={projectView ? '#/' : '#projects'}>Projects</a>
          <a href={profile.resume} target="_blank" rel="noreferrer">
            CV<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </nav>
      </Container>
    </header>
  )
}

export default SiteHeader
