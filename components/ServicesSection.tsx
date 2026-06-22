'use client';

import { motion } from 'framer-motion';
import { Monitor, MapPin, Search, Shield, Bot, ArrowRight, Sparkles, TrendingUp, Check } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const trustIcons = [TrendingUp, Sparkles, Check];

export default function ServicesSection() {
  const { t, isRTL } = useI18n();

  const trustPoints = [
    { icon: TrendingUp, text: t('services.trust1') },
    { icon: Sparkles, text: t('services.trust2') },
    { icon: Check, text: t('services.trust3') },
  ];

  const services = [
    {
      icon: Monitor,
      title: t('services.service1_title'),
      description: t('services.service1_desc'),
      features: ['Landing Pages', '5-Page Sites', 'E-commerce Ready'],
      result: t('services.service1_result'),
      color: '#14B8A6',
    },
    {
      icon: MapPin,
      title: t('services.service2_title'),
      description: t('services.service2_desc'),
      features: ['Google Maps', 'Local Pack', 'Reviews Setup'],
      result: t('services.service2_result'),
      color: '#0EA5E9',
    },
    {
      icon: Search,
      title: t('services.service3_title'),
      description: t('services.service3_desc'),
      features: ['Keyword Research', 'On-Page SEO', 'Citations'],
      result: t('services.service3_result'),
      color: '#8B5CF6',
    },
    {
      icon: Shield,
      title: t('services.service4_title'),
      description: t('services.service4_desc'),
      features: ['Security Updates', 'Speed Monitoring', 'Backups'],
      result: t('services.service4_result'),
      color: '#F59E0B',
    },
    {
      icon: Bot,
      title: t('services.service5_title'),
      description: t('services.service5_desc'),
      features: ['24/7 Support', 'Lead Capture', 'WhatsApp Handoff'],
      result: t('services.service5_result'),
      color: '#10B981',
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)' }} />

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
            {t('services.badge')}
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
            {t('services.title')}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {trustPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <div key={i} className="flex items-center gap-2">
                  <Icon size={14} style={{ color: '#14B8A6' }} />
                  <span className="text-xs font-medium text-slate-500">{point.text}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                className="group bg-[#F8FAFC] rounded-2xl p-6 flex flex-col border border-slate-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${service.color}12` }}
                >
                  <Icon size={22} style={{ color: service.color }} />
                </div>

                {/* Content */}
                <h3 className="font-poppins text-lg font-semibold text-[#0F172A] mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((f) => (
                    <span key={f} className="text-xs px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div className="flex items-center gap-2 pt-3 border-t border-slate-200">
                  <TrendingUp size={12} style={{ color: service.color }} />
                  <span className="text-xs font-semibold" style={{ color: service.color }}>{service.result}</span>
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
            {t('services.cta_not_sure')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#14B8A6] text-white text-sm font-semibold rounded-xl hover:bg-[#0E9E8D] transition-colors duration-200"
          >
            {t('services.cta_button')}
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
