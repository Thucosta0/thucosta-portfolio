import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Portfólio thucosta | Dev Full Stack',
  description: 'Portfólio profissional de desenvolvedor full stack especializado em tecnologias modernas.',
  keywords: 'desenvolvedor, full stack, react, next.js, typescript, javascript',
  authors: [{ name: 'Arthur Costa' }],
  openGraph: {
    title: 'Portfólio thucosta | Dev Full Stack',
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
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}