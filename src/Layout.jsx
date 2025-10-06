import { Outlet } from 'react-router-dom';
import Name from './components/Name';
import Nav from './components/Nav';
import Threads from './components/Threads';

export default function Layout() {
  return (
    <div
      style={{
        border: '1px solid var(--border-color)',
        margin: '5vh 4vh 0 5vh',
        height: '89vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', zIndex: 2 }}>
        <Name />
      </div>

      <div style={{ position: 'absolute', top: '25%', textDecoration: 'none', zIndex: 2 }}>
        <Nav />
      </div>

      <div
        style={{
          position: 'absolute', width: '100%', height: '100%', overflow: 'hidden', zIndex: 0,
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

      <Outlet />
    </div>
  );
}
