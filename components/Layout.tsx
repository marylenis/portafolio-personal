import React from 'react'

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Hero', href: '#hero' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Agentes', href: '#agentes' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="container header__content">
          <div className="brand">
            <span className="brand__title">Generative AI Engineer</span>
            <span className="brand__subtitle">Portfolio</span>
          </div>
          <nav className="nav" aria-label="Navegación principal">
            <ul className="nav__list">
              {navItems.map((item) => (
                <li key={item.href} className="nav__item">
                  <a className="nav__link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container footer__content">
          <span className="footer__text">Generative AI Engineer Portfolio</span>
          <span className="footer__text">Construyendo sistemas de IA en producción</span>
        </div>
      </footer>
    </div>
  )
}

