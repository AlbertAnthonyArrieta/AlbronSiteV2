import './App.css';
import Navbar from './components/common/Navbar';
import AboutSection from './components/sections/AboutSection';
import HeroSection from './components/sections/HeroSection';
import ServiceSection from './components/sections/ServicesSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div  id='home' className="App">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
