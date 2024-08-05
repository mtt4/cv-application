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
      institution: "",
      field: "",
      degree: "",
      workplace: "",
      position: "",
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
  return (
    <main className="content--container">
      <GeneralSection 
        handleChange={handleChange}
        data={{...cvData.name, ...cvData.email, ...cvData.phone}}
      />
      <EducationSection
        handleChange={handleChange}
        data={{...cvData.institution, ...cvData.field, ...cvData.degree}}
      />
      <ExperienceSection 
        handleChange={handleChange}
        data={{...cvData.workplace, ...cvData.position}}
      />
      
      <Curriculum {...cvData} />
    </main>
  )

}

export default App; 