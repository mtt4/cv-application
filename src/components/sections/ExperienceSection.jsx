function ExperienceSection() {
  return (
    <section className="sec-form experience">
      <div className="cv-inputs">
        <div className="section-header">
          <span className="icono-paperClip"></span>
          <h3>Previous Experience</h3>  
        </div>
        <input type="text" name="workplace" id="workplace-input" placeholder="Workplace" />
        <input type="text" name="role" id="role-input" placeholder="Role" />
      </div>
    </section>
  )
}

export default ExperienceSection;