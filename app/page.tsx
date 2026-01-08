import HeroSection from '../sections/HeroSection'
import StackSection from '../sections/StackSection'
import ProjectsSection from '../sections/ProjectsSection'

export default function Home() {
  return (
    <main className="main">
      <HeroSection
        name="Maribel Bustamante Lenis"
        githubUrl="https://github.com/marylenis"
        cvUrl="#"
        contactUrl="#"
      />

      <StackSection />

      <ProjectsSection />

      <section id="agentes" className="section">
        <div className="container">
          <h2>Agentes y Automatizaciones</h2>
          <p>Placeholder: agentes con LangGraph, multi-agentes, n8n.</p>
        </div>
      </section>

      <section id="produccion" className="section">
        <div className="container">
          <h2>Producción y Calidad</h2>
          <p>Placeholder: versionado de prompts, logging, evaluación, seguridad.</p>
        </div>
      </section>

      <section id="pensar" className="section">
        <div className="container">
          <h2>Forma de Pensar</h2>
          <p>Placeholder: cuándo NO usar GenAI, trade-offs, límites y riesgos.</p>
        </div>
      </section>

      <section id="experiencia" className="section">
        <div className="container">
          <h2>Experiencia / Contexto</h2>
          <p>Placeholder: Rol, qué construiste, contexto.</p>
        </div>
      </section>

      <section id="contacto" className="section">
        <div className="container">
          <h2>Contacto</h2>
          <p>Placeholder: ¿Hablamos? Email y LinkedIn.</p>
        </div>
      </section>
    </main>
  )
}

