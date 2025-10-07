import { useEffect, useState } from 'react';
import './ThemeToggle.css';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem('preferred-theme');
  if (stored === 'dark' || stored === 'light') return stored;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const body = document.body;
    const nextTheme = theme === 'dark' ? 'dark' : 'light';

    root.dataset.theme = nextTheme;
    body.dataset.theme = nextTheme;

    root.classList.remove('theme-dark', 'theme-light');
    body.classList.remove('theme-dark', 'theme-light');
    root.classList.add(`theme-${nextTheme}`);
    body.classList.add(`theme-${nextTheme}`);

    window.localStorage.setItem('preferred-theme', nextTheme);
  }, [theme]);

  const selectTheme = mode => event => {
    if (!event.target.checked) return;
    setTheme(mode);
  };

  return (
    <div style={{ padding: 'none', gap:'10px',marginLeft: '1vh',position: 'absolute' ,transform: 'rotate(270deg)', fontSize : '15px', width: '197px', height: '10px'}} className="theme-toggle" role="group" aria-label="Theme selection">
      <label className="theme-option">
        <input
          type="checkbox"
          name="theme"
          value="light"
          checked={theme === 'light'}
          onChange={selectTheme('light')}
        />
        <span>LIGHT </span>
      </label>
      <label className="theme-option">
        <input
          type="checkbox"
          name="theme"
          value="dark"
          checked={theme === 'dark'}
          onChange={selectTheme('dark')}
        />
        <span>DARK </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
