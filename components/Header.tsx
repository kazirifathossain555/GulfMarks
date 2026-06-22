'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { ProtectedWhatsAppLink } from './ContactInfo';
import LanguageSwitcher from './LanguageSwitcher';
import { useI18n } from '../lib/i18n';

const navLinks = [
  { labelKey: 'nav.home', href: '#home' },
  { labelKey: 'nav.services', href: '#services' },
  { labelKey: 'nav.portfolio', href: '#portfolio' },
  { labelKey: 'nav.pricing', href: '#pricing' },
  { labelKey: 'nav.contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, isRTL } = useI18n();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
          scrolled ? 'shadow-md border-b border-slate-100' : 'border-b border-transparent'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" onClick={close} className="flex items-center flex-shrink-0">
              <Image
                src="/400x100 copy.png"
                alt="GulfMarks"
                width={140}
                height={35}
                priority
                className="h-8 w-auto lg:h-9"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-[#14B8A6] transition-colors duration-200"
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </nav>

            {/* Desktop CTA + Language Switcher */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <a
                href="#contact"
                className="px-5 py-2.5 bg-[#14B8A6] text-white text-sm font-semibold rounded-lg hover:bg-[#0E9E8D] transition-colors duration-200 shadow-sm"
              >
                {t('hero.cta')}
              </a>
            </div>

            {/* Mobile: Language + Hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <button
                className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          onClick={close}
          style={{ backgroundColor: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(2px)' }}
        />
      )}

      {/* Mobile slide-in panel */}
      <div
        className={`fixed top-0 bottom-0 z-50 lg:hidden w-4/5 max-w-xs flex flex-col transition-transform duration-300 ease-out ${
          isRTL ? 'left-0 right-auto' : 'right-0 left-auto'
        }`}
        style={{
          backgroundColor: '#0F172A',
          transform: mobileOpen
            ? 'translateX(0)'
            : isRTL
            ? 'translateX(-100%)'
            : 'translateX(100%)',
        }}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-5 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <Image
            src="/400x100 copy.png"
            alt="GulfMarks"
            width={110}
            height={28}
            className="h-7 w-auto brightness-0 invert"
          />
          <button
            onClick={close}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="flex items-center gap-3 px-4 py-4 rounded-xl text-slate-300 font-medium hover:bg-white/08 hover:text-white transition-colors duration-150 text-base"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#14B8A6' }} />
              {t(link.labelKey)}
            </a>
          ))}
        </nav>

        {/* Panel CTAs */}
        <div className="px-4 py-5 border-t flex flex-col gap-3" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <ProtectedWhatsAppLink
            message="Hello GulfMarks, I'm interested in your services."
            onClick={close}
            className="flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm text-white"
            style={{ backgroundColor: '#14B8A6' }}
          >
            <WhatsAppIcon className="w-4 h-4" />
            {t('process.cta_whatsapp')}
          </ProtectedWhatsAppLink>
          <a
            href="#contact"
            onClick={close}
            className="flex items-center justify-center py-4 rounded-xl font-semibold text-sm text-slate-300 border"
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          >
            {t('hero.cta')}
          </a>
        </div>

        {/* Quick contact */}
        <div className="px-5 py-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-xs text-slate-500 text-center">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2.003C6.483 2.003 2 6.487 2 12.008c0 1.762.457 3.43 1.257 4.883L2 22l5.247-1.377C8.659 21.471 10.3 22 12.004 22c5.521 0 10.004-4.484 10.004-10.005 0-5.52-4.483-9.992-10.004-9.992zm0 18.304c-1.571 0-3.11-.425-4.445-1.225l-.319-.189-3.112.816.831-3.03-.207-.31C3.89 15.157 3.396 13.6 3.396 12.008c0-4.745 3.862-8.607 8.608-8.607 4.745 0 8.607 3.862 8.607 8.607 0 4.746-3.862 8.299-8.607 8.299z" />
    </svg>
  );
}
