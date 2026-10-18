import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Phone, Menu, X, ArrowUpRight, Globe, CheckCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: t('nav_home') },
    
    { to: '/services', label: t('nav_what_we_do') },
     { to: '/plans', label: t('nav_plans') },
      { to: '/check-cibil-score', label: t('nav_cibil_check') },
   { to: '/blogs', label: t('nav_blogs') },
    { to: '/contact', label: t('nav_contact') },
  
    { to: '/about', label: t('nav_about') },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
     

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          {/* Brand Logo - Just Logo, No Name Text */}
          <div className="flex items-center lg:flex-1">
            <Link to="/" className="flex items-center group py-1" aria-label="Careincibil Home">
              <img
                src="/careincibil-main-logo.webp"
                alt="CareInCibil"
                className="h-12 w-12 rounded-full object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </Link>
          </div>

          {/* Desktop Nav Items (Centered) */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-emerald-800 bg-emerald-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Elements: Language Toggle & Book Call */}
          <div className="flex items-center justify-end lg:flex-1 gap-3">
            <div className="hidden sm:flex items-center gap-3">
              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-white text-xs font-semibold text-slate-700 transition hover:border-emerald-600 shadow-2xs"
                title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
                aria-label="Language selector"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-700" />
                <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
              </button>

              {/* Book Free Call Primary Button */}
              <Link
                to="/book-free-call"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition shadow-sm shadow-emerald-900/20 active:scale-98"
              >
                <span>{t('nav_book_call')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu and mobile language toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleLanguage}
                className="px-2.5 py-1 text-xs font-semibold rounded-md border border-slate-300 bg-slate-50 text-slate-700 flex items-center gap-1 sm:hidden"
              >
                <Globe className="w-3 h-3 text-emerald-600" />
                {language === 'en' ? 'हिन्दी' : 'ENG'}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive(link.to)
                    ? 'text-emerald-800 bg-emerald-50 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              to="/book-free-call"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm"
            >
              {t('nav_book_call')}
            </Link>
            <a
              href="tel:+917275389977"
              className="w-full text-center py-2 px-4 rounded-xl text-sm font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>{language === 'hi' ? 'सीधे कॉल करें: 7275389977' : 'Call Desk: +91 7275389977'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
