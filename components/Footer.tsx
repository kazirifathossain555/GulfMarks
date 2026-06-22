'use client';

import Image from 'next/image';
import { ProtectedWhatsAppLink } from './ContactInfo';
import { useI18n } from '../lib/i18n';

export default function Footer() {
  const { t, isRTL } = useI18n();

  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.pricing'), href: '#pricing' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const services = [
    t('services.service1_title'),
    t('services.service2_title'),
    t('services.service3_title'),
    t('services.service4_title'),
    t('services.service5_title'),
  ];

  return (
    <footer style={{ backgroundColor: '#0F172A' }} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Pre-footer CTA banner */}
      <div style={{ backgroundColor: '#14B8A6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-poppins text-xl sm:text-2xl font-bold text-white mb-1">
              {t('why.cta_title')}
            </h3>
            <p className="text-teal-100 text-sm">
              {t('industries.stat1_value')} {t('industries.stat1_label')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-[#0F172A] text-sm font-bold rounded-xl hover:bg-slate-100 transition-colors duration-200 text-center"
            >
              {t('hero.cta')}
            </a>
            <ProtectedWhatsAppLink
              message="Hello GulfMarks, I'm interested in your services"
              className="px-6 py-3 border-2 border-white/40 text-white text-sm font-bold rounded-xl hover:bg-white/10 transition-colors duration-200 text-center"
            >
              {t('process.cta_whatsapp')}
            </ProtectedWhatsAppLink>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <a href="#home" className="inline-block">
              <div className="bg-white rounded-xl px-3 py-2 inline-flex">
                <Image
                  src="/400x100 copy.png"
                  alt="GulfMarks"
                  width={120}
                  height={30}
                  className="h-7 w-auto"
                />
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#14B8A6] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2.5">
              {services.map((service, i) => (
                <li key={i}>
                  <span className="text-sm text-slate-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-sm text-slate-400 hover:text-[#14B8A6] transition-colors duration-200">
                  Contact Form
                </a>
              </li>
              <li>
                <ProtectedWhatsAppLink
                  message="Hello GulfMarks!"
                  className="text-sm text-slate-400 hover:text-[#14B8A6] transition-colors duration-200"
                >
                  WhatsApp
                </ProtectedWhatsAppLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © 2024 GulfMarks. {t('footer.rights')}
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="/terms" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
