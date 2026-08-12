import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Code, Cpu, Smartphone, ArrowUpRight } from 'lucide-react';

export default function Hero({ lang }) {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    badge: lang === 'ar' ? 'مستقبلك الرقمي يبدأ هنا' : 'Your digital future starts here',
    h1Main: lang === 'ar' ? 'نبني منتجات رقمية' : 'We Build',
    h1Gradient: lang === 'ar' ? 'تدفع عملك' : 'Digital Products',
    h1End: lang === 'ar' ? 'نحو الأمام.' : 'That Move Your Business Forward.',
    desc: lang === 'ar' 
      ? 'نحن في CodeCraft نبتكر حلولاً برمجية مخصصة ومواقع ويب وتطبيقات هواتف ذكية بأحدث التقنيات لنساعد عملك على النمو والتفوق في السوق الرقمي.'
      : 'At CodeCraft, we craft custom software solutions, responsive websites, and mobile applications using cutting-edge technologies to help your business grow and excel.',
    cta: lang === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project Now',
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden grid-bg">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,198,255,0.08)_0,transparent_60%)]" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[radial-gradient(circle,rgba(0,198,255,0.06)_0%,transparent_70%)] animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(170,59,255,0.06)_0%,transparent_70%)] animate-pulse-slow delay-300 z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        
        {/* Left/Main Column - Content */}
        <div className={`lg:col-span-7 text-center ${lang === 'ar' ? 'lg:text-right' : 'lg:text-left'} flex flex-col items-center ${lang === 'ar' ? 'lg:items-start' : 'lg:items-start'} order-2 lg:order-1`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/5 mb-6 text-sm font-semibold text-primary"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {content.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading"
          >
            {lang === 'ar' ? (
              <>
                {content.h1Main} <span className="text-gradient">{content.h1Gradient}</span> {content.h1End}
              </>
            ) : (
              <>
                {content.h1Main} <span className="text-gradient">{content.h1Gradient}</span> {content.h1End}
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-slate-400 max-w-2xl text-center lg:text-right"
          >
            {lang === 'ar' ? (
              <>
                نحن في <span className="text-white font-semibold">CodeCraft</span> نبتكر حلولاً برمجية مخصصة ومواقع ويب وتطبيقات هواتف ذكية بأحدث التقنيات لنساعد عملك على النمو والتفوق في السوق الرقمي.
              </>
            ) : (
              content.desc
            )}
          </motion.p>

          {/* Quick Bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <span className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm font-medium text-slate-300">
              <Code className="w-4 h-4 text-primary" /> Web Development
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm font-medium text-slate-300">
              <Smartphone className="w-4 h-4 text-secondary" /> Mobile Apps
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm font-medium text-slate-300">
              <Cpu className="w-4 h-4 text-accent-purple" /> Custom Software
            </span>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white overflow-hidden group transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:200%_auto] animate-pulse-slow group-hover:bg-right transition-all duration-1000"></span>
              <span className="relative z-10 flex items-center gap-2">
                {content.cta}
                <ArrowUpRight className={`w-5 h-5 group-hover:rotate-45 transition-transform duration-300 ${lang === 'ar' ? 'rotate-90 group-hover:rotate-135' : ''}`} />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Column - Visual Professional Graphic */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-72 h-72 md:w-96 md:h-96"
          >
            {/* Outer Rotating Circles */}
            <div className="absolute inset-0 border border-dashed border-white/10 rounded-full animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-4 border border-slate-500/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            
            {/* Glowing Gradient Core */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl animate-pulse-slow" />
            
            {/* Interactive Code Window */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute inset-8 rounded-2xl glass p-5 flex flex-col justify-between shadow-2xl border-white/15"
            >
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <Terminal className="w-4 h-4 text-slate-500" />
              </div>
              <div className="flex-1 font-mono text-xs md:text-sm text-slate-400 py-4 text-left leading-relaxed">
                <div><span className="text-secondary">const</span> project = <span className="text-primary">new</span> CodeCraft();</div>
                <div className="pl-4 mt-2">project.type = <span className="text-emerald-400">"Modern Web"</span>;</div>
                <div className="pl-4">project.status = <span className="text-emerald-400">"Premium"</span>;</div>
                <div className="pl-4">project.speed = <span className="text-emerald-400">"Fastest"</span>;</div>
                <div className="pl-4">project.scale = <span className="text-emerald-400">"Unlimited"</span>;</div>
                <div className="mt-2">await project.launch();</div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-500 pt-3 border-t border-white/5">
                <span>CodeCraft Suite v1.0</span>
                <span>STATUS: READY</span>
              </div>
            </motion.div>

            {/* floating tiny badges */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 rounded-xl glass px-4 py-2 flex items-center gap-2 border-white/10"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-white">Interactive UX</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 -left-4 rounded-xl glass px-4 py-2 flex items-center gap-2 border-white/10"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold text-white">Vite + Tailwind v4</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
