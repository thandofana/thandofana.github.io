import Button from '../components/Button.jsx'
import BackgroundSection from '../components/BackgroundSection.jsx'
import Container from '../components/Container.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import SiteHeader from '../components/SiteHeader.jsx'
import profile from '../data/profile.js'
import projects from '../data/projects.js'
import skillGroups from '../data/skills.js'

function PortfolioHome() {
  return (
    <div id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />

      <main id="main-content" tabIndex="-1">
        <section className="hero section" aria-labelledby="hero-title">
          <Container>
            <div className="hero__grid">
              <div className="hero__copy">
                <p className="eyebrow">{profile.location} · Data &amp; technology</p>
                <h1 id="hero-title">{profile.name}</h1>
                <p className="hero__role">{profile.professionalTitle}</p>
                <p className="lead">{profile.intro}</p>
                <div className="button-row">
                  <Button href="#projects">View work</Button>
                  <Button href={profile.github} variant="secondary">GitHub</Button>
                  {profile.cv && <Button href={profile.cv} variant="secondary">Download CV</Button>}
                </div>
              </div>

              <div
                className="data-visual"
                role="img"
                aria-label="Data workflow from evidence through modelling to a deployed product"
              >
                <div className="data-visual__header">
                  <span>End-to-end workflow</span>
                  <span className="status"><i /> Deployed</span>
                </div>
                <div className="data-visual__plot" aria-hidden="true">
                  <div className="plot-line plot-line--one" />
                  <div className="plot-line plot-line--two" />
                  <div className="plot-line plot-line--three" />
                  <div className="plot-point plot-point--one" />
                  <div className="plot-point plot-point--two" />
                  <div className="plot-point plot-point--three" />
                  <div className="plot-point plot-point--four" />
                </div>
                <div className="data-visual__footer">
                  <span><strong>01</strong> Evidence</span>
                  <span><strong>02</strong> Models</span>
                  <span><strong>03</strong> Product</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section
          className="section section--surface"
          id="about"
          aria-labelledby="about-title"
          tabIndex="-1"
        >
          <Container>
            <div className="about-grid">
              <div>
                <p className="eyebrow">About</p>
                <h2 id="about-title">Practical analysis, built for real use.</h2>
              </div>
              <div className="about-copy">
                <p>
                  I am a final-year Bachelor of Science in Information Technology student at the
                  University of Eswatini, focused on practical data work. I work across data cleaning,
                  exploratory and statistical analysis, machine learning, and explainable AI to
                  uncover patterns that can support better decisions.
                </p>
                <p>
                  My interests extend beyond notebooks to dashboards, APIs, analytical applications,
                  testing, and deployment—turning an analysis into something people can inspect and use.
                </p>
              </div>
            </div>

            <div className="capability-line" aria-label="Core workflow capabilities">
              <span>Analyse</span>
              <i aria-hidden="true" />
              <span>Model</span>
              <i aria-hidden="true" />
              <span>Explain</span>
              <i aria-hidden="true" />
              <span>Build</span>
              <i aria-hidden="true" />
              <span>Deploy</span>
            </div>
          </Container>
        </section>

        <BackgroundSection />

        <ProjectsSection projects={projects} />

        <section className="section" id="skills" aria-labelledby="skills-title" tabIndex="-1">
          <Container>
            <div className="section-heading">
              <div>
                <p className="eyebrow">Skills</p>
                <h2 id="skills-title">A focused technical toolkit.</h2>
              </div>
              <p>
                Tools and methods demonstrated through analytical and application development work.
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article className="skill-group" key={group.category}>
                  <span className="skill-group__number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{group.category}</h3>
                  <ul>
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section
          className="section contact"
          id="contact"
          aria-labelledby="contact-title"
          tabIndex="-1"
        >
          <Container>
            <div className="contact__inner">
              <div>
                <p className="eyebrow">Contact</p>
                <h2 id="contact-title">Let&apos;s connect.</h2>
              </div>
              <div className="contact__copy">
                <p>
                  I am interested in opportunities and conversations around analytics,
                  data science, and practical technology.
                </p>
                <div className="contact__actions">
                  {profile.email && <Button href={`mailto:${profile.email}`}>Email me</Button>}
                  <Button href={profile.github} variant={profile.email ? 'secondary' : 'primary'}>
                    View GitHub
                  </Button>
                  {profile.linkedin && <Button href={profile.linkedin} variant="secondary">LinkedIn</Button>}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default PortfolioHome
