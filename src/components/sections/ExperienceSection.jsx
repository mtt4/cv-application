function ExperienceSection({handleChange, data}) {
  return (
    <section className="sec-form experience">
      <div className="cv-inputs">
        <div className="section-header">
          <span className="icono-paperClip"></span>
          <h3>Previous Experience</h3>  
        </div>
        <input 
          type="text" 
          name="workplace" 
          id="workplace-input" 
          placeholder="Workplace" 
          onChange={handleChange}
          value={data.workplace}
        />
        <input
          type="text"
          name="position"
          id="position-input"
          placeholder="Role"
          onChange={handleChange}
          value={data.position}
        />
      </div>
    </section>
  )
}

export default ExperienceSection;