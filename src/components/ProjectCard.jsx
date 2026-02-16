import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';

export default function ProjectCard({ project, index, onClick }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5, ease: 'easeOut' } }}
            viewport={{ once: true }}
            transition={{ duration: 0.15 }}
            onClick={onClick}
            style={{
                borderRadius: 16,
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-surface-border)',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
            }}
            whileHover={{
                y: -8,
                boxShadow: '0 20px 50px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.3)',
                transition: { duration: 0.15 },
            }}
            className="project-card"
        >
            {/* Thumbnail */}
            <div
                style={{
                    position: 'relative',
                    height: 200,
                    overflow: 'hidden',
                }}
            >
                <motion.img
                    src={project.thumbnail}
                    alt={project.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.2s ease',
                    }}
                    whileHover={{ scale: 1.08 }}
                />
                {/* Gradient overlay */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '50%',
                        background: 'linear-gradient(transparent, rgba(15, 26, 48, 0.95))',
                    }}
                />
                {/* Featured badge */}
                {project.featured && (
                    <div
                        style={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            padding: '0.3rem 0.7rem',
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            color: '#fff',
                            background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
                            borderRadius: 8,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                        }}
                    >
                        ★ Destaque
                    </div>
                )}
                {/* Live link icon */}
                {project.liveUrl && (
                    <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'absolute',
                            top: 12,
                            left: 12,
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(10, 22, 40, 0.7)',
                            backdropFilter: 'blur(8px)',
                            color: '#fff',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                        }}
                        whileHover={{ scale: 1.1, borderColor: 'rgba(59, 130, 246, 0.6)' }}
                    >
                        <HiExternalLink size={16} />
                    </motion.a>
                )}
            </div>

            {/* Content */}
            <div style={{ padding: '1.5rem' }}>
                <h3
                    style={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: 'var(--color-text-heading)',
                        marginBottom: '0.5rem',
                    }}
                >
                    {project.title}
                </h3>
                <p
                    style={{
                        fontSize: '0.9rem',
                        color: 'var(--color-text-muted)',
                        marginBottom: '1rem',
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                    {project.subtitle}
                </p>

                {/* Tech tags */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                    }}
                >
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="tech-badge">
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="tech-badge">+{project.technologies.length - 4}</span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
