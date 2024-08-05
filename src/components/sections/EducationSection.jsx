function EducationSection({handleChange, data}) {
  return (
    <section className="sec-form education">
      <div className="cv-inputs">
        <div className="section-header">
          <span className="icono-book"></span>
          <h3>Education</h3>
        </div>
        <input
          type="text"
          name="institution"
          id="institution-input"
          placeholder="Institution"
          onChange={handleChange}
          value={data.institution}
        />
        <input
          type="text"
          name="field"
          id="field-input"
          placeholder="Field of Study"
          onChange={handleChange}
          value={data.field}
        />
        <input
          type="text"
          name="degree"
          id="degree-input"
          placeholder="Degree"
          onChange={handleChange}
          value={data.degree}
        />
      </div>
    </section>
  )
}

export default EducationSection;