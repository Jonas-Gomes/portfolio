import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './global.css';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
