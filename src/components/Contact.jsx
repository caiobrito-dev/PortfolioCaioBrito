import { motion } from 'framer-motion';
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const socials = [
    {
        label: 'WhatsApp',
        icon: FaWhatsapp,
        url: 'https://wa.me/5521997170712?text=Olá, Vamos conversar sobre seus serviços web?',
        gradient: 'linear-gradient(135deg, #25D366, #128C7E)',
    },
    {
        label: 'LinkedIn',
        icon: FaLinkedinIn,
        url: 'https://www.linkedin.com/in/caio-barcelos-de-brito-3150732a4/',
        gradient: 'linear-gradient(135deg, #0077B5, #0A66C2)',
    },
    {
        label: 'GitHub',
        icon: FaGithub,
        url: 'https://github.com/caiobrito-dev',
        gradient: 'linear-gradient(135deg, #333, #6e5494)',
    },
];

export default function Contact() {
    return (
        <section id="contatos" className="section" style={{ textAlign: 'center' }}>
            <ScrollReveal>
                <h2 className="section-title">
                    Vamos <span className="accent-underline">Conversar</span>?
                </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
                <p className="section-subtitle">
                    Ficou interessado? Entre em contato comigo para conversarmos sobre novos
                    projetos ou oportunidades.
                </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        flexWrap: 'wrap',
                    }}
                >
                    {socials.map((social, i) => (
                        <motion.a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.4 }}
                            whileHover={{ y: -8, scale: 1.08 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.8rem',
                                textDecoration: 'none',
                            }}
                        >
                            <div
                                style={{
                                    width: 100,
                                    height: 100,

                                    borderRadius: 24,
                                    background: social.gradient,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.8rem',
                                    color: '#fff',
                                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                                    transition: 'box-shadow 0.3s',
                                }}
                            >
                                <social.icon />
                            </div>
                            <span
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    color: 'var(--color-text-muted)',
                                }}
                            >
                                {social.label}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
}
