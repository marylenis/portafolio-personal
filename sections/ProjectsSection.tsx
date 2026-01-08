import React from 'react'
import ProjectCard, { Project } from '../components/ProjectCard'
import projects from '../data/projects.json'

export default function ProjectsSection() {
  const items = projects as Project[]

  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <header className="projects__header">
          <h2 className="section-title">Proyectos</h2>
          <p className="projects__subtitle">
            Mejor 3 proyectos profundos que 8 superficiales. Cada tarjeta muestra problema, solución,
            arquitectura, decisiones técnicas, resultado y enlaces.
          </p>
        </header>

        <div className="projects__grid">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}


