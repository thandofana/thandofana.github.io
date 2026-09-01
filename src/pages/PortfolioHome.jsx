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
    <div id="top" tabIndex="-1">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />

      <main id="main-content" tabIndex="-1">
        <section className="hero section" aria-labelledby="hero-title">
          <Container>
            <div className="hero__grid">
              <div className="hero__copy">
                <p className="eyebrow">{profile.professionalTitle}</p>
                <h1 id="hero-title">{profile.name}</h1>
                <p className="hero__position">
                  Data Analyst building practical analytics, reporting and machine-learning
                  solutions.
                </p>
                <p className="hero__summary">
                  My projects use data to investigate real problems, produce defensible findings and
                  turn analytical work into clear, usable outputs.
                </p>
                <div className="button-row">
                  <Button href="#projects">View projects</Button>
                  {profile.resume && (
                    <Button href={profile.resume} variant="secondary" newTab>
                      View CV
                    </Button>
                  )}
                </div>
              </div>

              <aside className="hero__profile" aria-label="Professional profile summary">
                <p className="hero__profile-index">SZ / PROFILE</p>
                <dl>
                  <div>
                    <dt>Based</dt>
                    <dd>{profile.location}</dd>
                  </div>
                  <div>
                    <dt>Focus</dt>
                    <dd>Analysis, reporting &amp; applied ML</dd>
                  </div>
                  <div>
                    <dt>Approach</dt>
                    <dd>Clear methods, useful outputs</dd>
                  </div>
                </dl>
              </aside>
            </div>

            <dl className="professional-strip" aria-label="Core professional capabilities">
              <div><dt>Python</dt><dd>Analysis &amp; ML</dd></div>
              <div><dt>SQL</dt><dd>Analytics &amp; reporting</dd></div>
              <div><dt>Power BI</dt><dd>Visualisation</dd></div>
              <div><dt>Eswatini</dt><dd>Based</dd></div>
            </dl>
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
                <p className="eyebrow">02 · About</p>
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
                <p className="eyebrow">03 · Capabilities</p>
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
              <div>
                <p className="eyebrow">05 · Contact</p>
                <h2 className="contact__title" id="contact-title">Contact</h2>
              </div>
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
