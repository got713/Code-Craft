import React from 'react';
import { motion } from 'motion/react';

export default function TechStack({ lang }) {
  const content = {
    badge: lang === 'ar' ? 'البيئة البرمجية والأدوات' : 'Our Tech Stack',
    title: lang === 'ar' ? 'التقنيات التي نستخدمها' : "We're masters of",
    desc: lang === 'ar'
      ? 'هذه هي اللغات والأدوات وأنظمة إدارة قواعد البيانات التي نعتمد عليها لبناء منتجات رقمية سريعة، آمنة، وقابلة للتوسع.'
      : 'These are the programming languages, frameworks, and databases we use to build fast, secure, and scalable digital products.',
  };

  const techs = [
    {
      name: 'React',
      category: lang === 'ar' ? 'واجهات مستخدم' : 'Frontend Library',
      color: 'hover:shadow-cyan-500/20 hover:border-cyan-500/30',
      icon: (
        <svg className="w-12 h-12 text-[#00d8ff] animate-[spin_20s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    },
    {
      name: 'Next.js',
      category: lang === 'ar' ? 'إطار عمل ويب' : 'React Framework',
      color: 'hover:shadow-white/10 hover:border-white/20',
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.657 18.665l-7.078-9.165v7.653h-1.503v-10.74h1.503l6.985 9.072v-9.072h1.503v10.74h-1.41v1.512z"/>
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      category: lang === 'ar' ? 'تصميم وتنسيق' : 'CSS Framework',
      color: 'hover:shadow-sky-400/20 hover:border-sky-400/30',
      icon: (
        <svg className="w-12 h-12 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 5.999 12z"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      category: lang === 'ar' ? 'لغة برمجة' : 'Language',
      color: 'hover:shadow-yellow-500/20 hover:border-yellow-500/30',
      icon: (
        <svg className="w-12 h-12 text-[#f7df1e]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm20.047 19.349c-1.302 0-2.052-.774-2.586-1.748l1.372-.821c.365.654.733.993 1.247.993.52 0 .867-.258.867-.801v-6.99h1.583v7.02c0 1.638-1.011 2.347-2.483 2.347zm-5.918-.184c-1.638 0-2.735-.867-3.328-1.996l1.334-.784c.458.742.928 1.224 1.932 1.224.78 0 1.224-.371 1.224-.928 0-.63-.483-.854-1.609-1.349l-.545-.235c-1.559-.668-2.525-1.503-2.525-3.149 0-1.744 1.411-2.908 3.167-2.908 1.547 0 2.507.742 3.033 1.769l-1.25.792c-.371-.594-.78-.928-1.695-.928-.705 0-1.126.384-1.126.854 0 .582.384.792 1.435 1.237l.545.235c1.782.767 2.735 1.584 2.735 3.328-.013 2.016-1.547 2.928-3.373 2.928z"/>
        </svg>
      )
    },
    {
      name: 'TypeScript',
      category: lang === 'ar' ? 'لغة برمجة متقدمة' : 'Static Language',
      color: 'hover:shadow-blue-500/20 hover:border-blue-500/30',
      icon: (
        <svg className="w-12 h-12 text-[#3178c6]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm17.935 19.33c-1.238 0-2.146-.66-2.696-1.666l1.371-.823c.365.611.758.971 1.348.971.603 0 .942-.31.942-.741 0-.517-.4-.73-.974-.984l-.544-.241c-1.554-.683-2.464-1.493-2.464-3.125 0-1.724 1.38-2.855 3.12-2.855 1.488 0 2.39.638 2.915 1.688l-1.235.807c-.372-.61-.758-.921-1.517-.921-.611 0-.962.33-.962.77 0 .487.35.688 1.09.997l.544.231c1.762.75 2.656 1.536 2.656 3.23 0 1.954-1.495 2.939-3.415 2.939zm-9.336-.184v-7.147H5.972V10.84h6.052v1.159H9.421v7.147H8.599z"/>
        </svg>
      )
    },
    {
      name: 'Node.js',
      category: lang === 'ar' ? 'بيئة تشغيل سيرفر' : 'Server Runtime',
      color: 'hover:shadow-green-500/20 hover:border-green-500/30',
      icon: (
        <svg className="w-12 h-12 text-[#68a063]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L2.83 5.3v10.61L12 21.21l9.17-5.3V5.3zm.57 14.17c-.31.11-.64.16-.97.16-.62 0-1.12-.22-1.48-.65-.26-.31-.4-.73-.4-1.23V7.27h1.49v5.04c0 .24.06.43.19.57.13.14.3.21.53.21.12 0 .25-.03.37-.09zm5.26-.06l-1.18 1.18c-.46-.46-.86-.8-1.21-1.02-.35-.22-.72-.33-1.11-.33-.51 0-.91.17-1.2.52-.29.35-.43.83-.43 1.45 0 .6.14 1.07.43 1.42.29.35.69.52 1.2.52.39 0 .76-.11 1.11-.33.35-.22.75-.56 1.21-1.02l1.18 1.18c-.71.71-1.4 1.22-2.07 1.53-.67.31-1.43.46-2.28.46-1.06 0-1.92-.34-2.58-1.02-.66-.68-.99-1.57-.99-2.67 0-1.11.33-2 .99-2.68.66-.68 1.52-1.02 2.58-1.02.85 0 1.61.15 2.28.46.67.31 1.36.82 2.07 1.53zm-11-.69c0-.6.14-1.07.43-1.42.29-.35.69-.52 1.2-.52.39 0 .76.11 1.11.33.35.22.75.56 1.21 1.02l1.18-1.18c-.71-.71-1.4-1.22-2.07-1.53-.67-.31-1.43-.46-2.28-.46-1.06 0-1.92.34-2.58 1.02-.66.68-.99 1.57-.99 2.67 0 1.11.33 2 .99 2.68.66.68 1.52 1.02 2.58 1.02.85 0 1.61-.15 2.28-.46.67-.31 1.36-.82 2.07-1.53l-1.18-1.18c-.46.46-.86.8-1.21 1.02-.35.22-.72.33-.11.33z"/>
        </svg>
      )
    },
    {
      name: 'PHP',
      category: lang === 'ar' ? 'لغة سيرفر' : 'Backend Language',
      color: 'hover:shadow-indigo-500/20 hover:border-indigo-500/30',
      icon: (
        <svg className="w-12 h-12 text-[#777bb4]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.075 16.59c-.407.03-.787-.045-1.14-.225a1.86 1.86 0 0 1-.765-.675c-.2-.315-.33-.675-.39-1.08l-.75-4.83a2.15 2.15 0 0 1-.03-.315 1.05 1.05 0 0 1 .15-.6 1.23 1.23 0 0 1 .495-.465 2.13 2.13 0 0 1 .915-.225c.345 0 .66.045.945.135s.51.21.675.36c.165.15.285.315.36.495s.12.39.135.63a12.87 12.87 0 0 1-.045 1.23l-.705 4.83a2.02 2.02 0 0 1-.165.735 1.48 1.48 0 0 1-.465.525 1.86 1.86 0 0 1-.63.225zM7.5 13.92c-.165.345-.39.63-.675.855S6.225 15 5.85 15c-.48 0-.84-.165-1.08-.495S4.395 13.62 4.38 12.87v-.15c0-.66.165-1.23.495-1.71S5.64 10.2 6.27 10.2c.48 0 .84.165 1.08.495s.375.885.39 1.635v.15c0 .645-.165 1.125-.495 1.44zm11.13 0c-.165.345-.39.63-.675.855s-.6.225-.975.225c-.48 0-.84-.165-1.08-.495s-.375-.885-.39-1.635v-.15c0-.66.165-1.23.495-1.71s.765-.72 1.395-.72c.48 0 .84.165 1.08.495s.375.885.39 1.635v.15c0 .645-.165 1.125-.495 1.44z"/>
        </svg>
      )
    },
    {
      name: 'Laravel',
      category: lang === 'ar' ? 'إطار عمل خلفية' : 'PHP Framework',
      color: 'hover:shadow-red-500/20 hover:border-red-500/30',
      icon: (
        <svg className="w-12 h-12 text-[#ff2d20]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.02 17.653c0 .878-.456 1.688-1.201 2.128l-7.618 4c-.752.44-1.677.44-2.428 0l-7.618-4c-.746-.44-1.201-1.25-1.201-2.128V8.347c0-.878.456-1.688 1.201-2.128l7.618-4c.752-.44 1.677-.44 2.428 0l7.618 4c.746.44 1.201 1.25 1.201 2.128v9.306zM12 2.235L3.633 6.634 12 11.034l8.367-4.4L12 2.235zM3.197 8.35v8.52l8.028 4.22V12.57L3.197 8.35zm17.606 8.52V8.35l-8.028 4.22v8.52l8.028-4.22z"/>
        </svg>
      )
    },
    {
      name: 'MySQL',
      category: lang === 'ar' ? 'قواعد بيانات' : 'SQL Database',
      color: 'hover:shadow-cyan-600/20 hover:border-cyan-600/30',
      icon: (
        <svg className="w-12 h-12 text-[#00758f]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.327 15.65c-.076-.118-.16-.23-.255-.332-.236-.254-.515-.47-.83-.64-.537-.285-1.157-.42-1.848-.42s-1.311.135-1.848.42c-.315.17-.594.386-.83.64-.095.102-.18.214-.255.332-.36-.454-.576-1.018-.576-1.637 0-1.442 1.154-2.618 2.576-2.618.663 0 1.267.254 1.728.667-.323.08-.62.222-.877.417-.384.29-.696.67-.912 1.118-.184.383-.284.814-.284 1.272.001.378.07.74.201 1.077-.38.077-.775.116-1.176.116-.836 0-1.63-.162-2.316-.462.637-.623 1.5-.998 2.45-.998.675 0 1.306.187 1.848.513.313.19.59.43.83.71.096.11.18.232.256.36.082-.128.167-.25.263-.36.24-.28.517-.52.83-.71.542-.326 1.173-.513 1.848-.513.95 0 1.813.375 2.45.998-.686.3-1.48.462-2.316.462-.4 0-.796-.039-1.176-.116.131-.337.2-.699.201-1.077 0-.458-.1-.889-.284-1.272-.216-.448-.528-.828-.912-1.118-.257-.195-.554-.337-.877-.417.461-.413 1.065-.667 1.728-.667 1.422 0 2.576 1.176 2.576 2.618 0 .619-.216 1.183-.576 1.637z"/>
        </svg>
      )
    },
    {
      name: 'Python',
      category: lang === 'ar' ? 'لغة برمجة عامة' : 'General Language',
      color: 'hover:shadow-blue-400/20 hover:border-blue-400/30',
      icon: (
        <svg className="w-12 h-12 text-[#3776ab]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.97 0c-1.66 0-3.11.12-4.14.3-.96.18-1.78.49-2.38.93-.65.48-1.07 1.18-1.23 2.05-.18.98-.18 2.09-.18 3.52v.72h8.04V6.78c0-.77-.63-1.39-1.4-1.39H7.66c-.39 0-.71-.32-.71-.71 0-.6.49-1.09 1.1-1.09h3.92c.6 0 1.09.49 1.09 1.09v.63h1.41V2.62c0-.52-.16-.98-.44-1.34C13.43.34 12.82 0 11.97 0zm4.12 4.19v2.53H8.05v.72h8.04v.74c0 .77-.63 1.39-1.4 1.39H10.8c-.39 0-.71.32-.71.71 0 .6.49 1.09 1.1 1.09h3.92c.6 0 1.09.49 1.09 1.09v.63h1.41v-3.8c0-.52-.16-.98-.44-1.34-.6-.94-1.21-1.28-2.06-1.28zM11.97 24c1.66 0 3.11-.12 4.14-.3.96-.18 1.78-.49 2.38-.93.65-.48 1.07-1.18 1.23-2.05.18-.98.18-2.09.18-3.52v-.72H11.86v.74c0 .77.63 1.39 1.4 1.39h3.02c.39 0 .71.32.71.71 0 .6-.49 1.09-1.1 1.09h-3.92c-.6 0-1.09-.49-1.09-1.09v-.63h-1.41v2.71c0 .52.16.98.44 1.34.6.94 1.21 1.28 2.06 1.28z"/>
        </svg>
      )
    },
    {
      name: 'Flutter',
      category: lang === 'ar' ? 'تطبيقات هواتف' : 'Cross-Platform SDK',
      color: 'hover:shadow-sky-400/20 hover:border-sky-400/30',
      icon: (
        <svg className="w-12 h-12 text-[#40c4ff]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.314 0L2.3 12 6 15.7 21.686 0H14.314zm2.149 14.314L12.75 18 16.463 21.686 24 14.314h-7.537z"/>
        </svg>
      )
    },
    {
      name: 'Dart',
      category: lang === 'ar' ? 'لغة برمجة موبايل' : 'Mobile Language',
      color: 'hover:shadow-teal-400/20 hover:border-teal-400/30',
      icon: (
        <svg className="w-12 h-12 text-[#00a3e0]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.02 0l-3.23 3.24L17.2 11.66l-10.4 10.4 3.24 3.24c3.48-1.55 6.96-3.1 10.44-4.66L24 12.02zm-3.24 9.42L3.24 3.88 0 7.12l5.54 5.54-5.54 5.54 3.24 3.24 8.78-8.78z"/>
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden bg-black/25 scroll-mt-20 border-t border-white/5">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(170,59,255,0.03)_0%,transparent_70%)] pointer-events-none" />

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
                التقنيات التي <span className="text-gradient">نتقنها ونستخدمها</span>
              </>
            ) : (
              <>
                We're <span className="text-gradient">masters of</span>
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

        {/* Tech Logos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`glass p-6 rounded-2xl flex flex-col items-center justify-center text-center border-white/5 transition-all duration-300 ${tech.color}`}
            >
              {/* Logo SVG */}
              <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-white font-heading">
                {tech.name}
              </h3>

              {/* Category */}
              <span className="text-[10px] text-slate-500 font-semibold mt-1 uppercase tracking-wider font-heading">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
