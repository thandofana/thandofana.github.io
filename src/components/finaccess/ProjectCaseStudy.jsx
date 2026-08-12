import ProjectHero from './ProjectHero.jsx'
import ProjectOverview from './ProjectOverview.jsx'
import ProjectWorkflow from './ProjectWorkflow.jsx'
import FeatureEngineering from './FeatureEngineering.jsx'
import KeyFindings from './KeyFindings.jsx'
import ModelResults from './ModelResults.jsx'
import Explainability from './Explainability.jsx'
import ProductArchitecture from './ProductArchitecture.jsx'
import ScreenshotGallery from './ScreenshotGallery.jsx'
import ProjectValidation from './ProjectValidation.jsx'
import ResponsibleUse from './ResponsibleUse.jsx'
import ProjectCTA from './ProjectCTA.jsx'
import ProjectCapabilities from './ProjectCapabilities.jsx'

function ProjectCaseStudy({ project }) {
  return (
    <>
    <article
      className="case-study"
      id="finaccess"
      aria-labelledby="project-title"
      tabIndex="-1"
    >
      <ProjectHero project={project} />
      <ProjectOverview />
      <ProjectWorkflow />
      <FeatureEngineering />
      <KeyFindings />
      <ModelResults />
      <Explainability />
      <ProductArchitecture />
      <ScreenshotGallery />
      <ProjectValidation />
      <ResponsibleUse />
      <ProjectCTA project={project} />
    </article>
    <ProjectCapabilities />
    </>
  )
}

export default ProjectCaseStudy
