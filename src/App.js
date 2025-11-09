import { useEffect } from 'react';
import usePageStore from './store/pageStore';
import './App.css';
import './Theme.css';
import HomePage from './components/Page/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const isDarkMode = usePageStore((state) => state.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  return (
    <>
      <HomePage/>
    </>
  );
}

export default App;
