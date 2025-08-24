'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { Language } from '../translations'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleLanguageChange('pt')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'pt'
            ? 'bg-purple-600 text-white'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        PT
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'en'
            ? 'bg-purple-600 text-white'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        EN
      </button>
    </div>
  )
}