import React from 'react'

export default function ContactSection() {
    return (
        <section id="contacto" className="section contact">
            <div className="container contact__content">
                <h2 className="section-title">Contacto</h2>

                <div className="contact__card">
                    <p className="contact__text">
                        ¿Buscas un ingeniero capaz de llevar sistemas de IA Generativa a producción?
                    </p>

                    <h3 className="contact__cta">¿Hablamos?</h3>

                    <div className="contact__links">
                        <a
                            href="mailto:maribel@ejemplo.com"
                            className="button button--primary contact__button"
                        >
                            Enviar Email
                        </a>
                        <a
                            href="https://linkedin.com/in/marylenis"
                            className="button button--secondary contact__button"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
