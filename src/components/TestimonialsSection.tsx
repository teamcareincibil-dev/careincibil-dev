import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { language, t } = useLanguage();

  const testimonials = [
    {
      name: 'Amit Srivastava',
      location: 'Civil Lines, Prayagraj',
      role: language === 'hi' ? 'होम लोन आवेदक' : 'Home Loan Applicant',
      rating: 4,
      avatar: 'AS',
      text: {
        en: 'An old settled personal loan was erroneously showing as pending default in my CIBIL report, causing repeated home loan rejections. The CareInCibil team guided me through filing a formal bureau dispute with bank proof. Extremely honest, legal, and transparent consultancy!',
        hi: 'मेरी CIBIL रिपोर्ट में एक पुराना सेटल्ड लोन गलत तरीके से पेंडिंग दिख रहा था जिसकी वजह से होम लोन रिजेक्ट हो रहा था। CARE IN CIBIL टीम ने सही ब्यूरो डिस्प्यूट फाइल करने में पूरा मार्गदर्शन दिया। बेहद ईमानदार और पारदर्शी कंसल्टेंसी!'
      },
      metric: language === 'hi' ? 'होम लोन स्वीकृत: ₹42 लाख' : 'Home Loan Approved: ₹42 Lakhs'
    },
    {
      name: 'Vikas Kumar',
      location: 'Naini, Prayagraj',
      role: language === 'hi' ? 'व्यापारी (Business Owner)' : 'MSME Business Owner',
      rating: 5,
      avatar: 'VK',
      text: {
        en: 'The best thing is that they made NO false promises of jumping to 800 in 7 days. Instead, they educated me on credit card utilization and timely repayment habits. Within 4 months of structured guidance, my credit profile strengthened completely.',
        hi: 'सबसे अच्छी बात यह लगी कि इन्होंने कोई झूठा वादा नहीं किया कि 7 दिन में स्कोर 800 कर देंगे। बल्कि क्रेडिट कार्ड यूटिलाइजेशन और समय पर रीपेमेंट करने की सही आदतें समझाईं जिससे 4 महीने में प्रोफाइल में सुधार दिखा।'
      },
      metric: language === 'hi' ? 'स्कोर वृद्धि: 580 से 740+' : 'Score Gain: 580 to 740+'
    },
    {
      name: 'Pooja Tiwari',
      location: 'Prayagraj, UP',
      role: language === 'hi' ? 'कॉरपोरेट प्रोफेशनल' : 'Corporate Professional',
      rating: 3,
      avatar: 'PT',
      text: {
        en: 'I was very anxious about the negative impact of an old credit card settlement. Their consultation clearly explained the difference between Settled and Full Closure with NDC. All my financial data was handled with 100% confidentiality.',
        hi: 'क्रेडिट कार्ड सेटलमेंट के असर को लेकर मेरे मन में बहुत डर था। इनकी कंसल्टेंसी से मुझे सेटलमेंट और फुल क्लोजर का अंतर समझ आया। पूरी जानकारी बहुत ही गोपनीय तरीके से हैंडल की गई।'
      },
      metric: language === 'hi' ? 'एनओसी प्राप्त एवं क्लोज्ड' : 'NOC Secured & Clean Closed'
    },
    {
      name: 'Rohan Mishra',
      location: 'Software Professional • UP',
      role: language === 'hi' ? 'सॉफ्टवेयर इंजीनियर' : 'Software Engineer',
      rating: 5,
      avatar: 'RM',
      text: {
        en: 'Got my housing loan sanctioned after 3 consecutive rejections by private banks. CareInCibil spotted an erroneous duplicate enquiry cluster and resolved it with the bureau within 30 days.',
        hi: 'निजी बैंकों द्वारा 3 बार लगातार रिजेक्शन के बाद मेरा हाउसिंग लोन स्वीकृत हुआ। केयर इन सिबिल ने मेरी रिपोर्ट में गलत डुप्लीकेट इनक्वायरी पकड़ी और 30 दिनों में ब्यूरो से हटवाई।'
      },
      metric: language === 'hi' ? '30-दिवसीय डिस्प्यूट समाधान' : '30-Day Dispute Resolved'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
     
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            {t('testimonials_title')}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {t('testimonials_subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-emerald-700/20" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic">
                  "{item.text[language]}"
                </p>
              </div>

              <div>
                <div className="mb-3 p-2 rounded-lg bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{item.metric}</span>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
