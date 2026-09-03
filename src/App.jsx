import { useEffect } from 'react'
import ProjectGallery from './pages/ProjectGallery.jsx'
import ProjectCaseStudy from './pages/ProjectCaseStudy.jsx'
import ProjectNotFound from './pages/ProjectNotFound.jsx'
import projects from './data/projects.js'
import useHashRoute from './routing/useHashRoute.js'
import './styles/global.css'

function App() {
  const route = useHashRoute()
  const projectIndex = route.type === 'project'
    ? projects.findIndex((project) => project.slug === route.slug)
    : -1
  const project = projectIndex >= 0 ? projects[projectIndex] : null
  const nextProject = project && projects.length > 1
    ? projects[(projectIndex + 1) % projects.length]
    : null

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Thando F. Dlamini`
    } else if (route.type === 'not-found' || route.type === 'project') {
      document.title = 'Project Not Found | Thando F. Dlamini'
    } else {
      document.title = 'Thando F. Dlamini | Data Analytics Project Gallery'
    }
  }, [project, route.type])

  if (route.type === 'project') {
    return project
      ? <ProjectCaseStudy project={project} nextProject={nextProject} />
      : <ProjectNotFound />
  }

  if (route.type === 'not-found') return <ProjectNotFound />

  return <ProjectGallery />
}

export default App
