
import './App.css';
import './index.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import About from './components/About';
import Supports from './components/Supports';
import AllinOne from './components/AllinOne';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
function App() {
  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Supports/>
     <AllinOne/>
     <Pricing/>
    <Footer/>
    </>
  );
}

export default App;
