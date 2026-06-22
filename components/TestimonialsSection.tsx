'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const testimonials = [
  {
    name: 'Ahmed Al-Rashidi',
    business: 'Elite Barber Shop — Riyadh',
    avatar: 'AR',
    avatarBg: '#0E4F6B',
    rating: 5,
    text: 'Before GulfMarks I had zero online presence. Within a week I had a professional website.',
    result: '+22 clients/month',
  },
  {
    name: 'Fatima Al-Mansoori',
    business: 'Glow Beauty Salon — Dubai',
    avatar: 'FM',
    avatarBg: '#0F766E',
    rating: 5,
    text: 'I thought websites were only for big companies. GulfMarks proved me wrong.',
    result: 'Page 1 Google in 6 weeks',
  },
  {
    name: 'Khalid Al-Dosari',
    business: 'Prime Car Wash — Manama',
    avatar: 'KD',
    avatarBg: '#1D4ED8',
    rating: 5,
    text: 'They delivered my entire website in 4 days. The WhatsApp integration doubled my bookings.',
    result: '2x bookings in the first month',
  },
];

export default function TestimonialsSection() {
  const { t, isRTL } = useI18n();

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style={{ color: '#14B8A6', backgroundColor: 'rgba(20,184,166,0.08)' }}>
            {t('testimonials.badge')}
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-[#F8FAFC] rounded-xl p-6 border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={12} fill="#F59E0B" stroke="#F59E0B" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                "{t.text}"
              </p>

              {/* Result */}
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: 'rgba(20,184,166,0.1)', color: '#14B8A6' }}>
                {t.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: t.avatarBg }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#0F172A]">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.business}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
