import HeroSection from '../sections/HeroSection'
import StackSection from '../sections/StackSection'
import ProjectsSection from '../sections/ProjectsSection'
import AgentsSection from '../sections/AgentsSection'

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

      <AgentsSection />



      <section id="contacto" className="section">
        <div className="container">
          <h2>Contacto</h2>
          <p>Placeholder: ¿Hablamos? Email y LinkedIn.</p>
        </div>
      </section>
    </main>
  )
}

