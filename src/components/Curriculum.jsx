function Curriculum() {
  return (
    <section className="cv">
      <div className="cv--general">
        <h2 className="cv--name">John Doe</h2>
        <p className="general-info">john@email.com</p>
        <p className="general-info">555 555-5555</p>
      </div>

      <div className="cv--section">
        <h3>University of Somewhere</h3>
        <h4>Computer Science</h4>
        <p>Bachelor Degree</p>
      </div>

      <hr className="separator" />

      <div className="cv--section">
        <h3>Programmers, Inc.</h3>
        <p>Junior Developer</p>
      </div>
    </section>
  )
}

export default Curriculum;