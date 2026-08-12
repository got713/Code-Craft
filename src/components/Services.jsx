import React from 'react';
import { motion } from 'motion/react';
import { Globe, Smartphone, Laptop, Palette } from 'lucide-react';

export default function Services({ lang }) {
  const content = {
    badge: lang === 'ar' ? 'ماذا نقدم لعملائنا' : 'What We Offer',
    title: lang === 'ar' ? 'خدماتنا الرقمية المتكاملة' : 'Our Comprehensive Digital Services',
    desc: lang === 'ar'
      ? 'نغطي كافة احتياجات مشروعك بدءاً من الفكرة والتصميم ووصولاً للتطوير والبرمجة والنشر على السيرفرات بأفضل المعايير البرمجية.'
      : 'We cover all your project needs from ideation and design to development, programming, and cloud deployment with the highest standards.',
  };

  const services = [
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: 'Website Development',
      titleAr: lang === 'ar' ? 'تطوير المواقع الإلكترونية' : 'Web Applications',
      desc: lang === 'ar'
        ? 'بناء مواقع ويب سريعة، متجاوبة، ومتوافقة مع محركات البحث (SEO-friendly) باستخدام أحدث التقنيات مثل React و Next.js و Vite.'
        : 'Building fast, responsive, and SEO-friendly websites using modern frameworks like React, Next.js, and Vite.',
      gradient: 'from-primary/20 to-primary/5',
      glow: 'group-hover:shadow-primary/20',
    },
    {
      icon: <Smartphone className="w-10 h-10 text-secondary" />,
      title: 'Mobile App Development',
      titleAr: lang === 'ar' ? 'تطوير تطبيقات الهواتف' : 'Mobile Apps',
      desc: lang === 'ar'
        ? 'تصميم وبرمجة تطبيقات هواتف ذكية (iOS & Android) تتميز بالأداء السلس والسرعة والواجهات التفاعلية الرائعة.'
        : 'Designing and developing cross-platform mobile apps (iOS & Android) with smooth performance and interactive interfaces.',
      gradient: 'from-secondary/20 to-secondary/5',
      glow: 'group-hover:shadow-secondary/20',
    },
    {
      icon: <Laptop className="w-10 h-10 text-accent-purple" />,
      title: 'Custom Software',
      titleAr: lang === 'ar' ? 'برمجيات وأنظمة مخصصة' : 'Enterprise Solutions',
      desc: lang === 'ar'
        ? 'تطوير أنظمة إدارية، لوحات تحكم (Dashboards)، وبرمجيات مخصصة تناسب سير العمل في شركتك وتزيد من كفاءته.'
        : 'Developing custom administrative systems, dashboards, and enterprise software tailored to optimize your workflow.',
      gradient: 'from-accent-purple/20 to-accent-purple/5',
      glow: 'group-hover:shadow-accent-purple/20',
    },
    {
      icon: <Palette className="w-10 h-10 text-rose-400" />,
      title: 'UI/UX Design',
      titleAr: lang === 'ar' ? 'تصميم تجربة المستخدم' : 'UI/UX Design',
      desc: lang === 'ar'
        ? 'تصميم واجهات وتجارب مستخدم (UI/UX) مبتكرة وجذابة تجمع بين سهولة الاستخدام والمظهر الاحترافي لضمان تفاعل العملاء.'
        : 'Designing modern, intuitive user interfaces and user experiences (UI/UX) that maximize conversion and brand value.',
      gradient: 'from-rose-500/20 to-rose-500/5',
      glow: 'group-hover:shadow-rose-500/20',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-dark-bg scroll-mt-20">
      {/* Background Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,198,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
                خدماتنا <span className="text-gradient">الرقمية المتكاملة</span>
              </>
            ) : (
              <>
                Our Comprehensive <span className="text-gradient">Digital Services</span>
              </>
            )}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base"
          >
            {content.desc}
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group relative rounded-2xl glass p-8 md:p-10 flex flex-col justify-between transition-all duration-300 border-white/5 hover:border-white/10 hover:shadow-2xl ${service.glow}`}
            >
              {/* Subtle inner hover glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              <div>
                {/* Icon wrapper */}
                <div className="w-16 h-16 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/20 transition-all duration-300">
                  {service.icon}
                </div>

                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-bold text-white font-heading">
                    {service.title}
                  </h3>
                  <span className="text-sm font-semibold text-slate-500 font-heading">
                    0{index + 1}
                  </span>
                </div>
                <h4 className={`text-base font-semibold text-primary/90 mb-4 font-heading ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {service.titleAr}
                </h4>

                <p className={`text-slate-400 text-sm leading-relaxed ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {service.desc}
                </p>
              </div>

              {/* Decorative line */}
              <div className={`mt-8 pt-4 border-t border-white/5 flex ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}>
                <span className="text-xs font-bold text-primary group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-1.5 cursor-pointer">
                  {lang === 'ar' ? 'ابدأ الآن ←' : 'Get Started →'}
                </span>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
