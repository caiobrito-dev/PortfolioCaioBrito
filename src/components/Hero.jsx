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
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem 1.5rem',
                position: 'relative',
            }}
        >
            {/* Profile photo */}
            <ScrollReveal>
                <motion.div
                    style={{
                        width: 180,
                        height: 180,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        marginBottom: '2rem',
                        border: '3px solid var(--color-primary)',
                        boxShadow: '0 0 40px rgba(59, 130, 246, 0.3), 0 0 80px rgba(59, 130, 246, 0.1)',
                    }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(59, 130, 246, 0.5)' }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src="/images/FotoPerfil.jpg"
                        alt="Caio Brito"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </motion.div>
            </ScrollReveal>

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
                        maxWidth: 550,
                        lineHeight: 1.7,
                        marginBottom: '2.5rem',
                    }}
                >
                    Desenvolvedor web focado em criar experiências digitais elegantes, interativas e de alta performance.
                </p>
            </ScrollReveal>

            {/* CTA buttons */}
            <ScrollReveal delay={0.8}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="#projetos" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' }); }}>
                        Ver Projetos
                    </a>
                    <a href="#contatos" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#contatos')?.scrollIntoView({ behavior: 'smooth' }); }}>
                        Entrar em Contato
                    </a>
                </div>
            </ScrollReveal>

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
