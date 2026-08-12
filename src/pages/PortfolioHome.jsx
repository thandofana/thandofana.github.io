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
                <div className="button-row">
                  <Button href="#projects">View work</Button>
                  {profile.cv && <Button href={profile.cv} variant="secondary">Download CV</Button>}
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
                  <div className="insight-visual__orbit insight-visual__orbit--outer" />
                  <div className="insight-visual__orbit insight-visual__orbit--inner" />
                  <span className="insight-visual__dot insight-visual__dot--one" />
                  <span className="insight-visual__dot insight-visual__dot--two" />
                  <span className="insight-visual__dot insight-visual__dot--three" />
                  <span className="insight-visual__dot insight-visual__dot--four" />
                  <div className="insight-visual__bars">
                    <i /><i /><i /><i /><i /><i />
                  </div>
                  <div className="insight-visual__core">
                    <span>Clear</span>
                    <strong>Insight</strong>
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
                <h2 id="about-title">Turning data into clarity.</h2>
              </div>
              <div className="about-copy">
                <p>
                  I am a junior data scientist based in Eswatini, focused on transforming complex
                  datasets into clear, decision-ready insights. My work combines data cleaning,
                  exploratory and statistical analysis, machine learning, and explainable AI with
                  an emphasis on dependable methods and clear communication.
                </p>
                <p>
                  I also develop dashboards, APIs, and analytical applications that make results
                  accessible, transparent, and useful to the people making decisions.
                </p>
              </div>
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
              <h2 id="contact-title">Contact</h2>
              <address className="contact__details">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <span aria-hidden="true">/</span>
                {profile.phones.map((phone, index) => (
                  <span className="contact__phone" key={phone.href}>
                    <a href={phone.href}>{phone.display}</a>
                    {index < profile.phones.length - 1 && <span aria-hidden="true">/</span>}
                  </span>
                ))}
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
