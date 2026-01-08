import React from 'react'

export default function AgentsSection() {
  return (
    <section id="agentes" className="section agents">
      <div className="container">
        <h2 className="section-title">Agentes y Automatizaciones</h2>
        <p className="section-subtitle">
          Sistemas agentic que entienden el futuro del GenAI: arquitecturas multi-agente,
          integraciones con APIs y automatizaciones inteligentes.
        </p>

        <div className="agents__content">
          {/* Agentes con LangGraph */}
          <div className="agents__item">
            <h3>Agentes con LangGraph</h3>
            <p>
              Construcción de agentes con flujos de trabajo complejos usando LangGraph para
              definir estados, transiciones y lógica de decisión. Los agentes pueden mantener
              contexto, tomar decisiones basadas en condiciones y ejecutar acciones secuenciales
              o paralelas según el caso de uso.
            </p>
            <p>
              <strong>Aplicación:</strong> Agentes que procesan solicitudes complejas, mantienen
              memoria de conversación y ejecutan múltiples pasos de forma coordinada.
            </p>
          </div>

          {/* Multi-agentes */}
          <div className="agents__item">
            <h3>Multi-agentes con Roles Claros</h3>
            <p>
              Arquitecturas donde múltiples agentes especializados colaboran, cada uno con un
              rol específico:
            </p>
            <ul>
              <li>
                <strong>Agente Coordinador:</strong> Recibe la solicitud inicial y decide qué
                agentes involucrar
              </li>
              <li>
                <strong>Agente de Búsqueda:</strong> Consulta conocimiento vía RAG cuando se
                necesita información específica
              </li>
              <li>
                <strong>Agente Ejecutor:</strong> Realiza acciones concretas (llamadas a APIs,
                workflows)
              </li>
              <li>
                <strong>Agente Validador:</strong> Verifica resultados y calidad antes de
                responder
              </li>
            </ul>
            <p>
              Esta arquitectura permite escalar la complejidad y especialización de cada agente
              según su dominio.
            </p>
          </div>

          {/* Integraciones con APIs */}
          <div className="agents__item">
            <h3>Integraciones con APIs Externas</h3>
            <p>
              Los agentes no solo procesan texto, sino que interactúan con sistemas externos:
            </p>
            <ul>
              <li>Consultas a bases de datos y sistemas legacy</li>
              <li>Llamadas a servicios REST y GraphQL</li>
              <li>Integración con herramientas de negocio (CRM, ERP, etc.)</li>
              <li>Webhooks y eventos en tiempo real</li>
            </ul>
            <p>
              Los agentes pueden tomar decisiones basadas en datos reales y ejecutar acciones
              concretas en sistemas de producción.
            </p>
          </div>

          {/* Automatizaciones con n8n */}
          <div className="agents__item">
            <h3>Automatizaciones con n8n</h3>
            <p>
              Workflows automatizados que combinan LLMs con lógica de negocio mediante n8n:
            </p>
            <div className="agents__workflow">
              <div className="workflow-step">
                <h4>1. Triggers</h4>
                <p>
                  Eventos que inician el workflow: webhooks, emails, cambios en bases de datos,
                  horarios programados, o solicitudes desde agentes.
                </p>
              </div>
              <div className="workflow-step">
                <h4>2. Decisiones</h4>
                <p>
                  El agente o el workflow evalúa el contexto usando LLMs para decidir qué acción
                  tomar. Puede consultar RAG para obtener información relevante antes de decidir.
                </p>
              </div>
              <div className="workflow-step">
                <h4>3. Ejecución</h4>
                <p>
                  Una vez decidida la acción, se ejecutan workflows en n8n que pueden incluir:
                  envío de emails, actualización de sistemas, generación de reportes, o
                  invocación de otros servicios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

