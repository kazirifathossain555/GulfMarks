'use client';

import { motion } from 'framer-motion';
import { Zap, BadgeDollarSign, Palette, Smartphone, Target, Check, X } from 'lucide-react';
import { useI18n } from '../lib/i18n';

export default function WhyChooseUs() {
  const { t, isRTL } = useI18n();

  const advantages = [
    {
      icon: Zap,
      title: t('why.adv1_title'),
      description: t('why.adv1_desc'),
      proof: '3-7 days',
      color: '#F59E0B'
    },
    {
      icon: BadgeDollarSign,
      title: t('why.adv2_title'),
      description: t('why.adv2_desc'),
      proof: 'From 299 SAR',
      color: '#14B8A6'
    },
    {
      icon: Palette,
      title: t('why.adv3_title'),
      description: t('why.adv3_desc'),
      proof: '100% custom',
      color: '#8B5CF6'
    },
    {
      icon: Smartphone,
      title: t('why.adv4_title'),
      description: t('why.adv4_desc'),
      proof: 'All devices',
      color: '#0EA5E9'
    },
    {
      icon: Target,
      title: t('why.adv5_title'),
      description: t('why.adv5_desc'),
      proof: '6 countries',
      color: '#EF4444'
    },
  ];

  const comparison = [
    { feature: t('pricing.feature5'), us: '3-7 Days', them: '4-8 Weeks', highlight: true },
    { feature: t('why.adv3_title').split(' ').slice(0, 2).join(' '), us: true, them: false },
    { feature: t('pricing.feature2'), us: true, them: false },
    { feature: t('pricing.feature3'), us: true, them: false },
    { feature: t('pricing.feature7'), us: true, them: false },
    { feature: t('why.adv5_title').split(' ').slice(0, 2).join(' '), us: true, them: false },
    { feature: t('why.adv2_title').split(' ').slice(0, 2).join(' '), us: true, them: false },
    { feature: 'Free Revisions', us: true, them: false },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full" style={{ color: '#14B8A6', backgroundColor: 'rgba(20,184,166,0.1)' }}>
            {t('why.badge')}
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
            {t('why.title')}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('why.subtitle')}
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-20">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={i}
                className="bg-[#F8FAFC] rounded-xl p-5 border border-slate-100 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${adv.color}12` }}
                >
                  <Icon size={20} style={{ color: adv.color }} />
                </div>
                <h3 className="font-poppins text-sm font-semibold text-[#0F172A] mb-2">
                  {adv.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  {adv.description}
                </p>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${adv.color}12`, color: adv.color }}>
                  {adv.proof}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Trust section */}
        <motion.div
          className="text-center bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-poppins text-xl font-bold text-[#0F172A] mb-2">
            {t('why.trust_title')}
          </h3>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            {t('why.trust_subtitle')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
