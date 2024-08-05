function GeneralSection({handleChange, data}) {
  return (
    <section className="sec-form general">
      <div className="cv-inputs">
        <div className="section-header">
          <span className="icono-user"></span>
          <h3>General Information</h3>
        </div>
        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="Full name"
          onChange={handleChange}
          value={data.name}
        />
        <input
          type="email"
          name="email"
          id="email-input"
          placeholder="Email"
          onChange={handleChange}
          value={data.email}
        />
        <input 
          type="text"
          name="phone"
          id="phone-input"
          placeholder="Phone number"
          onChange={handleChange}
          value={data.phone}
        />
      </div>
    </section>
  )
}

export default GeneralSection;