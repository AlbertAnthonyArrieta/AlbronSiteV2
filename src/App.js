import './App.css';
import Navbar from './components/common/Navbar';
import HeroSection from './components/sections/HeroSection';
import ServiceSection from './components/sections/ServicesSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ServiceSection />
    </div>
  );
}

export default App;
