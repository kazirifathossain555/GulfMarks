'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useI18n, languageNames, Language } from '../lib/i18n';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages: Language[] = ['en', 'ar', 'hi'];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-slate-100"
        style={{ color: '#0F172A' }}
      >
        <Globe size={16} />
        <span>{languageNames[language]}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-1 bg-white rounded-xl shadow-lg border border-slate-200 min-w-[140px] z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-colors duration-150 ${
                language === lang
                  ? 'bg-teal-50 text-[#14B8A6]'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{languageNames[lang]}</span>
                {language === lang && (
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#14B8A6' }} />
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
