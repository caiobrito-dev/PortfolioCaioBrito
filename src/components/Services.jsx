import { motion } from 'framer-motion';
import { HiGlobeAlt, HiDeviceMobile, HiShoppingCart, HiCode, HiSupport, HiLightningBolt, HiSparkles } from 'react-icons/hi';
import ScrollReveal from './ScrollReveal';

const services = [
    {
        icon: HiGlobeAlt,
        title: 'Sites Institucionais',
        description:
            'Sites profissionais para clínicas, escritórios de advocacia, consultórios e empresas. Transmita credibilidade e atraia novos clientes com uma presença online impecável.',
        highlights: ['Design moderno', 'SEO otimizado', 'Responsivo'],
    },
    {
        icon: HiLightningBolt,
        title: 'Landing Pages',
        description:
            'Páginas de alta conversão focadas em gerar leads e vendas. Ideal para campanhas de marketing, lançamentos de produtos e captação de clientes.',
        highlights: ['Alta conversão', 'Carregamento rápido', 'Call-to-action'],
    },
    {
        icon: HiDeviceMobile,
        title: 'Aplicações Web',
        description:
            'Sistemas web sob medida como agendamentos online, dashboards, painéis administrativos e ferramentas internas para otimizar a rotina do seu negócio.',
        highlights: ['Sob medida', 'Painel admin', 'Integrações'],
    },
    {
        icon: HiSparkles,
        title: 'Automações para WhatsApp',
        description:
            'Atendimento automatizado inteligente 24/7 integrado ao WhatsApp. Aumente suas vendas e melhore o suporte com respostas instantâneas e humanizadas.',
        highlights: ['Atendimento 24/7', 'Automação', 'Respostas Humanizadas'],
    },
    {
        icon: HiSupport,
        title: 'Manutenção & Suporte',
        description:
            'Suporte contínuo, atualizações de segurança, melhorias de performance e novas funcionalidades para manter seu projeto sempre no ar e atualizado.',
        highlights: ['Atualizações', 'Segurança', 'Melhorias contínuas'],
    },
];

export default function Services() {
    return (
        <section id="servicos" className="section" style={{ textAlign: 'center' }}>
            <ScrollReveal>
                <h2 className="section-title">
                    O que Posso <span className="accent-underline">Oferecer</span>
                </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
                <p className="section-subtitle">
                    Soluções digitais completas para transformar a presença online do seu negócio.
                </p>
            </ScrollReveal>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '1.5rem',
                    textAlign: 'left',
                }}
            >
                {services.map((service, i) => (
                    <ScrollReveal key={service.title} delay={i * 0.1}>
                        <motion.div
                            className="glass"
                            style={{
                                borderRadius: 16,
                                padding: '2rem',
                                height: '100%',
                                cursor: 'default',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            whileHover={{
                                borderColor: 'rgba(59, 130, 246, 0.4)',
                                boxShadow: '0 8px 30px rgba(59, 130, 246, 0.1)',
                                transition: { duration: 0.15 },
                            }}
                        >
                            {/* Icon */}
                            <div
                                style={{
                                    width: 52,
                                    height: 52,
                                    borderRadius: 14,
                                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.2rem',
                                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.25)',
                                }}
                            >
                                <service.icon size={26} color="#fff" />
                            </div>

                            {/* Title */}
                            <h3
                                style={{
                                    fontSize: '1.2rem',
                                    fontWeight: 700,
                                    color: 'var(--color-text-heading)',
                                    marginBottom: '0.8rem',
                                }}
                            >
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--color-text-muted)',
                                    lineHeight: 1.7,
                                    marginBottom: '1.2rem',
                                }}
                            >
                                {service.description}
                            </p>

                            {/* Highlight tags */}
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.4rem',
                                }}
                            >
                                {service.highlights.map((tag) => (
                                    <span key={tag} className="tech-badge">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </ScrollReveal>
                ))}
            </div>

            {/* CTA */}
            <ScrollReveal delay={0.4}>
                <div style={{ marginTop: '3rem' }}>
                    <a
                        href="https://wa.me/5521997170712?text=Olá Caio! Gostaria de solicitar um orçamento para o meu projeto."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
                    >
                        💬 Solicitar Orçamento
                    </a>
                </div>
            </ScrollReveal>
        </section>
    );
}
