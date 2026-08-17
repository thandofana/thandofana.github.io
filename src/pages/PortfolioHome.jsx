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
                <p className="eyebrow">{profile.professionalTitle}</p>
                <p className="hero__identity">{profile.name} · {profile.location}</p>
                <h1 id="hero-title">Turning complex data into decision-ready insight.</h1>
                <p className="hero__summary">
                  I use statistical analysis, Python and explainable machine learning to investigate
                  business, financial and socioeconomic questions, uncover meaningful patterns and
                  communicate what the evidence means.
                </p>
                <div className="button-row">
                  <Button href="#projects">View featured work</Button>
                  {profile.resume && (
                    <Button
                      href={profile.resume}
                      variant="secondary"
                      download="Thando_Fana_Dlamini_Resume.pdf"
                    >
                      Download résumé
                    </Button>
                  )}
                </div>
              </div>

              <div
                className="insight-visual"
                role="img"
                aria-label="Abstract analytical graphic representing patterns becoming clear insight"
              >
                <div className="insight-visual__header">
                  <span>Data intelligence</span>
                  <span className="insight-visual__signal"><i /> Signal active</span>
                </div>
                <div className="insight-visual__canvas" aria-hidden="true">
                  <div className="insight-visual__matrix">
                    {Array.from({ length: 48 }, (_, index) => (
                      <i
                        className={
                          [5, 12, 13, 20, 21, 22, 29, 30, 37, 45].includes(index)
                            ? 'is-active'
                            : undefined
                        }
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="insight-visual__reading">
                    <span>Analytical focus</span>
                    <strong>Clear<br />insight.</strong>
                    <small>Patterns interpreted in context.</small>
                  </div>
                </div>
                <div className="insight-visual__footer">
                  <span>Patterns</span><i />
                  <span>Context</span><i />
                  <span>Clarity</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <ProjectsSection projects={projects} />

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
                <h2 id="about-title">Clear analysis, responsibly communicated.</h2>
              </div>
              <div className="about-copy">
                <p>
                  I’m a data analyst focused on turning complex datasets into clear, actionable
                  insights. My work combines data cleaning, exploratory analysis, statistical
                  reasoning and applied machine learning, with an emphasis on transparent methods
                  and meaningful interpretation.
                </p>
                <p>
                  I also build APIs, dashboards and analytical applications that make data easier to
                  explore, understand and communicate.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title" tabIndex="-1">
          <Container>
            <div className="section-heading">
              <div>
                <p className="eyebrow">Skills</p>
                <h2 id="skills-title">Technical skills, applied in practice.</h2>
              </div>
              <p>
                Skills demonstrated through project work and developed through training and continued
                practice.
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article className="skill-group" key={group.category}>
                  <span className="skill-group__number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{group.category}</h3>
                  <p>{group.description}</p>
                  <ul>
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <BackgroundSection />

        <section
          className="section contact"
          id="contact"
          aria-labelledby="contact-title"
          tabIndex="-1"
        >
          <Container>
            <div className="contact__inner">
              <h2 className="contact__title" id="contact-title">
                Contact
              </h2>
              <address className="contact__details">
                <a className="contact-card" href={`mailto:${profile.email}`}>
                  <span className="contact-card__copy">
                    <span className="contact-card__label">Email</span>
                    <span className="contact-card__value">{profile.email}</span>
                  </span>
                  <span className="contact-card__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a
                  className="contact-card"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Thando F. Dlamini on GitHub in a new tab"
                >
                  <span className="contact-card__copy">
                    <span className="contact-card__label">GitHub</span>
                    <span className="contact-card__value">github.com/thandofana</span>
                  </span>
                  <span className="contact-card__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
                {profile.linkedin && (
                  <a
                    className="contact-card"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View Thando F. Dlamini on LinkedIn in a new tab"
                  >
                    <span className="contact-card__copy">
                      <span className="contact-card__label">LinkedIn</span>
                      <span className="contact-card__value">LinkedIn profile</span>
                    </span>
                    <span className="contact-card__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                )}
              </address>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default PortfolioHome
