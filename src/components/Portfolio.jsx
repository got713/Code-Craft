import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function Portfolio({ lang }) {
  const [filter, setFilter] = useState('all');

  const categories = lang === 'ar' ? [
    { id: 'all', name: 'الكل' },
    { id: 'web', name: 'مواقع إلكترونية' },
    { id: 'mobile', name: 'تطبيقات هواتف' },
    { id: 'custom', name: 'برمجيات مخصصة' },
  ] : [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Websites' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'custom', name: 'Custom Software' },
  ];

  const content = {
    badge: lang === 'ar' ? 'سابقة أعمالنا' : 'Our Portfolio',
    title: lang === 'ar' ? 'مشاريع نفتخر ببنائها وتطويرها' : 'Projects We Are Proud to Have Developed',
    desc: lang === 'ar'
      ? 'نضع في هذا القسم عينة من الحلول الرقمية التي قمنا ببرمجتها وتصميمها بالكامل لمساعدة الشركات والمؤسسات على تحقيق أهدافها.'
      : 'A hand-picked selection of digital products we designed and engineered to solve problems and drive business growth.',
  };

  const projects = [
    {
      id: 1,
      title: 'Zenith SaaS Dashboard',
      titleAr: lang === 'ar' ? 'لوحة تحكم زينيث لإدارة الاشتراكات' : 'Subscription SaaS Platform',
      category: 'custom',
      desc: lang === 'ar'
        ? 'لوحة تحكم إدارية متكاملة للشركات والمنصات السحابية تتيح تتبع الأرباح وإدارة الاشتراكات وإصدار التقارير بشكل لحظي.'
        : 'An administrative business dashboard for cloud SaaS platforms to track revenue, subscriptions, and compile analytical reports in real-time.',
      tags: ['React', 'Tailwind v4', 'Node.js', 'PostgreSQL'],
      imageTheme: 'from-blue-600 to-indigo-900',
      mockupType: 'dashboard',
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      id: 2,
      title: 'Nova Food Delivery App',
      titleAr: lang === 'ar' ? 'تطبيق نوفا لتوصيل الطعام والطلبات' : 'GPS Mobile Delivery App',
      category: 'mobile',
      desc: lang === 'ar'
        ? 'تطبيق للهواتف الذكية مع ميزات التتبع الحي والخرائط المباشرة وتجربة طلب طعام سريعة ومرنة للعملاء والمندوبين.'
        : 'A complete mobile delivery app featuring live GPS tracking, automated routing, and user-friendly orders system.',
      tags: ['React Native', 'Firebase', 'Google Maps API'],
      imageTheme: 'from-purple-600 to-pink-900',
      mockupType: 'mobile',
      githubUrl: '#',
      demoUrl: null
    },
    {
      id: 3,
      title: 'Apex Headless E-Commerce',
      titleAr: lang === 'ar' ? 'متجر أبيكس الإلكتروني فائق السرعة' : 'Headless E-Commerce Engine',
      category: 'web',
      desc: lang === 'ar'
        ? 'منصة تجارة إلكترونية متطورة وسريعة جداً تعتمد على تقنيات الويب الحديثة لزيادة المبيعات وتحسين تجربة الشراء.'
        : 'A lightning-fast headless e-commerce store utilizing modern architecture to optimize sales conversion and client experience.',
      tags: ['Next.js', 'Stripe API', 'Tailwind CSS', 'GraphQL'],
      imageTheme: 'from-emerald-600 to-teal-900',
      mockupType: 'ecommerce',
      githubUrl: '#',
      demoUrl: '#'
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-dark-bg scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(170,59,255,0.05)_0,transparent_50%)]" />

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
                مشاريع نفتخر <span className="text-gradient">ببنائها وتطويرها</span>
              </>
            ) : (
              <>
                Projects We Are <span className="text-gradient">Proud to Have Developed</span>
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

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 scale-105'
                  : 'glass text-slate-400 hover:text-white hover:border-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group rounded-2xl glass overflow-hidden border-white/5 hover:border-white/10 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Mockup Area */}
                <div className={`h-52 bg-gradient-to-br ${project.imageTheme} relative overflow-hidden flex items-center justify-center p-6 border-b border-white/5`}>
                  {/* Dynamic Interactive SVG Mockup for professional display */}
                  {project.mockupType === 'dashboard' && (
                    <div className="w-full h-full bg-slate-950/80 rounded-t-lg border border-white/10 p-2 flex flex-col gap-2 transform translate-y-4 group-hover:translate-y-2 transition-transform duration-300 shadow-2xl">
                      <div className="flex items-center gap-1 border-b border-white/5 pb-1 text-[8px] text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className={`ml-2 font-mono ${lang === 'ar' ? 'mr-2 ml-0' : 'ml-2'}`}>zenith-dashboard.io</span>
                      </div>
                      <div className="flex-1 grid grid-cols-3 gap-2">
                        <div className="col-span-1 bg-white/5 rounded p-1 flex flex-col gap-1">
                          <div className="h-1 w-full bg-white/20 rounded" />
                          <div className="h-1 w-2/3 bg-white/10 rounded" />
                          <div className="h-1 w-1/2 bg-white/10 rounded" />
                        </div>
                        <div className="col-span-2 flex flex-col gap-2">
                          <div className="grid grid-cols-2 gap-1">
                            <div className="h-4 bg-primary/20 rounded p-1 flex flex-col justify-between">
                              <span className="text-[6px] text-primary font-bold">$18,250</span>
                            </div>
                            <div className="h-4 bg-secondary/20 rounded p-1 flex flex-col justify-between">
                              <span className="text-[6px] text-secondary font-bold">+62.4%</span>
                            </div>
                          </div>
                          <div className="flex-1 bg-white/5 rounded-t p-1 flex items-end gap-0.5 justify-between">
                            <div className="w-2 h-4 bg-primary/60 rounded-t" />
                            <div className="w-2 h-6 bg-secondary/60 rounded-t" />
                            <div className="w-2 h-3 bg-primary/60 rounded-t" />
                            <div className="w-2 h-7 bg-secondary/60 rounded-t" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.mockupType === 'mobile' && (
                    <div className="w-24 h-full bg-slate-950/80 rounded-t-2xl border-t border-x border-white/15 p-1.5 flex flex-col gap-1.5 transform translate-y-6 group-hover:translate-y-3 transition-transform duration-300 shadow-2xl">
                      <div className="w-8 h-2 bg-white/20 rounded-full mx-auto" />
                      <div className="flex-1 bg-white/5 rounded-t-xl p-1 flex flex-col justify-between">
                        <div className="flex justify-between items-center text-[6px]">
                          <span className="text-white/40 font-mono">12:00 PM</span>
                          <span className="text-secondary font-bold">GPS Active</span>
                        </div>
                        <div className="h-8 w-full bg-white/10 rounded my-1 flex items-center justify-center relative overflow-hidden">
                          {/* Map graphics */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20" />
                          <div className="h-1.5 w-1.5 bg-secondary rounded-full animate-ping" />
                          <div className="h-1.5 w-1.5 bg-secondary rounded-full" />
                        </div>
                        <div className="h-4 w-full bg-secondary/20 rounded p-0.5 flex items-center justify-center">
                          <span className="text-[6px] text-secondary font-bold">Track Order →</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.mockupType === 'ecommerce' && (
                    <div className="w-full h-full bg-slate-950/80 rounded-t-lg border border-white/10 p-2 flex flex-col gap-2 transform translate-y-4 group-hover:translate-y-2 transition-transform duration-300 shadow-2xl">
                      <div className="flex justify-between items-center border-b border-white/5 pb-1">
                        <span className="text-[7px] text-white font-bold font-heading">APEX SHOP</span>
                        <div className="flex gap-1">
                          <span className="h-1.5 w-3 bg-white/10 rounded-full" />
                          <span className="h-1.5 w-3 bg-white/10 rounded-full" />
                        </div>
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-2">
                        <div className="bg-white/5 rounded p-1 flex flex-col justify-between">
                          <div className="aspect-square w-full bg-gradient-to-tr from-emerald-500/30 to-teal-500/30 rounded" />
                          <div className="h-1 w-full bg-white/20 rounded mt-1" />
                          <div className="h-1.5 w-1/3 bg-emerald-400 rounded mt-0.5" />
                        </div>
                        <div className="bg-white/5 rounded p-1 flex flex-col justify-between">
                          <div className="aspect-square w-full bg-gradient-to-tr from-emerald-500/30 to-teal-500/30 rounded" />
                          <div className="h-1 w-full bg-white/20 rounded mt-1" />
                          <div className="h-1.5 w-1/3 bg-emerald-400 rounded mt-0.5" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hover Double-Action Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {/* GitHub Link */}
                    <a
                      href={project.githubUrl}
                      className="h-11 w-11 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-all duration-300 cursor-pointer"
                      title={lang === 'ar' ? 'مستودع الكود (تجريبي)' : 'GitHub Repository (Demo)'}
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>

                    {/* Live Demo Link (only if exists) */}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="h-11 w-11 bg-primary/20 hover:bg-primary/30 backdrop-blur-md border border-primary/30 rounded-full flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-all duration-300 cursor-pointer"
                        title={lang === 'ar' ? 'المعاينة المباشرة (تجريبي)' : 'Live Demo (Demo)'}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Details Area */}
                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-wider text-primary uppercase">
                    {project.category === 'web' && (lang === 'ar' ? 'تطوير مواقع' : 'Website Development')}
                    {project.category === 'mobile' && (lang === 'ar' ? 'تطبيقات موبايل' : 'Mobile App Development')}
                    {project.category === 'custom' && (lang === 'ar' ? 'أنظمة مخصصة' : 'Custom Software')}
                  </span>

                  <h3 className="text-lg font-bold text-white mt-1 group-hover:text-primary transition-colors duration-300 font-heading">
                    {project.title}
                  </h3>
                  <h4 className={`text-xs font-semibold text-slate-400 my-2 font-heading ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {project.titleAr}
                  </h4>

                  <p className={`text-slate-400 text-xs leading-relaxed mt-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {project.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-semibold bg-white/5 text-slate-300 border border-white/5 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
