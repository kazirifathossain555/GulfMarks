'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';

export default function AboutSection() {
  const { t, isRTL } = useI18n();

  const stats = [
    { value: t('industries.stat1_value'), label: t('industries.stat1_label') },
    { value: t('industries.stat2_value'), label: t('industries.stat2_label') },
    { value: 'Fast', label: 'Turnaround' },
    { value: '100%', label: 'Mobile Ready' },
  ];

  return (
    <section id="about" className="py-16 lg:py-20" style={{ backgroundColor: '#F8FAFC' }} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: '#14B8A6' }}>
              {t('why.badge')}
            </span>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
              {t('why.title')}
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              {t('why.subtitle')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm"
                >
                  <div className="font-poppins text-2xl font-bold text-[#14B8A6] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — decorative SVG illustration */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <svg
              viewBox="0 0 500 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-md"
            >
              {/* Browser window */}
              <rect x="50" y="40" width="400" height="280" rx="12" fill="#F1F5F9" />
              <rect x="50" y="40" width="400" height="32" rx="12" fill="#E2E8F0" />
              <circle cx="70" cy="56" r="6" fill="#EF4444" />
              <circle cx="88" cy="56" r="6" fill="#F59E0B" />
              <circle cx="106" cy="56" r="6" fill="#22C55E" />
              <rect x="130" y="48" width="280" height="16" rx="4" fill="#CBD5E1" />

              {/* Content area */}
              <rect x="70" y="88" width="360" height="220" rx="8" fill="#0F172A" />

              {/* Hero section mockup */}
              <rect x="90" y="108" width="160" height="12" rx="2" fill="#14B8A6" />
              <rect x="90" y="130" width="200" height="8" rx="2" fill="#FFFFFF" opacity="0.8" />
              <rect x="90" y="146" width="180" height="6" rx="2" fill="#94A3B8" />
              <rect x="90" y="168" width="80" height="24" rx="4" fill="#14B8A6" />

              {/* Stats */}
              <rect x="280" y="108" width="140" height="40" rx="6" fill="rgba(20,184,166,0.1)" />
              <rect x="290" y="118" width="40" height="20" rx="2" fill="#14B8A6" />
              <rect x="340" y="118" width="70" height="8" rx="2" fill="#94A3B8" />
              <rect x="340" y="130" width="50" height="6" rx="2" fill="#64748B" />

              <rect x="280" y="156" width="140" height="40" rx="6" fill="rgba(14,165,233,0.1)" />
              <rect x="290" y="166" width="40" height="20" rx="2" fill="#0EA5E9" />
              <rect x="340" y="166" width="70" height="8" rx="2" fill="#94A3B8" />
              <rect x="340" y="178" width="50" height="6" rx="2" fill="#64748B" />

              {/* Cards row */}
              <rect x="90" y="210" width="100" height="80" rx="6" fill="rgba(255,255,255,0.05)" />
              <rect x="200" y="210" width="100" height="80" rx="6" fill="rgba(255,255,255,0.05)" />
              <rect x="310" y="210" width="100" height="80" rx="6" fill="rgba(255,255,255,0.05)" />

              {/* Floating elements */}
              <motion.circle
                cx="420"
                cy="80"
                r="30"
                fill="rgba(20,184,166,0.2)"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                cx="80"
                cy="140"
                r="20"
                fill="rgba(139,92,246,0.15)"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
