'use client';

import { motion } from 'framer-motion';
import { Scissors, Sparkles, Droplets, Wrench, UtensilsCrossed, Smile, Dumbbell, Store, ArrowRight } from 'lucide-react';
import { useI18n } from '../lib/i18n';

export default function IndustriesSection() {
  const { t, isRTL } = useI18n();

  const industries = [
    {
      name: t('industries.industry1_name'),
      icon: Scissors,
      description: 'Booking pages, service menus & WhatsApp links',
      result: t('industries.industry1_result'),
      color: '#0F172A',
      bg: 'rgba(15,23,42,0.06)',
    },
    {
      name: t('industries.industry2_name'),
      icon: Sparkles,
      description: 'Showcase services, gallery & appointment requests',
      result: t('industries.industry2_result'),
      color: '#14B8A6',
      bg: 'rgba(20,184,166,0.08)',
    },
    {
      name: t('industries.industry3_name'),
      icon: Droplets,
      description: 'Pricing packages, location map & online bookings',
      result: t('industries.industry3_result'),
      color: '#0EA5E9',
      bg: 'rgba(14,165,233,0.08)',
    },
    {
      name: t('industries.industry4_name'),
      icon: Wrench,
      description: 'Service listings, trust signals & quote requests',
      result: t('industries.industry4_result'),
      color: '#F97316',
      bg: 'rgba(249,115,22,0.08)',
    },
    {
      name: t('industries.industry5_name'),
      icon: UtensilsCrossed,
      description: 'Digital menus, reservations & delivery links',
      result: t('industries.industry5_result'),
      color: '#EF4444',
      bg: 'rgba(239,68,68,0.08)',
    },
    {
      name: t('industries.industry6_name'),
      icon: Smile,
      description: 'Credentials, services & appointment booking',
      result: t('industries.industry6_result'),
      color: '#8B5CF6',
      bg: 'rgba(139,92,246,0.08)',
    },
    {
      name: t('industries.industry7_name'),
      icon: Dumbbell,
      description: 'Membership plans, class schedules & trial offers',
      result: t('industries.industry7_result'),
      color: '#10B981',
      bg: 'rgba(16,185,129,0.08)',
    },
    {
      name: t('industries.industry8_name'),
      icon: Store,
      description: 'Any business that needs customers to find them online',
      result: t('industries.industry8_result'),
      color: '#64748B',
      bg: 'rgba(100,116,139,0.08)',
    },
  ];

  const stats = [
    { value: t('industries.stat1_value'), label: t('industries.stat1_label') },
    { value: t('industries.stat2_value'), label: t('industries.stat2_label') },
    { value: t('industries.stat3_value'), label: t('industries.stat3_label') },
  ];

  return (
    <section id="industries" className="py-24 lg:py-28 bg-[#F8FAFC] relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 h-20" style={{ background: 'linear-gradient(to bottom, white, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full" style={{ color: '#14B8A6', backgroundColor: 'rgba(20,184,166,0.1)' }}>
            {t('industries.badge')}
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
            {t('industries.title')}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('industries.subtitle')}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-poppins text-2xl font-bold text-[#0F172A]">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={i}
                className="group bg-white rounded-xl p-5 border border-slate-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: industry.bg }}
                >
                  <Icon size={20} style={{ color: industry.color }} />
                </div>

                {/* Content */}
                <h3 className="font-poppins text-sm font-semibold text-[#0F172A] mb-1">
                  {industry.name}
                </h3>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                  {industry.description}
                </p>

                {/* Result badge */}
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: industry.bg, color: industry.color }}>
                  {industry.result}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-slate-500 text-sm mb-4">
            {t('industries.cta_title')} <span className="text-slate-600">{t('industries.cta_subtitle')}</span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#14B8A6] text-white text-sm font-semibold rounded-xl hover:bg-[#0E9E8D] transition-colors duration-200"
          >
            {t('industries.cta_button')}
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
