'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors duration-200 ${
        theme === 'dark' 
          ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' 
          : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
      }`}
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
