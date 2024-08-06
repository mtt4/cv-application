import { useState } from "react";

function EducationSection({handleSubmit}) {

  const [eduData, setEduData] = useState(
    {
      institution: "",
      field: "",
      degree: "",
    }
  )

  function handleEducationChange(event) {
    const { name, value } = event.target;
    setEduData(prevEduData => (
      {
        ...prevEduData,
        [name]: value
      }
    ))
  }

  const submitEducation = () => {
    handleSubmit(eduData.institution, eduData.field, eduData.degree);
  }

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
          onChange={handleEducationChange}
          value={eduData.institution}
        />
        <input
          type="text"
          name="field"
          id="field-input"
          placeholder="Field of Study"
          onChange={handleEducationChange}
          value={eduData.field}
        />
        <input
          type="text"
          name="degree"
          id="degree-input"
          placeholder="Degree"
          onChange={handleEducationChange}
          value={eduData.degree}
        />
      </div>

      <button 
        className="submit--btn"
        onClick={submitEducation}
      >
        Submit <small>(this cannot be undone)</small>
      </button>
    </section>
  )
}

export default EducationSection;