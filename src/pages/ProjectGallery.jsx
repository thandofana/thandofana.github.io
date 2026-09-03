import Container from '../components/Container.jsx'
import ProjectGrid from '../components/projects/ProjectGrid.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import SiteHeader from '../components/SiteHeader.jsx'
import projects from '../data/projects.js'

function ProjectGallery() {
  return (
    <div id="top" tabIndex="-1">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />

      <main id="main-content" tabIndex="-1">
        <section className="gallery-intro" aria-labelledby="gallery-title">
          <Container>
            <h1 id="gallery-title">THANDO.</h1>
            <p>Data Analytics · Machine Learning · Data Science</p>
          </Container>
        </section>

        <section className="projects-gallery" id="projects" aria-labelledby="projects-title">
          <Container>
            <div className="projects-gallery__heading">
              <div>
                <p className="section-kicker">Selected</p>
                <h2 id="projects-title">Projects.</h2>
              </div>
              <p>
                A focused collection of practical analytics, data science and machine-learning
                case studies.
              </p>
            </div>

            <ProjectGrid projects={projects} />
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default ProjectGallery
