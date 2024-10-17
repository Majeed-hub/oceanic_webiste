import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import TwoBHK from "./pages/TwoBHK";
import ThreeBHK from "./pages/ThreeBHK";
import FourBHK from "./pages/FourBHK";
import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("OCEANIC");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/oceanic-building/2bhk" element={<TwoBHK/>} />
            <Route path="/oceanic-building/3bhk" element={<ThreeBHK/>} />
            <Route path="/oceanic-building/4bhk" element={<FourBHK/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
