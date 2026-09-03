import CaseStudySection from './CaseStudySection.jsx'

function SkillsTools({ groups }) {
  return (
    <CaseStudySection id="skills-tools" number="03" title="Skills & Tools">
      <div className="skills-tools-grid">
        {groups.map((group) => (
          <article key={group.group}>
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </CaseStudySection>
  )
}

export default SkillsTools
