import ProjectCard from './ProjectCard.jsx'

function ProjectGrid({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard project={project} priority={index === 0} key={project.slug} />
      ))}
    </div>
  )
}

export default ProjectGrid
