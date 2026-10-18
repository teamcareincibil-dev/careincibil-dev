import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-slate-50 text-slate-700 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Brand Logo - Just Logo, No Name Text */}
            <Link to="/" className="inline-block group" aria-label="Careincibil Home">
              <img
                src="/careincibil-main-logo.webp"
                alt="CareInCibil"
                className="h-16 w-16 rounded-full object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed pr-4">
              {t('footer_desc')}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                {t('badge_confidential')}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
                {t('badge_no_false_claims')}
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              {t('footer_quick_links')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              
              <li>
                <Link to="/about" className="text-slate-600 hover:text-emerald-700 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-emerald-600" />
                  {t('nav_about')}
                </Link>
              </li>
              <li>
                <Link to="/check-cibil-score" className="text-slate-600 hover:text-emerald-700 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-emerald-600" />
                  {t('nav_cibil_check')}
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-slate-600 hover:text-emerald-700 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-emerald-600" />
                  {t('nav_plans')}
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-slate-600 hover:text-emerald-700 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-emerald-600" />
                  {t('nav_calculator')}
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-slate-600 hover:text-emerald-700 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-emerald-600" />
                  {t('nav_blogs')}
                </Link>
              </li>
              <li>
                <Link to="/book-free-call" className="text-slate-600 hover:text-emerald-700 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-emerald-600" />
                  {t('nav_book_call')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              {t('footer_services')}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link to="/what-we-do" className="hover:text-emerald-700 transition">
                  {language === 'hi' ? 'सिबिल रिपोर्ट विश्लेषण' : 'CIBIL Report Analysis'}
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-emerald-700 transition">
                  {language === 'hi' ? 'कम स्कोर सुधार (300-750+)' : 'Low Score Improvement'}
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-emerald-700 transition">
                  {language === 'hi' ? 'क्रेडिट कार्ड सेटलमेंट गाइड' : 'Credit Card Settlement'}
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-emerald-700 transition">
                  {language === 'hi' ? 'लोन रिजेक्शन समाधान' : 'Loan Rejection Assistance'}
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-emerald-700 transition">
                  {language === 'hi' ? 'ब्यूरो डिस्प्यूट सहायता' : 'CIBIL Dispute Assistance'}
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-emerald-700 transition">
                  {language === 'hi' ? 'MSME कमर्शियल CMR रैंक' : 'MSME Commercial CMR Rank'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              {t('footer_contact_info')}
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                <span className="text-slate-700 text-xs leading-relaxed">
                  {t('address_prayagraj')}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                <div className="text-xs space-y-1">
                  <div>
                    <a href="tel:+917275389977" className="text-slate-700 hover:text-emerald-700 font-semibold">
                      +91 7275389977
                    </a>
                  </div>
                  <div>
                    <a href="tel:+917275899926" className="text-slate-700 hover:text-emerald-700">
                      +91 7275899926
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://wa.me/917275766627"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:underline"
                    >
                      WhatsApp: +91 7275766627
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                <a href="mailto:Teamcareincibil@gmail.com" className="text-slate-700 text-xs hover:text-emerald-700">
                  Teamcareincibil@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-slate-600 text-xs">
                  {t('hours_text')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer Box */}
        <div className="mt-10 p-5 rounded-xl bg-white border border-slate-200">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                {t('footer_disclaimer_title')}
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('footer_disclaimer_text')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 CareInCibil (careincibil.com). {t('footer_rights')}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link to="/privacy-policy" className="hover:text-emerald-700 transition">Privacy Policy</Link>
    
            <Link to="/terms-of-service" className="hover:text-emerald-700 transition">Terms & Disclaimer</Link>
          </div>
          <p>
            Developed by{' '}
            <a
              href="https://harshitkowsik.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-700 transition"
            >
              Harshit Kowsik
            </a>
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
};
