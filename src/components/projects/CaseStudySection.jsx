function CaseStudySection({ number, title, id, className = '', children }) {
  return (
    <section
      className={`case-study-section ${className}`.trim()}
      aria-labelledby={`${id}-title`}
      id={id}
    >
      <header className="case-study-section__heading">
        {number && <p>{number}</p>}
        <h2 id={`${id}-title`}>{title}</h2>
      </header>
      {children}
    </section>
  )
}

export default CaseStudySection
