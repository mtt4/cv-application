import GeneralSection from './components/sections/GeneralSection';
import EducationSection from './components/sections/EducationSection';
import ExperienceSection from './components/sections/ExperienceSection';
import Curriculum from './components/Curriculum'

function App() {
  return (
    <main className="content--container">
      <GeneralSection />
      <EducationSection />
      <ExperienceSection />
      
      <Curriculum />
    </main>
  )
}

export default App; 