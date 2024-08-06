import { useState } from 'react';
import GeneralSection from './components/sections/GeneralSection';
import EducationSection from './components/sections/EducationSection';
import ExperienceSection from './components/sections/ExperienceSection';
import Curriculum from './components/Curriculum'

function App() {
  const [cvData, setCvData] = useState(
    {
      name: "",
      email: "",
      phone: "",
      education: [
      ],
      experience: [
        {
          workplace: "",
          position: "",
        }
      ]
    },
  );

  function handleChange(event) {
    const {name, value} = event.target;
    setCvData(prevData => (
      {
        ...prevData,
        [name]: value,
      }
    ))
  }

  function submitEducation(institution, field, degree) {
    setCvData(prevData => {
      return {
        ...prevData,
        education: [
          ...prevData.education,
          {institution, field, degree}
        ]
      }
    })
  }

  function submitExperience(workplace, position) {
    setCvData(prevData => {
      return {
        ...prevData,
        experience: [
          ...prevData.experience,
          {workplace, position}
        ]
      }
    })
  }

  return (
    <main className="content--container">
      <GeneralSection 
        handleChange={handleChange}
        data={{...cvData.name, ...cvData.email, ...cvData.phone}}
      />
      <EducationSection
        handleSubmit={submitEducation}
      />
      <ExperienceSection 
        handleSubmit={submitExperience}
      />
      
      <Curriculum {...cvData} />
    </main>
  )

}

export default App; 