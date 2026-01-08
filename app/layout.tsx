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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

