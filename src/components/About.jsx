import { motion } from 'framer-motion';
import {
    SiReact,
    SiNodedotjs,
    SiLaravel,
    SiFlutter,
    SiPhp,
    SiMysql,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiDart,
    SiGit,
    SiVercel,
} from 'react-icons/si';
import ScrollReveal from './ScrollReveal';

const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Dart', icon: SiDart, color: '#0175C2' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Vercel', icon: SiVercel, color: '#fff' },
];

export default function About() {
    return (
        <section id="sobre" className="section">
            <ScrollReveal>
                <h2 className="section-title">
                    Sobre <span className="accent-underline">Mim</span>
                </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
                <p className="section-subtitle">
                    Conhecendo minha trajetória e paixão por tecnologia.
                </p>
            </ScrollReveal>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
                    gap: '2.5rem',
                    alignItems: 'start',
                }}
            >
                {/* Bio card */}
                <ScrollReveal direction="left" delay={0.2}>
                    <div
                        className="glass"
                        style={{
                            borderRadius: 16,
                            padding: '2.5rem',
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '1.3rem',
                                fontWeight: 700,
                                color: 'var(--color-text-heading)',
                                marginBottom: '1.2rem',
                            }}
                        >
                            Minha Jornada
                        </h3>
                        <p
                            style={{
                                fontSize: '1.05rem',
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.8,
                                marginBottom: '1.2rem',
                            }}
                        >
                            Comecei minha jornada na programação no final de 2022, movido pela
                            curiosidade e pela vontade de criar soluções reais. Tenho 20 anos e
                            estou no último ano de Sistemas de Informação.
                        </p>
                        <p
                            style={{
                                fontSize: '1.05rem',
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.8,
                            }}
                        >
                            Ao longo desse caminho, me especializei em desenvolvimento web
                            full-stack com tecnologias como React, Node.js, Laravel e Flutter.
                            Acredito que um bom design é funcional — e meu trabalho reflete essa
                            filosofia em cada linha de código.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Skills grid */}
                <ScrollReveal direction="right" delay={0.3}>
                    <div
                        className="glass"
                        style={{
                            borderRadius: 16,
                            padding: '2.5rem',
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '1.3rem',
                                fontWeight: 700,
                                color: 'var(--color-text-heading)',
                                marginBottom: '1.5rem',
                            }}
                        >
                            Tecnologias
                        </h3>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                                gap: '1rem',
                            }}
                        >
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.6rem',
                                        padding: '0.7rem 1rem',
                                        borderRadius: 10,
                                        background: 'rgba(59, 130, 246, 0.05)',
                                        border: '1px solid rgba(59, 130, 246, 0.1)',
                                        cursor: 'default',
                                    }}
                                    whileHover={{
                                        scale: 1.06,
                                        borderColor: skill.color,
                                        background: `rgba(59, 130, 246, 0.1)`,
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.3 }}
                                >
                                    <skill.icon size={20} color={skill.color} />
                                    <span
                                        style={{
                                            fontSize: '0.85rem',
                                            fontWeight: 500,
                                            color: 'var(--color-text)',
                                        }}
                                    >
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
