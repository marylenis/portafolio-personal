import type { Metadata } from 'next'
import '../styles/globals.css'
import Layout from '../components/Layout'

export const metadata: Metadata = {
  title: 'Generative AI Engineer | Portfolio',
  description: 'Portfolio de Generative AI Engineer especializado en RAG, agentes, y sistemas de IA generativa en producción',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

