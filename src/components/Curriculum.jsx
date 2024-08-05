function Curriculum(props) {
  return (
    <section className="cv">
      <div className="cv--general">
        <h2 className="cv--name">{props.name}</h2>
        <p className="general-info">{props.email}</p>
        <p className="general-info">{props.phone}</p>
      </div>

      <div className="cv--section">
        <h3>{props.institution}</h3>
        <h4>{props.field}</h4>
        <p>{props.degree}</p>
      </div>

      <hr className="separator" />

      <div className="cv--section">
        <h3>{props.workplace}</h3>
        <p>{props.position}</p>
      </div>
    </section>
  )
}

export default Curriculum;