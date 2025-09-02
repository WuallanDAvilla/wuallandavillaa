import { motion, type Variants } from 'framer-motion';

// Componente para a animação visual da seção Home
const HeroVisual = () => (
    <div className="hero-visual-container">
        <div className="rotating-globe">
            <div className="globe-surface"></div>
            <div className="globe-ring ring-1"></div>
            <div className="globe-ring ring-2"></div>
            <div className="globe-ring ring-3"></div>
            <div className="globe-sparkle sparkle-1"></div>
            <div className="globe-sparkle sparkle-2"></div>
            <div className="globe-sparkle sparkle-3"></div>
            <div className="globe-sparkle sparkle-4"></div>
        </div>
    </div>
);


// Componente para injetar os estilos CSS diretamente no DOM
const Styles = () => (
    <style>{`
    /* --- Fontes e Variáveis Globais --- */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    :root {
      --bg-primary: #030014;
      --bg-secondary: #050816;
      --bg-card: rgba(10, 8, 28, 0.5);
      --glass-bg: rgba(255, 255, 255, 0.05);
      --text-primary: #e5e7eb;
      --text-secondary: #aaa6c3;
      --text-white: #ffffff;
      --accent-sky: #38bdf8;
      --accent-sky-light: #7dd3fc;
      --border-color: rgba(56, 189, 248, 0.15);
      --glow-color: rgba(56, 189, 248, 0.3);
    }

    /* --- Estilos Base --- */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Poppins', sans-serif;
      line-height: 1.7;
      color: var(--text-primary);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    /* --- Animação de Fundo --- */
    @keyframes gradientAnimation {
      0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; }
    }
    .cosmic-background {
      background: linear-gradient(-45deg, var(--bg-primary), var(--bg-secondary), #020024, var(--bg-primary));
      background-size: 400% 400%;
      animation: gradientAnimation 20s ease infinite;
    }

    /* --- Layout e Contêineres --- */
    .container { max-width: 1100px; margin: 0 auto; padding: 0 1rem; }
    .section {
      padding: 5rem 0; /* Espaçamento ajustado */
      position: relative;
      border-bottom: 1px solid var(--border-color);
    }
    .section:last-child { border-bottom: none; }

    /* --- Tipografia e Cabeçalhos --- */
    .section-header { text-align: center; margin-bottom: 3rem; }
    .section-pre-title { color: var(--accent-sky-light); font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; font-size: 0.9rem; }
    .section-title { font-size: 3rem; font-weight: 800; color: var(--text-white); margin-top: 0.25rem; }
    .text-gradient { background: linear-gradient(to right, var(--accent-sky), var(--accent-sky-light)); -webkit-background-clip: text; background-clip: text; color: transparent; }

    /* --- Seção Hero --- */
    .hero-section { min-height: 100vh; display: flex; align-items: center; width: 100%; overflow: hidden; padding-bottom: 6rem; /* Compensa a altura do header, subindo o conteúdo */ box-sizing: border-box; }
    .hero-container { display: grid; grid-template-columns: 1fr; align-items: center; gap: 2rem; }
    .hero-content { text-align: center; }
    .hero-content h1 { font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 800; color: var(--text-white); letter-spacing: -0.05em; margin: 0; line-height: 1.1; }
    .hero-subtitle { font-size: clamp(1.1rem, 3vw, 1.5rem); font-weight: 500; margin: 1.5rem 0; }
    .hero-description { max-width: 48rem; color: var(--text-secondary); font-size: 1.1rem; margin: 0 auto; }
    .hero-cta { margin-top: 2.5rem; }
    .btn-primary { background: linear-gradient(45deg, var(--accent-sky), var(--accent-sky-light)); color: var(--bg-primary); font-weight: 700; font-size: 1rem; padding: 1rem 2.5rem; border-radius: 50px; text-decoration: none; transition: all 0.3s ease-in-out; display: inline-block; border: none; box-shadow: 0 0 20px var(--glow-color); }
    .btn-primary:hover { transform: scale(1.05); box-shadow: 0 0 35px var(--glow-color); }

    /* --- Animação do Hero --- */
    .hero-visual-container { display: none; perspective: 1000px; position: relative; height: 400px; width: 100%; }
    @keyframes rotate-globe { 0% { transform: rotateY(0deg) rotateX(10deg); } 100% { transform: rotateY(360deg) rotateX(10deg); } }
    @keyframes float-globe { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
    .rotating-globe { width: 300px; height: 300px; position: relative; transform-style: preserve-3d; animation: rotate-globe 25s linear infinite, float-globe 8s ease-in-out infinite; }
    .globe-surface { width: 100%; height: 100%; border-radius: 50%; position: absolute; background: radial-gradient(circle at 30% 30%, var(--accent-sky-light), var(--bg-primary) 70%); box-shadow: inset 0 0 50px rgba(0,0,0,0.5), 0 0 20px var(--glow-color); opacity: 0.3; }
    .globe-ring { position: absolute; top: 50%; left: 50%; border: 2px solid var(--accent-sky); border-radius: 50%; opacity: 0.5; transform-style: preserve-3d; }
    .ring-1 { width: 130%; height: 130%; margin: -65% 0 0 -65%; transform: rotateY(70deg) rotateX(10deg); animation: rotate-globe 30s linear infinite reverse; }
    .ring-2 { width: 150%; height: 150%; margin: -75% 0 0 -75%; transform: rotateY(-60deg) rotateX(20deg); animation: rotate-globe 20s linear infinite; }
    .ring-3 { width: 170%; height: 170%; margin: -85% 0 0 -85%; transform: rotateY(20deg) rotateX(80deg); animation: rotate-globe 35s linear infinite; }
    .globe-sparkle { position: absolute; width: 6px; height: 6px; background: var(--accent-sky-light); border-radius: 50%; box-shadow: 0 0 10px var(--accent-sky-light); opacity: 0; animation: sparkle-animation 5s linear infinite; }
    @keyframes sparkle-animation { 0%, 100% { opacity: 0; transform: scale(0.5); } 50% { opacity: 1; transform: scale(1.2); } }
    .sparkle-1 { top: 20%; left: 30%; animation-delay: 0s; } .sparkle-2 { top: 80%; left: 80%; animation-delay: 1s; } .sparkle-3 { top: 40%; left: 90%; animation-delay: 2.5s; } .sparkle-4 { top: 60%; left: 10%; animation-delay: 4s; }

    /* --- Seção Sobre --- */
    .about-container { display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: center; }
    .about-image-wrapper { max-width: 280px; margin: 0 auto; }
    .about-image { width: 100%; border-radius: 50%; border: 3px solid var(--border-color); padding: 5px; box-shadow: 0 0 30px var(--glow-color); }
    .about-content { text-align: center; }
    .about-content p { font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1rem; }
    .about-content p:last-child { margin-bottom: 0; }
    .about-content span { color: var(--accent-sky-light); font-weight: 600; }

    /* --- Grids --- */
    .grid-container { display: grid; gap: 2rem; }
    
    /* --- Card de Serviço --- */
    .service-card { padding: 2rem; border-radius: 1.5rem; text-align: center; height: 100%; background: var(--glass-bg); border: 1px solid var(--border-color); backdrop-filter: blur(10px); transition: all 0.3s ease; position: relative; overflow: hidden; }
    .service-card:hover { transform: translateY(-8px); border-color: var(--accent-sky); }
    .service-icon { margin-bottom: 1.5rem; }
    .icon { height: 2.5rem; width: 2.5rem; color: var(--accent-sky-light); margin: 0 auto; }
    .service-card h3 { font-size: 1.25rem; font-weight: 600; color: var(--text-white); margin-bottom: 0.75rem; }
    .service-card p { color: var(--text-secondary); font-size: 0.95rem; }

    /* --- Seção de Ferramentas --- */
    .tools-container { display: flex; flex-direction: column; gap: 3rem; }
    .tools-category-title { text-align: center; font-weight: 600; color: var(--text-white); font-size: 1.75rem; margin-bottom: 2.5rem; }
    .tools-grid { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 2.5rem; }
    .tool-item { display: flex; flex-direction: column; align-items: center; gap: 1rem; transition: transform 0.3s ease; }
    .tool-item:hover { transform: scale(1.1); }
    .tool-icon-wrapper { width: 4.5rem; height: 4.5rem; border-radius: 50%; background: var(--glass-bg); border: 1px solid var(--border-color); display: flex; justify-content: center; align-items: center; }
    .tool-icon { width: 2.5rem; height: 2.5rem; }
    .tool-item p { color: var(--text-secondary); font-weight: 500; transition: color 0.3s ease; margin: 0; }
    .tool-item:hover p { color: var(--text-white); }

    /* --- Card de Depoimento --- */
    .testimonial-card { position: relative; background-color: var(--bg-card); padding: 2rem; border-radius: 1rem; border: 1px solid var(--border-color); }
    
    /* --- Media Queries --- */
    @media (min-width: 768px) {
      .md-grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
      .md-grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
      .hero-content { text-align: left; }
      .hero-description { margin: 0; }
      .hero-container { grid-template-columns: 1fr 1fr; }
      .hero-visual-container { display: flex; align-items: center; justify-content: center; }
      .about-container { grid-template-columns: 280px 1fr; gap: 3rem; }
      .about-content { text-align: left; }
    }
    @media (max-width: 768px) { .section-title { font-size: 2.25rem; } }
  `}</style>
);

// --- Ícones ---
const WebDevIcon = () => (<svg xmlns="http://www.w.3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>);
const MobileIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>);
const AutomationIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M12 8V4H8" /><path d="M16.29 17.8L19 15l-2.71-2.8" /><path d="m16.29 17.8 2.71 2.8-2.71 2.8" /><path d="M10.76 9.54 15 5l-4.24-4.54" /><path d="M16 8h-4v4h4" /><path d="m5 19 3-3-3-3" /><path d="M5.29 17.8H2" /><path d="M8 12H4v4h4" /></svg>);

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
        { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' }, { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css3/1572B6' }, { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' }, { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' }, { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' }, { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    ];
    const backendTools = [
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' }, { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' }, { name: 'n8n.io', icon: 'https://cdn.simpleicons.org/n8n/1AF192' }, { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/412991' }, { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' }, { name: 'VS Code', icon: 'https://cdn.simpleicons.org/visualstudiocode/007ACC' },
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
                                    <motion.h1 variants={fadeIn('right', 0.1)}>Wuallan D'Avilla</motion.h1>
                                    <motion.p variants={fadeIn('right', 0.2)} className="hero-subtitle text-gradient">Desenvolvedor Full Stack & Especialista em Automação</motion.p>
                                    <motion.p variants={fadeIn('right', 0.3)} className="hero-description">Transformo ideias em realidade digital com código limpo e soluções inteligentes, focado no ecossistema Web e Mobile.</motion.p>
                                    <motion.div variants={fadeIn('up', 0.4)} className="hero-cta">
                                        <a href="#about" className="btn-primary">Saiba Mais Sobre Mim</a>
                                    </motion.div>
                                </motion.div>
                                <motion.div initial="hidden" animate="visible" variants={fadeIn('left', 0.3)}>
                                    <HeroVisual />
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
                                <motion.div className="about-image-wrapper" variants={fadeIn('right', 0.2)}>
                                    <img src="assets/image/profile.png" alt="Foto de Wuallan D'Avilla" className="about-image" />
                                </motion.div>
                                <motion.div className="about-content" variants={fadeIn('left', 0.3)}>
                                    <p>Desde os 18 anos, mergulhado no universo da programação, sou um desenvolvedor apaixonado por transformar desafios em <span>soluções eficientes</span>. Minha especialidade é construir experiências digitais completas, do front-end ao back-end.</p>
                                    <p>Minha motivação é explorar como a tecnologia, especialmente <span>automação e IA</span>, pode otimizar processos e gerar impacto real. Estou sempre em busca de projetos inovadores para aplicar minhas habilidades e continuar crescendo.</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section id="services" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer(0.2)}>
                        <div className="container">
                            <motion.div variants={fadeIn('down', 0.1)} className="section-header">
                                <p className="section-pre-title">O Que Eu Faço</p>
                                <h2 className="section-title">Visão Geral.</h2>
                            </motion.div>
                            <div className="grid-container md-grid-cols-3">
                                {services.map((service, index) => (
                                    <motion.div key={service.title} variants={fadeIn('up', 0.2 + index * 0.1)}>
                                        <div className="service-card">
                                            <div className="service-icon">{service.icon}</div>
                                            <h3>{service.title}</h3>
                                            <p>{service.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    <motion.section id="testimonials" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer(0.2)}>
                        <div className="container">
                            <motion.div variants={fadeIn('down', 0.1)} className="section-header">
                                <p className="section-pre-title">O Que Dizem Sobre Mim</p>
                                <h2 className="section-title">Depoimentos.</h2>
                            </motion.div>
                            <div className="grid-container md-grid-cols-2">
                                {testimonials.map((t, index) => (
                                    <motion.div key={t.name} variants={fadeIn('up', 0.2 + index * 0.1)}>
                                        <div className="testimonial-card">
                                            <p>"{t.quote}"</p>
                                            <div style={{ textAlign: 'right', marginTop: '1rem' }}>
                                                <p style={{ fontWeight: 'bold' }}>- {t.name}</p>
                                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t.title}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    <motion.section id="tools" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer(0.1)}>
                        <div className="container">
                            <motion.div variants={fadeIn('down', 0.1)} className="section-header">
                                <p className="section-pre-title">Meu Arsenal</p>
                                <h2 className="section-title">Tecnologias & Ferramentas.</h2>
                            </motion.div>
                            <div className="tools-container">
                                <motion.div variants={fadeIn('up', 0.2)}>
                                    <h3 className="tools-category-title">Front-end</h3>
                                    <div className="tools-grid">
                                        {frontendTools.map(tool =>
                                            <div key={tool.name} className="tool-item">
                                                <div className="tool-icon-wrapper"><img src={tool.icon} alt={tool.name} className="tool-icon" /></div>
                                                <p>{tool.name}</p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                                <motion.div variants={fadeIn('up', 0.3)}>
                                    <h3 className="tools-category-title">Back-end & Automação</h3>
                                    <div className="tools-grid">
                                        {backendTools.map(tool =>
                                            <div key={tool.name} className="tool-item">
                                                <div className="tool-icon-wrapper"><img src={tool.icon} alt={tool.name} className="tool-icon" /></div>
                                                <p>{tool.name}</p>
                                            </div>
                                        )}
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


