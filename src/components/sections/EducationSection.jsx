function EducationSection() {
  return (
    <section className="sec-form education">
      <div className="cv-inputs">
        <div className="section-header">
          <span className="icono-book"></span>
          <h3>Education</h3>
        </div>
        <input type="text" name="institution" id="institution-input" placeholder="Institution" />
        <input type="text" name="study" id="study-input" placeholder="Field of Study" />
        <input type="text" name="degree" id="degree-input" placeholder="Degree" />
      </div>
    </section>
  )
}

export default EducationSection;