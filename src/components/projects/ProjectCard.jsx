function ProjectCard({ project, priority = false }) {
  const projectHref = `#/project/${project.slug}`
  const titleId = `${project.slug}-title`

  return (
    <article className="project-card" aria-labelledby={titleId}>
      <a className="project-card__link" href={projectHref}>
        <figure className="project-card__visual">
          <img
            src={project.image}
            width={project.imageWidth}
            height={project.imageHeight}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : undefined}
            decoding="async"
            alt={project.imageAlt}
          />
        </figure>

        <div className="project-card__content">
          <p className="project-card__index">
            {project.number} / {project.category}
          </p>
          <h3 id={titleId}>{project.title}</h3>
          <p className="project-card__summary">{project.cardSummary}</p>
          <div className="project-card__footer">
            <span>View Project</span>
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </a>
    </article>
  )
}

export default ProjectCard
