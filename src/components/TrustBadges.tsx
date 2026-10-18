import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Scale, Lock, Award, Building } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const { language } = useLanguage();

  const badges = [
    {
      icon: Lock,
      title: language === 'hi' ? '100% डेटा गोपनीयता' : '100% Confidential Handling',
      desc: language === 'hi' ? 'आपकी संवेदनशील रिपोर्ट व वित्तीय विवरण पूरी तरह सुरक्षित' : 'Bank-grade encryption & data privacy'
    },
    {
      icon: Scale,
      title: language === 'hi' ? 'कानूनी व नैतिक मार्गदर्शन' : 'Genuine Bureau Compliance',
      desc: language === 'hi' ? 'आरबीआई एवं क्रेडिट ब्यूरो नियमावली के अंतर्गत कार्य' : 'Operates under Credit Info Companies Act'
    },
    {
      icon: Award,
      title: language === 'hi' ? 'कोई झूठे वादे नहीं' : 'No False Overnight Claims',
      desc: language === 'hi' ? '7-दिन में 800 स्कोर जैसे फर्जी दावों से 100% दूर' : 'Truthful, algorithmic timeline guidance'
    },
    {
      icon: Building,
      title: language === 'hi' ? 'प्रयागराज अधिकृत ऑफिस' : 'Prayagraj Central Desk',
      desc: language === 'hi' ? 'IIIT चौराहा, झलवा व सिविल लाइंस कंसल्टेंसी' : 'In-person consultation & physical presence'
    }
  ];

  return (
    <div className="bg-white text-slate-900 py-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{b.title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
