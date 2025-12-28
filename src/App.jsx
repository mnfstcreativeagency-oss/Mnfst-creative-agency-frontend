import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import FAQPage from './pages/FAQPage';
import ThemeToggle from './components/ThemeToggle';


function App() {
  const location = useLocation();

  return (
    <>
      <ThemeToggle />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/faqs" element={<FAQPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
