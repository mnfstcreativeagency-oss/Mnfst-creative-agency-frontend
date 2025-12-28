import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import FAQPage from './pages/FAQPage';
import ThemeToggle from './components/ThemeToggle';
import Academy from './components/Academy';
import NotFound from './components/Notfound';
import JoinUs from './pages/JoinUs';
import Navbar from './components/Navbar';
import About from './components/About';

import FloatingContact from './components/FloatingContact';

function App() {
  const location = useLocation();

  return (
    <>
      <ThemeToggle />
      <Navbar />
      <FloatingContact />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
