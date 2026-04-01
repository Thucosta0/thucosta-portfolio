 'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Home as HomeIcon, User, Folder, Award, FileText } from 'lucide-react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'
import { useLanguage } from './contexts/LanguageContext'
import LanguageSelector from './components/LanguageSelector'
import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
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
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!) 
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
         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
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

  const handleNavClick = (section: string) => {
    setActiveSection(section)
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const skills = [
    { nameKey: 'frontend', icon: Globe, techs: ['JavaScript', 'React', 'Next.js', 'CustomTkinter'] },
    { nameKey: 'backend', icon: Code, techs: ['Node.js', 'Python', 'PySide6', 'PHP'] },
    { nameKey: 'database', icon: Database, techs: ['MySQL', 'SAP', 'Power BI', 'Power Automate', 'PostgreSQL', 'SQLite', 'SQL Server'] },
  ]

  const projects = [
    {
      titleKey: 'projectClinicTitle',
      descriptionKey: 'projectClinicDescription',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'SEO', 'Performance'],
      demo: 'https://bio.drajoycebrandao.com.br/',
      highlight: true,
      title: '',
      github: '',
      image: '/images/pagedrajoyce.jpeg'
    },
    {
      title: 'renamerAPP',
      descriptionKey: 'renamerAppDescription',
      tech: ['Python', 'CustomTkinter', 'PHP', 'NFePHP', 'XML'],
      github: 'https://github.com/Thucosta0/renamerPRO',
      image: '/images/PreviewRenamerAPP.jpg',
      demo: '',
      highlight: false,
      titleKey: ''
    },
    {
      title: 'FinancePRO',
      descriptionKey: 'financeProDescription',
      tech: ['React', 'Next.js', 'Node.js', 'MySQL', 'Charts.js'],
      github: 'https://github.com/Thucosta0/financepro',
      demo: 'https://financepro.dev.br/',
      image: '/images/SystemFinancePro.jpg',
      highlight: false,
      titleKey: ''
    },
    {
      title: 'XML Duplicates Cleaner',
      descriptionKey: 'xmlCleanerDescription',
      tech: ['Python', 'CustomTkinter', 'PyInstaller', 'Pillow'],
      github: 'https://github.com/Thucosta0/exclusao-arquivos-xml-duplicados',
      image: '/images/DeleteDuplicateXML.jpg',
      demo: '',
      highlight: false,
      titleKey: ''
    }
  ]

  const certificates: { titleKey: string; issuer: string; date: string; pdf: string; image?: string }[] = [
    {
      titleKey: 'certFlask',
      issuer: 'Alura',
      date: '2025',
      image: '/images/Certificados/certificados em jpg/Arthur Costa Bleck Mascarenhas - Curso Flask_ crie uma webapp com Python - Alura.jpg',
      pdf: '/images/Certificados/Arthur Costa Bleck Mascarenhas - Curso Flask_ crie uma webapp com Python - Alura.pdf'
    },
    {
      titleKey: 'certDataViz',
      issuer: 'Alura',
      date: '2025',
      image: '/images/Certificados/certificados em jpg/Arthur Costa Bleck Mascarenhas - Curso Data Visualization_ criando gráficos com bibliotecas Python - Alura_page.jpg',
      pdf: '/images/Certificados/Arthur Costa Bleck Mascarenhas - Curso Data Visualization_ criando gráficos com bibliotecas Python - Alura.pdf'
    },
    {
      titleKey: 'certDatabricks',
      issuer: 'Databricks',
      date: '2025',
      image: '/images/Certificados/certificados em jpg/2308_3_1366646_1766876565_Databricks - Generic.jpg',
      pdf: '/images/Certificados/2308_3_1366646_1766876565_Databricks - Generic.pdf'
    },
    {
      titleKey: 'certLangChain',
      issuer: 'Alura',
      date: '2025',
      image: '/images/Certificados/certificados em jpg/Arthur Costa Bleck Mascarenhas - Curso LangChain e Python_ criando ferramentas com a OpenAI - Alura.jpg',
      pdf: '/images/Certificados/Arthur Costa Bleck Mascarenhas - Curso LangChain e Python_ criando ferramentas com a OpenAI - Alura.pdf'
    },
    {
      titleKey: 'certAzure',
      issuer: 'Alura',
      date: '2025',
      image: '/images/Certificados/certificados em jpg/Arthur Costa Bleck Mascarenhas - Curso Microsoft AZ-900 Azure Fundamentals - Alura.jpg',
      pdf: '/images/Certificados/Arthur Costa Bleck Mascarenhas - Curso Microsoft AZ-900 Azure Fundamentals - Alura.pdf'
    },
    {
      titleKey: 'certPowerAutomate',
      issuer: 'Alura',
      date: '2025',
      image: '/images/Certificados/certificados em jpg/Arthur Costa Bleck Mascarenhas - Curso Power Automate_ automatize processos e tarefas repetitivas e rotineiras - Alura.jpg',
      pdf: '/images/Certificados/Arthur Costa Bleck Mascarenhas - Curso Power Automate_ automatize processos e tarefas repetitivas e rotineiras - Alura.pdf'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col md:flex-row text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Sidebar Navigation (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 p-6 z-50 transition-colors duration-300">
        <div className="mb-12 cursor-pointer" onClick={() => handleNavClick('home')}>
          <div className="relative w-40 h-16">
            <Image
              src="/images/Logo.png"
              alt="Logo thucosta"
              fill
              className="object-contain object-left transition-all duration-300"
              priority
            />
          </div>
        </div>
        
        <nav className="flex-1 flex flex-col space-y-6">
          <button 
            onClick={() => handleNavClick('home')}
            className={`flex items-center space-x-3 transition-colors group text-left ${activeSection === 'home' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
          >
            <HomeIcon size={20} className={activeSection === 'home' ? 'text-blue-600 dark:text-blue-400' : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'} />
            <span className="font-medium">{t('home')}</span>
          </button>
          <button 
            onClick={() => handleNavClick('about')}
            className={`flex items-center space-x-3 transition-colors group text-left ${activeSection === 'about' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
          >
            <User size={20} className={activeSection === 'about' ? 'text-blue-600 dark:text-blue-400' : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'} />
            <span className="font-medium">{t('about')}</span>
          </button>
          <button 
            onClick={() => handleNavClick('skills')}
            className={`flex items-center space-x-3 transition-colors group text-left ${activeSection === 'skills' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
          >
            <Code size={20} className={activeSection === 'skills' ? 'text-blue-600 dark:text-blue-400' : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'} />
            <span className="font-medium">{t('skills')}</span>
          </button>
          <button 
            onClick={() => handleNavClick('projects')}
            className={`flex items-center space-x-3 transition-colors group text-left ${activeSection === 'projects' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
          >
            <Folder size={20} className={activeSection === 'projects' ? 'text-blue-600 dark:text-blue-400' : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'} />
            <span className="font-medium">{t('projects')}</span>
          </button>
          <button 
            onClick={() => handleNavClick('certificates')}
            className={`flex items-center space-x-3 transition-colors group text-left ${activeSection === 'certificates' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
          >
            <Award size={20} className={activeSection === 'certificates' ? 'text-blue-600 dark:text-blue-400' : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'} />
            <span className="font-medium">{t('certificates')}</span>
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className={`flex items-center space-x-3 transition-colors group text-left ${activeSection === 'contact' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
          >
            <Mail size={20} className={activeSection === 'contact' ? 'text-blue-600 dark:text-blue-400' : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'} />
            <span className="font-medium">{t('contact')}</span>
          </button>
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 w-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="relative w-32 h-10">
                <Image
                  src="/images/Logo.png"
                  alt="Logo thucosta"
                  fill
                  className="object-contain object-left transition-all duration-300"
                  priority
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <LanguageSelector />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
            <div className="mt-4 pb-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-col space-y-4 pt-4">
                <button 
                  onClick={() => handleNavClick('home')}
                  className={`text-left transition-colors ${activeSection === 'home' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  {t('home')}
                </button>
                <button 
                  onClick={() => handleNavClick('about')}
                  className={`text-left transition-colors ${activeSection === 'about' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  {t('about')}
                </button>
                <button 
                  onClick={() => handleNavClick('skills')}
                  className={`text-left transition-colors ${activeSection === 'skills' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  {t('skills')}
                </button>
                <button 
                  onClick={() => handleNavClick('projects')}
                  className={`text-left transition-colors ${activeSection === 'projects' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  {t('projects')}
                </button>
                <button 
                  onClick={() => handleNavClick('certificates')}
                  className={`text-left transition-colors ${activeSection === 'certificates' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  {t('certificates')}
                </button>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className={`text-left transition-colors ${activeSection === 'contact' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  {t('contact')}
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 min-h-screen">
        {/* Hero Section */}
        {activeSection === 'home' && (
          <section className="pt-20 md:pt-0 min-h-screen flex items-center justify-center animate-fadeIn bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
            <div className={`container mx-auto px-6 text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
                {t('greeting')} <span className="text-blue-600 dark:text-blue-500">{t('name')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
                {t('description')}
              </p>
              <div className="flex justify-center space-x-6 mb-12">
                <a href="https://github.com/Thucosta0" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                  <Github size={32} />
                </a>
                <a href="https://www.linkedin.com/in/thucosta" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                  <Linkedin size={32} />
                </a>
                <a href="mailto:arthurcos33@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                  <Mail size={32} />
                </a>
              </div>
              <button 
                onClick={() => handleNavClick('about')}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/20"
              >
                {t('cta')}
              </button>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="py-20 min-h-screen animate-fadeIn bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6 pt-20 md:pt-0">
              <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">{t('aboutTitle')}</h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-64 h-64 mx-auto bg-blue-600 rounded-full p-1 shadow-xl">
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
                  <div className="text-slate-700 dark:text-slate-300 space-y-6">
                    <p className="text-lg leading-relaxed">
                      {t('aboutDescription1')}
                    </p>
                    <p className="text-lg leading-relaxed">
                      {t('aboutDescription2')}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {['JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'MySQL', 'SAP', 'Power BI', 'Power Automate', 'CustomTkinter', 'PySide6', 'PHP'].map((tech, index) => (
                        <span key={`about-tech-${index}`} className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="py-20 min-h-screen animate-fadeIn bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6 pt-20 md:pt-0">
              <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">{t('skillsTitle')}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div key={skill.nameKey} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-md">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                          <Icon size={32} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{t(skill.nameKey as any)}</h3>
                        <div className="space-y-2">
                          {skill.techs.map((tech, techIndex) => (
                            <div key={`skill-${index}-tech-${techIndex}`} className="text-slate-600 dark:text-slate-400 text-sm">{tech}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="py-20 min-h-screen animate-fadeIn bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6 pt-20 md:pt-0">
              <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">{t('projectsTitle')}</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <article key={index} className={`bg-white dark:bg-slate-800 rounded-xl overflow-hidden border ${project.highlight ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-200 dark:border-slate-700'} hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-[1.02] group shadow-sm hover:shadow-md flex flex-col`}>
                    <div className={`relative overflow-hidden ${project.highlight ? 'h-56 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800' : 'h-48'}`}>
                      {project.image ? (
                        <div className="w-full h-full relative">
                          <Image
                            src={project.image}
                            alt={(project as any).titleKey ? t((project as any).titleKey) : ((project as any).title || '')}
                            fill
                            className={`${project.highlight ? 'object-contain object-center scale-[1.3] group-hover:scale-[1.4] origin-top' : 'object-cover group-hover:scale-110'} transition-transform duration-500 ease-out`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={project.highlight}
                          />
                          {project.highlight && (
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent dark:from-slate-800/40" />
                          )}
                        </div>
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                          <Code size={64} className="text-white opacity-50" />
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      {project.highlight && (
                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full mb-4 w-max">
                          {t('highlightTag' as any) || 'Destaque'}
                        </span>
                      )}
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-xl">
                        {project.titleKey ? t(project.titleKey as any) : project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm">
                        {t(project.descriptionKey as any)}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        {project.tech.map((tech, techIndex) => (
                          <span key={`project-${index}-tech-${techIndex}`} className="bg-blue-50 dark:bg-slate-700 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium border border-blue-100 dark:border-slate-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        {project.github && (
                          <a href={project.github} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                            <Github size={20} />
                          </a>
                        )}
                        {project.demo && project.demo !== '#' && (
                          <a href={project.demo} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certificates Section */}
        {activeSection === 'certificates' && (
          <section className="py-20 min-h-screen animate-fadeIn bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6 pt-20 md:pt-0">
              <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">{t('certificatesTitle')}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates.map((cert, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group shadow-sm hover:shadow-md">
                    <div className="h-48 relative overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                      {cert.image ? (
                        <Image
                          src={cert.image}
                          alt={t(cert.titleKey as any)}
                          fill
                          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="relative w-full h-full">
                          <object
                            data={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                            type="application/pdf"
                            className="w-full h-full object-cover pointer-events-none"
                          >
                            <div className="w-full h-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                              <Award size={64} className="text-blue-300 dark:text-blue-400" />
                            </div>
                          </object>
                          {/* Overlay transparente para permitir o hover no card sem interferir no PDF */}
                          <div className="absolute inset-0 bg-transparent" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">{cert.issuer}</span>
                        <span className="text-slate-500 text-xs">{cert.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 line-clamp-2">{t(cert.titleKey as any)}</h3>
                      
                      <a 
                        href={cert.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                      >
                        <FileText size={18} />
                        <span className="text-sm group-hover/link:underline">{t('viewCertificate')}</span>
                        <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="py-20 min-h-screen animate-fadeIn bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6 pt-20 md:pt-0">
              <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">{t('contactTitle')}</h2>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300 text-center">
                      {t('successMessage')}
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300 text-center">
                      {t('errorMessage')}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">{t('nameLabel')}</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder={t('namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">{t('emailLabel')}</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder={t('emailPlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">{t('messageLabel')}</label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none transition-all"
                        placeholder={t('messagePlaceholder')}
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform ${
                        isSubmitting 
                          ? 'bg-slate-400 dark:bg-slate-600 cursor-not-allowed' 
                          : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-600/20'
                      }`}
                    >
                      {isSubmitting ? t('sending') : t('sendButton')}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="py-8 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 mt-auto transition-colors duration-300">
          <div className="container mx-auto px-6 text-center">
            <p className="text-slate-500 text-sm">
              {t('footerText')}
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
