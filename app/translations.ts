export const translations = {
  pt: {
    // Header
    portfolio: 'Portfólio',
    home: 'Início',
    about: 'Sobre',
    skills: 'Skills',
    projects: 'Projetos',
    contact: 'Contato',
    
    // Hero Section
    greeting: 'Prazer, eu sou',
    name: 'Arthur!',
    description: 'Desenvolvedor focado em back-end com experiência em automação e soluções corporativas. Apaixonado por criar sistemas eficientes que resolvem problemas reais.',
    cta: 'Conheça meu trabalho',
    
    // About Section
    aboutTitle: 'Sobre Mim',
    aboutDescription1: 'Desenvolvedor full stack especializado em automações Python, desenvolvimento web com React/Next.js e ferramentas desktop com CustomTkinter e PySide6. Experiência em integração de APIs, dashboards Power BI e automações Power Automate.',
    aboutDescription2: 'Com projetos ativos e em utilização, em Python, PHP, React, Next.js, Node.js, MySQL, SAP, Power BI, Power Automate, CustomTkinter e PySide6. Apaixonado por criar soluções eficientes e inovadoras para desafios complexos.',
    
    // Skills Section
    skillsTitle: 'Minhas Skills',
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database & BI',
    
    // Projects Section
    projectsTitle: 'Meus Projetos',
    renamerAppDescription: 'Solução corporativa para processamento de documentos fiscais eletrônicos que automatiza a conversão de XMLs em DANFEs padronizados. Sistema com processamento paralelo multithread (mais de 1000 documentos simultâneos), renomeação inteligente baseada em chaves NFe, interface profissional em CustomTkinter e redução de 95% no tempo de processamento manual. Inclui validação automática, logs detalhados e conformidade regulatória.',
    financeProDescription: 'Plataforma completa de gestão financeira pessoal com controle de cartões, transações, relatórios visuais e orçamentos. Interface moderna e dados criptografados.',
    xmlCleanerDescription: 'Aplicativo desktop para identificação e exclusão inteligente de arquivos XML duplicados baseado em sufixos personalizados. Interface profissional com logos institucionais.',
    
    // Contact Section
    contactTitle: 'Entre em Contato',
    nameLabel: 'Nome',
    emailLabel: 'Email',
    messageLabel: 'Mensagem',
    namePlaceholder: 'Seu nome',
    emailPlaceholder: 'seu@email.com',
    messagePlaceholder: 'Sua mensagem...',
    sendButton: 'Enviar Mensagem',
    sending: 'Enviando...',
    successMessage: '✅ Mensagem enviada com sucesso! Entrarei em contato em breve.',
    errorMessage: '❌ Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.',
    
    // Footer
    footerText: '© 2025 Thucosta. Desenvolvido com Next.js e Tailwind CSS.'
  },
  
  en: {
    // Header
    portfolio: 'Portfolio',
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    
    // Hero Section
    greeting: 'Nice to meet you, I am',
    name: 'Arthur!',
    description: 'Back-end focused developer with experience in automation and corporate solutions. Passionate about creating efficient systems that solve real problems.',
    cta: 'Check out my work',
    
    // About Section
    aboutTitle: 'About Me',
    aboutDescription1: 'Full stack developer specialized in Python automations, web development with React/Next.js and desktop tools with CustomTkinter and PySide6. Experience in API integration, Power BI dashboards and Power Automate automations.',
    aboutDescription2: 'With active projects in production using Python, PHP, React, Next.js, Node.js, MySQL, SAP, Power BI, Power Automate, CustomTkinter and PySide6. Passionate about creating efficient and innovative solutions for complex challenges.',
    
    // Skills Section
    skillsTitle: 'My Skills',
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database & BI',
    
    // Projects Section
    projectsTitle: 'My Projects',
    renamerAppDescription: 'Corporate solution for electronic fiscal document processing that automates XML to DANFE conversion with standardized layout. Features multithread parallel processing (over 1000 simultaneous documents), intelligent renaming based on NFe keys, professional CustomTkinter interface and 95% reduction in manual processing time. Includes automatic validation, detailed logs and regulatory compliance.',
    financeProDescription: 'Complete personal financial management platform with card control, transactions, visual reports and budgets. Modern interface and encrypted data.',
    xmlCleanerDescription: 'Desktop application for intelligent identification and deletion of duplicate XML files based on custom suffixes. Professional interface with institutional logos.',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your@email.com',
    messagePlaceholder: 'Your message...',
    sendButton: 'Send Message',
    sending: 'Sending...',
    successMessage: '✅ Message sent successfully! I will get in touch soon.',
    errorMessage: '❌ Error sending message. Please try again or contact me directly.',
    
    // Footer
    footerText: '© 2025 Thucosta. Built with Next.js and Tailwind CSS.'
  }
}

export type Language = 'pt' | 'en'
export type TranslationKey = keyof typeof translations.pt