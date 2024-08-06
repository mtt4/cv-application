function Curriculum(props) {

  const itemsEducation = props.education.map(education => (
    <div className="cv--section" key={education.field}>
      <h3>{education.institution}</h3>
      <h4>{education.field}</h4>
      <p>{education.degree}</p>
    </div>
  ))

  const itemsExperience = props.experience.map(experience => (
    <div className="cv--section" key={experience.workplace}>
      <h3>{experience.workplace}</h3>
      <p>{experience.position}</p>
    </div>
  ))

  return (
    <section className="cv">
      <div className="cv--general">
        <h2 className="cv--name">{props.name}</h2>
        <p className="general-info">{props.email}</p>
        <p className="general-info">{props.phone}</p>
      </div>

      <h2 className="section-title">• Education</h2>

      {itemsEducation}

      <hr className="separator" />

      <h2 className="section-title">• Work Experience</h2>

      {itemsExperience}
      
    </section>
  )
}

export default Curriculum;