import Button from '../Button.jsx'
import CaseStudySection from './CaseStudySection.jsx'

function ProjectNavigation({ project, nextProject, presentation }) {
  return (
    <CaseStudySection id="explore-project" title="Explore the Project" className="project-explore">
      {(presentation.liveUrl || presentation.repositoryUrl) && (
        <div className="project-explore__actions" aria-label={`${project.title} external links`}>
          {presentation.liveUrl && (
            <Button href={presentation.liveUrl}>{presentation.exploreActionLabel}</Button>
          )}
          {presentation.repositoryUrl && (
            <Button href={presentation.repositoryUrl} variant="secondary">GitHub Repository</Button>
          )}
        </div>
      )}

      <nav className="project-pagination" aria-label="Project navigation">
        <a href="#/">← All Projects</a>
        {nextProject && (
          <a href={`#/project/${nextProject.slug}`}>Next Project →</a>
        )}
      </nav>
    </CaseStudySection>
  )
}

export default ProjectNavigation
