import React from 'react'

type HeroProps = {
  name?: string
  githubUrl?: string
  cvUrl?: string
  contactUrl?: string
}

export default function HeroSection({
  name = '[Tu nombre]',
  githubUrl = '#',
  cvUrl = '#',
  contactUrl = '#',
}: HeroProps) {
  return (
    <section id="hero" className="section hero">
      <div className="container hero__content">
        <div className="hero__text">
          <p className="hero__eyebrow">Generative AI Engineer</p>
          <h1 className="hero__title">{name}</h1>

          <p className="hero__headline">
            LLMs · RAG · Agentic Systems · LangChain · Python · Production AI
          </p>

          <p className="hero__value">
            Construyo sistemas de IA generativa en producción: RAGs con bases vectoriales,
            agentes y multi-agentes, APIs y automatizaciones integradas a negocio.
          </p>

          <div className="hero__cta-group" aria-label="Enlaces principales">
            <a
              href={githubUrl}
              className="button button--primary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={cvUrl}
              className="button button--secondary"
              target="_blank"
              rel="noreferrer"
            >
              CV (PDF)
            </a>
            <a
              href={contactUrl}
              className="button button--ghost"
              target="_blank"
              rel="noreferrer"
            >
              Contacto / LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


