import { useState } from "react";

function ExperienceSection({handleSubmit}) {

  const [expData, setExpData] = useState(
    {
      workplace: "",
      position: "",
    }
  )

  function handleExperienceChange(event) {
    const { name, value } = event.target;
    setExpData(prevExpData => (
      {
        ...prevExpData,
        [name]: value
      }
    ))
  }

  const submitExperience = () => {
    handleSubmit(expData.workplace, expData.position);
  }

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
          onChange={handleExperienceChange}
          value={expData.workplace}
        />
        <input
          type="text"
          name="position"
          id="position-input"
          placeholder="Role"
          onChange={handleExperienceChange}
          value={expData.position}
        />
      </div>

      <button
        className="submit--btn"
        onClick={submitExperience}
      >
        Submit <small>(this cannot be undone)</small>
      </button>
    </section>
  )
}

export default ExperienceSection;