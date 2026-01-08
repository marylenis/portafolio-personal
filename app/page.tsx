import HeroSection from '../sections/HeroSection'
import StackSection from '../sections/StackSection'
import ProjectsSection from '../sections/ProjectsSection'
import AgentsSection from '../sections/AgentsSection'
import ContactSection from '../sections/ContactSection'

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



      <ContactSection />
    </main>
  )
}

