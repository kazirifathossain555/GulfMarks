'use client';

import { motion } from 'framer-motion';
import { Scissors, Sparkles, Droplets, Wrench, Smile, ExternalLink } from 'lucide-react';
import { useI18n } from '../lib/i18n';

interface Project {
  title: string;
  category: string;
  categoryIcon: React.ElementType;
  demoUrl: string;
  heroPreview: React.ReactNode;
  accentColor: string;
  bgGradient: string;
}

const projects: Project[] = [
  {
    title: 'Elite Barber Shop',
    category: 'Barber Shop',
    categoryIcon: Scissors,
    demoUrl: 'https://elitebarbershop.gulfmarks.com',
    accentColor: '#D4AF37',
    bgGradient: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
    heroPreview: (
      <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
        {/* Nav */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
          <div className="flex items-center gap-1">
            <Scissors size={10} className="text-amber-400" />
            <span className="text-[8px] font-bold text-white">ELITE</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[6px] text-slate-400">Services</span>
            <span className="text-[6px] text-slate-400">Gallery</span>
          </div>
        </div>
        {/* Hero */}
        <div className="flex-1 px-3 py-2 flex flex-col justify-center">
          <span className="text-[6px] font-bold tracking-widest text-amber-400 mb-1">RIYADH'S #1 BARBER</span>
          <h3 className="text-[10px] font-bold text-white leading-tight mb-1">Premium Cuts.<br/>Unmatched Style.</h3>
          <p className="text-[6px] text-slate-400 mb-2">Book your appointment via WhatsApp</p>
          <div className="flex gap-1">
            <span className="text-[6px] px-2 py-0.5 rounded bg-amber-500 text-slate-900 font-semibold">Book Now</span>
            <span className="text-[6px] px-2 py-0.5 rounded border border-white/20 text-slate-300">Services</span>
          </div>
        </div>
        {/* Services */}
        <div className="px-2 pb-2 grid grid-cols-3 gap-1">
          {['Classic Cut', 'Beard Trim', 'Full Service'].map(s => (
            <div key={s} className="bg-white/5 rounded p-1 text-center border border-white/5">
              <div className="text-[6px] text-white font-medium truncate">{s}</div>
              <div className="text-[5px] text-amber-400">45 SAR</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Luxe Beauty Salon',
    category: 'Beauty Salon',
    categoryIcon: Sparkles,
    demoUrl: 'https://luxesalon.gulfmarks.com',
    accentColor: '#EC4899',
    bgGradient: 'linear-gradient(135deg, #831843 0%, #9F1239 100%)',
    heroPreview: (
      <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(135deg, #831843 0%, #9F1239 100%)' }}>
        {/* Nav */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
          <div className="flex items-center gap-1">
            <Sparkles size={10} className="text-pink-300" />
            <span className="text-[8px] font-bold text-white">LUXE</span>
          </div>
          <span className="text-[6px] px-1.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300">Book Now</span>
        </div>
        {/* Hero */}
        <div className="flex-1 px-3 py-2 flex flex-col justify-center">
          <span className="text-[6px] font-semibold tracking-wider text-pink-300 mb-1">BEAUTY REDEFINED</span>
          <h3 className="text-[10px] font-bold text-white leading-tight mb-1">Experience Luxury<br/>Beauty & Spa</h3>
          <p className="text-[6px] text-pink-200/70 mb-2">Facials • Hair • Nails • Spa Treatments</p>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-[8px] font-bold shadow-lg">★</div>
        </div>
        {/* Services */}
        <div className="px-2 pb-2 flex gap-1">
          {['Facial', 'Hair', 'Nails', 'Spa'].map(s => (
            <div key={s} className="flex-1 bg-white/10 rounded p-1 text-center">
              <div className="text-[5px] text-pink-200 font-medium">{s}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Prime Car Wash',
    category: 'Car Wash',
    categoryIcon: Droplets,
    demoUrl: 'https://primecarwash.gulfmarks.com',
    accentColor: '#0EA5E9',
    bgGradient: 'linear-gradient(135deg, #0C4A6E 0%, #0369A1 100%)',
    heroPreview: (
      <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(135deg, #0C4A6E 0%, #0369A1 100%)' }}>
        {/* Nav */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
          <div className="flex items-center gap-1">
            <Droplets size={10} className="text-sky-300" />
            <span className="text-[8px] font-bold text-white">PRIME</span>
          </div>
          <span className="text-[6px] px-1.5 py-0.5 rounded bg-sky-500 text-white font-semibold">Get Quote</span>
        </div>
        {/* Hero */}
        <div className="flex-1 px-3 py-2 flex flex-col justify-center items-center">
          <span className="text-[6px] font-bold tracking-wider text-sky-300 mb-1">PREMIUM CAR CARE</span>
          <h3 className="text-[10px] font-bold text-white leading-tight text-center mb-1">Crystal Clear.<br/>Every Time.</h3>
          <div className="flex gap-2 mt-2">
            <div className="w-10 h-10 rounded-lg bg-sky-900/50 border border-sky-400/30 flex items-center justify-center">
              <span className="text-[7px] text-sky-300">Basic<br/>25</span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-sky-900/50 border border-sky-400/30 flex items-center justify-center">
              <span className="text-[7px] text-sky-300">Premium<br/>50</span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-sky-900/50 border border-sky-400/30 flex items-center justify-center">
              <span className="text-[7px] text-sky-300">VIP<br/>99</span>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="px-2 pb-2">
          <div className="bg-white/10 rounded-lg p-2 flex items-center justify-between">
            <span className="text-[6px] text-white">Open 7 Days • 8 AM - 10 PM</span>
            <span className="text-[6px] text-sky-300 font-semibold">Book Now →</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'AutoFix Garage',
    category: 'Auto Repair',
    categoryIcon: Wrench,
    demoUrl: 'https://autofixgarage.gulfmarks.com',
    accentColor: '#F97316',
    bgGradient: 'linear-gradient(135deg, #1C1917 0%, #292524 100%)',
    heroPreview: (
      <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(135deg, #1C1917 0%, #292524 100%)' }}>
        {/* Nav */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
          <div className="flex items-center gap-1">
            <Wrench size={10} className="text-orange-400" />
            <span className="text-[8px] font-bold text-white">AUTOFIX</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[6px] text-stone-400">Services</span>
            <span className="text-[6px] text-stone-400">Contact</span>
          </div>
        </div>
        {/* Hero */}
        <div className="flex-1 px-3 py-2 flex flex-col justify-center">
          <span className="text-[6px] font-bold tracking-wider text-orange-400 mb-1">TRUSTED AUTO EXPERTS</span>
          <h3 className="text-[10px] font-bold text-white leading-tight mb-1">Expert Repairs.<br/>Fair Prices.</h3>
          <p className="text-[6px] text-stone-400 mb-2">Engine • Brakes • AC • Oil Change</p>
          <div className="flex gap-1">
            <span className="text-[6px] px-2 py-0.5 rounded bg-orange-500 text-white font-semibold">Get Quote</span>
            <span className="text-[6px] px-2 py-0.5 rounded border border-orange-400/30 text-orange-300">Call Now</span>
          </div>
        </div>
        {/* Services */}
        <div className="px-2 pb-2">
          <div className="grid grid-cols-4 gap-1">
            {['🔧', '🛞', '❄️', '⚡'].map((icon, i) => (
              <div key={i} className="bg-white/5 rounded p-1 text-center border border-white/5">
                <span className="text-[10px]">{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'DentalCare Clinic',
    category: 'Dental Clinic',
    categoryIcon: Smile,
    demoUrl: 'https://dentalcare.gulfmarks.com',
    accentColor: '#14B8A6',
    bgGradient: 'linear-gradient(135deg, #134E4A 0%, #0F766E 100%)',
    heroPreview: (
      <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(135deg, #134E4A 0%, #0F766E 100%)' }}>
        {/* Nav */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
          <div className="flex items-center gap-1">
            <Smile size={10} className="text-teal-300" />
            <span className="text-[8px] font-bold text-white">DENTALCARE</span>
          </div>
          <span className="text-[6px] px-1.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300">Book Appointment</span>
        </div>
        {/* Hero */}
        <div className="flex-1 px-3 py-2 flex flex-col justify-center">
          <span className="text-[6px] font-semibold tracking-wider text-teal-200 mb-1">YOUR SMILE, OUR PRIORITY</span>
          <h3 className="text-[10px] font-bold text-white leading-tight mb-1">Modern Dentistry.<br/>Gentle Care.</h3>
          <p className="text-[6px] text-teal-200/70 mb-2">General • Cosmetic • Orthodontics</p>
          <div className="flex gap-2 mt-1">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <span className="text-[8px]">👨‍⚕️</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[6px] text-white font-semibold">Dr. Sarah Al-Rashid</span>
              <span className="text-[5px] text-teal-200">15+ Years Experience</span>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="px-2 pb-2 grid grid-cols-3 gap-1">
          {['Checkup', 'Cleaning', 'Whitening', 'Fillings', 'Braces', 'Implants'].map(s => (
            <div key={s} className="bg-white/10 rounded px-1 py-0.5 text-center">
              <span className="text-[5px] text-teal-100 font-medium">{s}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function PortfolioSection() {
  const { t, isRTL } = useI18n();

  return (
    <section id="portfolio" className="py-16 lg:py-20" style={{ backgroundColor: '#F8FAFC' }} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1 rounded-full" style={{ color: '#14B8A6', backgroundColor: 'rgba(20,184,166,0.1)' }}>
            {t('portfolio.badge')}
          </span>
          <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">
            {t('portfolio.title')}
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const CategoryIcon = project.categoryIcon;
            return (
              <motion.div
                key={project.title}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Hero Preview */}
                <div className="h-36 overflow-hidden relative">
                  <div className="w-full h-full">
                    {project.heroPreview}
                  </div>
                  {/* Demo Badge */}
                  <div
                    className="absolute top-2 right-2 px-2 py-1 rounded-md text-[10px] font-bold text-white shadow-md"
                    style={{ backgroundColor: project.accentColor }}
                  >
                    Demo Website
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${project.accentColor}15` }}
                      >
                        <CategoryIcon size={14} style={{ color: project.accentColor }} />
                      </div>
                      <div>
                        <h3 className="font-poppins text-sm font-semibold text-[#0F172A]">
                          {project.title}
                        </h3>
                        <span className="text-[10px] text-slate-400">{project.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* View Demo Button */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 group-hover:shadow-md"
                    style={{
                      backgroundColor: `${project.accentColor}10`,
                      color: project.accentColor
                    }}
                  >
                    <span>View Demo</span>
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
