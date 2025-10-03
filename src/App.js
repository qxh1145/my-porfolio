import Name from './components/Name';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Threads from './components/Threads';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <>
    <body style={{marginBottom: '10vh'}}>
    <div style={{position: 'absolute', top: '80vh', left: '-8vh', }}><ThemeToggle /></div>
    
    <div
      style={{
        border: '1px solid var(--border-color)',
        margin: '5vh',
        height: '85vh',
        
      }}
    >
      
      <Name />
      <About />
      
      <Threads
        amplitude={3}
        distance={0}
        enableMouseInteraction={true}
        color={[1, 1, 1]} // Đổi màu bằng cách thay đổi giá trị RGB chuẩn hoá (0-1), ví dụ: [1, 0, 0] là màu đỏ
      />
    </div>
    </body>
    </>
  );
}

export default App;
