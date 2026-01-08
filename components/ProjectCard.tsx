import React from 'react'

export type Project = {
  id: number
  title: string
  problem: string
  solution: string
  architecture: string[]
  technicalDecisions: string[]
  result: string
  learnings: string
  links: {
    github?: string
    demo?: string
  }
}

export default function ProjectCard({ project }: { project: Project }) {
  const { title, problem, solution, architecture, technicalDecisions, result, learnings, links } =
    project

  return (
    <article className="project-card">
      <header className="project-card__header">
        <h3 className="project-card__title">{title}</h3>
      </header>

      <div className="project-card__section">
        <p className="project-card__label">Problema</p>
        <p className="project-card__text">{problem}</p>
      </div>

      <div className="project-card__section">
        <p className="project-card__label">Solución</p>
        <p className="project-card__text">{solution}</p>
      </div>

      <div className="project-card__section">
        <p className="project-card__label">Arquitectura</p>
        <ul className="project-card__list">
          {architecture.map((item) => (
            <li key={item} className="project-card__list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-card__section">
        <p className="project-card__label">Decisiones técnicas</p>
        <ul className="project-card__list">
          {technicalDecisions.map((item) => (
            <li key={item} className="project-card__list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-card__section project-card__section--grid">
        <div>
          <p className="project-card__label">Resultado</p>
          <p className="project-card__text">{result}</p>
        </div>
        <div>
          <p className="project-card__label">Aprendizajes</p>
          <p className="project-card__text">{learnings}</p>
        </div>
      </div>

      <div className="project-card__links" aria-label="Enlaces del proyecto">
        {links.github && (
          <a
            href={links.github}
            className="button button--secondary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}
        {links.demo && (
          <a href={links.demo} className="button button--ghost" target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
      </div>
    </article>
  )
}


