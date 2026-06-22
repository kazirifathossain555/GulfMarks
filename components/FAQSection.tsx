'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ProtectedWhatsAppLink } from './ContactInfo';
import { useI18n } from '../lib/i18n';

export default function FAQSection() {
  const { t, isRTL } = useI18n();

  const faqs = [
    {
      question: 'How long does it take to build my website?',
      answer: 'Most websites are delivered within 3–7 business days depending on the package.',
    },
    {
      question: 'Do you provide hosting?',
      answer: 'Yes — we handle everything. We set up fast, reliable hosting optimized for Gulf-region visitors.',
    },
    {
      question: "Can I update my website after it's live?",
      answer: 'Absolutely. We offer ongoing maintenance packages, and we can train you to make basic updates.',
    },
    {
      question: 'Will my website look good on mobile phones?',
      answer: 'Yes — 100%. Every website we build is designed mobile-first and tested across all devices.',
    },
    {
      question: 'How will customers find my website on Google?',
      answer: 'Our Growth Package includes Local SEO setup and Google Business Profile optimization.',
    },
    {
      question: 'Do I need to pay everything upfront?',
      answer: 'No. We work on a 50% deposit to start, 50% on delivery model.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
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
            {t('faq.badge')}
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            {t('faq.title')}
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-[#F8FAFC] rounded-xl px-5 border border-slate-100 data-[state=open]:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-[#0F172A] hover:text-[#14B8A6]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-500 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-slate-500 text-sm mb-4">
            Still have questions?
          </p>
          <ProtectedWhatsAppLink
            message="Hello GulfMarks, I have a question"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#14B8A6] text-white text-sm font-semibold rounded-xl hover:bg-[#0E9E8D] transition-colors duration-200"
          >
            Ask on WhatsApp
          </ProtectedWhatsAppLink>
        </motion.div>
      </div>
    </section>
  );
}
