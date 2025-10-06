import Name from './components/Name';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Threads from './components/Threads';
import ThemeToggle from './components/ThemeToggle';
import Nav from './components/Nav';
import LandingSplash from './components/LandingSplash';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <html style={{marginBottom: '50px'}}>
    <LandingSplash duration={2000} fadeDuration={600} />
    <div style={{position: 'absolute', top: '80vh', left: '-8vh', }}><ThemeToggle /></div>
    
    <div
      style={{
        border: '1px solid var(--border-color)',
        margin: '5vh 5vh 0 5vh',
        height: '89vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{position: 'absolute'}}>
      <Name />
      </div>
      
      <div style={{position: "absolute", top: '25%', textDecoration: 'none'}}><Nav /></div>

      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <Threads
          amplitude={4}
          distance={0}
          enableMouseInteraction={true}
          color={[1, 1, 1]}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      
      <About />

    </div>
    <span style={{marginLeft: '4%', color: '#D3D3D3', fontFamily: 'Courier New, Courier, monospace'}}>Inspired by Keita Yamada porfolio</span>
    </html>
    </>
  );
}

export default App;
