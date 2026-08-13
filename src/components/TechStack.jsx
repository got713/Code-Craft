import React from 'react';
import { motion } from 'motion/react';

export default function TechStack({ lang }) {
  const content = {
    badge: lang === 'ar' ? 'التقنيات والأدوات' : 'Our Tech Stack',
    title: lang === 'ar' ? 'التقنيات التي نتقنها' : "We're masters of",
    desc: lang === 'ar'
      ? 'نعتمد على بيئة عمل حديثة وحزمة تقنيات قوية تضمن سرعة الأداء، الحماية، وقابلية التوسع.'
      : 'We build with a modern, high-performance tech stack ensuring scalability, speed, and clean code.',
  };

  const techs = [
    {
      name: 'React',
      category: lang === 'ar' ? 'واجهات مستخدم' : 'Frontend',
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
      name: 'Javascript',
      category: lang === 'ar' ? 'لغة برمجة' : 'Language',
      color: 'hover:shadow-yellow-500/20 hover:border-yellow-500/30',
      icon: (
        <svg className="w-12 h-12 text-[#f7df1e]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.268c-.153-.787-.788-1.423-1.63-1.785-.845-.363-2.019-.59-3.522-.59-1.503 0-2.617.227-3.411.59-.794.362-1.314.998-1.371 1.785-.057.787.514 1.423 1.371 1.785.856.362 2.02.59 3.522.59.842 0 1.547-.057 2.115-.17 1.258-.228 2.062-.733 2.926-2.205zm-9.034-7.464c-.057-.787-.514-1.423-1.371-1.785-.856-.362-2.02-.59-3.522-.59-1.503 0-2.617.227-3.411.59-.794.362-1.314.998-1.371 1.785-.057.787.514 1.423 1.371 1.785.856.362 2.02.59 3.522.59 1.503 0 2.617-.227 3.411-.59.794-.362 1.314-.998 1.371-1.785zM24 0v24H0V0h24zm-1.15 19.36c-.46-.86-1.28-1.42-2.36-1.64-.81-.17-1.77-.26-2.8-.26-1.02 0-1.95.09-2.75.26-1.08.22-1.91.78-2.37 1.64-.46.86-.54 1.86-.23 2.8.31.94.94 1.67 1.83 2.08 1.02.47 2.27.7 3.52.7 1.25 0 2.5-.23 3.52-.7.89-.41 1.52-1.14 1.83-2.08.31-.94.23-1.94-.23-2.8zm-11.85-7.46c-.46-.86-1.28-1.42-2.36-1.64-.81-.17-1.77-.26-2.8-.26-1.02 0-1.95.09-2.75.26-1.08.22-1.91.78-2.37 1.64-.46.86-.54 1.86-.23 2.8.31.94.94 1.67 1.83 2.08 1.02.47 2.27.7 3.52.7 1.25 0 2.5-.23 3.52-.7.89-.41 1.52-1.14 1.83-2.08.31-.94.23-1.94-.23-2.8z"/>
        </svg>
      )
    },
    {
      name: 'Flutter',
      category: lang === 'ar' ? 'تطبيقات موبايل' : 'Mobile SDK',
      color: 'hover:shadow-sky-400/20 hover:border-sky-400/30',
      icon: (
        <svg className="w-12 h-12 text-[#40c4ff]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.314 0L2.3 12 6 15.7 21.686 0H14.314zm2.149 14.314L12.75 18 16.463 21.686 24 14.314h-7.537z"/>
        </svg>
      )
    },
    {
      name: 'Next.js',
      category: lang === 'ar' ? 'إطار عمل خادم' : 'Fullstack',
      color: 'hover:shadow-white/10 hover:border-white/20',
      icon: (
        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.657 18.665l-7.078-9.165v7.653h-1.503v-10.74h1.503l6.985 9.072v-9.072h1.503v10.74h-1.41v1.512z"/>
        </svg>
      )
    },
    {
      name: 'Java',
      category: lang === 'ar' ? 'خلفية وموبايل' : 'Backend & Mobile',
      color: 'hover:shadow-orange-500/20 hover:border-orange-500/30',
      icon: (
        <svg className="w-12 h-12 text-[#e44f26]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path fill="currentColor" stroke="none" d="M18.89 16.5c-.32-.23-.65-.45-1-.66-.9-.55-1.92-.98-3-1.28a11.95 11.95 0 0 0-4-.24c-.6.06-1.18.17-1.76.33a5.53 5.53 0 0 0-2.4 1.34c-.87.87-1.12 2.1-.64 3.19.43 1 1.36 1.66 2.45 1.83 1.48.23 2.98.05 4.43-.45 1.15-.4 2.22-1.02 3.13-1.84.8-.73 1.45-1.63 1.9-2.63.26-.59.23-1.26-.11-1.62z"/>
          <path stroke="currentColor" strokeLinecap="round" d="M9 13.5c-.5-.5-1-1.2-1-2.2 0-2 1.5-3.5 3-4.5.8-.5 1.7-.8 2.5-1m-4 9.5c.3 1 .8 1.8 1.5 2.5M15.5 8c.5.8.5 2 0 3-.5 1-1.5 1.5-2.5 1.5"/>
          <path stroke="currentColor" strokeWidth="1.2" d="M4 22c3.5-1.5 8.5-1.5 12.5.5"/>
        </svg>
      )
    },
    {
      name: 'Kotlin',
      category: lang === 'ar' ? 'تطبيقات أندرويد' : 'Android Native',
      color: 'hover:shadow-indigo-500/20 hover:border-indigo-500/30',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="kotlin-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#aa3bff" />
              <stop offset="50%" stopColor="#ff4b91" />
              <stop offset="100%" stopColor="#00c6ff" />
            </linearGradient>
          </defs>
          <path fill="url(#kotlin-grad)" d="M24 24H0V0h24L12 12z"/>
        </svg>
      )
    },
    {
      name: 'Swift',
      category: lang === 'ar' ? 'تطبيقات آيفون' : 'iOS Native',
      color: 'hover:shadow-orange-600/20 hover:border-orange-600/30',
      icon: (
        <svg className="w-12 h-12 text-[#ff5a00]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.955 14.195c-.131-.22-.387-.367-.655-.382-3.155-.16-5.83-1.636-7.854-3.666-.88-.883-1.602-1.89-2.149-2.99a13.344 13.344 0 0 1-1.229-3.957c-.046-.296-.239-.545-.515-.662a.798.798 0 0 0-.825.074c-.452.339-1.92 1.488-3.084 3.197A13.238 13.238 0 0 0 4.22 10.42c-.22.428-.857 1.83-1.258 3.52-.406 1.704-.45 3.385-.131 5 .272 1.378.9 2.585 1.848 3.498a8.2 8.2 0 0 0 3.393 1.954 8.448 8.448 0 0 0 4.887-.272c2.146-.867 4.258-2.612 5.928-4.887 1.253-1.704 2.144-3.52 2.656-5.4.52-1.91.564-3.67.272-5.067-.046-.22-.2-.404-.41-.476z"/>
        </svg>
      )
    },
    {
      name: 'Objective-C',
      category: lang === 'ar' ? 'تطبيقات آبل' : 'Apple Legacy',
      color: 'hover:shadow-blue-400/20 hover:border-blue-400/30',
      icon: (
        <svg className="w-12 h-12 text-[#00c6ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h4M4 4v16M4 20h4M20 4h-4M20 4v16M20 20h-4"/>
          <path d="M12 8a3 3 0 0 0-3 3v2a3 3 0 0 0 6 0v-2a3 3 0 0 0-3-3z" fill="none"/>
        </svg>
      )
    },
    {
      name: 'Docker',
      category: lang === 'ar' ? 'حاويات وإطلاق' : 'DevOps / Containers',
      color: 'hover:shadow-sky-500/20 hover:border-sky-500/30',
      icon: (
        <svg className="w-12 h-12 text-[#2496ed]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 11.078h2.119v-2.006h-2.119v2.006zm-2.737-2.006h2.117v2.006h-2.117v-2.006zm-.003-2.254h2.119v2.006h-2.119v-2.006zm-2.735 4.26h2.119v-2.006h-2.119v2.006zm0-2.254h2.119v-2.006h-2.119v2.006zm-2.737 4.508h2.117v-2.006h-2.117v2.006zm0-2.254h2.117v-2.006h-2.117v2.006zm-2.737 2.254h2.119v-2.006h-2.119v2.006zm24-3.52c-.17-.834-.693-2.116-2.548-2.116-.833 0-1.57.34-2.11.834-1.63-1.39-3.95-1.07-5.18-.834.02-.15.03-.31.03-.47 0-2.25-1.84-4.08-4.08-4.08s-4.08 1.83-4.08 4.08c0 .16.01.32.03.47-1.23-.236-3.55-.556-5.18.834-.54-.494-1.277-.834-2.11-.834-1.855 0-2.378 1.282-2.548 2.116-.08.41-.05.81-.05 1.21 0 5.48 4.49 9.87 9.87 9.87h12.56c5.38 0 9.87-4.39 9.87-9.87 0-.4-.03-.8-.05-1.21z"/>
        </svg>
      )
    },
    {
      name: 'Kubernetes',
      category: lang === 'ar' ? 'إدارة خوادم' : 'DevOps / Orchestration',
      color: 'hover:shadow-blue-600/20 hover:border-blue-600/30',
      icon: (
        <svg className="w-12 h-12 text-[#326ce5]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .008L2.4 4.01v11.986L12 24l9.6-8.004V4.01L12 .008zm6.5 15.342l-6.5 3.398v-3.79l6.5-3.397v3.79zm-7.7-3.398l-6.5 3.398v-3.79l6.5-3.398v3.79zm7.7-4.398l-6.5 3.398V7.163l6.5-3.398v3.79zm-7.7-3.398L4.3 7.568v-3.79L10.8.38v3.79z"/>
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
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
          className="grid grid-cols-2 sm:grid-cols-5 gap-6"
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
