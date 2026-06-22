'use client';

import { useState, useEffect } from 'react';
import { ProtectedWhatsAppLink } from './ContactInfo';
import { useI18n } from '../lib/i18n';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div
        className="flex items-stretch shadow-2xl border-t"
        style={{ borderColor: 'rgba(20,184,166,0.3)', backgroundColor: '#0F172A' }}
      >
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white border-r"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          {t('hero.cta')}
        </a>
        <ProtectedWhatsAppLink
          message="Hello GulfMarks, I'm interested in your services."
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white"
          style={{ backgroundColor: '#14B8A6' }}
        >
          <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
          {t('process.cta_whatsapp')}
        </ProtectedWhatsAppLink>
      </div>
    </div>
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
