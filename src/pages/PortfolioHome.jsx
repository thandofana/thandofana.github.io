import BackgroundSection from '../components/BackgroundSection.jsx'
import Button from '../components/Button.jsx'
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
        <section className="hero" aria-labelledby="hero-title">
          <Container>
            <div className="hero__status">
              <span aria-hidden="true" />
              {profile.professionalTitle} based in {profile.location}
            </div>

            <div className="hero__layout">
              <div>
                <h1 id="hero-title">
                  I turn complex data into <span>decision-ready insight.</span>
                </h1>
              </div>
              <div className="hero__intro">
                <p>
                  I am Thando F. Dlamini, a data analyst who works across analysis, reporting, and
                  applied machine learning to answer real business questions clearly.
                </p>
                <div className="button-row">
                  <Button href="#work">View featured case study</Button>
                  <Button href={profile.resume} variant="secondary" newTab>View CV</Button>
                </div>
              </div>
            </div>

            <dl className="proof-strip" aria-label="Portfolio highlights">
              <div><dt>01</dt><dd>End-to-end case study</dd></div>
              <div><dt>1,051</dt><dd>Survey respondents analysed</dd></div>
              <div><dt>02</dt><dd>Validated ML pipelines</dd></div>
              <div><dt>Full stack</dt><dd>Analysis to live product</dd></div>
            </dl>
          </Container>
        </section>

        <ProjectsSection projects={projects} />

        <section className="about section" id="about" aria-labelledby="about-title" tabIndex="-1">
          <Container>
            <div className="section-intro section-intro--light">
              <p className="kicker">About</p>
              <div>
                <h2 id="about-title">Technical depth with a clear business point of view.</h2>
                <p>
                  I focus on the full analytical process: framing the right question, preparing
                  trustworthy data, finding patterns, validating results, and communicating what
                  the evidence means for a decision.
                </p>
              </div>
            </div>

            <div className="capability-grid">
              {skillGroups.map((group, index) => (
                <article key={group.category}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
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

        <section className="contact" id="contact" aria-labelledby="contact-title" tabIndex="-1">
          <Container className="contact__layout">
            <p className="kicker">Contact</p>
            <div>
              <h2 id="contact-title">Have a data problem worth solving?</h2>
              <p>Let&apos;s talk about the question, the evidence, and the outcome you need.</p>
              <a className="email-link" href={`mailto:${profile.email}`}>
                {profile.email}<span aria-hidden="true">↗</span>
              </a>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default PortfolioHome
