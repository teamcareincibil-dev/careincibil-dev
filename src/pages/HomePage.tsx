import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CreditGauge } from '../components/CreditGauge';
import { MethodologySteps } from '../components/MethodologySteps';
import { TrustBadges } from '../components/TrustBadges';
import { BureauPartners } from '../components/BureauPartners';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { individualPlans } from '../data/plansData';
import { blogsData } from '../data/blogsData';
import { faqData } from '../data/faqData';
import { SEOHead } from '../components/SEOHead';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  FileSearch,
  Building2,
  Users,
  ChevronDown,
  Calculator,
  Compass,
  PhoneCall,
  Sparkles
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<string | null>(faqData[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "CareInCibil",
    "url": "https://careincibil.com/",
    "logo": "https://careincibil.com/logo.png",
    "description": "Ethical credit profile analysis and CIBIL score repair guidance without false claims.",
    "telephone": "+917275389977",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "IIIT Chouraha, Pipal Gaon, Jhalwa",
      "addressLocality": "Prayagraj",
      "postalCode": "211012",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEOHead
        title={language === 'hi' ? 'केयर इन सिबिल – क्रेडिट प्रोफाइल विश्लेषण व सिबिल सुधार परामर्श' : 'CareInCibil – Credit Profile Analysis, CIBIL Repair & Financial Advisory'}
        description={language === 'hi' ? 'कम सिबिल स्कोर (300-750+) सुधार, क्रेडिट कार्ड सेटलमेंट एनओसी निवारण व लोन अप्रूवल हेतु नैतिक मार्गदर्शन। कोई झूठे दावे नहीं।' : 'Improve low CIBIL score (300-750+), resolve bureau disputes with banks, and secure loan approvals without false overnight promises. Prayagraj desk & Pan-India.'}
        keywords="CIBIL score improvement, credit repair Prayagraj, CareInCibil, fix credit score, credit card settlement NOC, home loan credit repair, MSME CMR rank"
        canonicalPath="/"
        schema={homeSchema}
      />
      {/* 1. HERO SECTION (Bright Minimalist Finance Theme matching Reference Image 1) */}
      <section className="relative bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white text-slate-800 pt-10 pb-16 overflow-hidden border-b border-slate-200/80">
        {/* Soft subtle background glow circles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-emerald-200/25 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/20 blur-[90px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-30 lg:mt-16 sm:mt-0">
          
          {/* Hero Headlines */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
              {t('hero_title')}
            </h1>

            {/* <p className="text-slate-600 text-base sm:text-sm max-w-2xl mx-auto font-normal leading-relaxed mb-8">
              {t('hero_subtitle')}
            </p> */}

            {/* Dual Persona Decision Cards */}
            <div className="text-center mb-3 pt-10">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                {language === 'hi' ? 'यह किसके लिए है?' : 'Who is this for?'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
              {/* For Individuals Card */}
              <Link
                to="/check-cibil-score"
                className="group p-5 rounded-2xl bg-white hover:bg-emerald-50/40 border border-slate-200 hover:border-emerald-500/80 transition-all duration-200 text-left flex items-center justify-between shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    
                    <h3 className="text-base font-bold text-slate-900 mt-1 group-hover:text-emerald-800 transition">
                      {t('hero_card_ind_title')}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {t('hero_card_ind_desc')}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition" />
              </Link>

              {/* For Businesses Card */}
              <Link
                to="/services"
                className="group p-5 rounded-2xl bg-white hover:bg-teal-50/40 border border-slate-200 hover:border-teal-500/80 transition-all duration-200 text-left flex items-center justify-between shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 border border-teal-200">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    
                    <h3 className="text-base font-bold text-slate-900 mt-1 group-hover:text-teal-800 transition">
                      {t('hero_card_biz_title')}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {t('hero_card_biz_desc')}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-teal-700 group-hover:translate-x-1 transition" />
              </Link>
            </div>

            {/* Trust Badges Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600 mb-10">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {t('badge_confidential')}
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {t('badge_bureau_compliant')}
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {t('badge_no_false_claims')}
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {t('badge_equifax_cert')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR (As seen in Reference Page 1: 27,558+ Customers, ₹688+ Cr Loans assisted, 27% Improvement, 11+ Partners, 2,755+ Bankers, PAN India) */}
      <section className="bg-white border-b border-slate-200 py-8 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="pt-3 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {t('stat_customers')}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                {t('stat_customers_label')}
              </div>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-emerald-700 tracking-tight">
                {t('stat_loans')}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                {t('stat_loans_label')}
              </div>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {t('stat_improvement')}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                {t('stat_improvement_label')}
              </div>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-emerald-700 tracking-tight">
                {t('stat_partners')}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                {t('stat_partners_label')}
              </div>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {t('stat_bankers')}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                {t('stat_bankers_label')}
              </div>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {t('stat_pan_india')}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                {t('stat_pan_india_label')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST & VALUES BAR */}
      <TrustBadges />

      {/* 4. THE CORE PROBLEM & DUAL AUDIENCE SOLUTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {t('problem_title')}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {t('problem_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Individuals Deep Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {t('for_ind_title')}
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {t('for_ind_desc')}
                </p>

                <ul className="space-y-3.5 mb-8 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{t('for_ind_f1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{t('for_ind_f2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{t('for_ind_f3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{t('for_ind_f4')}</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/check-cibil-score"
                className="w-full text-center py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition shadow-sm"
              >
                {t('for_ind_btn')}
              </Link>
            </div>

            {/* For Businesses (MSME) Deep Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {t('for_biz_title')}
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {t('for_biz_desc')}
                </p>

                <ul className="space-y-3.5 mb-8 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{t('for_biz_f1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{t('for_biz_f2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{t('for_biz_f3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{t('for_biz_f4')}</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/services"
                className="w-full text-center py-3.5 px-6 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm transition shadow-sm"
              >
                {t('for_biz_btn')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE CIBIL SCORE SIMULATOR PREVIEW */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6"> 
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {language === 'hi'
                  ? 'जानें कि आपका सिबिल स्कोर कैसे तय होता है'
                  : 'See Exactly What Decides Your 300 to 900 CIBIL Rating'}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {language === 'hi'
                  ? 'बैंक किसी जादू से लोन अप्रूव नहीं करते। सिबिल स्कोर 5 प्रमुख कारकों से बनता है। किसी एक कारक (जैसे पेमेंट हिस्ट्री या कार्ड यूटिलाइजेशन) में सुधार से आपका स्कोर तेजी से ऊपर जा सकता है।'
                  : 'Banks rely on strict mathematical scoring models. Your CIBIL profile is weighted by payment punctuality, utilization, credit age, and inquiry frequency. Try our simulator on the right to understand rating bands.'}
              </p>

              {/* Factors list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1">
                    <span>{language === 'hi' ? 'रीपेमेंट हिस्ट्री' : 'Payment History'}</span>
                    <span className="text-emerald-700 font-extrabold">35%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full w-[85%]" />
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    {language === 'hi' ? 'समय पर ईएमआई व कार्ड बिल' : 'On-time EMIs & bill settlements'}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1">
                    <span>{language === 'hi' ? 'क्रेडिट यूटिलाइजेशन' : 'Credit Utilization'}</span>
                    <span className="text-emerald-700 font-extrabold">30%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full w-[70%]" />
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    {language === 'hi' ? 'कार्ड लिमिट का 30% से कम उपयोग' : 'Keep usage strictly below 30%'}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1">
                    <span>{language === 'hi' ? 'क्रेडिट एज (इतिहास)' : 'Credit Age'}</span>
                    <span className="text-emerald-700 font-extrabold">15%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full w-[60%]" />
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    {language === 'hi' ? 'पुराने क्रेडिट कार्ड चालू रखना' : 'Longevity of healthy accounts'}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1">
                    <span>{language === 'hi' ? 'लोन मिक्स व इनक्वायरी' : 'Credit Mix & Enquiries'}</span>
                    <span className="text-emerald-700 font-extrabold">20%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full w-[50%]" />
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    {language === 'hi' ? 'सिक्योर्ड vs अनसिक्योर्ड संतुलन' : 'Balanced secured/unsecured mix'}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/check-cibil-score"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-sm transition"
                >
                  <span>{language === 'hi' ? 'पूरी रिपोर्ट का विश्लेषण करवाएं' : 'Request In-Depth Report Analysis'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/calculator"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition"
                >
                  <Calculator className="w-4 h-4 text-emerald-700" />
                  <span>{language === 'hi' ? 'ईएमआई कैलकुलेटर' : 'EMI Calculator'}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <CreditGauge initialScore={728} interactive={true} />
            </div>
          </div>
        </div>
      </section>

      {/* 6. METHODOLOGY (5 STEPS FROM REFERENCE) */}
      <MethodologySteps />

      {/* 7. WHY CHOOSE CARE IN CIBIL */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              {t('why_us_title')}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {t('why_us_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-emerald-500/50 transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t('why_feature1_title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t('why_feature1_desc')}</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-emerald-500/50 transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t('why_feature2_title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t('why_feature2_desc')}</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-emerald-500/50 transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t('why_feature3_title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t('why_feature3_desc')}</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-emerald-500/50 transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t('why_feature4_title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t('why_feature4_desc')}</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-emerald-500/50 transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t('why_feature5_title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t('why_feature5_desc')}</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-emerald-500/50 transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t('why_feature6_title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t('why_feature6_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 4 CREDIT BUREAUS */}
      <BureauPartners />

      {/* 9. PRICING PLANS PREVIEW (From PDF Page 2) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
           
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              {t('plans_title')}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {t('plans_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {individualPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl border transition-all duration-200 p-6 flex flex-col justify-between ${
                  plan.isPopular
                    ? 'border-emerald-600 shadow-lg ring-2 ring-emerald-600/20'
                    : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                      {plan.badge[language]}
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-900">{plan.name[language]}</h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.bestFor[language]}</p>
                  </div>

                  <div className="mb-6 pt-2 pb-4 border-y border-slate-100">
                    <span className="text-3xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-xs text-slate-400 block mt-0.5">{plan.duration[language]}</span>
                  </div>

                  <ul className="space-y-2.5 mb-6 text-xs text-slate-600">
                    {plan.features[language].map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/book-free-call"
                  className={`w-full text-center py-2.5 px-4 rounded-xl text-xs font-bold transition shadow-xs ${
                    plan.isPopular
                      ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  {t('plan_choose_btn')} →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/plans"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
            >
              <span>{language === 'hi' ? 'सभी व्यक्तिगत व MSME कमर्शियल प्लान देखें' : 'View All Individual & MSME Commercial Plans'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CLIENT TESTIMONIALS (From Prayagraj / UP) */}
      <TestimonialsSection />

      {/* 11. QUICK TOOLS TEASER: BLOGS & EMI (From PDF Page 4) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
             
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                {language === 'hi' ? 'क्रेडिट की हर बारीकी, आसान भाषा में' : 'Credit Explained, Simply'}
              </h2>
            </div>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800"
            >
              <span>{language === 'hi' ? 'सभी ब्लॉग्स पढ़ें' : 'View All Guides'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogsData.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded">
                      {post.category[language]}
                    </span>
                    <span>{post.readTime[language]}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    <Link to={`/blogs/${post.slug}`} className="hover:text-emerald-700 transition">
                      {post.title[language]}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {post.excerpt[language]}
                  </p>
                </div>

                <Link
                  to={`/blogs/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-3 border-t border-slate-200/60"
                >
                  <span>{language === 'hi' ? 'पूरा लेख पढ़ें' : 'Read Article'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              {t('faq_title')}
            </h2>
            <p className="text-slate-600 text-sm">
              {t('faq_subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item) => {
              const isOpen = openFaq === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-emerald-700 transition"
                  >
                    <span className="text-sm sm:text-base">{item.question[language]}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {item.answer[language]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. BOTTOM FULL-WIDTH CTA BANNER */}
      <section className="py-5 sm:py-6 bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg sm:text-xl font-bold leading-snug text-center sm:text-left">
              {language === 'hi'
                ? 'अपनी क्रेडिट प्रोफाइल को मजबूत बनाने की शुरुआत करें'
                : 'Start Building a Stronger Credit Profile Today'}
            </h2>

            <div className="flex shrink-0 justify-center">
              <Link
                to="/book-free-call"
                className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition"
              >
                {t('nav_book_call')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
