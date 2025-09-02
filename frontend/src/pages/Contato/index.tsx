import React, { useState, useCallback } from 'react';
import { motion, type Variants } from 'framer-motion';

// --- Ícones (Otimizados com React.memo) ---
const MailIcon = React.memo(() => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
));
const LinkedinIcon = React.memo(() => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
));

// --- Componente de Estilos (Otimizado com React.memo) ---
const Styles = React.memo(() => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
    :root {
      --bg-primary: #030014; --bg-secondary: #050816; --glass-bg: rgba(255, 255, 255, 0.05);
      --text-primary: #e5e7eb; --text-secondary: #aaa6c3; --text-white: #ffffff;
      --accent-sky: #38bdf8; --accent-sky-light: #7dd3fc; --border-color: rgba(56, 189, 248, 0.15);
      --glow-color: rgba(56, 189, 248, 0.3); --input-bg: rgba(56, 189, 248, 0.1);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Poppins', sans-serif; line-height: 1.7; color: var(--text-primary); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; overflow-x: hidden; }
    @keyframes gradientAnimation { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
    .cosmic-background { background: linear-gradient(-45deg, var(--bg-primary), var(--bg-secondary), #020024, var(--bg-primary)); background-size: 400% 400%; animation: gradientAnimation 20s ease infinite; min-height: 100vh; width: 100%; display: flex; align-items: center; justify-content: center; padding: 2rem 0; box-sizing: border-box; }
    .container { max-width: 900px; margin: 0 auto; padding: 0 1rem; }
    .contact-card { background: var(--glass-bg); border: 1px solid var(--border-color); border-radius: 1.5rem; backdrop-filter: blur(10px); padding: 2rem; display: grid; gap: 2rem; }
    .section-header { text-align: left; margin-bottom: 2rem; }
    .section-title { font-size: 2.5rem; font-weight: 800; color: var(--text-white); margin-bottom: .5rem; }
    .section-subtitle { color: var(--text-secondary); }
    .text-gradient { background: linear-gradient(to right, var(--accent-sky), var(--accent-sky-light)); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .contact-info { display: flex; flex-direction: column; gap: 1.5rem; }
    .contact-item { display: flex; align-items: center; gap: 1rem; color: var(--text-secondary); text-decoration: none; transition: color .3s; }
    .contact-item:hover { color: var(--accent-sky-light); }
    .contact-icon { color: var(--accent-sky); }
    .contact-form { display: flex; flex-direction: column; gap: 1rem; }
    .form-input, .form-textarea { width: 100%; background: var(--input-bg); border: 1px solid var(--border-color); color: var(--text-primary); padding: .75rem 1rem; border-radius: .5rem; font-size: 1rem; font-family: 'Poppins', sans-serif; transition: border-color .3s, box-shadow .3s; }
    .form-input:focus, .form-textarea:focus { outline: none; border-color: var(--accent-sky); box-shadow: 0 0 10px var(--glow-color); }
    .form-textarea { resize: vertical; min-height: 120px; }
    .btn-primary { background: linear-gradient(45deg, var(--accent-sky), var(--accent-sky-light)); color: var(--bg-primary); font-weight: 700; font-size: 1rem; padding: .75rem 1.5rem; border-radius: 50px; text-decoration: none; transition: all .3s ease-in-out; display: inline-flex; align-items: center; justify-content: center; border: none; box-shadow: 0 0 20px var(--glow-color); cursor: pointer; }
    .btn-primary:hover { transform: scale(1.05); box-shadow: 0 0 35px var(--glow-color); }
    .btn-primary:disabled { opacity: .7; cursor: not-allowed; }
    .spinner { width: 16px; height: 16px; border: 2px solid rgba(0,0,0,.3); border-top-color: var(--bg-primary); border-radius: 50%; animation: spin 1s linear infinite; margin-right: 8px; }
    @keyframes spin { to { transform: rotate(360deg); } }
    @media (min-width: 768px) { .contact-card { grid-template-columns: 1fr 1.25fr; padding: 3rem; } }
  `}</style>
));

// --- ANIMAÇÕES ---
const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number): Variants => ({
    hidden: {
        y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
        x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
        opacity: 0
    },
    visible: { y: 0, x: 0, opacity: 1, transition: { type: 'tween', delay, duration: 0.6, ease: "easeOut" } },
});

// --- COMPONENTE PRINCIPAL ---

export default function ContactPage() {
    const [status, setStatus] = useState('idle');

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (status === 'loading') return;
        setStatus('loading');

        // Simulação de envio
        await new Promise(resolve => setTimeout(resolve, 2000));

        setStatus('success');

        setTimeout(() => setStatus('idle'), 4000);
    }, [status]);

    return (
        <>
            <Styles />
            <div className="cosmic-background">
                <main className="container">
                    <div className="contact-card">
                        <motion.div
                            variants={fadeIn('right', 0)}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="section-header">
                                <h1 className="section-title">Vamos <span className="text-gradient">Conversar</span></h1>
                                <p className="section-subtitle">Estou aberto a novas oportunidades e colaborações. Adoraria ouvir sobre seu projeto.</p>
                            </div>
                            <div className="contact-info">
                                <a href="mailto:contato@wuallandavilla.com" className="contact-item">
                                    <div className="contact-icon"><MailIcon /></div>
                                    <span>contato@wuallandavilla.com</span>
                                </a>
                                <a href="https://www.linkedin.com/in/wuallan-d-avilla-687669304/" target="_blank" rel="noopener noreferrer" className="contact-item">
                                    <div className="contact-icon"><LinkedinIcon /></div>
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </motion.div>

                        <motion.form
                            variants={fadeIn('left', 0.2)}
                            initial="hidden"
                            animate="visible"
                            onSubmit={handleSubmit}
                            className="contact-form"
                        >
                            <input id="name" name="name" type="text" placeholder="Seu nome" required className="form-input" disabled={status === 'loading'} />
                            <input id="email" name="email" type="email" placeholder="Seu e-mail" required className="form-input" disabled={status === 'loading'} />
                            <textarea id="message" name="message" placeholder="Sua mensagem..." required className="form-textarea" disabled={status === 'loading'}></textarea>
                            <button type="submit" className="btn-primary" disabled={status === 'loading'}>
                                {status === 'loading' && <div className="spinner"></div>}
                                {status === 'loading' ? 'Enviando...' : status === 'success' ? 'Enviado com Sucesso!' : 'Enviar Mensagem'}
                            </button>
                        </motion.form>
                    </div>
                </main>
            </div>
        </>
    );
}

