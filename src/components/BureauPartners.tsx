import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Database, FileCheck2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BureauPartners: React.FC = () => {
  const { language, t } = useLanguage();

  const bureaus = [
    {
      name: 'TransUnion CIBIL',
      type: 'Personal & Commercial',
      desc: language === 'hi' ? 'भारत का सर्वाधिक प्रयुक्त क्रेडिट ब्यूरो (300-900 स्कोर)' : 'Most referenced consumer bureau by Indian banks (300-900 score)',
      scoreRange: '300 - 900'
    },
    {
      name: 'Equifax India',
      type: 'Credit Information Services',
      desc: language === 'hi' ? 'NBFCs और माइक्रो-फाइनेंस में व्यापक रूप से मान्य' : 'Extensively referenced for retail loans & fintech pre-approvals',
      scoreRange: '300 - 850'
    },
    {
      name: 'Experian India',
      type: 'Credit Score & Analysis',
      desc: language === 'hi' ? 'क्रेडिट कार्ड व डिजिटल पर्सनल लोन में मुख्य आधार' : 'Widely checked by major private lenders & card issuers',
      scoreRange: '300 - 900'
    },
    {
      name: 'CRIF High Mark',
      type: 'Retail & Commercial Bureau',
      desc: language === 'hi' ? 'MSME, कमर्शियल व टू-व्हीलर लोन हेतु विशिष्ट' : 'Specialized across MSME commercial loans and auto finance',
      scoreRange: '300 - 900'
    }
  ];

  return (
    <section className="py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          {/* Subtle background graphics */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-10">
            
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              {t('bureau_title')}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t('bureau_subtitle')}
            </p>
          </div>

          {/* 4 Bureaus Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {bureaus.map((b, i) => (
              <div
                key={i}
                className="bg-slate-800/70 backdrop-blur-xs border border-slate-700 hover:border-emerald-500/60 rounded-2xl p-5 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                      {b.scoreRange}
                    </span>
                    <FileCheck2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{b.name}</h3>
                  <span className="text-xs text-slate-400 font-medium block mb-2">{b.type}</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{b.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-[11px] text-emerald-300 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? 'पूर्ण डेटा सुरक्षा' : 'Protected Analysis'}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                {language === 'hi'
                  ? 'बैंक-ग्रेड 256-बिट एन्क्रिप्शन • आपका डेटा केवल भारत में ही सुरक्षित रहता है'
                  : 'Bank-Grade 256-bit AES Encryption • Your financial data stays strictly confidential'}
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
