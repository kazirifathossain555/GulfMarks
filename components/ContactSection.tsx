'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CircleCheck as CheckCircle } from 'lucide-react';
import { ProtectedEmail, ProtectedPhone, ProtectedWhatsAppLink } from './ContactInfo';
import { useI18n } from '../lib/i18n';

export default function ContactSection() {
  const { t, isRTL } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    fetch('https://formsubmit.co/ajax/info@gulfmarks.com', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data,
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch(() => {
        setSubmitted(true);
        form.reset();
      });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 pb-28 lg:pb-28" style={{ backgroundColor: '#F8FAFC' }} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full" style={{ color: '#14B8A6', backgroundColor: 'rgba(20,184,166,0.1)' }}>
            {t('contact.badge')}
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left — Contact Form */}
          <motion.div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(20,184,166,0.1)' }}>
                  <CheckCircle size={32} style={{ color: '#14B8A6' }} />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-[#0F172A]">
                  {t('contact.form_submit')}!
                </h3>
                <p className="text-slate-500 text-sm max-w-xs">
                  {t('contact.subtitle')}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-[#14B8A6] font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-poppins text-xl font-semibold text-[#0F172A] mb-6">
                  {t('contact.title')}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="_subject" value="New Contact Form Submission - GulfMarks" />
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  <input type="hidden" name="_captcha" value="false" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t('contact.form_name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t('contact.form_email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t('contact.form_phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow"
                      placeholder="+966 5X XXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t('contact.form_service')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow bg-white"
                    >
                      <option value="">{t('contact.form_service')}</option>
                      <option value="website">{t('services.service1_title')}</option>
                      <option value="google">{t('services.service2_title')}</option>
                      <option value="seo">{t('services.service3_title')}</option>
                      <option value="maintenance">{t('services.service4_title')}</option>
                      <option value="chatbot">{t('services.service5_title')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      {t('contact.form_message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow resize-none"
                      placeholder={t('contact.form_message')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#14B8A6] text-white font-semibold text-sm rounded-xl hover:bg-[#0E9E8D] transition-colors duration-200"
                  >
                    {t('contact.form_submit')}
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Right — Contact Info */}
          <motion.div
            className="flex flex-col justify-center order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#0F172A] rounded-2xl p-6 sm:p-8">
              <h3 className="font-poppins text-xl font-semibold text-white mb-6">
                {t('footer.contact')}
              </h3>

              <div className="space-y-4 mb-8">
                <ProtectedWhatsAppLink
                  message="Hello GulfMarks!"
                  className="flex items-center gap-3 text-slate-300 hover:text-[#14B8A6] transition-colors duration-200"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>{t('process.cta_whatsapp')}</span>
                </ProtectedWhatsAppLink>

                <div className="flex items-center gap-3">
                  <EmailIcon className="w-5 h-5 text-slate-400" />
                  <ProtectedEmail className="text-slate-300 hover:text-[#14B8A6] transition-colors duration-200" />
                </div>

                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-slate-400" />
                  <ProtectedPhone className="text-slate-300 hover:text-[#14B8A6] transition-colors duration-200" />
                </div>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <p className="text-slate-500 text-xs mb-4">
                  {t('contact.or')}
                </p>
                <ProtectedWhatsAppLink
                  message="Hello GulfMarks, I'm interested in your services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#14B8A6] text-white text-sm font-semibold rounded-xl hover:bg-[#0E9E8D] transition-colors duration-200 w-full"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  {t('contact.whatsapp_cta')}
                </ProtectedWhatsAppLink>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2.003C6.483 2.003 2 6.487 2 12.008c0 1.762.457 3.43 1.257 4.883L2 22l5.247-1.377C8.659 21.471 10.3 22 12.004 22c5.521 0 10.004-4.484 10.004-10.005 0-5.52-4.483-9.992-10.004-9.992zm0 18.304c-1.571 0-3.11-.425-4.445-1.225l-.319-.189-3.112.816.831-3.03-.207-.31C3.89 15.157 3.396 13.6 3.396 12.008c0-4.745 3.862-8.607 8.608-8.607 4.745 0 8.607 3.862 8.607 8.607 0 4.746-3.862 8.299-8.607 8.299z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
