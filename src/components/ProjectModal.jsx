import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight, HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

export default function ProjectModal({ project, onClose }) {
    const [currentImage, setCurrentImage] = useState(0);

    if (!project) return null;

    const images = project.images || [];
    const nextImg = () => setCurrentImage((p) => (p + 1) % images.length);
    const prevImg = () => setCurrentImage((p) => (p - 1 + images.length) % images.length);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 200,
                    background: 'rgba(5, 10, 24, 0.9)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem 1rem',
                    overflowY: 'auto',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    onClick={(e) => e.stopPropagation()}
                    className="glass"
                    style={{
                        maxWidth: 900,
                        width: '100%',
                        borderRadius: 20,
                        overflow: 'hidden',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            width: 40,
                            height: 40,
                            borderRadius: 12,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(10, 22, 40, 0.8)',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            color: '#fff',
                            cursor: 'pointer',
                            zIndex: 10,
                            fontSize: '1.2rem',
                        }}
                    >
                        <HiX />
                    </button>

                    {/* Image gallery */}
                    {images.length > 0 && (
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                maxHeight: 450,
                                overflow: 'hidden',
                                background: '#0a0f1e',
                            }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImage}
                                    src={images[currentImage]}
                                    alt={`${project.title} screenshot ${currentImage + 1}`}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        width: '100%',
                                        height: 450,
                                        objectFit: 'contain',
                                        background: '#0a0f1e',
                                    }}
                                />
                            </AnimatePresence>

                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImg}
                                        style={{
                                            position: 'absolute',
                                            left: 12,
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            background: 'rgba(10, 22, 40, 0.7)',
                                            border: '1px solid rgba(59, 130, 246, 0.2)',
                                            color: '#fff',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <HiChevronLeft size={22} />
                                    </button>
                                    <button
                                        onClick={nextImg}
                                        style={{
                                            position: 'absolute',
                                            right: 12,
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            background: 'rgba(10, 22, 40, 0.7)',
                                            border: '1px solid rgba(59, 130, 246, 0.2)',
                                            color: '#fff',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <HiChevronRight size={22} />
                                    </button>

                                    {/* Dots */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: 12,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            display: 'flex',
                                            gap: 6,
                                        }}
                                    >
                                        {images.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentImage(i)}
                                                style={{
                                                    width: i === currentImage ? 24 : 8,
                                                    height: 8,
                                                    borderRadius: 4,
                                                    background:
                                                        i === currentImage
                                                            ? 'var(--color-primary)'
                                                            : 'rgba(255,255,255,0.3)',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s',
                                                }}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {/* Content */}
                    <div style={{ padding: '2rem' }}>
                        <h2
                            style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                color: 'var(--color-text-heading)',
                                marginBottom: '0.5rem',
                            }}
                        >
                            {project.title}
                        </h2>
                        <p
                            style={{
                                fontSize: '1rem',
                                color: 'var(--color-primary-light)',
                                marginBottom: '1.5rem',
                                fontWeight: 500,
                            }}
                        >
                            {project.subtitle}
                        </p>

                        <p
                            style={{
                                fontSize: '1rem',
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.8,
                                marginBottom: '1.5rem',
                            }}
                        >
                            {project.description}
                        </p>

                        {/* Technologies */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4
                                style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: 'var(--color-text-heading)',
                                    marginBottom: '0.7rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Tecnologias
                            </h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    <HiExternalLink size={18} />
                                    Ver ao Vivo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
                                >
                                    <FaGithub size={18} />
                                    Repositório
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
