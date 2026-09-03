import Container from '../components/Container.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import SiteHeader from '../components/SiteHeader.jsx'

function ProjectNotFound() {
  return (
    <div id="top" tabIndex="-1">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader projectView />
      <main className="not-found" id="main-content" tabIndex="-1">
        <Container>
          <p className="section-kicker">Project not found</p>
          <h1>This case study is not available.</h1>
          <a href="#/">← Return to all projects</a>
        </Container>
      </main>
      <SiteFooter />
    </div>
  )
}

export default ProjectNotFound
