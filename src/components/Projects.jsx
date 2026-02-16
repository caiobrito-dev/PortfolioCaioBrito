import { useState } from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projetos" className="section">
            <ScrollReveal>
                <h2 className="section-title">
                    Meus <span className="accent-underline">Projetos</span>
                </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
                <p className="section-subtitle">
                    Conheça alguns dos projetos que desenvolvi ao longo da minha jornada.
                </p>
            </ScrollReveal>

            {/* Projects grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
                    gap: '1.8rem',
                }}
            >
                {projects.map((project, i) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={i}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
