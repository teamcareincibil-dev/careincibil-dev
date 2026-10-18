import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PhoneCall, FileUp, Microscope, ClipboardCheck, LifeBuoy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MethodologySteps: React.FC = () => {
  const { language, t } = useLanguage();

  const steps = [
    {
      num: '01',
      title: t('step1_title'),
      desc: t('step1_desc'),
      icon: PhoneCall,
      highlight: language === 'hi' ? 'कॉल / व्हाट्सएप संपर्क' : 'Initial Contact'
    },
    {
      num: '02',
      title: t('step2_title'),
      desc: t('step2_desc'),
      icon: FileUp,
      highlight: language === 'hi' ? 'सुरक्षित रिपोर्ट अपलोड' : 'Confidential Sharing'
    },
    {
      num: '03',
      title: t('step3_title'),
      desc: t('step3_desc'),
      icon: Microscope,
      highlight: language === 'hi' ? 'DPD व त्रुटि डायग्नोसिस' : 'Line-by-line Audit'
    },
    {
      num: '04',
      title: t('step4_title'),
      desc: t('step4_desc'),
      icon: ClipboardCheck,
      highlight: language === 'hi' ? 'चरणबद्ध कार्ययोजना' : 'Actionable Plan'
    },
    {
      num: '05',
      title: t('step5_title'),
      desc: t('step5_desc'),
      icon: LifeBuoy,
      highlight: language === 'hi' ? 'ब्यूरो डिस्प्यूट व फॉलो-अप' : 'Resolution Support'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            {t('method_title')}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {t('method_subtitle')}
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="group relative bg-white hover:bg-white border border-slate-200 hover:border-emerald-300 rounded-xl p-6 transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-emerald-700/40 group-hover:text-emerald-700 transition-colors">
                      {st.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 group-hover:bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    {st.highlight}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {st.title.replace(/^[0-9]+\.\s*/, '')}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>{language === 'hi' ? `चरण ${i + 1}` : `Phase ${i + 1}`}</span>
                  <span className="text-emerald-700 font-medium">✓ {language === 'hi' ? 'सत्यापित' : 'Verified'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className="mt-14 p-8 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-1">
              {t('cta_banner_title')}
            </h4>
           
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            
            <Link
              to="/book-free-call"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm border border-emerald-700 transition"
            >
              {language === 'hi' ? 'फोन कॉल शेड्यूल करें' : 'Schedule Phone Call'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
