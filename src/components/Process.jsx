import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Compass, LayoutTemplate, CodeXml, ShieldAlert, Rocket } from 'lucide-react';

export default function Process({ lang }) {
  const content = {
    badge: lang === 'ar' ? 'خطوات البناء والتنفيذ' : 'Our Process',
    title: lang === 'ar' ? 'كيف نعمل في CodeCraft؟' : 'How We Work at CodeCraft',
    desc: lang === 'ar'
      ? 'نتبع منهجية منظمة ورشيقة لضمان تسليم مشروعك في الوقت المحدد وبأعلى معايير الدقة والاحترافية.'
      : 'We follow a streamlined, agile workflow to deliver your project on time with premium quality.',
  };

  const steps = [
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
      title: 'Idea',
      titleAr: lang === 'ar' ? 'الفكرة والمناقشة' : 'Ideation & Discovery',
      desc: lang === 'ar'
        ? 'نجلس معاً لدراسة فكرتك وتحديد أهداف المشروع والجمهور المستهدف بدقة.'
        : 'We sit down to understand your business objectives and define target audience details.',
    },
    {
      icon: <Compass className="w-6 h-6 text-primary" />,
      title: 'Planning',
      titleAr: lang === 'ar' ? 'التخطيط والدراسة' : 'Planning & Scope',
      desc: lang === 'ar'
        ? 'رسم هيكلية البرمجيات وتحديد التقنيات وقنوات العمل وجدول تسليم المشروع.'
        : 'Architecting system structures, choosing tech stack, and finalizing timelines.',
    },
    {
      icon: <LayoutTemplate className="w-6 h-6 text-secondary" />,
      title: 'UI/UX',
      titleAr: lang === 'ar' ? 'تصميم الواجهات' : 'UI/UX Design',
      desc: lang === 'ar'
        ? 'بناء النماذج التفاعلية (Wireframes) وتصميم الواجهات لتجربتها قبل الكود.'
        : 'Crafting modern, high-fidelity layouts in Figma for feedback before code.',
    },
    {
      icon: <CodeXml className="w-6 h-6 text-accent-purple" />,
      title: 'Development',
      titleAr: lang === 'ar' ? 'البرمجة والتطوير' : 'Core Coding',
      desc: lang === 'ar'
        ? 'تحويل التصاميم إلى أكواد برمجية حقيقية وتطوير واجهات برمجة التطبيقات (APIs).'
        : 'Coding frontend structures and setting up robust backend databases & APIs.',
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-rose-400" />,
      title: 'Testing',
      titleAr: lang === 'ar' ? 'الفحص والجودة' : 'Quality Assurance',
      desc: lang === 'ar'
        ? 'إجراء الفحوصات اللازمة لضمان خلو النظام من المشاكل وأمانه وسرعته.'
        : 'Testing all components to ensure the system is secure, fast, and bug-free.',
    },
    {
      icon: <Rocket className="w-6 h-6 text-emerald-400" />,
      title: 'Launch',
      titleAr: lang === 'ar' ? 'النشر والإطلاق' : 'Cloud Launch',
      desc: lang === 'ar'
        ? 'رفع المشروع على السيرفرات السحابية وتسليمه مع تقديم الدعم المستمر.'
        : 'Deploying services on secure cloud providers and handing over final products.',
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-black/30 scroll-mt-20">
      {/* Visual background line */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,198,255,0.03)_0,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-wider text-primary mb-3"
          >
            {content.badge}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white font-heading"
          >
            {lang === 'ar' ? (
              <>
                كيف نعمل في <span className="text-gradient">CodeCraft</span>؟
              </>
            ) : (
              <>
                How We Work at <span className="text-gradient">CodeCraft</span>
              </>
            )}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-sm leading-relaxed"
          >
            {content.desc}
          </motion.p>
        </div>

        {/* Timeline Path Grid */}
        <div className="relative">
          {/* Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-[44px] left-10 right-10 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent-purple opacity-20 -z-10" />

          <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div className="w-20 h-20 rounded-full glass border border-white/10 flex items-center justify-center relative mb-6 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                  <div className="absolute inset-1.5 rounded-full bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="relative z-10">{step.icon}</div>
                  
                  {/* Floating Step Number */}
                  <span className={`absolute -top-1 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary text-[10px] font-black text-white flex items-center justify-center border border-dark-bg ${lang === 'ar' ? '-left-1' : '-right-1'}`}>
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary transition-colors font-heading">
                  {step.title}
                </h3>
                <h4 className="text-xs font-semibold text-slate-400 mb-3 font-heading">
                  {step.titleAr}
                </h4>
                <p className="text-slate-400 text-[11px] leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
