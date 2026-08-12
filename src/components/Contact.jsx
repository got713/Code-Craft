import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Contact({ lang }) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        const subject = encodeURIComponent(`CodeCraft Project Request from ${formState.name}`);
        const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
        window.location.href = `mailto:codecraft.egg@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
      }, 1500);
    }
  };

  const content = {
    badge: lang === 'ar' ? 'ابدأ اليوم' : 'Start Today',
    titleMain: lang === 'ar' ? 'لديك فكرة أو مشروع؟' : 'Have an idea?',
    titleGradient: lang === 'ar' ? 'دعنا نبنيها معاً.' : "Let's build it together.",
    subtitle: lang === 'ar' 
      ? 'لديك فكرة أو مشروع تود تنفيذه؟ دعنا نتحدث!'
      : 'Got a project or concept in mind? Let\'s discuss details!',
    desc: lang === 'ar'
      ? 'سواء كنت بحاجة إلى موقع إلكتروني مخصص، تطبيق للهواتف الذكية، أو نظام برمجي متكامل لإدارة عملك، سنقوم بمساعدتك في نقله من مجرد فكرة إلى منتج حقيقي ناجح.'
      : 'Whether you require a custom website, high-conversion mobile app, or enterprise database solutions, we are here to support you in bringing it from a draft to a successful launched product.',
    whatsappBtn: lang === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp Chat',
    emailBtn: lang === 'ar' ? 'راسلنا عبر البريد' : 'Email Inquiry',
    formHeader: lang === 'ar' ? 'أرسل لنا تفاصيل مشروعك' : 'Send Project Brief',
    inputName: lang === 'ar' ? 'الاسم بالكامل' : 'Full Name',
    inputNamePlaceholder: lang === 'ar' ? 'مثال: أحمد محمد' : 'e.g. John Doe',
    inputEmail: lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address',
    inputMsg: lang === 'ar' ? 'تفاصيل الفكرة أو التطبيق المطلوب' : 'Project details & objectives',
    inputMsgPlaceholder: lang === 'ar' ? 'اكتب هنا ما ترغب في تنفيذه...' : 'Describe what you want to build...',
    submitBtn: lang === 'ar' ? 'إرسال الطلب' : 'Submit Brief',
    formSuccess: lang === 'ar' ? 'تم التحضير للإرسال!' : 'Preparing details...',
    formSuccessDesc: lang === 'ar' 
      ? 'جاري توجيهك إلى تطبيق البريد الإلكتروني لإتمام إرسال الرسالة...'
      : 'Redirecting to your mail client to dispatch details...',
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/40 scroll-mt-20">
      {/* Light glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(0,198,255,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(170,59,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: CTA Text and Quick Contact Info */}
          <div className={`lg:col-span-6 text-center ${lang === 'ar' ? 'lg:text-right' : 'lg:text-left'} flex flex-col items-center ${lang === 'ar' ? 'lg:items-start' : 'lg:items-start'} order-2 lg:order-1`}>
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
              className="text-3xl md:text-5xl font-extrabold text-white leading-tight font-heading"
            >
              {lang === 'ar' ? (
                <>
                  لديك فكرة مشروع؟<br />
                  <span className="text-gradient">{content.titleGradient}</span>
                </>
              ) : (
                <>
                  {content.titleMain}<br />
                  <span className="text-gradient">{content.titleGradient}</span>
                </>
              )}
            </motion.h2>
            
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={`text-lg md:text-xl font-bold text-slate-300 mt-4 font-heading ${lang === 'ar' ? 'text-right' : 'text-left'}`}
            >
              {content.subtitle}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-slate-400 text-sm leading-relaxed max-w-xl text-center lg:text-right"
            >
              {content.desc}
            </motion.p>

            {/* Quick CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              {/* WhatsApp Link */}
              <a
                href="https://wa.me/201027003742?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20CodeCraft%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A8%D8%AF%D8%A1%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%AC%D8%AF%D9%8A%D8%AF%20%D9%85%D8%B9%D9%83%D9%85..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] transition-colors shadow-lg shadow-[#25d366]/20"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                {content.whatsappBtn}
              </a>

              {/* Email Link */}
              <a
                href="mailto:codecraft.egg@gmail.com"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-white glass hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                {content.emailBtn}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Form Contact */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-8 md:p-10 rounded-3xl border-white/5 relative overflow-hidden"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4 animate-bounce" />
                  <h3 className="text-xl font-bold text-white mb-2 font-heading">{content.formSuccess}</h3>
                  <p className="text-sm text-slate-400 max-w-xs font-heading">
                    {content.formSuccessDesc}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className={`text-xl font-bold text-white mb-2 font-heading ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {content.formHeader}
                  </h3>
                  
                  <div>
                    <label className={`block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-heading ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                      {content.inputName}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={content.inputNamePlaceholder}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className={`w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-heading ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                      {content.inputEmail}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="example@gmail.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 text-left"
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-heading ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                      {content.inputMsg}
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder={content.inputMsgPlaceholder}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className={`w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 resize-none ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
                  >
                    <span>{content.submitBtn}</span>
                    <Send className={`w-4 h-4 ${lang === 'ar' ? 'transform rotate-180' : ''}`} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
