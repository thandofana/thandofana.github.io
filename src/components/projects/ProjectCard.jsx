function ProjectCard({ project, priority = false }) {
  const projectHref = `#/project/${project.slug}`
  const titleId = `${project.slug}-title`
  const cardImage = project.cardImage ?? project.image
  const cardImageAlt = project.cardImageAlt ?? project.imageAlt
  const cardImageWidth = project.cardImageWidth ?? project.imageWidth
  const cardImageHeight = project.cardImageHeight ?? project.imageHeight

  return (
    <article className="project-card" aria-labelledby={titleId}>
      <a className="project-card__link" href={projectHref}>
        <figure className="project-card__visual">
          <img
            src={cardImage}
            width={cardImageWidth}
            height={cardImageHeight}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : undefined}
            decoding="async"
            alt={cardImageAlt}
          />
        </figure>

        <div className="project-card__content">
          <p className="project-card__index">
            {project.number} / {project.category}
          </p>
          <h3 id={titleId}>{project.title}</h3>
          <p className="project-card__summary">{project.cardSummary}</p>
          {project.highlight && (
            <p className="project-card__highlight">
              <span>Key Result</span> — {project.highlight}
            </p>
          )}
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
