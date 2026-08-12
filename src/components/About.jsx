import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Award } from 'lucide-react';
import logo from '../assets/logo.png';

export default function About({ lang }) {
  const content = {
    badge: lang === 'ar' ? 'من نحن؟' : 'Who We Are',
    title: lang === 'ar' ? 'نبذة تعريفية عن CodeCraft' : 'About CodeCraft Studio',
    desc: lang === 'ar'
      ? 'نحن استوديو برمجيات متخصص في بناء وتصميم المنتجات الرقمية الحديثة. نساعد الشركات والأفراد على تحويل الأفكار المبتكرة إلى تطبيقات ويب وهواتف وأنظمة تشغيل ذكية ذات كفاءة تشغيلية ممتازة وتصميم جذاب.'
      : 'We are a digital product studio specializing in building premium software products. We help startups and established brands transform innovative ideas into responsive websites, mobile applications, and custom backend systems with outstanding design and engineering.',
  };

  const values = [
    {
      icon: <Target className="w-5 h-5 text-primary" />,
      title: lang === 'ar' ? 'الرؤية والهدف' : 'Our Vision',
      desc: lang === 'ar'
        ? 'تمكين الأفكار الريادية والشركات الناشئة من خلال برمجيات مرنة تدعم مسار نموهم.'
        : 'Empowering startups and established companies with custom, robust, and scalable software solutions.',
    },
    {
      icon: <Heart className="w-5 h-5 text-rose-400" />,
      title: lang === 'ar' ? 'الشغف والجودة' : 'Passionate Excellence',
      desc: lang === 'ar'
        ? 'لا نقبل بالحلول الوسطى؛ نلتزم بكتابة أكواد نظيفة وتصاميم مذهلة تعبر عن شغفنا.'
        : 'We never compromise on code cleanliness and high visual aesthetics, delivering pixel-perfect digital experiences.',
    },
    {
      icon: <Award className="w-5 h-5 text-secondary" />,
      title: lang === 'ar' ? 'الالتزام والخبرة' : 'Reliable Commitment',
      desc: lang === 'ar'
        ? 'نسلم أعمالنا في الموعد المحدد وندعم عملاءنا في كل خطوة حتى بعد إطلاق المشروع.'
        : 'We deliver projects strictly on schedule and offer premium post-launch support and consulting.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-bg border-t border-white/5 scroll-mt-20">
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-[radial-gradient(circle,rgba(0,198,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Tech Visual card info */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-80 h-96 rounded-2xl glass p-8 border-white/10 flex flex-col justify-between overflow-hidden group shadow-2xl"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                  {lang === 'ar' ? 'عن البراند' : 'ABOUT BRAND'}
                </span>
                <span className="text-xs text-slate-500 font-mono">EST. 2026</span>
              </div>

              <div className="relative z-10 flex flex-col items-center py-6">
                <div className="w-24 h-24 rounded-2xl bg-black/40 border border-white/15 p-1 mb-4 flex items-center justify-center">
                  <img src={logo} alt="CodeCraft Logo" className="w-full h-full object-cover rounded-xl" />
                </div>
                <h3 className="text-2xl font-black text-white font-heading">
                  Code<span className="text-gradient">Craft</span>
                </h3>
                <p className="text-slate-500 text-xs mt-1 font-mono">SOFTWARE & DIGITAL SOLUTIONS</p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/5 text-center text-xs text-slate-400">
                {lang === 'ar' 
                  ? '"أول خطوة في نجاح فكرتك هي تحويلها إلى منتج رقمي احترافي."'
                  : '"The first step in your success story is transforming your ideas into premium digital products."'}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Brand Description */}
          <div className={`lg:col-span-7 order-1 lg:order-2 text-center ${lang === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}>
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
                  نبذة تعريفية عن <span className="text-gradient">CodeCraft</span>
                </>
              ) : (
                <>
                  About <span className="text-gradient">CodeCraft Studio</span>
                </>
              )}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`mt-6 text-slate-400 text-sm leading-relaxed ${lang === 'ar' ? 'text-right' : 'text-left'}`}
            >
              {content.desc}
            </motion.p>

            {/* Values stack */}
            <div className="mt-8 space-y-6">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex items-start gap-4 ${lang === 'ar' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center shrink-0 mt-1">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading">
                      {val.title}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1 max-w-xl">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
