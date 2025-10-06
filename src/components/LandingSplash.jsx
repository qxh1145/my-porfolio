import { useEffect, useRef, useState } from 'react';
import './LandingSplash.css';

// Simple landing/splash overlay that shows on initial load,
// stays for `duration` ms, then ease-out fades away in `fadeDuration` ms.
// Usage: <LandingSplash duration={2000} fadeDuration={600} />
const LandingSplash = ({ duration = 2000, fadeDuration = 600, children }) => {
  const [phase, setPhase] = useState('show'); // 'show' | 'fade' | 'hidden'
  const hideTimer = useRef(null);
  const fadeTimer = useRef(null);
  const color = ["#4cb074", "#edd708", "#f5832d", "#f46667 "," rgb(60, 16, 234) ", "#688fd7","#77b4dd"]
  const welcomemsg = ["/*", "h", "e", "l", "l", "o", "*/"]

  useEffect(() => {
    // Start fade after `duration`
    fadeTimer.current = setTimeout(() => {
      setPhase('fade');
    }, duration);

    // Fully hide after fade completes
    hideTimer.current = setTimeout(() => {
      setPhase('hidden');
    }, duration + fadeDuration);

    return () => {
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [duration, fadeDuration]);

  if (phase === 'hidden') return null;

  return (
    <div className={`landing-splash ${phase === 'fade' ? 'fade-out' : ''}`}
         aria-hidden={phase !== 'show' ? 'true' : 'false'}>
      <div className="landing-splash__content">
        {children ?? (
          <> 
            {welcomemsg.map((text, i) => (<span key={i} style={{color: color[i], fontSize: '5rem', fontWeight: '600', fontFamily: 'Courier New,Courier, monospace'}}>{text} </span>))}
          </>
          /*#4cb074, #edd708, #f5832d, #f46667,rgb(60, 16, 234), #688fd7,#77b4dd */
        )}
      </div>
    </div>
  );
};

export default LandingSplash;

