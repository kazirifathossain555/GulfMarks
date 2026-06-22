'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'hi';

interface Translations {
  [key: string]: string | { [key: string]: string };
}

const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      pricing: 'Pricing',
      contact: 'Contact',
    },
    // Hero
    hero: {
      badge: 'Professional Websites for Gulf Businesses',
      title: 'Get More Customers with a Website That Works',
      subtitle: 'We build fast, mobile-friendly websites for barber shops, salons, car washes, restaurants, and local businesses across the Gulf region.',
      cta: 'Get Your Free Quote',
      cta_secondary: 'See Our Work',
    },
    // Services
    services: {
      badge: 'Our Services',
      title: 'Everything You Need to Grow Online',
      subtitle: 'From a stunning website to being found on Google — we handle it all. One partner, complete digital growth.',
      trust1: 'Result-driven approach',
      trust2: 'Premium quality design',
      trust3: 'No hidden fees ever',
      featured_badge: 'Most Popular',
      featured_title: 'Website Design & Development',
      featured_desc: 'A beautiful website is just the beginning. We build sites that convert visitors into customers, optimized for the Gulf market, Arabic & English ready, and designed to grow your business.',
      feature1: 'Mobile-First Design',
      feature2: 'WhatsApp Integration',
      feature3: 'Fast Loading',
      feature4: 'SEO Optimized',
      starting_price: 'Starting price',
      service1_title: 'Website Design & Development',
      service1_desc: 'Modern, mobile-first websites engineered to convert visitors into paying customers.',
      service1_result: 'Average 40% more leads',
      service2_title: 'Google Business Profile Setup',
      service2_desc: 'Fully optimized Google Business Profile so customers find you on Maps when they are ready to buy.',
      service2_result: 'Show up #1 locally',
      service3_title: 'Local SEO',
      service3_desc: 'Rank higher in your city. We optimize your website so nearby customers find you, not your competitors.',
      service3_result: '3x more visibility',
      service4_title: 'Website Maintenance',
      service4_desc: 'Monthly care plans to keep your website secure, updated, and running at peak speed.',
      service4_result: '99.9% uptime guaranteed',
      service5_title: 'AI Chatbot Setup',
      service5_desc: 'An intelligent chatbot that answers customer questions 24/7 and routes leads to WhatsApp automatically.',
      service5_result: 'Never miss a lead',
      cta_not_sure: 'Not sure which service is right for you?',
      cta_button: 'Get a Free Consultation',
    },
    // Industries
    industries: {
      badge: 'Who We Help',
      title: 'Built for Businesses Like Yours',
      subtitle: 'We understand the Gulf market. Whether you\'re a barber in Riyadh, a salon in Dubai, or a car wash in Jeddah — we build websites that bring real customers through your door.',
      stat1_value: '50+',
      stat1_label: 'Businesses helped',
      stat2_value: '6',
      stat2_label: 'Gulf countries',
      stat3_value: '3x',
      stat3_label: 'Avg. lead increase',
      industry1_name: 'Barber Shops',
      industry1_result: '3x more appointments',
      industry2_name: 'Salons',
      industry2_result: '80% more bookings',
      industry3_name: 'Car Washes',
      industry3_result: '2x customer calls',
      industry4_name: 'Auto Garages',
      industry4_result: '50+ leads/month',
      industry5_name: 'Restaurants',
      industry5_result: '40% more reservations',
      industry6_name: 'Dental Clinics',
      industry6_result: '30+ new patients/mo',
      industry7_name: 'Gyms & Fitness',
      industry7_result: '2x trial signups',
      industry8_name: 'Local Businesses',
      industry8_result: 'Get found first',
      cta_title: "Don't see your industry?",
      cta_subtitle: 'We work with any local business',
      cta_button: "Let's Talk",
    },
    // Portfolio
    portfolio: {
      badge: 'Our Work',
      title: 'Real Results for Real Businesses',
      subtitle: 'See the websites we\'ve built and the results delivered for Gulf businesses.',
    },
    // Process
    process: {
      badge: 'How It Works',
      title: 'From Idea to Live Website in Under a Week',
      subtitle: 'No complicated processes. No endless meetings. Just 3 simple steps to a website that brings you more customers.',
      step1_title: 'Tell Us About Your Business',
      step1_desc: "Share your vision in a free 15-minute call. We'll learn about your goals, your market, and exactly what success looks like for you.",
      step1_detail: 'Free consultation',
      step2_title: 'We Design & Build Your Site',
      step2_desc: "Our team gets to work immediately. You'll see a design preview in 48 hours. Approve it, and we build the full site in days, not months.",
      step2_detail: 'Quick turnaround',
      step3_title: 'Go Live & Grow',
      step3_desc: "Your site launches and starts working 24/7. More WhatsApp messages, more calls, more customers walking through your door.",
      step3_detail: 'Lifetime support',
      guarantee1: 'Satisfaction guaranteed',
      guarantee2: 'On-time delivery',
      guarantee3: 'Fast communication',
      cta_title: 'Ready to Get Started?',
      cta_subtitle: 'Book a free 15-minute consultation. No commitment, no pressure.',
      cta_button: 'Book Free Call',
      cta_whatsapp: 'WhatsApp Us',
    },
    // Pricing
    pricing: {
      badge: 'Pricing',
      title: 'Simple, Transparent Pricing',
      subtitle: 'One price. No hidden fees. No surprises. You own everything we build.',
      trust1: 'Satisfaction guaranteed',
      trust2: 'No hidden fees',
      trust3: 'Fast delivery',
      plan1_name: 'Starter',
      plan1_tagline: 'Get online fast',
      plan1_desc: 'Perfect for new businesses ready to establish their online presence.',
      plan2_name: 'Business',
      plan2_tagline: 'Most businesses start here',
      plan2_desc: 'Everything you need to stand out and bring in more customers.',
      plan2_badge: 'Most Popular',
      plan3_name: 'Growth',
      plan3_tagline: 'For serious growth',
      plan3_desc: 'Maximum visibility and lead generation for established businesses.',
      feature1: 'Website Pages',
      feature2: 'Mobile Responsive',
      feature3: 'WhatsApp Integration',
      feature4: 'Contact Form',
      feature5: 'Delivery Time',
      feature6: 'Google Business',
      feature7: 'Local SEO',
      get_started: 'Get Started',
      custom_title: 'Need something custom?',
      custom_subtitle: 'Let us create a tailored solution for you',
      custom_button: 'Get Custom Quote',
    },
    // Why Choose Us
    why: {
      badge: 'Why GulfMarks',
      title: 'Built for Gulf Businesses, Not Silicon Valley',
      subtitle: "We're not a big global agency. We're a focused team that understands the Gulf market, the culture, and what makes your customers take action.",
      trust_title: 'Your Success is Our Priority',
      trust_subtitle: 'We don\'t just build websites. We build partnerships that grow your business.',
      adv1_title: 'Lightning Fast Delivery',
      adv1_desc: 'Get your site live in days, not months. We move fast because we know every day without a website is lost opportunity.',
      adv2_title: 'Honest, Fixed Pricing',
      adv2_desc: 'The price we quote is the price you pay. No surprise invoices, no hidden retainers, no stress.',
      adv3_title: 'Premium, Custom Design',
      adv3_desc: 'Every site is designed from scratch for your brand. No templates, no cookie-cutter designs.',
      adv4_title: 'Mobile-First Approach',
      adv4_desc: 'Most of your customers are on mobile. We design for mobile first, then desktop.',
      adv5_title: 'Gulf Market Specialists',
      adv5_desc: 'We know the local market, culture, and what makes Gulf customers click. This is our home.',
      cta_title: 'See the GulfMarks difference',
      cta_subtitle: 'Book a free consultation today',
      cta_button: 'Get Started',
    },
    // Testimonials
    testimonials: {
      badge: 'Testimonials',
      title: 'What Our Clients Say',
    },
    // FAQ
    faq: {
      badge: 'FAQ',
      title: 'Frequently Asked Questions',
    },
    // Contact
    contact: {
      badge: 'Contact',
      title: 'Get Your Free Quote Today',
      subtitle: "Fill out the form and we'll get back to you within 24 hours with a custom quote for your business.",
      form_name: 'Your Name',
      form_email: 'Email Address',
      form_phone: 'Phone Number',
      form_business: 'Business Name',
      form_service: 'Service Interested In',
      form_message: 'Tell us about your project',
      form_submit: 'Send Message',
      or: 'or',
      whatsapp_cta: 'Message us on WhatsApp',
    },
    // Footer
    footer: {
      tagline: 'Professional websites for Gulf businesses. Get more customers with a website that works.',
      quick_links: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    // Common
    common: {
      sar: 'SAR',
      days: 'days',
      from: 'From',
    },
  },
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      portfolio: 'أعمالنا',
      pricing: 'الأسعار',
      contact: 'اتصل بنا',
    },
    // Hero
    hero: {
      badge: 'مواقع احترافية للشركات الخليجية',
      title: 'احصل على المزيد من العملاء مع موقع يعمل',
      subtitle: 'نحن نبني مواقع سريعة ومتوافقة مع الجوال لمصفف الشعر والصالونات ومغاسل السيارات والمطاعم والشركات المحلية في جميع أنحاء منطقة الخليج.',
      cta: 'احصل على عرض سعر مجاني',
      cta_secondary: 'شاهد أعمالنا',
    },
    // Services
    services: {
      badge: 'خدماتنا',
      title: 'كل ما تحتاجه للنمو عبر الإنترنت',
      subtitle: 'من موقع ويب مذهل إلى الظهور على جوجل - نتولى كل شيء. شريك واحد، نمو رقمي كامل.',
      trust1: 'نهج يركز على النتائج',
      trust2: 'تصميم عالي الجودة',
      trust3: 'لا توجد رسوم مخفية',
      featured_badge: 'الأكثر شعبية',
      featured_title: 'تصميم وتطوير المواقع',
      featured_desc: 'الموقع الجميل هو فقط البداية. نبني مواقع تحول الزوار إلى عملاء، محسّنة لسوق الخليج، جاهزة للعربية والإنجليزية.',
      feature1: 'تصميم يبدأ من الجوال',
      feature2: 'تكامل واتساب',
      feature3: 'سرعة التحميل',
      feature4: 'محسّن لمحركات البحث',
      starting_price: 'سعر البداية',
      service1_title: 'تصميم وتطوير المواقع',
      service1_desc: 'مواقع حديثة ومتوافقة مع الجوال مصممة لتحويل الزوار إلى عملاء.',
      service1_result: 'متوسط 40% عملاء أكثر',
      service2_title: 'إعداد ملف جوجل التجاري',
      service2_desc: 'ملف جوجل التجاري محسّن بالكامل ليجدك العملاء على الخرائط.',
      service2_result: 'اظهر #1 محلياً',
      service3_title: 'تحسين محركات البحث المحلي',
      service3_desc: 'احتل مرتبة أعلى في مدينتك. نحسّن موقعك ليجدك العملاء القريبون.',
      service3_result: 'ظهور 3x أكثر',
      service4_title: 'صيانة المواقع',
      service4_desc: 'خطط رعاية شهرية للحفاظ على موقعك آمناً ومحدثاً وبسرعة قصوى.',
      service4_result: '99.9% وقت تشغيل مضمون',
      service5_title: 'إعداد روبوت الدردشة الذكي',
      service5_desc: 'روبوت دردشة ذكي يجيب على استفسارات العملاء 24/7 ويوجههم للواتساب.',
      service5_result: 'لا تفوت أي عميل محتمل',
      cta_not_sure: 'غير متأد من الخدمة المناسبة؟',
      cta_button: 'احصل على استشارة مجانية',
    },
    // Industries
    industries: {
      badge: 'من نساعد',
      title: 'مبني للشركات مثلك',
      subtitle: 'نحن نفهم سوق الخليج. سواء كنت حلاقاً في الرياض أو صالوناً في دبي أو مغسلة سيارات في جدة - نبني مواقع تجلب عملاء حقيقيين.',
      stat1_value: '+50',
      stat1_label: 'شركة ساعدناها',
      stat2_value: '6',
      stat2_label: 'دول خليجية',
      stat3_value: '3x',
      stat3_label: 'متوسط زيادة العملاء',
      industry1_name: 'مصففو الشعر',
      industry1_result: '3x مواعيد أكثر',
      industry2_name: 'الصالونات',
      industry2_result: '80% حجزات أكثر',
      industry3_name: 'مغاسل السيارات',
      industry3_result: '2x مكالمات أكثر',
      industry4_name: 'ورش السيارات',
      industry4_result: '+50 عميل/شهر',
      industry5_name: 'المطاعم',
      industry5_result: '40% حجزات أكثر',
      industry6_name: 'عيادات الأسنان',
      industry6_result: '+30 مريض جديد/شهر',
      industry7_name: 'النادي الرياضي',
      industry7_result: '2x تسجيلات أكثر',
      industry8_name: 'الشركات المحلية',
      industry8_result: 'يُكتشف أولاً',
      cta_title: 'لا ترى صناعتك؟',
      cta_subtitle: 'نعمل مع أي شركة محلية',
      cta_button: 'تحدث معنا',
    },
    // Portfolio
    portfolio: {
      badge: 'أعمالنا',
      title: 'نتائج حقيقية لشركات حقيقية',
      subtitle: 'شاهد المواقع التي بنيناها والنتائج التي حققناها للشركات الخليجية.',
    },
    // Process
    process: {
      badge: 'كيف نعمل',
      title: 'من الفكرة إلى موقع حي في أقل من أسبوع',
      subtitle: 'لا عمليات معقدة. لا اجتماعات لا نهاية لها. فقط 3 خطوات بسيطة.',
      step1_title: 'أخبرنا عن عملك',
      step1_desc: 'شارك رؤيتك في مكالمة مجانية مدتها 15 دقيقة. سنتعرف على أهدافك وسوقك.',
      step1_detail: 'استشارة مجانية',
      step2_title: 'نصمم ونبني موقعك',
      step2_desc: 'يعمل فريقنا فوراً. سترى معاينة التصميم خلال 48 ساعة. وافق عليه، ونبني الموقع الكامل في أيام.',
      step2_detail: 'تسليم سريع',
      step3_title: 'انطلق وانمُ',
      step3_desc: 'يُطلق موقعك ويبدأ العمل 24/7. المزيد من رسائل واتساب، المزيد من المكالمات.',
      step3_detail: 'دعم مدى الحياة',
      guarantee1: 'رضا مضمون',
      guarantee2: 'تسليم في الوقت',
      guarantee3: 'تواصل سريع',
      cta_title: 'مستعد للبدء؟',
      cta_subtitle: 'احجز استشارة مجانية مدتها 15 دقيقة. بدون التزام.',
      cta_button: 'احجز مكالمة مجانية',
      cta_whatsapp: 'راسلنا على واتساب',
    },
    // Pricing
    pricing: {
      badge: 'الأسعار',
      title: 'أسعار بسيطة وشفافة',
      subtitle: 'سعر واحد. لا رسوم مخفية. لا مفاجآت. أنت تملك كل ما نبنيه.',
      trust1: 'رضا مضمون',
      trust2: 'لا رسوم مخفية',
      trust3: 'تسليم سريع',
      plan1_name: 'المبتدئ',
      plan1_tagline: 'انطلق عبر الإنترنت بسرعة',
      plan1_desc: 'مثالي للشركات الجديدة الجاهزة لتأسيس حضورها الرقمي.',
      plan2_name: 'الأعمال',
      plan2_tagline: 'معظم الشركات تبدأ من هنا',
      plan2_desc: 'كل ما تحتاجه للتميز وجلب المزيد من العملاء.',
      plan2_badge: 'الأكثر شعبية',
      plan3_name: 'النمو',
      plan3_tagline: 'للنمو الجاد',
      plan3_desc: 'أقصى visibility و توليد عملاء للشركات الراسخة.',
      feature1: 'صفحات الموقع',
      feature2: 'متوافق مع الجوال',
      feature3: 'تكامل واتساب',
      feature4: 'نموذج الاتصال',
      feature5: 'وقت التسليم',
      feature6: 'ملف جوجل',
      feature7: 'تحسين محركات البحث',
      get_started: 'ابدأ الآن',
      custom_title: 'تحتاج شيء مخصص؟',
      custom_subtitle: 'دعنا نصنع حلاً مخصصاً لك',
      custom_button: 'احصل على عرض سعر مخصص',
    },
    // Why Choose Us
    why: {
      badge: 'لماذا GulfMarks',
      title: 'مبني للشركات الخليجية، لا لوادي السيليكون',
      subtitle: 'لسنا وكالة عالمية كبيرة. نحن فريق مركّز يفهم سوق الخليج والثقافة وما يجعل عملاءك يتصرفون.',
      trust_title: 'نجاحك هو أولويتنا',
      trust_subtitle: 'لا نبني مواقع فقط. نبني شراكات تنمي عملك.',
      adv1_title: 'تسليم سريع جداً',
      adv1_desc: 'احصل على موقعك حياً في أيام، لا أشهر. نتحرك بسرعة لأن كل يوم بدون موقع فرصة ضائعة.',
      adv2_title: 'أسعار صادقة وثابتة',
      adv2_desc: 'السعر الذي نقوله هو السعر الذي تدفعه. لا فواتير مفاجئة، لا رسوم مخفية.',
      adv3_title: 'تصميم مخصص وعالي الجودة',
      adv3_desc: 'كل موقع يُصمم من الصفر لعلامتك التجارية. بدون قوالب.',
      adv4_title: 'نهج يبدأ من الجوال',
      adv4_desc: 'معظم عملاءك على الجوال. نصمم للجوال أولاً ثم لسطح المكتب.',
      adv5_title: 'متخصصون في سوق الخليج',
      adv5_desc: 'نعرف السوق المحلي والثقافة وما يجعل عملاء الخليج يضغطون. هذا وطننا.',
      cta_title: 'شاهد فرق GulfMarks',
      cta_subtitle: 'احجز استشارة مجانية اليوم',
      cta_button: 'ابدأ الآن',
    },
    // Testimonials
    testimonials: {
      badge: 'آراء العملاء',
      title: 'ماذا يقول عملاؤنا',
    },
    // FAQ
    faq: {
      badge: 'الأسئلة الشائعة',
      title: 'الأسئلة المتكررة',
    },
    // Contact
    contact: {
      badge: 'اتصل بنا',
      title: 'احصل على عرض سعر مجاني اليوم',
      subtitle: 'املأ النموذج وسنرد عليك خلال 24 ساعة بعرض سعر مخصص لعملك.',
      form_name: 'اسمك',
      form_email: 'البريد الإلكتروني',
      form_phone: 'رقم الهاتف',
      form_business: 'اسم الشركة',
      form_service: 'الخدمة المطلوبة',
      form_message: 'أخبرنا عن مشروعك',
      form_submit: 'إرسال الرسالة',
      or: 'أو',
      whatsapp_cta: 'راسلنا على واتساب',
    },
    // Footer
    footer: {
      tagline: 'مواقع احترافية للشركات الخليجية. احصل على عملاء أكثر مع موقع يعمل.',
      quick_links: 'روابط سريعة',
      services: 'الخدمات',
      contact: 'اتصل بنا',
      rights: 'جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
    },
    // Common
    common: {
      sar: 'ريال',
      days: 'أيام',
      from: 'ابتداءً من',
    },
  },
  hi: {
    // Navigation
    nav: {
      home: 'होम',
      services: 'सेवाएं',
      portfolio: 'पोर्टफोलियो',
      pricing: 'मूल्य',
      contact: 'संपर्क करें',
    },
    // Hero
    hero: {
      badge: 'खाड़ी व्यवसायों के लिए प्रोफेशनल वेबसाइट',
      title: 'काम करने वाली वेबसाइट से ज्यादा ग्राहक पाएं',
      subtitle: 'हम खाड़ी क्षेत्र में बार्बर शॉप्स, सैलून, कार वॉश और स्थानीय व्यवसायों के लिए तेज़, मोबाइल-फ्रेंडली वेबसाइट बनाते हैं।',
      cta: 'मुफ्त कोट प्राप्त करें',
      cta_secondary: 'हमारा काम देखें',
    },
    // Services
    services: {
      badge: 'हमारी सेवाएं',
      title: 'ऑनलाइन बढ़ने के लिए सब कुछ',
      subtitle: 'एक शानदार वेबसाइट से लेकर Google पर मिलने तक - हम सब संभालते हैं। एक पार्टनर, पूर्ण डिजिटल ग्रोथ।',
      trust1: 'परिणाम-केंद्रित दृष्टिकोण',
      trust2: 'प्रीमियम गुणवत्ता डिजाइन',
      trust3: 'कोई छुपी फीस नहीं',
      featured_badge: 'सबसे लोकप्रिय',
      featured_title: 'वेबसाइट डिजाइन और विकास',
      featured_desc: 'सुंदर वेबसाइट सिर्फ शुरुआत है। हम ऐसी साइट बनाते हैं जो विज़िटर को ग्राहक में बदलती है, खाड़ी मार्केट के लिए ऑप्टिमाइज़्ड।',
      feature1: 'मोबाइल-फर्स्ट डिजाइन',
      feature2: 'WhatsApp इंटीग्रेशन',
      feature3: 'तेज़ लोडिंग',
      feature4: 'SEO ऑप्टिमाइज़्ड',
      starting_price: 'शुरुआती मूल्य',
      service1_title: 'वेबसाइट डिजाइन और विकास',
      service1_desc: 'आधुनिक, मोबाइल-फर्स्ट वेबसाइट जो विज़िटर को ग्राहक बनाती है।',
      service1_result: 'औसत 40% ज्यादा लीड्स',
      service2_title: 'Google Business प्रोफाइल सेटअप',
      service2_desc: 'पूरी तरह ऑप्टिमाइज़्ड Google Business प्रोफाइल ताकि ग्राहक आपको Maps पर ढूंढें।',
      service2_result: '#1 स्थान पर दिखें',
      service3_title: 'लोकल SEO',
      service3_desc: 'अपने शहर में ऊपर रैंक करें। हम आपकी साइट ऑप्टिमाइज़ करते हैं।',
      service3_result: '3x ज्यादा visibility',
      service4_title: 'वेबसाइट मेंटेनेंस',
      service4_desc: 'मासिक केयर प्लान आपकी साइट को सुरक्षित और तेज़ रखने के लिए।',
      service4_result: '99.9% अपटाइम गारंटी',
      service5_title: 'AI चैटबॉट सेटअप',
      service5_desc: 'इंटेलिजेंट चैटबॉट जो 24/7 ग्राहकों के सवालों का जवाब देता है।',
      service5_result: 'कोई लीड मिस मत करो',
      cta_not_sure: 'नहीं पता कौन सी सेवा सही है?',
      cta_button: 'मुफ्त कंसल्टेशन पाएं',
    },
    // Industries
    industries: {
      badge: 'किसे मदद करते हैं',
      title: 'आप जैसे व्यवसायों के लिए बनाया',
      subtitle: 'हम खाड़ी मार्केट समझते हैं। चाहे आप रियाद में बार्बर हों या दुबई में सैलून - हम वेबसाइट बनाते हैं जो असली ग्राहक लाती है।',
      stat1_value: '50+',
      stat1_label: 'व्यवसाय मदद किए',
      stat2_value: '6',
      stat2_label: 'खाड़ी देश',
      stat3_value: '3x',
      stat3_label: 'औसत लीड बढ़ोतरी',
      industry1_name: 'बार्बर शॉप्स',
      industry1_result: '3x ज्यादा अपॉइंटमेंट',
      industry2_name: 'सैलून',
      industry2_result: '80% ज्यादा बुकिंग',
      industry3_name: 'कार वॉश',
      industry3_result: '2x ज्यादा कॉल्स',
      industry4_name: 'ऑटो गैरेज',
      industry4_result: '+50 लीड्स/महीना',
      industry5_name: 'रेस्टोरेंट',
      industry5_result: '40% ज्यादा रिज़र्वेशन',
      industry6_name: 'डेंटल क्लीनिक',
      industry6_result: '+30 नए मरीज/महीना',
      industry7_name: 'जिम और फिटनेस',
      industry7_result: '2x ज्यादा साइनअप',
      industry8_name: 'लोकल व्यवसाय',
      industry8_result: 'पहले मिलें',
      cta_title: 'अपना व्यवसाय नहीं देखा?',
      cta_subtitle: 'हम किसी भी स्थानीय व्यवसाय के साथ काम करते हैं',
      cta_button: 'बात करते हैं',
    },
    // Portfolio
    portfolio: {
      badge: 'हमारा काम',
      title: 'असली व्यवसायों के लिए असली रिजल्ट',
      subtitle: 'हमारी बनाई वेबसाइट्स और खाड़ी व्यवसायों के लिए दिए गए रिजल्ट देखें।',
    },
    // Process
    process: {
      badge: 'कैसे काम करते हैं',
      title: 'आइडिया से लाइव वेबसाइट एक हफ्ते में',
      subtitle: 'कोई पेचीदा प्रोसेस नहीं। कोई लंबी मीटिंग नहीं। बस 3 आसान स्टेप्स।',
      step1_title: 'अपने व्यवसाय के बारे में बताएं',
      step1_desc: '15 मिनट की मुफ्त कॉल में अपना विज़न शेयर करें। हम आपके गोल्स समझेंगे।',
      step1_detail: 'मुफ्त कंसल्टेशन',
      step2_title: 'हम डिजाइन और बिल्ड करते हैं',
      step2_desc: 'हमारी टीम तुरंत काम शुरू करती है। 48 घंटे में डिजाइन प्रीव्यू देखें।',
      step2_detail: 'जल्दी डिलीवरी',
      step3_title: 'लाइव हों और बढ़ें',
      step3_desc: 'आपकी साइट लॉन्च हो जाती है और 24/7 काम करती है। ज्यादा WhatsApp मैसेज, ज्यादा कॉल्स।',
      step3_detail: 'लाइफटाइम सपोर्ट',
      guarantee1: 'संतुष्टि गारंटी',
      guarantee2: 'समय पर डिलीवरी',
      guarantee3: 'तेज़ कम्युनिकेशन',
      cta_title: 'शुरू करने को तैयार हैं?',
      cta_subtitle: '15 मिनट की मुफ्त कंसल्टेशन बुक करें। कोई कमिटमेंट नहीं।',
      cta_button: 'मुफ्त कॉल बुक करें',
      cta_whatsapp: 'WhatsApp पर मैसेज करें',
    },
    // Pricing
    pricing: {
      badge: 'मूल्य',
      title: 'सरल, पारदर्शी मूल्य',
      subtitle: 'एक कीमत। कोई छुपी फीस नहीं। कोई सरप्राइज नहीं। आप वो सब ओन करते हैं जो हम बनाते हैं।',
      trust1: 'संतुष्टि गारंटी',
      trust2: 'कोई छुपी फीस नहीं',
      trust3: 'तेज़ डिलीवरी',
      plan1_name: 'स्टार्टर',
      plan1_tagline: 'जल्दी ऑनलाइन हों',
      plan1_desc: 'नए व्यवसायों के लिए बिल्कुल सही।',
      plan2_name: 'बिज़नेस',
      plan2_tagline: 'ज्यादातर यहीं से शुरू करते हैं',
      plan2_desc: 'सब कुछ जो आपको चाहिए बढ़ने के लिए।',
      plan2_badge: 'सबसे लोकप्रिय',
      plan3_name: 'ग्रोथ',
      plan3_tagline: 'गंभीर विकास के लिए',
      plan3_desc: 'स्थापित व्यवसायों के लिए max visibility और लीड जनरेशन।',
      feature1: 'वेबसाइट पेजेस',
      feature2: 'मोबाइल रेस्पॉन्सिव',
      feature3: 'WhatsApp इंटीग्रेशन',
      feature4: 'कॉन्टैक्ट फॉर्म',
      feature5: 'डिलीवरी टाइम',
      feature6: 'Google बिज़नेस',
      feature7: 'लोकल SEO',
      get_started: 'शुरू करें',
      custom_title: 'कुछ कस्टम चाहिए?',
      custom_subtitle: 'आपके लिए टेलर्ड सॉल्यूशन बनाएं',
      custom_button: 'कस्टम कोट पाएं',
    },
    // Why Choose Us
    why: {
      badge: 'क्यों GulfMarks',
      title: 'खाड़ी व्यवसायों के लिए बनाया',
      subtitle: 'हम कोई बड़ी ग्लोबल एजेंसी नहीं हैं। हम एक फोकस्ड टीम हैं जो खाड़ी मार्केट समझती है।',
      trust_title: 'आपकी सफलता हमारी प्राथमिकता है',
      trust_subtitle: 'हम सिर्फ वेबसाइट नहीं बनाते। हम पार्टनरशिप बनाते हैं।',
      adv1_title: 'बहुत तेज़ डिलीवरी',
      adv1_desc: 'दिनों में साइट लाइव पाएं, महीनों में नहीं। हम तेज़ी से काम करते हैं।',
      adv2_title: 'ईमानदार, फिक्स्ड प्राइसिंग',
      adv2_desc: 'जो कहा वही कीमत। कोई सरप्राइज बिल नहीं।',
      adv3_title: 'प्रीमियम, कस्टम डिजाइन',
      adv3_desc: 'हर साइट आपके ब्रांड के लिए स्क्रैच से डिजाइन की जाती है।',
      adv4_title: 'मोबाइल-फर्स्ट अप्रोच',
      adv4_desc: 'आपके ज्यादातर ग्राहक मोबाइल पर हैं। हम पहले मोबाइल के लिए डिजाइन करते हैं।',
      adv5_title: 'खाड़ी मार्केट स्पेशलिस्ट',
      adv5_desc: 'हम लोकल मार्केट, कल्चर जानते हैं। यह हमारा घर है।',
      cta_title: 'GulfMarks का अंतर देखें',
      cta_subtitle: 'आज ही मुफ्त कंसल्टेशन बुक करें',
      cta_button: 'शुरू करें',
    },
    // Testimonials
    testimonials: {
      badge: 'ग्राहक राय',
      title: 'हमारे ग्राहक क्या कहते हैं',
    },
    // FAQ
    faq: {
      badge: 'FAQ',
      title: 'अक्सर पूछे जाने वाले प्रश्न',
    },
    // Contact
    contact: {
      badge: 'संपर्क',
      title: 'आज ही मुफ्त कोट पाएं',
      subtitle: 'फॉर्म भरें और हम 24 घंटे में आपको कस्टम कोट देंगे।',
      form_name: 'आपका नाम',
      form_email: 'ईमेल पता',
      form_phone: 'फोन नंबर',
      form_business: 'व्यवसाय का नाम',
      form_service: 'सेवा का चयन करें',
      form_message: 'अपने प्रोजेक्ट के बारे में बताएं',
      form_submit: 'मैसेज भेजें',
      or: 'या',
      whatsapp_cta: 'WhatsApp पर मैसेज करें',
    },
    // Footer
    footer: {
      tagline: 'खाड़ी व्यवसायों के लिए प्रोफेशनल वेबसाइट। काम करने वाली साइट से ज्यादा ग्राहक पाएं।',
      quick_links: 'क्विक लिंक्स',
      services: 'सेवाएं',
      contact: 'संपर्क करें',
      rights: 'सर्वाधिकार सुरक्षित।',
      privacy: 'प्राइवेसी पॉलिसी',
      terms: 'सेवा की शर्तें',
    },
    // Common
    common: {
      sar: 'SAR',
      days: 'दिन',
      from: 'से',
    },
  },
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['en', 'ar', 'hi'].includes(savedLang)) {
      setLanguage(savedLang);
    } else {
      // Check browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'ar') {
        setLanguage('ar');
      } else if (browserLang === 'hi') {
        setLanguage('hi');
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    // Update HTML attributes for RTL
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback to English
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = (value as Record<string, unknown>)[fallbackKey];
          } else {
            return key;
          }
        }
        break;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  // Update RTL on language change
  useEffect(() => {
    if (mounted) {
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const isRTL = language === 'ar';

  if (!mounted) {
    return null;
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isRTL }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

export const languageNames: Record<Language, string> = {
  en: 'English',
  ar: 'العربية',
  hi: 'हिंदी',
};

export const languageFlags: Record<Language, string> = {
  en: '🇬🇧',
  ar: '🇸🇦',
  hi: '🇮🇳',
};
