import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer({ lang }) {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      ),
      href: 'https://www.facebook.com/CodeCraft2026',
      color: 'hover:text-[#1877F2] hover:border-[#1877F2]/20 hover:bg-[#1877F2]/5',
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
      href: 'https://www.instagram.com/codecraft.eg',
      color: 'hover:text-[#E1306C] hover:border-[#E1306C]/20 hover:bg-[#E1306C]/5',
    },

    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      href: 'https://wa.me/201027003742?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20CodeCraft%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A8%D8%AF%D8%A1%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%AC%D8%AF%D9%8A%D8%AF%20%D9%85%D8%B9%D9%83%D9%85...',
      color: 'hover:text-[#25D366] hover:border-[#25D366]/20 hover:bg-[#25D366]/5',
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:codecraft.egg@gmail.com',
      color: 'hover:text-primary hover:border-primary/20 hover:bg-primary/5',
    },
  ];

  return (
    <footer className="bg-dark-bg border-t border-white/5 py-12 relative overflow-hidden">
      <div className={`max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 ${lang === 'ar' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        
        {/* Logo and Copyright Info */}
        <div className={`flex flex-col items-center ${lang === 'ar' ? 'md:items-end text-center md:text-right' : 'md:items-start text-center md:text-left'}`}>
          <div className={`flex items-center gap-3 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
            <img src={logo} alt="CodeCraft Logo" className="w-7 h-7 rounded border border-white/10" />
            <span className="text-lg font-bold tracking-tight text-white font-heading">
              Code<span className="text-gradient">Craft</span>
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-2 font-heading">
            {lang === 'ar' ? '© 2026 CodeCraft. جميع الحقوق محفوظة.' : '© 2026 CodeCraft. All rights reserved.'}
          </p>
        </div>

        {/* Social Links List */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color}`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
