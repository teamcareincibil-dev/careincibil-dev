import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { individualPlans, businessPlans } from '../data/plansData';
import { CheckCircle2, ShieldCheck, Users, Building2, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

export const PlansPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'individual' | 'business'>('individual');

  const currentPlans = activeTab === 'individual' ? individualPlans : businessPlans;

  const plansSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "CareInCibil Credit Improvement & Monitoring Plans",
    "description": "Transparent pricing packages for individuals and businesses to improve credit profiles and resolve bureau disputes.",
    "brand": {
      "@type": "Brand",
      "name": "CareInCibil"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "10999",
      "highPrice": "34999",
      "priceCurrency": "INR"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEOHead
        title={language === 'hi' ? 'प्लान्स व शुल्क – व्यक्तिगत व व्यापारिक क्रेडिट पैकेज' : 'Pricing Plans & Packages – Individual & MSME Credit Solutions'}
        description={language === 'hi' ? 'पारदर्शी क्रेडिट परामर्श शुल्क: बेसिक ₹10,999, स्टैंडर्ड ₹14,999, प्रीमियम ₹19,999 और वीआईपी एक्सक्विजिट। कोई छिपा हुआ खर्च नहीं।' : 'Explore transparent credit repair pricing: Basic ₹10,999, Standard ₹14,999, Premium ₹19,999, and MSME commercial packages. Zero hidden costs.'}
        keywords="CIBIL repair cost, credit improvement pricing, CareInCibil plans, credit report dispute package, MSME CMR pricing"
        canonicalPath="/plans"
        schema={plansSchema}
      />
      {/* Header */}
      <section className="bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white text-slate-800 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            {t('plans_title')}
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            {t('plans_subtitle')}
          </p>

          {/* Persona Tab Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white border border-slate-300 shadow-2xs">
            <button
              onClick={() => setActiveTab('individual')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeTab === 'individual'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>{language === 'hi' ? 'व्यक्तियों के लिए (Individuals)' : 'For Individuals'}</span>
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeTab === 'business'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{language === 'hi' ? 'व्यवसाय हेतु (MSME / Business)' : 'For Businesses (MSME)'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
              activeTab === 'individual' ? 'lg:grid-cols-4' : 'lg:grid-cols-2 max-w-4xl mx-auto'
            }`}
          >
            {currentPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between ${
                  plan.isPopular
                    ? 'border-emerald-600 shadow-xl ring-2 ring-emerald-600/20'
                    : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-emerald-700 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                      {plan.badge[language]}
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{plan.name[language]}</h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[36px]">{plan.bestFor[language]}</p>
                  </div>

                  <div className="mb-6 pt-3 pb-5 border-y border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">{plan.price}</span>
                      <span className="text-xs text-slate-400 font-medium">+ GST</span>
                    </div>
                    <span className="text-xs text-slate-500 block mt-1 font-semibold">{plan.duration[language]}</span>
                  </div>

                  {/* Feature list */}
                  <div className="mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                      {language === 'hi' ? 'प्लान में सम्मिलित सुविधाएं:' : 'What is included:'}
                    </span>
                    <ul className="space-y-3 text-xs text-slate-700">
                      {plan.features[language].map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <Link
                    to="/book-free-call"
                    className={`w-full text-center py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition block shadow-xs ${
                      plan.isPopular
                        ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {t('plan_choose_btn')} →
                  </Link>
                  <div className="text-center">
                    <span className="text-[11px] text-slate-400">
                      {language === 'hi' ? 'प्रयागराज डेस्क द्वारा समर्पित सहायता' : 'Dedicated Prayagraj Desk Support'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing FAQs and Ethics Notice */}
          <div className="mt-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-4xl mx-auto space-y-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  {language === 'hi' ? 'हमारी पारदर्शी परामर्श नीति' : 'Our Transparent Advisory Policy'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                  {language === 'hi'
                    ? 'CARE IN CIBIL में कोई छिपा हुआ शुल्क नहीं है। हम बैंक एनओसी समन्वय, ब्यूरो डिस्प्यूट ड्राफ्टिंग और निरंतर फॉलो-अप के लिए केवल निर्धारित पेशेवर शुल्क लेते हैं। हम किसी भी गैरकानूनी या अवास्तविक वादे का कड़ाई से बहिष्कार करते हैं।'
                    : 'At CareInCibil, there are zero hidden fees. We charge transparent consultation and execution fees for line-by-line bureau audit, dispute preparation, bank NOC coordination, and monthly progress tracking.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
