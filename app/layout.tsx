import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'thucosta | Dev Full Stack - Sistemas Eficientes & Automação',
  description: 'Desenvolvedor Full Stack especializado na criação de sistemas eficientes, automação e plataformas de alta conversão para a área da saúde e negócios locais.',
  keywords: 'desenvolvedor, full stack, react, next.js, automação, saúde, clínicas, negócios locais, conversão',
  authors: [{ name: 'Arthur Costa' }],
  openGraph: {
    title: 'thucosta | Dev Full Stack - Sistemas Eficientes & Automação',
    description: 'Desenvolvedor Full Stack especializado na criação de sistemas eficientes, automação e plataformas de alta conversão para a área da saúde e negócios locais.',
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
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}