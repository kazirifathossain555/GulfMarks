'use client';

import { motion } from 'framer-motion';
import { Check, MessageCircle, Smartphone, Search, Globe, Clock, ShieldCheck, Star, Sparkles, Zap } from 'lucide-react';
import { ProtectedWhatsAppLink } from './ContactInfo';
import { useI18n } from '../lib/i18n';

const plans = [
  {
    name: 'Starter',
    price: '299',
    badge: 'Best for New Businesses',
    badgeIcon: Star,
    description: 'Perfect for getting your business online quickly.',
    features: [
      '1 Professional Website Page',
      'Fully Mobile Responsive',
      'WhatsApp Button Integration',
      'Contact Form',
      'Fast Delivery (3-5 Days)',
    ],
    popular: false,
    gradient: null,
  },
  {
    name: 'Business',
    price: '499',
    badge: '🔥 Most Popular Choice',
    badgeIcon: Sparkles,
    description: 'Everything most local businesses need to generate leads online.',
    features: [
      'Up to 5 Professional Pages',
      'Fully Mobile Responsive',
      'WhatsApp Integration',
      'Contact Form',
      'Google Business Setup',
      'Fast Delivery (5-7 Days)',
    ],
    popular: true,
    gradient: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
  },
  {
    name: 'Growth',
    price: '799',
    badge: '🚀 Maximum Growth',
    badgeIcon: Zap,
    description: 'For businesses ready to maximize visibility and customer acquisition.',
    features: [
      'Full Business Website',
      'Fully Mobile Responsive',
      'WhatsApp Integration',
      'Contact Form',
      'Google Business Optimization',
      'Basic Local SEO Setup',
      'Priority Delivery',
    ],
    popular: false,
    gradient: null,
  },
];

const trustItems = [
  { icon: Smartphone, text: 'Mobile Friendly' },
  { icon: MessageCircle, text: 'WhatsApp Integrated' },
  { icon: Globe, text: 'Google Ready' },
  { icon: Clock, text: 'Delivered in 3-7 Days' },
  { icon: ShieldCheck, text: 'No Monthly Fees' },
  { icon: Star, text: 'Satisfaction Guaranteed' },
];

const faqs = [
  {
    question: 'How long does delivery take?',
    answer: 'Starter websites are delivered in 3-5 days, Business in 5-7 days, and Growth packages are prioritized for the fastest delivery. We\'ll give you an exact timeline before we start.',
  },
  {
    question: 'Do I need hosting?',
    answer: 'No, we handle everything! Fast, reliable hosting optimized for Gulf visitors is included. Your site will be online 24/7 with no technical work needed from you.',
  },
  {
    question: 'Can I use my own domain name?',
    answer: 'Absolutely! We\'ll help you connect your existing domain, or we can register a new one for you. Your website will have a professional address like yourbusiness.com.',
  },
  {
    question: 'Is Arabic language supported?',
    answer: 'Yes! All our websites support Arabic with full RTL (right-to-left) layout, Arabic fonts, and proper text direction. We build bilingual sites for Gulf businesses.',
  },
  {
    question: 'Do you provide support after launch?',
    answer: 'Yes. We provide free revisions and are available for any questions. We also offer ongoing maintenance packages if you need regular updates.',
  },
  {
    question: 'Can I upgrade my website later?',
    answer: 'Definitely. You can start with a smaller package and upgrade anytime as your business grows. We\'ll credit your original payment toward the upgrade.',
  },
];

export default function PricingSection() {
  const { t, isRTL } = useI18n();

  return (
    <section id="pricing" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F8FAFC 100%)' }} dir={isRTL ? 'rtl' : 'ltr'}>

      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full" style={{ color: '#14B8A6', backgroundColor: 'rgba(20,184,166,0.1)' }}>
            PRICING
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-5 leading-tight">
            Affordable Website Packages<br className="hidden sm:block" /> for Gulf Businesses
          </h2>
          <p className="text-slate-500 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            One-time payment. No monthly fees. Mobile-friendly websites built to help local businesses get more customers online.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? 'lg:scale-110 lg:-my-8 z-10 shadow-2xl'
                  : 'hover:shadow-lg'
              }`}
              style={{
                background: plan.popular
                  ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)'
                  : '#FFFFFF',
                border: plan.popular ? 'none' : '1px solid #E2E8F0',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Popular glow effect */}
              {plan.popular && (
                <div
                  className="absolute -inset-1 rounded-3xl opacity-30 blur-xl -z-10"
                  style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #0EA5E9 100%)' }}
                />
              )}

              {/* Badge */}
              <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-lg ${
                plan.popular
                  ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-white'
                  : 'bg-slate-100 text-slate-600'
              }`}>
                {plan.badge}
              </div>

              {/* Card Content */}
              <div className="p-6 lg:p-8">
                {/* Plan Name */}
                <h3 className={`font-poppins text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-[#0F172A]'}`}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`font-poppins text-4xl lg:text-5xl font-bold ${plan.popular ? 'text-white' : 'text-[#0F172A]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    SAR
                  </span>
                </div>

                {/* Description */}
                <p className={`text-sm mb-6 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-[#14B8A6]' : 'text-[#14B8A6]'}`}
                      />
                      <span className={`text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <ProtectedWhatsAppLink
                  message={`Hello GulfMarks, I'm interested in the ${plan.name} Package (${plan.price} SAR).`}
                  className={`w-full py-4 rounded-xl text-sm font-bold text-center transition-all duration-200 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-[#14B8A6] text-white hover:bg-[#0E9E8D] shadow-lg hover:shadow-xl'
                      : 'bg-[#0F172A] text-white hover:bg-slate-800'
                  }`}
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </ProtectedWhatsAppLink>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote Section */}
        <motion.div
          className="bg-gradient-to-r from-slate-50 to-teal-50 rounded-2xl p-8 lg:p-10 text-center mb-16 border border-slate-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-poppins text-xl lg:text-2xl font-bold text-[#0F172A] mb-2">
            Need Something Custom?
          </h3>
          <p className="text-slate-500 text-sm lg:text-base mb-6 max-w-lg mx-auto">
            Need a website tailored specifically for your business? Get a custom quote today.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#14B8A6] text-white text-sm font-semibold rounded-xl hover:bg-[#0E9E8D] transition-colors duration-200"
          >
            Get Custom Quote
          </a>
        </motion.div>

        {/* Trust Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  className="bg-white rounded-xl p-4 border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all duration-200 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mx-auto mb-2">
                    <Icon size={18} className="text-[#14B8A6]" />
                  </div>
                  <span className="text-xs font-medium text-slate-600">{item.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-poppins text-xl lg:text-2xl font-bold text-[#0F172A] text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:border-slate-200 transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-semibold text-sm text-[#0F172A] pr-4">{faq.question}</span>
                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 group-open:bg-[#14B8A6] transition-colors duration-200">
                      <span className="text-slate-500 text-xs group-open:text-white group-open:rotate-45 transition-all duration-200">+</span>
                    </div>
                  </summary>
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
