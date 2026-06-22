'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Code as Code2, CircleCheck as CheckCircle2, Clock, Rocket, Zap } from 'lucide-react';
import { ProtectedWhatsAppLink } from './ContactInfo';
import { useI18n } from '../lib/i18n';

const stepIcons = [MessageCircle, Code2, Rocket];
const guaranteeIcons = [CheckCircle2, Clock, Zap];

export default function ProcessSection() {
  const { t, isRTL } = useI18n();

  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: t('process.step1_title'),
      description: t('process.step1_desc'),
      detail: t('process.step1_detail'),
      timeline: '15 min call',
      color: '#14B8A6',
    },
    {
      number: '02',
      icon: Code2,
      title: t('process.step2_title'),
      description: t('process.step2_desc'),
      detail: t('process.step2_detail'),
      timeline: '3-7 days',
      color: '#0EA5E9',
    },
    {
      number: '03',
      icon: Rocket,
      title: t('process.step3_title'),
      description: t('process.step3_desc'),
      detail: t('process.step3_detail'),
      timeline: 'Forever',
      color: '#8B5CF6',
    },
  ];

  const guarantees = [
    { icon: CheckCircle2, text: t('process.guarantee1') },
    { icon: Clock, text: t('process.guarantee2') },
    { icon: Zap, text: t('process.guarantee3') },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden relative" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 0)', backgroundSize: '40px 40px' }} />

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
            {t('process.badge')}
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
            {t('process.title')}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('process.subtitle')}
          </p>
        </motion.div>

        {/* Steps with timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-[#14B8A6] via-[#0EA5E9] to-[#8B5CF6]" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="relative flex flex-col"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  {/* Step number badge - top */}
                  <div className="flex flex-col items-center lg:items-start mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-4"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{ backgroundColor: `${step.color}15`, color: step.color }}
                      >
                        STEP {step.number}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{step.timeline}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-[#F8FAFC] rounded-2xl p-7 flex-1 flex flex-col border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="font-poppins text-xl font-semibold text-[#0F172A] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-200">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step.color }} />
                      <span className="text-xs font-semibold" style={{ color: step.color }}>{step.detail}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA strip */}
        <motion.div
          className="mt-16 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-[#0F172A] p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <h3 className="font-poppins text-2xl lg:text-3xl font-bold text-white mb-2">
                  {t('process.cta_title')}
                </h3>
                <p className="text-slate-400 text-sm lg:text-base">
                  {t('process.cta_subtitle')}
                </p>
              </div>

              {/* Guarantees */}
              <div className="flex flex-wrap gap-4 lg:gap-6">
                {guarantees.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(20,184,166,0.2)' }}>
                        <Icon size={14} style={{ color: '#14B8A6' }} />
                      </div>
                      <span className="text-white text-sm font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-[#14B8A6] text-white text-sm font-semibold rounded-xl hover:bg-[#0E9E8D] transition-colors duration-200 text-center"
                >
                  {t('process.cta_button')}
                </a>
                <ProtectedWhatsAppLink
                  message="Hello GulfMarks, I'm interested in your services"
                  className="px-6 py-3 border border-white/30 text-white text-sm font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200 text-center"
                >
                  {t('process.cta_whatsapp')}
                </ProtectedWhatsAppLink>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
