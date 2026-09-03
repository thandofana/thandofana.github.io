import { useEffect } from 'react'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import SiteHeader from '../components/SiteHeader.jsx'
import CaseStudySection from '../components/projects/CaseStudySection.jsx'
import ExecutiveSummary from '../components/projects/ExecutiveSummary.jsx'
import MethodologyFlow from '../components/projects/MethodologyFlow.jsx'
import ProjectNavigation from '../components/projects/ProjectNavigation.jsx'
import Recommendations from '../components/projects/Recommendations.jsx'
import ResultsGallery from '../components/projects/ResultsGallery.jsx'
import SkillsTools from '../components/projects/SkillsTools.jsx'
import TextListSection from '../components/projects/TextListSection.jsx'
import { getProjectPresentation } from '../utils/projectPresentation.js'

function ProjectCaseStudy({ project, nextProject }) {
  const presentation = getProjectPresentation(project)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [project.slug])

  return (
    <div id="top" tabIndex="-1">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader projectView />

      <main id="main-content" tabIndex="-1">
        <article className={`project-page project-page--${presentation.kind}`}>
          <header className="project-hero">
            <Container>
              <a className="project-back-link" href="#/">← All Projects</a>
              <p className="project-hero__meta">
                {project.number} / {project.category} · {project.year}
              </p>
              <h1>{project.title}</h1>
              <p className="project-hero__summary">{project.cardSummary}</p>

              <figure className="project-hero__visual">
                <img
                  src={project.image}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  decoding="async"
                  fetchPriority="high"
                  alt={project.imageAlt}
                />
              </figure>

              {(presentation.liveUrl || presentation.repositoryUrl) && (
                <div className="project-hero__actions" aria-label={`${project.title} external links`}>
                  {presentation.liveUrl && (
                    <Button href={presentation.liveUrl}>{presentation.heroActionLabel}</Button>
                  )}
                  {presentation.repositoryUrl && (
                    <Button href={presentation.repositoryUrl} variant="secondary">GitHub</Button>
                  )}
                </div>
              )}
            </Container>
          </header>

          <Container className="case-study-content">
            <ExecutiveSummary summary={project.executiveSummary} />

            <CaseStudySection id="business-problem" number="01" title="Business Problem">
              <p className="case-study-section__lead">{project.businessProblem.overview}</p>
              <div className="business-problem-grid">
                <div>
                  <h3>Stakeholders</h3>
                  <p>{project.businessProblem.stakeholders}</p>
                </div>
                <div>
                  <h3>Question</h3>
                  <p>{project.businessProblem.question}</p>
                </div>
                <div>
                  <h3>Decision relevance</h3>
                  <p>{project.businessProblem.decisionContext}</p>
                </div>
              </div>
            </CaseStudySection>

            <MethodologyFlow methodology={project.methodology} />
            <SkillsTools groups={project.skillsTools} />
            <ResultsGallery results={project.results} />
            <Recommendations recommendations={project.recommendations} />
            <TextListSection id="next-steps" number="06" title="Next Steps" items={project.nextSteps} />
            <TextListSection id="limitations" number="07" title="Limitations" items={project.limitations} />
            <ProjectNavigation
              project={project}
              nextProject={nextProject}
              presentation={presentation}
            />
          </Container>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}

export default ProjectCaseStudy
