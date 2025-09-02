import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '../../types';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!project) return;
        setCurrentImageIndex(0);
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleEsc);
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [project, onClose]);

    if (!project) return null;

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };
    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-[100]"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card text-primary rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative border border-border-color"
                    onClick={e => e.stopPropagation()}
                >
                    <button onClick={onClose} className="absolute top-4 right-4 text-secondary hover:text-white text-3xl z-20 transition-transform duration-200 hover:scale-125">&times;</button>
                    <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <div className="relative mb-4 group">
                                <img src={project.images[currentImageIndex]} alt={project.title} className="w-full rounded-lg shadow-lg aspect-video object-cover" />
                                {project.images.length > 1 && (
                                    <>
                                        <button onClick={prevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/75 transition-all opacity-0 group-hover:opacity-100">&lt;</button>
                                        <button onClick={nextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/75 transition-all opacity-0 group-hover:opacity-100">&gt;</button>
                                    </>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                            </div>
                            <div className="flex items-center gap-4">
                                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary flex-1"><i className="fas fa-external-link-alt mr-2"></i>Ver Demo</a>}
                                {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary flex-1"><i className="fab fa-github mr-2"></i>Ver Código</a>}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                            <div className="space-y-6 text-secondary">
                                <div><h3 className="font-bold text-lg text-white mb-2 border-b border-border-color pb-2">O Desafio</h3><p>{project.challenge}</p></div>
                                <div><h3 className="font-bold text-lg text-white mb-2 border-b border-border-color pb-2">A Solução</h3><p>{project.solution}</p></div>
                                <div><h3 className="font-bold text-lg text-white mb-2 border-b border-border-color pb-2">Resultados</h3><p>{project.results}</p></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;