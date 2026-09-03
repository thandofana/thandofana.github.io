import CaseStudySection from './CaseStudySection.jsx'

function TextListSection({ id, number, title, items }) {
  return (
    <CaseStudySection id={id} number={number} title={title}>
      <ol className="text-list-section">
        {items.map((item, index) => {
          const text = typeof item === 'string' ? item : item.text
          const placeholder = typeof item === 'object' && item.placeholder

          return (
            <li className={placeholder ? 'is-placeholder' : undefined} key={text}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{text}</p>
            </li>
          )
        })}
      </ol>
    </CaseStudySection>
  )
}

export default TextListSection
