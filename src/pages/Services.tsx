import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData, ServiceItem } from '../data/servicesData';
import {
  FileSearch,
  TrendingUp,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  Building2,
  ArrowRight,
  PhoneCall,
  Check,
  PackageCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

export const WhatWeDoPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedService, setSelectedService] = useState<string>(servicesData[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSearch': return FileSearch;
      case 'TrendingUp': return TrendingUp;
      case 'ShieldAlert': return ShieldAlert;
      case 'CheckCircle2': return CheckCircle2;
      case 'AlertCircle': return AlertCircle;
      case 'Building2': return Building2;
      default: return CheckCircle2;
    }
  };

  const currentItem = servicesData.find((s) => s.id === selectedService) || servicesData[0];
  const CurrentIcon = getIcon(currentItem.iconName);

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Credit Consultancy and Bureau Analysis",
    "provider": {
      "@type": "Organization",
      "name": "CareInCibil",
      "url": "https://careincibil.com"
    },
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CareInCibil Services",
      "itemListElement": servicesData.map(s => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title.en,
          "description": s.shortDesc.en
        }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEOHead
        title={language === 'hi' ? 'हम क्या करते हैं – CIBIL विश्लेषण, सेटलमेंट व लोन सहायता' : 'What We Do – CIBIL Report Analysis, Settlement & Dispute Services'}
        description={language === 'hi' ? 'हमारी 6 मुख्य सेवाएं: CIBIL रिपोर्ट ऑडिट, कम स्कोर सुधार (300-750+), सेटलमेंट एनओसी, लोन रिजेक्शन समाधान व MSME CMR गाइड।' : 'Discover our 6 credit pillars: Bureau report audit, low CIBIL score recovery (300 to 750+), settlement NOC assistance, and loan rejection resolution.'}
        keywords="CIBIL services, credit report analysis, credit card settlement help, loan rejection solution, CIBIL dispute Prayagraj, MSME commercial credit"
        canonicalPath="/services"
        schema={servicesSchema}
      />
      {/* Header */}
      <section className="bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white text-slate-800 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            {language === 'hi'
              ? 'क्रेडिट रिपोर्ट विश्लेषण से लोन की तैयारी तक'
              : 'From Credit Report Analysis to Loan Readiness'}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {language === 'hi'
              ? 'हम किसी झूठे शॉर्टकट के बिना, कानूनी व नैतिक नियमों के तहत आपकी CIBIL और अन्य ब्यूरो प्रोफाइल को मजबूत बनाने में सहायता करते हैं।'
              : 'Structured, legal, and transparent guidance across CIBIL, Equifax, Experian, and CRIF High Mark to overcome loan rejections.'}
          </p>
        </div>
      </section>

      {/* Main Interactive Services Grid & Deep Dive */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Selector Tabs / Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {servicesData.map((item) => {
              const Icon = getIcon(item.iconName);
              const isSelected = item.id === selectedService;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedService(item.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-900 text-white border-emerald-700 shadow-md scale-[1.02]'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-3 ${isSelected ? 'text-emerald-400' : 'text-emerald-700'}`} />
                  <span className="text-xs font-bold leading-snug line-clamp-2">
                    {item.title[language]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Service Detailed View Card */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      {language === 'hi' ? 'विशेषज्ञ सेवा विवरण' : 'Comprehensive Advisory'}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {currentItem.title[language]}
                    </h2>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {currentItem.fullDesc[language]}
                </p>

                {/* Key Aspects */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3">
                    {language === 'hi' ? 'मुख्य घटक एवं कार्यक्षेत्र:' : 'What is Covered:'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentItem.bulletPoints[language].map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 leading-relaxed font-medium">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Who is it for */}
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                    {language === 'hi' ? 'यह किसके लिए उपयुक्त है?' : 'Ideal For:'}
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    {currentItem.targetAudience[language]}
                  </p>
                </div>
              </div>

              {/* Right Side: Deliverables & Direct Inquiry Card */}
              <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-3">
                    <PackageCheck className="w-4 h-4 text-emerald-700" />
                    <span>{language === 'hi' ? 'आपको क्या प्राप्त होगा' : 'Advisory Deliverables'}</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {currentItem.deliverables[language].map((del, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <Link
                    to="/book-free-call"
                    className="w-full text-center py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider block transition shadow-xs"
                  >
                    {language === 'hi' ? 'इस सेवा हेतु कॉल बुक करें' : 'Book Call for This Service'}
                  </Link>

                  <a
                    href={`https://wa.me/917275766627?text=Hello%20CareInCibil,%20I%20am%20inquiring%20about%20${encodeURIComponent(currentItem.title.en)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-200 block transition"
                  >
                    {language === 'hi' ? 'व्हाट्सएप पूछताछ' : 'WhatsApp Inquiry (Desk)'}
                  </a>
                </div>

                <div className="text-[11px] text-slate-500 leading-relaxed">
                  {language === 'hi'
                    ? 'परामर्श सीधे प्रयागराज मुख्य डेस्क (IIIT चौराहा, झलवा) द्वारा संचालित किया जाता है।'
                    : 'Consultation conducted directly from our Prayagraj Central Advisory Desk.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Cards for All 6 Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              {language === 'hi' ? 'हमारी सभी 6 क्रेडिट सेवाएं' : 'Complete 6-Pillar Credit Advisory'}
            </h2>
            <p className="text-slate-600 text-sm">
              {language === 'hi'
                ? 'चाहे पर्सनल लोन हो, होम लोन, या MSME बिजनेस क्रेडिट—हम हर पहलू पर आपका साथ देते हैं।'
                : 'Whether personal loans, home mortgages, or commercial business credit lines—we have you covered.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((s) => {
              const Icon = getIcon(s.iconName);
              return (
                <div
                  key={s.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {s.title[language]}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {s.shortDesc[language]}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedService(s.id);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-3 border-t border-slate-100 cursor-pointer"
                  >
                    <span>{language === 'hi' ? 'विस्तार से देखें' : 'View Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
