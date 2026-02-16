import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contatos', href: '#contatos' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`glass-strong`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: scrolled ? '0.7rem 1.5rem' : '1rem 1.5rem',
                transition: 'padding 0.3s ease',
                borderBottom: scrolled
                    ? '1px solid rgba(59,130,246,0.15)'
                    : '1px solid transparent',
            }}
        >
            <nav
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <motion.a
                    href="#inicio"
                    onClick={(e) => handleClick(e, '#inicio')}
                    style={{
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        color: '#fff',
                        textDecoration: 'none',
                        letterSpacing: '-0.02em',
                    }}
                    whileHover={{ scale: 1.05 }}
                >
                    <span style={{ color: 'var(--color-primary-light)' }}>&lt;</span>
                    Caio Brito
                    <span style={{ color: 'var(--color-primary-light)' }}> /&gt;</span>
                </motion.a>

                {/* Desktop nav */}
                <div
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        alignItems: 'center',
                    }}
                    className="desktop-nav"
                >
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            style={{
                                color: 'var(--color-text-muted)',
                                textDecoration: 'none',
                                fontWeight: 500,
                                fontSize: '0.95rem',
                                transition: 'color 0.3s',
                            }}
                            whileHover={{ color: '#60a5fa', y: -2 }}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        fontSize: '1.8rem',
                        cursor: 'pointer',
                        padding: '0.25rem',
                    }}
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                        style={{
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.2rem',
                            padding: '1.5rem 0',
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                style={{
                                    color: 'var(--color-text)',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    fontSize: '1.1rem',
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .mobile-menu-btn { display: none !important; }
        .mobile-menu { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-menu { display: flex !important; }
        }
      `}</style>
        </motion.header>
    );
}
