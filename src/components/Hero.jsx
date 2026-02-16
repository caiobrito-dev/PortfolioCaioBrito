import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import ScrollReveal from './ScrollReveal';

const roles = [
    'Desenvolvedor Full-Stack',
    'Entusiasta de React',
    'Criador de Soluções Web',
    'Estudante de Sistemas de Informação',
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting && displayText === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            const speed = isDeleting ? 40 : 80;
            timeout = setTimeout(() => {
                setDisplayText(
                    isDeleting
                        ? currentRole.slice(0, displayText.length - 1)
                        : currentRole.slice(0, displayText.length + 1)
                );
            }, speed);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    const scrollToAbout = () => {
        document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="inicio"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem 1.5rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background photo overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url(/images/FotoPerfil.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.06,
                    filter: 'blur(8px)',
                    transform: 'scale(1.1)',
                    pointerEvents: 'none',
                }}
            />
            {/* Gradient overlay on top of photo */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 70% 50%, rgba(59, 130, 246, 0.08), transparent 70%), linear-gradient(to bottom, var(--color-bg), transparent 30%, transparent 70%, var(--color-bg))',
                    pointerEvents: 'none',
                }}
            />

            {/* Main content - split layout */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'clamp(2rem, 5vw, 5rem)',
                    maxWidth: 1100,
                    width: '100%',
                    position: 'relative',
                    zIndex: 1,
                    flexWrap: 'wrap',
                }}
            >
                {/* Left side - Text content */}
                <div
                    style={{
                        flex: '1 1 400px',
                        textAlign: 'left',
                        minWidth: 280,
                    }}
                >
                    {/* Greeting */}
                    <ScrollReveal delay={0.2}>
                        <h1
                            style={{
                                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                fontWeight: 800,
                                color: 'var(--color-text-heading)',
                                marginBottom: '0.5rem',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Olá, eu sou{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, var(--color-primary-light), var(--color-primary))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Caio Brito
                            </span>
                        </h1>
                    </ScrollReveal>

                    {/* Typing effect */}
                    <ScrollReveal delay={0.4}>
                        <div
                            style={{
                                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                                color: 'var(--color-text-muted)',
                                marginBottom: '2rem',
                                minHeight: '2rem',
                                fontWeight: 400,
                            }}
                        >
                            {displayText}
                            <motion.span
                                animate={{ opacity: [0, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                                style={{ color: 'var(--color-primary)', fontWeight: 300 }}
                            >
                                |
                            </motion.span>
                        </div>
                    </ScrollReveal>

                    {/* Description */}
                    <ScrollReveal delay={0.6}>
                        <p
                            style={{
                                fontSize: '1.1rem',
                                color: 'var(--color-text-muted)',
                                maxWidth: 500,
                                lineHeight: 1.7,
                                marginBottom: '2.5rem',
                            }}
                        >
                            Desenvolvedor web focado em criar experiências digitais elegantes, interativas e de alta performance.
                        </p>
                    </ScrollReveal>

                    {/* CTA buttons */}
                    <ScrollReveal delay={0.8}>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="#projetos" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                Ver Projetos
                            </a>
                            <a href="#contatos" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#contatos')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                Entrar em Contato
                            </a>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right side - Profile photo */}
                <ScrollReveal delay={0.3}>
                    <motion.div
                        style={{
                            flex: '0 0 auto',
                            position: 'relative',
                        }}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        {/* Glow behind the photo */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: -20,
                                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25), transparent 70%)',
                                borderRadius: 24,
                                filter: 'blur(30px)',
                                pointerEvents: 'none',
                            }}
                        />
                        {/* Photo container */}
                        <motion.div
                            style={{
                                width: 'clamp(290px, 25vw, 380px)',
                                height: 'clamp(350px, 32vw, 470px)',
                                borderRadius: 20,
                                overflow: 'hidden',
                                border: '2px solid rgba(59, 130, 246, 0.3)',
                                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4), 0 0 60px rgba(59, 130, 246, 0.15)',
                                position: 'relative',
                            }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: '0 12px 50px rgba(0, 0, 0, 0.5), 0 0 80px rgba(59, 130, 246, 0.25)',
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <img
                                src="/images/FotoPerfil.jpg"
                                alt="Caio Brito"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                            {/* Subtle gradient overlay on photo bottom */}
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '40%',
                                    background: 'linear-gradient(to top, rgba(5, 10, 24, 0.6), transparent)',
                                    pointerEvents: 'none',
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </ScrollReveal>
            </div>

            {/* Scroll indicator */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    cursor: 'pointer',
                    color: 'var(--color-text-muted)',
                }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                onClick={scrollToAbout}
            >
                <HiArrowDown size={24} />
            </motion.div>
        </section>
    );
}
