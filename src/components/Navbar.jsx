import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import logo from '../assets/logo.png';

export default function Navbar({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = lang === 'ar' ? [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'لماذا نحن؟', href: '#why-us' },
    { name: 'أعمالنا', href: '#portfolio' },
    { name: 'خطوات العمل', href: '#process' },
    { name: 'عن الشركة', href: '#about' },
  ] : [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Our Process', href: '#process' },
    { name: 'About Us', href: '#about' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 glass border-b border-white/5 shadow-lg shadow-black/20'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <a href="#hero" onClick={(e) => handleScrollTo(e, '#hero')} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors duration-300 bg-black/40 flex items-center justify-center">
            <img src={logo} alt="CodeCraft Logo" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300 font-heading">
            Code<span className="text-gradient font-extrabold">Craft</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="hover:text-primary transition-colors duration-200 py-2 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Language Switcher & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Toggle Button */}
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/10 hover:border-primary/30 text-xs font-bold text-slate-300 hover:text-white transition-all duration-300 cursor-pointer font-heading hover:bg-white/5"
            title={lang === 'ar' ? 'Switch to English' : 'تغيير للغة العربية'}
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'ar' ? 'EN' : 'العربية'}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white overflow-hidden group transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:opacity-90"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10 flex items-center gap-2">
              {lang === 'ar' ? 'ابدأ مشروعك' : 'Start Project'}
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-1 p-2 text-slate-300 hover:text-white border border-white/5 rounded-lg text-xs font-semibold cursor-pointer font-heading"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'ar' ? 'EN' : 'عربي'}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 glass border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6 max-w-7xl mx-auto">
              <ul className={`flex flex-col gap-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className="block text-slate-300 hover:text-primary text-base py-2 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white w-full bg-gradient-to-r from-primary to-secondary"
                >
                  {lang === 'ar' ? 'ابدأ مشروعك' : 'Start Project'}
                  <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-primary via-secondary to-accent-purple"
        style={{ scaleX, originX: 0 }}
      />
    </nav>
  );
}
