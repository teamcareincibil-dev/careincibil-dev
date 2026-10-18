import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import {
  Home,
  ArrowLeft,
  Gauge,
  PhoneCall,
  CalendarCheck,
  Search,
  Compass,
  FileSearch,
  Calculator,
  HelpCircle
} from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const isHindi = language === 'hi';

  const quickLinks = [
    {
      to: '/',
      icon: Home,
      title: isHindi ? 'होम पेज' : 'Home Page',
      desc: isHindi ? 'मुख्य वेबसाइट पर वापस जाएं' : 'Return to main dashboard',
    },
    {
      to: '/check-cibil-score',
      icon: Gauge,
      title: isHindi ? 'सिबिल स्कोर जांचें' : 'Check CIBIL Score',
      desc: isHindi ? 'मुफ़्त स्कोर सिमुलेटर और रिपोर्ट' : 'Instant simulator & report analysis',
    },
    {
      to: '/services',
      icon: FileSearch,
      title: isHindi ? 'हमारी सेवाएं' : 'What We Do',
      desc: isHindi ? 'क्रेडिट रिपेयर और लीगल डिस्प्यूट' : 'Credit repair & legal dispute services',
    },
    {
      to: '/calculator',
      icon: Calculator,
      title: isHindi ? 'ईएमआई कैलकुलेटर' : 'EMI & Savings Calc',
      desc: isHindi ? 'ब्याज बचत और लोन टूल' : 'Loan interest & credit savings tools',
    },
    {
      to: '/book-free-call',
      icon: CalendarCheck,
      title: isHindi ? 'फ्री कॉल बुक करें' : 'Book a Free Call',
      desc: isHindi ? 'विशेषज्ञों से निःशुल्क सलाह' : 'Schedule 1-on-1 advisor session',
    },
    {
      to: '/contact',
      icon: PhoneCall,
      title: isHindi ? 'संपर्क करें' : 'Contact Us',
      desc: isHindi ? 'प्रयागराज ऑफिस और हेल्पलाइन' : 'Prayagraj office & helpdesk',
    },
  ];

  return (
    <>
      <SEOHead
        title={isHindi ? '404 - पेज नहीं मिला' : '404 - Page Not Found'}
        description={
          isHindi
            ? 'जो पेज आप ढूंढ रहे हैं वह केयर इन सिबिल पर मौजूद नहीं है या हटा दिया गया है।'
            : 'The page you requested could not be found on CareInCibil. Return to the home page or browse credit solutions.'
        }
      />

      <div className="min-h-[85vh] bg-gradient-to-b from-emerald-50/40 via-white to-slate-50 flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle decorative background circles */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-3xl mx-auto w-full text-center mt-30">
          


          {/* Heading & Subtitle */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {isHindi
              ? 'क्षमा करें! यह पेज उपलब्ध नहीं है'
              : "Oops! We Couldn't Find That Page"}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed mb-8">
            {isHindi
              ? 'आप जिस यूआरएल को खोलने का प्रयास कर रहे हैं वह या तो स्थानांतरित कर दिया गया है, हटा दिया गया है या टाइपिंग में त्रुटि हो सकती है। चिंता न करें, आपका सिबिल डेटा पूरी तरह सुरक्षित है।'
              : "The page or link you're attempting to access might have been relocated, renamed, or temporarily unavailable. Let's get your credit journey back on track."}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:ring-4 focus:ring-emerald-200"
            >
              <Home className="w-4 h-4" />
              <span>{isHindi ? 'होम पेज पर जाएं' : 'Go to Home Page'}</span>
            </Link>

            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-300 shadow-xs hover:shadow-md transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isHindi ? 'पीछे जाएं' : 'Go Back'}</span>
            </button>

            <Link
              to="/book-free-call"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-sm border border-emerald-200 transition-colors duration-200"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{isHindi ? 'फ्री कॉल बुक करें' : 'Book Free Call'}</span>
            </Link>
          </div>

          {/* Quick Helpful Navigation Cards */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs text-left">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <h2 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                <Search className="w-4 h-4 text-emerald-700" />
                <span>
                  {isHindi
                    ? 'अक्सर देखे जाने वाले लोकप्रिय पेज'
                    : 'Popular Destinations You Might Be Looking For'}
                </span>
              </h2>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                CareInCibil Hub
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {quickLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    to={item.to}
                    className="group p-3.5 rounded-xl border border-slate-100 hover:border-emerald-200 bg-slate-50/50 hover:bg-emerald-50/40 transition-all duration-150 flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-white group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white border border-slate-200/80 group-hover:border-emerald-600 transition-colors shadow-2xs shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-900 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                        {item.desc}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Direct Assistance Footnote */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2 text-center sm:text-left">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {isHindi
                    ? 'क्रेडिट स्कोर सुधार संबंधित सहायता चाहिए? हमारी टीम आपकी सेवा में है।'
                    : 'Need direct help analyzing your CIBIL report? Our Prayagraj desk is available.'}
                </span>
              </div>
              <a
                href="tel:+918009922000"
                className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 hover:border-emerald-200 transition"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>+91 80099 22000</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
