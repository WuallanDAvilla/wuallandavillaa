import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Componente para injetar os estilos CSS diretamente no DOM
const Styles = () => (
    <style>{`
    /* --- Fontes e Variáveis Globais --- */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
    /* Adicionando Font Awesome para os ícones do menu mobile */
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

    :root {
      --bg-primary: #030014;
      --glass-bg: rgba(3, 0, 20, 0.7);
      --text-primary: #e5e7eb;
      --text-secondary: #aaa6c3;
      --text-white: #ffffff;
      --accent-sky: #38bdf8;
      --accent-sky-light: #7dd3fc;
      --border-color: rgba(56, 189, 248, 0.15);
    }

    /* --- Estilo do Header --- */
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 1.5rem 2rem;
        z-index: 1000;
        transition: background-color 0.3s ease, backdrop-filter 0.3s ease, padding 0.3s ease;
    }

    .header.scrolled {
        background-color: var(--glass-bg);
        backdrop-filter: blur(10px);
        padding: 1rem 2rem;
        border-bottom: 1px solid var(--border-color);
    }

    .header-container {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 1.75rem;
        font-weight: 800;
        text-decoration: none;
    }

    .text-gradient {
        background: linear-gradient(to right, var(--accent-sky), var(--accent-sky-light));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
    
    /* --- Links de Navegação (Desktop) --- */
    .desktop-nav {
        display: none; /* Escondido por padrão */
    }
    @media (min-width: 768px) {
        .desktop-nav {
            display: flex;
            align-items: center;
            gap: 2.5rem;
        }
    }

    .nav-link {
        color: var(--text-secondary);
        text-decoration: none;
        font-weight: 500;
        position: relative;
        transition: color 0.3s ease;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--accent-sky);
        transition: width 0.3s ease;
    }

    .nav-link:hover,
    .nav-link.active {
        color: var(--text-white);
    }
    
    .nav-link.active::after {
        width: 100%;
    }

    /* --- Menu Mobile --- */
    .mobile-menu-button {
        display: block;
        font-size: 1.5rem;
        color: var(--text-white);
        background: none;
        border: none;
        cursor: pointer;
        z-index: 1001; /* Acima do overlay */
    }
    @media (min-width: 768px) {
        .mobile-menu-button {
            display: none;
        }
    }

    .mobile-menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(3, 0, 20, 0.9);
        backdrop-filter: blur(10px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 999;
    }
    
    .mobile-nav-links {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }

    .mobile-nav-link {
        font-size: 2rem;
        font-weight: 600;
        color: var(--text-secondary);
        text-decoration: none;
        transition: color 0.3s;
    }

    .mobile-nav-link.active,
    .mobile-nav-link:hover {
        color: var(--accent-sky-light);
    }

  `}</style>
);

// --- Componente Principal do Header ---

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const location = useLocation();

    // Efeito para detectar scroll
    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Efeito para travar o scroll do body quando o menu mobile está aberto
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    // Efeito para fechar o menu ao navegar para outra página
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { path: "/", name: "Sobre" },
        { path: "/projetos", name: "Projetos" },
        { path: "/contato", name: "Contato" },
    ];

    const NavLinksComponent = ({ mobile = false }) => (
        <>
            {navLinks.map(link => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                        `${mobile ? 'mobile-nav-link' : 'nav-link'} ${isActive ? 'active' : ''}`
                    }
                    end // Garante que a rota "/" só fique ativa na página inicial
                >
                    {link.name}
                </NavLink>
            ))}
        </>
    );

    return (
        <>
            <Styles />
            <header className={`header ${hasScrolled ? 'scrolled' : ''}`}>
                <div className="header-container">
                    <NavLink to="/" className="logo text-gradient">
                        WD.
                    </NavLink>

                    <nav className="desktop-nav">
                        <NavLinksComponent />
                    </nav>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="mobile-menu-button"
                        aria-label="Abrir menu"
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="mobile-nav-links">
                            <NavLinksComponent mobile={true} />
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
