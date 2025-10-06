import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeToggle from './components/ThemeToggle';
import Project from './components/Project';
import Info from './components/Info';
import Contact from './components/Contact';
import Sandk from './components/Sandk';
import LandingSplash from './components/LandingSplash';
import MobileBlocker from './components/MobileBlocker';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';

function App() {
  return (
    <>
      <LandingSplash duration={2000} fadeDuration={600} />
      <MobileBlocker title="Open this page in desktop" description="This experience is optimized for larger screens." />
      <div style={{ position: 'absolute', top: '80vh', left: '-8vh' }}>
        <ThemeToggle />
      </div>

      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<About />} />
          <Route path="projects" element={<Project />} />
          <Route path="info" element={<Info />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Sandk />} />
        </Route>
      </Routes>

      <span style={{ marginLeft: '4%', color: '#D3D3D3', fontFamily: 'Courier New, Courier, monospace' }}>
        Inspired by Keita Yamada porfolio
      </span>
    </>
  );
}

export default App;
