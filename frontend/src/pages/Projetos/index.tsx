import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

// --- Tipos ---
type Project = {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    problem: string;
    solution: string;
    tech: string[];
    liveUrl: string;
};

// --- COMPONENTES OTIMIZADOS ---

const ProjectModal: React.FC<{ project: Project | null; onClose: () => void; }> = React.memo(({ project, onClose }) => {
    useEffect(() => {
        if (project) {
            document.body.classList.add('modal-open');
            return () => {
                document.body.classList.remove('modal-open');
            };
        }
    }, [project]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="modal-backdrop"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={onClose} className="modal-close-btn">&times;</button>
                    <img src={project.image} alt={project.title} className="modal-image" />
                    <div className="modal-body">
                        <h2 className="modal-title">{project.title}</h2>
                        <div className="modal-tags">
                            {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
                        </div>
                        <h3 className="modal-subtitle">O Desafio</h3>
                        <p className="modal-text">{project.problem}</p>
                        <h3 className="modal-subtitle">A Solução</h3>
                        <p className="modal-text">{project.solution}</p>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary modal-action-btn">
                            Ver Projeto Online
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
});

const ProjectCardSkeleton: React.FC = React.memo(() => (
    <div className="project-card-skeleton">
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
            <div className="skeleton-line title"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line short"></div>
        </div>
    </div>
));

const ProjectCard: React.FC<{ project: Project; onSelect: (project: Project) => void; }> = React.memo(({ project, onSelect }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={() => onSelect(project)}
        className="project-card"
    >
        <div className="project-image-wrapper">
            <img src={project.image} alt={project.title} className="project-image" />
        </div>
        <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
                {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
        </div>
    </motion.div>
));


// --- ESTILOS E ANIMAÇÕES ---

const Styles = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
    :root {
      --bg-primary: #030014; --bg-secondary: #050816; --bg-card: rgba(10, 8, 28, 0.5);
      --glass-bg: rgba(255, 255, 255, 0.05); --text-primary: #e5e7eb; --text-secondary: #aaa6c3;
      --text-white: #ffffff; --accent-sky: #38bdf8; --accent-sky-light: #7dd3fc;
      --border-color: rgba(56, 189, 248, 0.15); --glow-color: rgba(56, 189, 248, 0.3);
      --skeleton-bg: rgba(56, 189, 248, 0.1);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Poppins', sans-serif; line-height: 1.7; color: var(--text-primary); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; overflow-x: hidden; }
    body.modal-open { overflow: hidden; }
    @keyframes gradientAnimation { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
    .cosmic-background { background: linear-gradient(-45deg, var(--bg-primary), var(--bg-secondary), #020024, var(--bg-primary)); background-size: 400% 400%; animation: gradientAnimation 20s ease infinite; min-height: 100vh; width: 100%; padding: 10rem 0 5rem; box-sizing: border-box; }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 1rem; }
    .page-section { padding: 0; position: relative; }
    .section-header { text-align: center; margin-bottom: 3rem; }
    .section-pre-title { color: var(--accent-sky-light); font-weight: 500; letter-spacing: .1em; text-transform: uppercase; font-size: .9rem; }
    .section-title { font-size: 3rem; font-weight: 800; color: var(--text-white); margin-top: .25rem; }
    .btn-primary { background: linear-gradient(45deg, var(--accent-sky), var(--accent-sky-light)); color: var(--bg-primary); font-weight: 700; padding: 1rem 2.5rem; border-radius: 50px; text-decoration: none; transition: all .3s ease-in-out; display: inline-block; border: none; box-shadow: 0 0 20px var(--glow-color); cursor: pointer; }
    .btn-primary:hover { transform: scale(1.05); box-shadow: 0 0 35px var(--glow-color); }
    .grid-container { display: grid; gap: 2rem; }
    .filter-buttons { display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap; }
    .filter-btn { background: transparent; border: 1px solid var(--border-color); color: var(--text-secondary); padding: .5rem 1.5rem; border-radius: 50px; cursor: pointer; transition: all .3s ease; font-weight: 500; }
    .filter-btn:hover { background-color: var(--glass-bg); color: var(--text-white); }
    .filter-btn.active { background: var(--accent-sky); color: var(--bg-primary); border-color: var(--accent-sky); }
    .project-card { background: var(--glass-bg); border: 1px solid var(--border-color); border-radius: 1rem; overflow: hidden; transition: all .3s ease; cursor: pointer; height: 100%; display: flex; flex-direction: column; }
    .project-card:hover { transform: translateY(-8px); box-shadow: 0 10px 30px rgba(0,0,0,.2); border-color: var(--accent-sky); }
    .project-image-wrapper { width: 100%; height: 200px; overflow: hidden; }
    .project-image { width: 100%; height: 100%; object-fit: cover; transition: transform .4s ease; }
    .project-card:hover .project-image { transform: scale(1.1); }
    .project-content { padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; }
    .project-content h3 { font-size: 1.25rem; font-weight: 600; color: var(--text-white); margin-bottom: .5rem; }
    .project-content p { color: var(--text-secondary); font-size: .9rem; flex-grow: 1; margin-bottom: 1rem; }
    .project-tags { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: auto; }
    .tag { background: rgba(56,189,248,.1); color: var(--accent-sky-light); padding: .25rem .75rem; border-radius: 50px; font-size: .75rem; font-weight: 500; }
    @keyframes pulse { 50% { opacity: .5; } }
    .project-card-skeleton { background: var(--glass-bg); border: 1px solid var(--border-color); border-radius: 1rem; padding: 1.5rem; animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite; }
    .skeleton-image { height: 170px; background-color: var(--skeleton-bg); border-radius: .5rem; }
    .skeleton-content { margin-top: 1.5rem; }
    .skeleton-line { height: 1rem; background-color: var(--skeleton-bg); border-radius: .25rem; margin-bottom: .75rem; }
    .skeleton-line.title { height: 1.5rem; width: 75%; margin-bottom: 1rem; }
    .skeleton-line.short { width: 60%; }
    .modal-backdrop { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(3,0,20,.8); backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 1rem; }
    .modal-content { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 1rem; width: 100%; max-width: 600px; max-height: 90vh; overflow-y: auto; position: relative; display: flex; flex-direction: column; }
    .modal-close-btn { position: absolute; top: 1rem; right: 1rem; background: none; border: none; color: var(--text-secondary); font-size: 2rem; cursor: pointer; line-height: 1; z-index: 10; }
    .modal-image { width: 100%; height: 250px; object-fit: cover; border-top-left-radius: 1rem; border-top-right-radius: 1rem; }
    .modal-body { padding: 2rem; }
    .modal-title { font-size: 2rem; font-weight: 700; color: var(--text-white); margin-bottom: 1rem; }
    .modal-tags { margin-bottom: 1.5rem; }
    .modal-subtitle { font-size: 1.2rem; font-weight: 600; color: var(--accent-sky-light); margin-bottom: .5rem; margin-top: 1.5rem; }
    .modal-text { color: var(--text-secondary); line-height: 1.8; }
    .modal-action-btn { margin-top: 2rem; display: inline-block; width: 100%; text-align: center; }
    @media (min-width: 768px) { .md-grid-cols-2 { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 992px) { .lg-grid-cols-3 { grid-template-columns: repeat(3, 1fr); } }
    @media (max-width: 768px) { .section-title { font-size: 2.25rem; } }
  `}</style>
);

const fadeIn = (direction: 'up' | 'down', delay: number): Variants => ({
    hidden: { y: direction === 'up' ? 40 : -40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'tween', delay, duration: 0.5, ease: "easeOut" } },
});
const staggerContainer = (staggerChildren: number): Variants => ({
    hidden: {},
    visible: { transition: { staggerChildren } },
});

const allProjects: Project[] = [
    { id: 1, title: 'Plataforma de E-commerce', category: 'web', image: 'https://placehold.co/600x400/050816/38bdf8?text=E-commerce', description: 'Plataforma completa com carrinho, checkout e painel de admin.', problem: 'O desafio era criar uma plataforma de e-commerce robusta e escalável do zero para um cliente que precisava de total controle sobre seus produtos e vendas.', solution: 'Desenvolvi uma API RESTful com Node.js para o back-end e uma interface reativa com React no front-end. O resultado é um sistema performático que permite ao lojista gerenciar o negócio e aos clientes uma experiência de compra fluida.', tech: ['React', 'Node.js', 'TypeScript', 'Firebase'], liveUrl: '#' },
    { id: 2, title: 'App de Fitness', category: 'mobile', image: 'https://placehold.co/600x400/050816/38bdf8?text=Fitness+App', description: 'Aplicativo de acompanhamento de treinos e progresso pessoal.', problem: 'A dificuldade de encontrar um aplicativo intuitivo e personalizável para registrar e acompanhar treinos de musculação.', solution: 'Criei um app com React Native que permite aos usuários montar seus treinos, registrar cargas e visualizar o progresso através de gráficos, tudo salvo na nuvem com Firebase para acesso em qualquer lugar.', tech: ['React Native', 'Firebase', 'Chart.js'], liveUrl: '#' },
    { id: 3, title: 'IA para Atendimento', category: 'automation', image: 'https://placehold.co/600x400/050816/38bdf8?text=Chatbot+IA', description: 'Chatbot com IA para automatizar o suporte ao cliente em websites.', problem: 'Empresas perdiam clientes por demora no atendimento e falta de suporte 24/7.', solution: 'A solução foi desenvolver um agente de IA com o modelo da OpenAI e integrá-lo via n8n a plataformas de chat. O bot é capaz de responder dúvidas frequentes instantaneamente, melhorando a satisfação do cliente e reduzindo a carga da equipe de suporte.', tech: ['OpenAI', 'n8n.io', 'APIs'], liveUrl: '#' },
];

// --- COMPONENTE PRINCIPAL ---

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const filteredProjects = useMemo(() =>
        activeFilter === 'all' ? allProjects : allProjects.filter(p => p.category === activeFilter),
        [activeFilter]
    );

    const handleSelectProject = useCallback((project: Project) => {
        setSelectedProject(project);
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedProject(null);
    }, []);

    return (
        <>
            <Styles />
            <div className="cosmic-background">
                <main>
                    <section id="projects" className="page-section">
                        <div className="container">
                            <motion.div initial="hidden" animate="visible" variants={staggerContainer(0.1)}>
                                <motion.div variants={fadeIn('down', 0.1)} className="section-header">
                                    <p className="section-pre-title">Meu Portfólio</p>
                                    <h2 className="section-title">Projetos Recentes.</h2>
                                </motion.div>

                                <motion.div variants={fadeIn('up', 0.2)} className="filter-buttons">
                                    <button onClick={() => setActiveFilter('all')} className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}>Todos</button>
                                    <button onClick={() => setActiveFilter('web')} className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}>Web</button>
                                    <button onClick={() => setActiveFilter('mobile')} className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`}>Mobile</button>
                                    <button onClick={() => setActiveFilter('automation')} className={`filter-btn ${activeFilter === 'automation' ? 'active' : ''}`}>Automação</button>
                                </motion.div>

                                <motion.div layout className="grid-container md-grid-cols-2 lg-grid-cols-3">
                                    <AnimatePresence>
                                        {isLoading
                                            ? Array.from({ length: 3 }).map((_, index) => <ProjectCardSkeleton key={index} />)
                                            : filteredProjects.map(project => <ProjectCard key={project.id} project={project} onSelect={handleSelectProject} />)
                                        }
                                    </AnimatePresence>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>
                </main>
                <ProjectModal project={selectedProject} onClose={handleCloseModal} />
            </div>
        </>
    );
}

