import { certifications, education, experience } from '../data/background.js'
import Container from './Container.jsx'

function BackgroundSection() {
  return (
    <section
      className="section background"
      id="background"
      aria-labelledby="background-title"
      tabIndex="-1"
    >
      <Container>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Background</p>
            <h2 id="background-title">Education and experience, put to work.</h2>
          </div>
          <p>
            Academic study, practical experience, and professional training shaping my data work.
          </p>
        </div>

        <div className="background-grid">
          <article className="background-card">
            <p className="background-card__label">Education</p>
            <h3>{education.qualification}</h3>
            <p className="background-card__organisation">{education.institution}</p>
            <p className="background-card__status">{education.status}</p>
          </article>

          <article className="background-card">
            <p className="background-card__label">Experience</p>
            <h3>{experience.role}</h3>
            <p className="background-card__organisation">{experience.organisation}</p>
            <p className="background-card__description">{experience.description}</p>
          </article>

          <article className="background-card background-card--certifications">
            <p className="background-card__label">Professional learning</p>
            <h3>Analytics certifications</h3>
            <ul className="credential-list">
              {certifications.map((certification) => (
                <li key={certification.name}>
                  <strong>{certification.name}</strong>
                  <span>
                    {certification.issuer} ·{' '}
                    <time dateTime={certification.dateTime}>{certification.date}</time>
                  </span>
                  <a
                    className="credential-list__link"
                    href={certification.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View the ${certification.name} certificate PDF in a new tab`}
                  >
                    View certificate <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  )
}

export default BackgroundSection
