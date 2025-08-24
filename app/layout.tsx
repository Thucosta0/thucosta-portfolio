import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meu Portfólio | Desenvolvedor Full Stack',
  description: 'Portfólio profissional de desenvolvedor full stack especializado em tecnologias modernas.',
  keywords: 'desenvolvedor, full stack, react, next.js, typescript, javascript',
  authors: [{ name: 'Seu Nome' }],
  openGraph: {
    title: 'Meu Portfólio | Desenvolvedor Full Stack',
    description: 'Portfólio profissional de desenvolvedor full stack especializado em tecnologias modernas.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}