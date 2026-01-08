import React from 'react'

type StackItem = {
  label: string
}

type StackCategory = {
  title: string
  items: StackItem[]
}

const stackCategories: StackCategory[] = [
  {
    title: 'Generative AI',
    items: [
      { label: 'LLMs (OpenAI, Anthropic)' },
      { label: 'Prompt engineering avanzado' },
      { label: 'RAG (end-to-end)' },
      { label: 'Agentes y multi-agentes' },
    ],
  },
  {
    title: 'Frameworks',
    items: [{ label: 'Agno' }],
  },
  {
    title: 'Datos',
    items: [
      { label: 'Vector DBs: Pinecone, LanceDB' },
      { label: 'Embeddings & chunking' },
    ],
  },
  {
    title: 'Engineering',
    items: [
      { label: 'Python' },
      { label: 'FastAPI' },
      { label: 'Docker' },
      { label: 'Git' },
    ],
  },
  {
    title: 'Automation',
    items: [{ label: 'n8n (workflows con LLMs y APIs)' }],
  },
]

export default function StackSection() {
  return (
    <section id="stack" className="section stack">
      <div className="container">
        <header className="stack__header">
          <h2 className="section-title">Stack técnico</h2>
          <p className="stack__subtitle">
            Diseñado para confirmar match en menos de 15 segundos. Sin barras de porcentaje, sin
            niveles de &quot;básico / intermedio&quot;.
          </p>
        </header>

        <div className="stack__grid" aria-label="Stack técnico">
          {stackCategories.map((category) => (
            <article key={category.title} className="stack__card">
              <h3 className="stack__card-title">{category.title}</h3>
              <ul className="stack__list">
                {category.items.map((item) => (
                  <li key={item.label} className="stack__item">
                    {item.label}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


