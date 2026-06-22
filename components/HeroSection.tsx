'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Star, Globe, TrendingUp, Users } from 'lucide-react';
import { ProtectedWhatsAppLink } from './ContactInfo';
import { useI18n } from '../lib/i18n';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function HeroSection() {
  const { t, isRTL } = useI18n();

  const stats = [
    { icon: Users, value: '50+', label: t('industries.stat1_label') },
    { icon: Globe, value: '6', label: t('industries.stat2_label') },
    { icon: TrendingUp, value: '3x', label: t('industries.stat3_label') },
    { icon: Star, value: '100%', label: 'Mobile Ready' },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0F172A', minHeight: '100vh' }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,184,166,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow — top left */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          top: '-200px',
          left: '-200px',
          background: 'radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 65%)',
          borderRadius: '50%',
        }}
      />

      {/* Radial glow — bottom right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          bottom: '-150px',
          right: '-150px',
          background: 'radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 65%)',
          borderRadius: '50%',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 180,
          height: 180,
          top: '15%',
          right: '8%',
          background: 'radial-gradient(circle, rgba(20,184,166,0.22) 0%, transparent 70%)',
          filter: 'blur(2px)',
        }}
        animate={{ y: [0, -25, 0], x: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 120,
          height: 120,
          top: '60%',
          left: '5%',
          background: 'radial-gradient(circle, rgba(20,184,166,0.16) 0%, transparent 70%)',
          filter: 'blur(1px)',
        }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Main layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[auto] lg:min-h-screen pt-14 pb-20 lg:py-0">

          {/* Left — Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Trust badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full mb-5 border" style={{ borderColor: 'rgba(20,184,166,0.4)', backgroundColor: 'rgba(20,184,166,0.08)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#14B8A6' }} />
                <span className="text-xs font-semibold tracking-wide" style={{ color: '#14B8A6' }}>
                  {t('hero.badge')}
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-poppins font-bold text-white leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
            >
              {t('hero.title').split(' ').slice(0, 3).join(' ')}{' '}
              <span
                className="relative inline-block"
                style={{ color: '#14B8A6' }}
              >
                {t('hero.title').split(' ').slice(3, 6).join(' ')}
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  style={{ height: '8px' }}
                >
                  <path
                    d="M2 8 Q75 2 150 8 Q225 14 298 6"
                    stroke="#14B8A6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: '#94A3B8' }}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white transition-all duration-200 shadow-lg hover:shadow-[#14B8A6]/30 hover:-translate-y-0.5"
                style={{ backgroundColor: '#14B8A6' }}
              >
                {t('hero.cta')}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <ProtectedWhatsAppLink
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white border-2 transition-all duration-200 hover:bg-white hover:text-[#0F172A] hover:-translate-y-0.5"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                <WhatsAppIcon className="w-4 h-4" />
                {t('process.cta_whatsapp')}
              </ProtectedWhatsAppLink>
            </motion.div>

            {/* Micro trust line */}
            <motion.p
              variants={itemVariants}
              className="text-xs -mt-4 mb-6"
              style={{ color: '#475569' }}
            >
              {t('services.trust1')}. {t('process.cta_subtitle').split('.')[0]}.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-1 rounded-xl p-3 border"
                    style={{ borderColor: 'rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.04)' }}
                  >
                    <Icon size={14} style={{ color: '#14B8A6' }} />
                    <span className="font-poppins font-bold text-white text-xl leading-none">{stat.value}</span>
                    <span className="text-xs" style={{ color: '#64748B' }}>{stat.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — Visual mockup */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-[520px]">
              {/* Main browser window */}
              <div
                className="rounded-2xl overflow-hidden shadow-2xl border"
                style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: '#1E293B' }}
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-5 py-3.5" style={{ backgroundColor: '#0F172A' }}>
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#EF4444' }} />
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F59E0B' }} />
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#22C55E' }} />
                  </div>
                  <div className="flex-1 mx-4 h-6 rounded-md flex items-center px-3 gap-2" style={{ backgroundColor: '#334155' }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#22C55E' }} />
                    <span className="text-xs" style={{ color: '#64748B' }}>elitebarber.sa</span>
                  </div>
                </div>

                {/* Website preview */}
                <div style={{ backgroundColor: '#0F172A' }}>
                  {/* Nav */}
                  <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="flex gap-1">
                      <span className="font-bold text-sm" style={{ color: '#14B8A6' }}>Elite</span>
                      <span className="font-bold text-sm text-white">Barber</span>
                    </div>
                    <div className="flex gap-4">
                      {['Services', 'Gallery', 'Book'].map(l => (
                        <span key={l} className="text-xs" style={{ color: '#475569' }}>{l}</span>
                      ))}
                    </div>
                    <span className="text-xs px-3 py-1.5 rounded-md font-semibold" style={{ backgroundColor: '#14B8A6', color: '#fff' }}>Book Now</span>
                  </div>

                  {/* Hero area */}
                  <div className="px-6 py-8">
                    <div className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#D4AF37' }}>RIYADH'S #1 BARBER</div>
                    <div className="font-bold text-white text-2xl leading-tight mb-2">Premium Cuts.<br />Unmatched Style.</div>
                    <div className="text-xs mb-5" style={{ color: '#64748B' }}>Book your appointment via WhatsApp</div>
                    <div className="flex gap-3">
                      <span className="text-xs px-4 py-2 rounded-lg font-semibold" style={{ backgroundColor: '#D4AF37', color: '#0F172A' }}>Book Now</span>
                      <span className="text-xs px-4 py-2 rounded-lg font-semibold border" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#94A3B8' }}>Our Services</span>
                    </div>
                  </div>

                  {/* Services row */}
                  <div className="px-6 pb-5 grid grid-cols-3 gap-3">
                    {[
                      { name: 'Classic Cut', price: '45 SAR' },
                      { name: 'Beard Trim', price: '30 SAR' },
                      { name: 'Full Package', price: '75 SAR' },
                    ].map(s => (
                      <div key={s.name} className="rounded-xl p-3" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="text-xs font-semibold text-white mb-0.5">{s.name}</div>
                        <div className="text-xs" style={{ color: '#D4AF37' }}>{s.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <motion.div
                className="absolute -bottom-6 -left-8 rounded-2xl px-5 py-4 shadow-2xl flex items-center gap-3"
                style={{ backgroundColor: '#1E293B', border: '1px solid rgba(20,184,166,0.3)', minWidth: 200 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(20,184,166,0.15)' }}>
                  <WhatsAppIcon className="w-5 h-5" style={{ color: '#14B8A6' }} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white leading-tight">New Booking!</div>
                  <div className="text-xs leading-tight mt-0.5" style={{ color: '#64748B' }}>via WhatsApp — 2 min ago</div>
                </div>
                <span className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse" style={{ backgroundColor: '#14B8A6' }} />
              </motion.div>

              {/* Floating stats card */}
              <motion.div
                className="absolute -top-6 -right-6 rounded-2xl px-5 py-4 shadow-2xl"
                style={{ backgroundColor: '#1E293B', border: '1px solid rgba(255,255,255,0.1)', minWidth: 160 }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="text-xs mb-2" style={{ color: '#64748B' }}>This month</div>
                <div className="font-poppins font-bold text-2xl text-white leading-none mb-1">+284%</div>
                <div className="text-xs font-medium" style={{ color: '#14B8A6' }}>Visitor growth</div>
                <div className="mt-3 flex gap-1 items-end">
                  {[3, 5, 4, 7, 6, 9, 12].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{ height: h * 4, backgroundColor: i === 6 ? '#14B8A6' : 'rgba(20,184,166,0.3)' }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(15,23,42,0.6))' }}
      />
    </section>
  );
}

function WhatsAppIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2.003C6.483 2.003 2 6.487 2 12.008c0 1.762.457 3.43 1.257 4.883L2 22l5.247-1.377C8.659 21.471 10.3 22 12.004 22c5.521 0 10.004-4.484 10.004-10.005 0-5.52-4.483-9.992-10.004-9.992zm0 18.304c-1.571 0-3.11-.425-4.445-1.225l-.319-.189-3.112.816.831-3.03-.207-.31C3.89 15.157 3.396 13.6 3.396 12.008c0-4.745 3.862-8.607 8.608-8.607 4.745 0 8.607 3.862 8.607 8.607 0 4.746-3.862 8.299-8.607 8.299z" />
    </svg>
  );
}
