import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Sparkles, Layers } from 'lucide-react';

export default function WhyUs({ lang }) {
  const content = {
    badge: lang === 'ar' ? 'لماذا نحن شريكك المثالي؟' : 'Why Us?',
    title: lang === 'ar' ? 'لماذا تختار CodeCraft لتطوير مشروعك؟' : 'Why Choose CodeCraft for Your Next Project?',
    desc: lang === 'ar'
      ? 'في عالم التكنولوجيا المتسارع، تحتاج إلى شريك يملك الخبرة والشغف لبناء منتج يعبر عن جودة عملك. نحن نركز على تسليم مشاريع فائقة الجودة تدعم نمو عملك وتكسبك ثقة زوارك ومستثمريك.'
      : 'In a fast-evolving tech world, you need a partner with the expertise and passion to build software that reflects your business quality. We focus on delivering high-performance products that earn client trust.',
    stat1Title: lang === 'ar' ? 'مخصص بدون قوالب' : 'Custom Built',
    stat2Title: lang === 'ar' ? 'دعم فني ومتابعة' : 'Support & Follow-up',
  };

  const points = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Modern Technology',
      titleAr: lang === 'ar' ? 'أحدث التقنيات البرمجية' : 'Modern Technologies',
      desc: lang === 'ar'
        ? 'نستخدم أفضل وأسرع أطر العمل والمكتبات البرمجية الحديثة مثل React وTailwind CSS لضمان حصولك على موقع سريع وآمن.'
        : 'We utilize top-tier, lightweight modern frameworks like React and Tailwind CSS to guarantee speed, security, and stability.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: 'Custom Solutions',
      titleAr: lang === 'ar' ? 'حلول مخصصة وفريدة' : 'Custom Solutions',
      desc: lang === 'ar'
        ? 'لا نعتمد على القوالب الجاهزة المكررة؛ بل نقوم ببناء وتصميم كل جزء خصيصاً ليناسب احتياجات وهوية عملك الفريدة.'
        : 'No recycled templates. We design and develop every element from scratch to align perfectly with your unique brand identity.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      title: 'Responsive Design',
      titleAr: lang === 'ar' ? 'تصميم متوافق مع كافة الشاشات' : 'Responsive Layouts',
      desc: lang === 'ar'
        ? 'نهتم بأدق التفاصيل في التصميم ليعمل الموقع بأعلى كفاءة ومظهر جذاب على الهواتف والأجهزة اللوحية والحواسيب.'
        : 'We pay attention to every detail to ensure seamless performance and attractive display on mobile, tablet, and desktop.',
    },
    {
      icon: <Layers className="w-8 h-8 text-secondary" />,
      title: 'Scalable Architecture',
      titleAr: lang === 'ar' ? 'هيكلية قابلة للتطوير والتوسع' : 'Scalable Architecture',
      desc: lang === 'ar'
        ? 'نكتب أكواد برمجية نظيفة ومنظمة تسهل تطوير الموقع وإضافة ميزات جديدة مستقبلاً مع نمو حجم أعمالك وسرعة تدفق عملائك.'
        : 'We write clean, modular code making it extremely easy to extend features and support massive traffic as your business grows.',
    },
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-black/40 scroll-mt-20">
      {/* Background Gradients */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-[radial-gradient(circle,rgba(170,59,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-[radial-gradient(circle,rgba(0,198,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text/Content Column */}
          <div className={`lg:col-span-5 text-center ${lang === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}>
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
              className="text-3xl md:text-4xl font-extrabold text-white leading-tight font-heading"
            >
              {lang === 'ar' ? (
                <>
                  لماذا تختار <span className="text-gradient">CodeCraft</span> لتطوير مشروعك؟
                </>
              ) : (
                <>
                  Why Choose <span className="text-gradient">CodeCraft</span> for Your Next Project?
                </>
              )}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-slate-400 text-sm leading-relaxed"
            >
              {content.desc}
            </motion.p>

            {/* Interactive Stats counter */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 grid grid-cols-2 gap-4 text-center glass p-6 rounded-2xl border-white/5"
            >
              <div>
                <div className="text-3xl font-extrabold text-white font-heading">
                  <span className="text-gradient font-black">100%</span>
                </div>
                <div className="text-xs text-slate-500 mt-1 font-heading">{content.stat1Title}</div>
              </div>
              <div className={`border-white/5 ${lang === 'ar' ? 'border-r' : 'border-l'}`}>
                <div className="text-3xl font-extrabold text-white font-heading">
                  <span className="text-gradient font-black">24/7</span>
                </div>
                <div className="text-xs text-slate-500 mt-1 font-heading">{content.stat2Title}</div>
              </div>
            </motion.div>
          </div>

          {/* Cards Grid Column */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass glass-hover p-6 md:p-8 rounded-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center mb-6">
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1 font-heading">
                  {point.title}
                </h3>
                <h4 className={`text-xs font-semibold text-primary/80 mb-3 font-heading ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {point.titleAr}
                </h4>
                <p className={`text-slate-400 text-xs leading-relaxed ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
