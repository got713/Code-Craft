import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [lang, setLang] = useState('ar'); // Default to Arabic

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="relative min-h-screen bg-dark-bg text-slate-100 selection:bg-primary/30 selection:text-white">
      {/* Background Decorative Blur Gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(0,198,255,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(170,59,255,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />
      
      {/* Structural layout */}
      <Navbar lang={lang} setLang={setLang} />
      <main className="relative z-10">
        <Hero lang={lang} />
        <Services lang={lang} />
        <WhyUs lang={lang} />
        <Portfolio lang={lang} />
        <Process lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      
      {/* Floating Action Buttons */}
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}
