function GeneralSection() {
  return (
    <section className="sec-form general">
      <div className="cv-inputs">
        <div className="section-header">
          <span className="icono-user"></span>
          <h3>General Information</h3>
        </div>
        <input type="text" name="name" id="name-input" placeholder="Full name" />
        <input type="email" name="email" id="email-input" placeholder="Email" />
        <input type="text" name="phone" id="phone-input" placeholder="Phone number" />
      </div>
    </section>
  )
}

export default GeneralSection;