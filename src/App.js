import Name from './components/Name';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Threads from './components/Threads';
import ThemeToggle from './components/ThemeToggle';
import Nav from './components/Nav';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <html style={{marginBottom: '50px'}}>
    <div style={{position: 'absolute', top: '80vh', left: '-8vh', }}><ThemeToggle /></div>
    
    <div
      style={{
        border: '1px solid var(--border-color)',
        margin: '5vh 5vh 0 5vh',
        height: '89vh',
        // display:'block'
      }}
    >
      <div style={{position: 'absolute'}}>
      <Name />
      </div>
      
      <div style={{position: "absolute", top: '25%', textDecoration: 'none'}}><Nav /></div>

      <div style={{height: '89vh', position: 'absolute', width: '95%', display: 'block'}}> 
      <Threads
        amplitude={4}
        distance={0}
        enableMouseInteraction={true}
        color={[1, 1, 1]}
      />
      </div>
      
      <About />

    </div>
    </html>
    </>
  );
}

export default App;
