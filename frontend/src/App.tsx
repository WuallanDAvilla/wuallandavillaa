import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom'; // 1. Importações alteradas
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Este componente continua útil para rolar a página para o topo em cada navegação
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  // 2. Removido o <Router> e substituído <Routes> por <Outlet />
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#181818',
          color: '#e0e0e0',
          border: '1px solid #27272a'
        }
      }} />
    </>
  );
};

export default App;