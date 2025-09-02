import React from 'react';
import { motion, type Variants } from 'framer-motion';

// --- Ícones (Otimizados como componentes SVG) ---

const WebDevIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>);
const MobileIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>);
const AutomationIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M12 8V4H8" /><path d="M16.29 17.8L19 15l-2.71-2.8" /><path d="m16.29 17.8 2.71 2.8-2.71 2.8" /><path d="M10.76 9.54 15 5l-4.24-4.54" /><path d="M16 8h-4v4h4" /><path d="m5 19 3-3-3-3" /><path d="M5.29 17.8H2" /><path d="M8 12H4v4h4" /></svg>);
const techIcons = {
    HTML5: () => <svg fill="#E34F26" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.388-.002.607 6.952h11.1l-.33 3.572-3.301 1.005-3.376-1.004-.209-2.285H5.82l.33 4.171L12 19.351l5.871-1.648.808-8.953H8.531z" /></svg>,
    CSS3: () => <svg fill="#1572B6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718h10.059l.23-2.622H5.456l.607 6.952h11.1l-.33 3.572-3.301 1.005-3.376-1.004-.209-2.285H5.82l.33 4.171L12 19.351l5.871-1.648.808-8.953H8.531z" /></svg>,
    JavaScript: () => <svg fill="#F7DF1E" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0zm22.05 19.913c.22-.439.109-.989-.262-1.359L16.2 12l5.588-6.554c.37-.439.481-.989.262-1.428-.22-.439-.681-.678-1.159-.568L2 8.949v6.103l18.891 5.43c.478.109 1.028-.02 1.159-.569zm-7.95-6.554l-5.588-3.264v6.528l5.588-3.264z" /></svg>,
    TypeScript: () => <svg fill="#3178C6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.05 19.913c.22-.439.109-.989-.262-1.359L16.2 12l5.588-6.554c.37-.439.481-.989.262-1.428-.22-.439-.681-.678-1.159-.568L2 8.949v6.103l18.891 5.43c.478.109 1.028-.02 1.159-.569zm-7.95-6.554l-5.588-3.264v6.528l5.588-3.264z" /></svg>,
    React: () => <svg fill="#61DAFB" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-4.004-8a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /></svg>,
    TailwindCSS: () => <svg fill="#06B6D4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z M8 11h8v2H8v-2z" /></svg>,
    'Node.js': () => <svg fill="#339933" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 24C5.38 24 0 18.62 0 12S5.38 0 11.99 0C18.6 0 24 5.38 24 12s-5.4 12-12.01 12zm-.11-2.31c4.27 0 7.75-3.48 7.75-7.75S16.15 6.2 11.88 6.2c-4.27 0-7.75 3.48-7.75 7.75s3.48 7.74 7.75 7.74z" /></svg>,
    Python: () => <svg fill="#3776AB" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zM8.03 8.03c.52 0 .97.23 1.29.6l1.09-1.09c-.58-.58-1.35-.91-2.18-.91-1.71 0-3.1 1.38-3.1 3.1s1.38 3.1 3.1 3.1c.83 0 1.6-.33 2.18-.91l-1.09-1.09c-.32.37-.77.6-1.29.6-1.01 0-1.83-.82-1.83-1.83s.82-1.83 1.83-1.83zm7.94 7.94c-.52 0-.97-.23-1.29-.6l-1.09 1.09c.58.58 1.35.91 2.18.91 1.71 0 3.1-1.38 3.1-3.1s-1.38-3.1-3.1-3.1c-.83 0-1.6.33-2.18.91l1.09 1.09c.32-.37.77-.6 1.29-.6 1.01 0 1.83.82 1.83 1.83s-.82 1.83-1.83 1.83z" /></svg>,
    'n8n.io': () => <svg fill="#1AF192" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM12 6v12h-2V6h2zm4 0v12h-2V6h2z" /></svg>,
    OpenAI: () => <svg fill="#412991" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.82 7.182c-1.636-1.636-3.818-2.682-6.182-2.682s-4.545 1.045-6.182 2.682C6.822 8.818 5.777 11 5.777 13.364s1.045 4.545 2.682 6.182c1.636 1.636 3.818 2.682 6.182 2.682s4.545-1.045 6.182-2.682c1.636-1.636 2.682-3.818 2.682-6.182s-1.045-4.545-2.682-6.182zm-1.818 10.545c-1.227 1.227-2.864 2-4.636 2s-3.409-.773-4.636-2c-1.227-1.227-2-2.864-2-4.636s.773-3.409 2-4.636c1.227-1.227 2.864-2 4.636-2s3.409.773 4.636 2c1.227 1.227 2 2.864 2 4.636s-.773 3.409-2 4.636z" /></svg>,
    Firebase: () => <svg fill="#FFCA28" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" /></svg>,
    'VS Code': () => <svg fill="#007ACC" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.1 11.12l-8.23-8.23-1.06 1.06 7.17 7.17-7.17 7.17 1.06 1.06 8.23-8.23c.3-.3.3-.78 0-1.06zM1.96 12.88l8.23 8.23 1.06-1.06-7.17-7.17 7.17-7.17-1.06-1.06-8.23 8.23c-.3.3-.3.78 0 1.06z" /></svg>,
};

// --- Componente de Animação Otimizado com Foto ---
const HeroVisual = () => (
    <div className="hero-visual-container-opt">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'var(--accent-sky-light)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'var(--accent-sky)', stopOpacity: 1 }} />
                </linearGradient>
                <clipPath id="circle-clip">
                    <circle cx="200" cy="200" r="80" />
                </clipPath>
            </defs>
            <g className="floating-group">
                <circle cx="200" cy="200" r="150" fill="none" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="5 5" />
                <path d="M 50 200 A 150 150 0 0 1 350 200" fill="none" stroke="var(--accent-sky)" strokeWidth="0.7" />
                <path d="M 50 200 A 150 150 0 0 0 350 200" fill="none" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="2 3" />
                <image
                    href="assets/image/profile.png"
                    x="120"
                    y="120"
                    height="160"
                    width="160"
                    clipPath="url(#circle-clip)"
                />
                <circle cx="200" cy="200" r="80" fill="none" stroke="url(#glowGradient)" strokeWidth="2" />
            </g>
        </svg>
    </div>
);

// --- Componente de Estilos ---
const Styles = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
    :root {
      --bg-primary: #030014; --bg-secondary: #050816; --bg-card: rgba(10, 8, 28, 0.5);
      --glass-bg: rgba(255, 255, 255, 0.05); --text-primary: #e5e7eb; --text-secondary: #aaa6c3;
      --text-white: #ffffff; --accent-sky: #38bdf8; --accent-sky-light: #7dd3fc;
      --border-color: rgba(56, 189, 248, 0.15); --glow-color: rgba(56, 189, 248, 0.3);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Poppins', sans-serif; line-height: 1.7; color: var(--text-primary); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; overflow-x: hidden; }
    @keyframes gradientAnimation { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
    .cosmic-background { background: linear-gradient(-45deg, var(--bg-primary), var(--bg-secondary), #020024, var(--bg-primary)); background-size: 400% 400%; animation: gradientAnimation 20s ease infinite; }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 1rem; }
    .section { padding: 4rem 0; position: relative; border-bottom: 1px solid var(--border-color); }
    .section:last-child { border-bottom: none; }
    .section-header { text-align: center; margin-bottom: 3rem; }
    .section-pre-title { color: var(--accent-sky-light); font-weight: 500; letter-spacing: .1em; text-transform: uppercase; font-size: .9rem; }
    .section-title { font-size: 3rem; font-weight: 800; color: var(--text-white); margin-top: .25rem; }
    .text-gradient { background: linear-gradient(to right, var(--accent-sky), var(--accent-sky-light)); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .hero-section { min-height: 100vh; display: flex; align-items: center; width: 100%; overflow: hidden; padding: 0; }
    .hero-container { display: grid; grid-template-columns: 1fr; align-items: center; gap: 2rem; }
    .hero-content { text-align: center; }
    .hero-content h1 { font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 800; letter-spacing: -.05em; line-height: 1.1; }
    .hero-subtitle { font-size: clamp(1.1rem, 3vw, 1.5rem); font-weight: 500; margin: 1.5rem 0; }
    .hero-description { max-width: 48rem; color: var(--text-secondary); font-size: 1.1rem; margin: 0 auto; }
    .hero-cta { margin-top: 2.5rem; }
    .btn-primary { background: linear-gradient(45deg, var(--accent-sky), var(--accent-sky-light)); color: var(--bg-primary); font-weight: 700; padding: 1rem 2.5rem; border-radius: 50px; text-decoration: none; transition: all .3s ease-in-out; display: inline-block; border: none; box-shadow: 0 0 20px var(--glow-color); }
    .btn-primary:hover { transform: scale(1.05); box-shadow: 0 0 35px var(--glow-color); }
    
    .hero-visual-container-opt { display: none; }
    @keyframes float-opt { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
    .floating-group { animation: float-opt 6s ease-in-out infinite; }

    .about-container { max-width: 800px; margin: 0 auto; }
    .about-content { text-align: center; }
    .about-content p { font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1rem; }
    .about-content p:last-child { margin-bottom: 0; }
    .about-content span { color: var(--accent-sky-light); font-weight: 600; }
    .grid-container { display: grid; gap: 2rem; }
    .service-card { padding: 2rem; border-radius: 1.5rem; text-align: center; height: 100%; background: var(--glass-bg); border: 1px solid var(--border-color); backdrop-filter: blur(10px); transition: all .3s ease; }
    .service-card:hover { transform: translateY(-8px); border-color: var(--accent-sky); }
    .service-icon { margin-bottom: 1.5rem; }
    .icon { height: 2.5rem; width: 2.5rem; color: var(--accent-sky-light); margin: 0 auto; }
    .service-card h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: .75rem; }
    .service-card p { font-size: .95rem; }
    .tools-container { display: flex; flex-direction: column; gap: 3rem; }
    .tools-category-title { text-align: center; font-weight: 600; font-size: 1.75rem; margin-bottom: 2.5rem; }
    .tools-grid { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 2.5rem; }
    .tool-item { display: flex; flex-direction: column; align-items: center; gap: 1rem; transition: transform .3s ease; }
    .tool-item:hover { transform: scale(1.1); }
    .tool-icon-wrapper { width: 4.5rem; height: 4.5rem; border-radius: 50%; background: var(--glass-bg); border: 1px solid var(--border-color); display: flex; justify-content: center; align-items: center; }
    .tool-icon { width: 2.5rem; height: 2.5rem; color: var(--text-primary); }
    .tool-item p { font-weight: 500; transition: color .3s ease; margin: 0; }
    .tool-item:hover p { color: var(--text-white); }
    .testimonial-card { position: relative; background: var(--bg-card); padding: 2rem; border-radius: 1rem; border: 1px solid var(--border-color); }
    .testimonial-author { text-align: right; margin-top: 1rem; }
    .author-name { font-weight: bold; }
    .author-title { font-size: 0.9rem; color: var(--text-secondary); }
    @media (min-width: 768px) {
      .md-grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
      .md-grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
      .hero-content { text-align: left; }
      .hero-description { margin: 0; }
      .hero-container { grid-template-columns: 1fr 1fr; }
      .hero-visual-container-opt { display: flex; align-items: center; justify-content: center; }
      .about-content { text-align: center; }
    }
    @media (max-width: 768px) { .section-title { font-size: 2.25rem; } }
  `}</style>
);

// --- Animações ---
const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number, duration = 0.5): Variants => ({
    hidden: {
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        opacity: 0
    },
    visible: { y: 0, x: 0, opacity: 1, transition: { type: 'tween', delay, duration, ease: "easeOut" } },
});
const staggerContainer = (staggerChildren: number, delayChildren = 0): Variants => ({
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
});

// --- Componentes Memoizados para Performance ---
const MemoizedHeroVisual = React.memo(HeroVisual);
type ServiceCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
};
const ServiceCard = React.memo(({ title, description, icon }: ServiceCardProps) => (
    <div className="service-card">
        <div className="service-icon">{icon}</div>
        <h3 className="text-white">{title}</h3>
        <p className="text-secondary">{description}</p>
    </div>
));

type TestimonialCardProps = {
    quote: string;
    name: string;
    title: string;
};
const TestimonialCard = React.memo(({ quote, name, title }: TestimonialCardProps) => (
    <div className="testimonial-card">
        <p>"{quote}"</p>
        <div className="testimonial-author">
            <p className="author-name">- {name}</p>
            <p className="author-title">{title}</p>
        </div>
    </div>
));

type ToolItemProps = {
    name: string;
    icon: React.ComponentType;
};
const ToolItem = React.memo(({ name, icon: IconComponent }: ToolItemProps) => (
    <div className="tool-item">
        <div className="tool-icon-wrapper">
            <div className="tool-icon">
                <IconComponent />
            </div>
        </div>
        <p className="text-text-secondary">{name}</p>
    </div>
));

// --- Componente Principal ---
export default function App() {
    const services = [
        { title: 'Desenvolvimento Web', description: 'Crio sites e sistemas web responsivos e modernos com React, Node.js e as melhores práticas do mercado.', icon: <WebDevIcon /> },
        { title: 'Aplicativos Mobile', description: 'Desenvolvo aplicativos para iOS e Android com React Native, focando em uma experiência de usuário fluida.', icon: <MobileIcon /> },
        { title: 'Automação & IA', description: 'Implemento agentes de IA e automações com n8n e APIs para otimizar processos e aumentar a eficiência.', icon: <AutomationIcon /> },
    ];

    const testimonials = [
        { quote: "A performance e dedicação do Wuallan é uma constante. Ele se destaca na busca do conhecimento como autodidata. Ver seu desempenho e crescimento me enche de orgulho!", name: 'Wagner Sabor', title: 'Instrutor Educacional & Colega de Equipe Hackaton' },
        { quote: "Foi muito positivo. Demonstrou empenho, buscou soluções, adiantou tarefas e contribuiu significativamente na construção do nosso projeto.", name: 'Flávio Jose', title: 'Colega de Equipe Hackaton' }
    ];

    const frontendTools = [
        { name: 'HTML5', icon: techIcons.HTML5 }, { name: 'CSS3', icon: techIcons.CSS3 }, { name: 'JavaScript', icon: techIcons.JavaScript },
        { name: 'TypeScript', icon: techIcons.TypeScript }, { name: 'React', icon: techIcons.React }, { name: 'TailwindCSS', icon: techIcons.TailwindCSS },
    ];
    const backendTools = [
        { name: 'Node.js', icon: techIcons['Node.js'] }, { name: 'Python', icon: techIcons.Python }, { name: 'n8n.io', icon: techIcons['n8n.io'] },
        { name: 'OpenAI', icon: techIcons.OpenAI }, { name: 'Firebase', icon: techIcons.Firebase }, { name: 'VS Code', icon: techIcons['VS Code'] },
    ];

    return (
        <>
            <Styles />
            <div className="cosmic-background">
                <main>
                    <section id="home" className="hero-section">
                        <div className="container">
                            <div className="hero-container">
                                <motion.div initial="hidden" animate="visible" variants={staggerContainer(0.2)} className="hero-content">
                                    <motion.h1 variants={fadeIn('right', 0.1)} className="text-white">Wuallan D'Avilla</motion.h1>
                                    <motion.p variants={fadeIn('right', 0.2)} className="hero-subtitle text-gradient">Desenvolvedor Full Stack & Especialista em Automação</motion.p>
                                    <motion.p variants={fadeIn('right', 0.3)} className="hero-description">Transformo ideias em realidade digital com código limpo e soluções inteligentes, focado no ecossistema Web e Mobile.</motion.p>
                                    <motion.div variants={fadeIn('up', 0.4)} className="hero-cta">
                                        <a href="#about" className="btn-primary">Saiba Mais Sobre Mim</a>
                                    </motion.div>
                                </motion.div>
                                <motion.div initial="hidden" animate="visible" variants={fadeIn('left', 0.3)}>
                                    <MemoizedHeroVisual />
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    <motion.section id="about" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                        <div className="container">
                            <motion.div variants={fadeIn('down', 0.1)} className="section-header">
                                <p className="section-pre-title">Quem sou eu</p>
                                <h2 className="section-title">Sobre Mim.</h2>
                            </motion.div>
                            <div className="about-container">
                                <motion.div className="about-content" variants={fadeIn('up', 0.2)}>
                                    <p>Desde os 18 anos, mergulhado no universo da programação, sou um desenvolvedor apaixonado por transformar desafios em <span>soluções eficientes</span>.</p>
                                    <p>Minha motivação é explorar como a tecnologia, especialmente <span>automação e IA</span>, pode otimizar processos e gerar impacto real. Estou sempre em busca de projetos inovadores para aplicar minhas habilidades.</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section id="services" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer(0.2)}>
                        <div className="container">
                            <motion.div variants={fadeIn('down', 0.1)} className="section-header">
                                <p className="section-pre-title">O Que Eu Faço</p>
                                <h2 className="section-title text-white">Visão Geral.</h2>
                            </motion.div>
                            <div className="grid-container md-grid-cols-3">
                                {services.map((service, index) => (
                                    <motion.div key={service.title} variants={fadeIn('up', 0.2 + index * 0.1)}>
                                        <ServiceCard {...service} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    <motion.section id="testimonials" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer(0.2)}>
                        <div className="container">
                            <motion.div variants={fadeIn('down', 0.1)} className="section-header">
                                <p className="section-pre-title">O Que Dizem Sobre Mim</p>
                                <h2 className="section-title text-white">Depoimentos.</h2>
                            </motion.div>
                            <div className="grid-container md-grid-cols-2">
                                {testimonials.map((t, index) => (
                                    <motion.div key={t.name} variants={fadeIn('up', 0.2 + index * 0.1)}>
                                        <TestimonialCard {...t} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    <motion.section id="tools" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer(0.1)}>
                        <div className="container">
                            <motion.div variants={fadeIn('down', 0.1)} className="section-header">
                                <p className="section-pre-title">Meu Arsenal</p>
                                <h2 className="section-title text-white">Tecnologias & Ferramentas.</h2>
                            </motion.div>
                            <div className="tools-container">
                                <motion.div variants={fadeIn('up', 0.2)}>
                                    <h3 className="tools-category-title text-white">Front-end</h3>
                                    <div className="tools-grid">
                                        {frontendTools.map(tool => <ToolItem key={tool.name} name={tool.name} icon={tool.icon} />)}
                                    </div>
                                </motion.div>
                                <motion.div variants={fadeIn('up', 0.3)}>
                                    <h3 className="tools-category-title text-white">Back-end & Automação</h3>
                                    <div className="tools-grid">
                                        {backendTools.map(tool => <ToolItem key={tool.name} name={tool.name} icon={tool.icon} />)}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>
                </main>
            </div>
        </>
    );
}

