'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe } from 'lucide-react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'
import { useLanguage } from './contexts/LanguageContext'
import LanguageSelector from './components/LanguageSelector'

export default function Home() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  useEffect(() => {
    setIsVisible(true)
    // Inicializar EmailJS
    emailjs.init('3vF0FywGPnVml0a_e') // Chave pública do EmailJS
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const result = await emailjs.send(
         'service_fkz5r23', // ID do serviço
         'template_rxd4lru', // ID do template
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'arthurcos33@gmail.com'
        }
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const skills = [
    { nameKey: 'frontend', icon: Globe, techs: ['JavaScript', 'React', 'Next.js', 'CustomTkinter'] },
    { nameKey: 'backend', icon: Code, techs: ['Node.js', 'Python', 'PySide6'] },
    { nameKey: 'database', icon: Database, techs: ['MySQL', 'SAP', 'Power BI', 'Power Automate'] },
  ]

  const projects = [
    {
      title: 'renamerAPP',
      descriptionKey: 'renamerAppDescription',
      tech: ['Python', 'CustomTkinter', 'PHP', 'NFePHP', 'XML'],
      github: 'https://github.com/Thucosta0/renamerAPP',
    },
    {
      title: 'FinancePRO',
      descriptionKey: 'financeProDescription',
      tech: ['React', 'Next.js', 'Node.js', 'MySQL', 'Charts.js'],
      github: 'https://github.com/Thucosta0/financepro',
      demo: 'https://financepro.dev.br/'
    },
    {
      title: 'XML Duplicates Cleaner',
      descriptionKey: 'xmlCleanerDescription',
      tech: ['Python', 'CustomTkinter', 'PyInstaller', 'Pillow'],
      github: 'https://github.com/Thucosta0/exclusao-arquivos-xml-duplicados',
      demo: '#'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">{t('portfolio')}</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-purple-400 transition-colors">{t('home')}</a>
              <a href="#about" className="text-white hover:text-purple-400 transition-colors">{t('about')}</a>
              <a href="#skills" className="text-white hover:text-purple-400 transition-colors">{t('skills')}</a>
              <a href="#projects" className="text-white hover:text-purple-400 transition-colors">{t('projects')}</a>
              <a href="#contact" className="text-white hover:text-purple-400 transition-colors">{t('contact')}</a>
              <LanguageSelector />
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <LanguageSelector />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-purple-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="flex flex-col space-y-4 pt-4">
                <a 
                  href="#home" 
                  className="text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('home')}
                </a>
                <a 
                  href="#about" 
                  className="text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('about')}
                </a>
                <a 
                  href="#skills" 
                  className="text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('skills')}
                </a>
                <a 
                  href="#projects" 
                  className="text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('projects')}
                </a>
                <a 
                  href="#contact" 
                  className="text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('contact')}
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center">
        <div className={`container mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('greeting')} <span className="gradient-text">{t('name')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('description')}
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Thucosta0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/thucosta" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Linkedin size={32} />
            </a>
            <a href="mailto:arthurcos33@gmail.com" className="text-white hover:text-purple-400 transition-colors">
              <Mail size={32} />
            </a>
          </div>
          <a 
            href="#about" 
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            {t('cta')}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">{t('aboutTitle')}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-full p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/images/profile.jpg"
                      alt="Arthur Costa - Desenvolvedor"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="text-gray-300 space-y-6">
                <p className="text-lg leading-relaxed">
                  {t('aboutDescription1')}
                </p>
                <p className="text-lg leading-relaxed">
                  {t('aboutDescription2')}
                </p>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'MySQL', 'SAP', 'Power BI', 'Power Automate', 'CustomTkinter', 'PySide6', 'PHP'].map((tech, index) => (
                    <span key={`about-tech-${index}`} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">{t('skillsTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div key={skill.nameKey} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{t(skill.nameKey as any)}</h3>
                    <div className="space-y-2">
                      {skill.techs.map((tech, techIndex) => (
                        <div key={`skill-${index}-tech-${techIndex}`} className="text-gray-300 text-sm">{tech}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">{t('projectsTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <Code size={64} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{t(project.descriptionKey as any)}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={`project-${index}-tech-${techIndex}`} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-gray-300 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="text-gray-300 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">{t('contactTitle')}</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
                  {t('successMessage')}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center">
                  {t('errorMessage')}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">{t('nameLabel')}</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder={t('namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">{t('emailLabel')}</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder={t('emailPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">{t('messageLabel')}</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
                    placeholder={t('messagePlaceholder')}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:scale-105'
                  }`}
                >
                  {isSubmitting ? t('sending') : t('sendButton')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/40 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            {t('footerText')}
          </p>
        </div>
      </footer>
    </main>
  )
}