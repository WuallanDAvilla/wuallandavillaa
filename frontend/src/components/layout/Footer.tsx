import { motion } from 'framer-motion';

// Componente para injetar os estilos CSS diretamente no DOM
const Styles = () => (
    <style>{`
    /* --- Fontes e Variáveis Globais --- */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    :root {
      --bg-secondary: #050816;
      --text-primary: #e5e7eb;
      --text-secondary: #aaa6c3;
      --accent-sky: #38bdf8;
      --border-color: rgba(56, 189, 248, 0.15);
    }

    /* --- Estilo do Footer --- */
    .footer {
        background-color: var(--bg-secondary);
        padding: 3rem 2rem;
        border-top: 1px solid var(--border-color);
    }

    .footer-container {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }
    @media (min-width: 768px) {
        .footer-container {
            flex-direction: row;
            justify-content: space-between;
        }
    }

    .footer-text {
        text-align: center;
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    @media (min-width: 768px) {
        .footer-text {
            text-align: left;
        }
    }
    .footer-text span {
        font-weight: 600;
        color: var(--text-primary);
    }
    
    .social-links {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .social-icon {
        color: var(--text-secondary);
        transition: color 0.3s ease, transform 0.3s ease;
    }

    .social-icon:hover {
        color: var(--accent-sky);
        transform: translateY(-3px);
    }
  `}</style>
);

// --- Ícones (SVG) ---
const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.799 24 17.302 24 12 24 5.373 18.627 0 12 0z" />
    </svg>
);
const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

// --- Componente Principal do Footer ---

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Styles />
            <motion.footer
                className="footer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <div className="footer-container">
                    <p className="footer-text">
                        © {currentYear} <span>Wuallan D'Avilla.</span> Todos os direitos reservados.
                    </p>
                    <div className="social-links">
                        <a href="https://github.com/WuallanDAvilla" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                            <GithubIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/wuallan-d-avilla-687669304" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                            <LinkedinIcon />
                        </a>
                    </div>
                </div>
            </motion.footer>
        </>
    );
}
