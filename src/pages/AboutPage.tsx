import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, HeartHandshake, Scale, MapPin, Phone, Users, CheckCircle, Award, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

export const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About CareInCibil",
    "description": "Learn about CareInCibil - our mission, ethical credit profile repair methodology, and Prayagraj central advisory desk.",
    "publisher": {
      "@type": "Organization",
      "name": "CareInCibil",
      "url": "https://careincibil.com"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEOHead
        title={language === 'hi' ? 'हमारे बारे में – केयर इन सिबिल प्रयागराज' : 'About Us – CareInCibil Credit Profile Advisory Prayagraj'}
        description={language === 'hi' ? 'CARE IN CIBIL (IIIT चौराहा, झलवा, प्रयागराज) का उद्देश्य आपकी क्रेडिट प्रोफाइल को कानूनी व नैतिक रूप से समझना और सुधारना है।' : 'Learn about CareInCibil\'s transparent credit advisory at IIIT Chouraha, Jhalwa, Prayagraj. Discover why thousands trust us for ethical CIBIL improvement.'}
        keywords="about CareInCibil, Prayagraj credit consultancy, ethical CIBIL advisor, credit dispute assistance Prayagraj, IIIT Chouraha Jhalwa"
        canonicalPath="/about"
        schema={aboutSchema}
      />
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white text-slate-800 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
      
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            {language === 'hi'
              ? 'क्रेडिट समझ और जिम्मेदार वित्तीय निर्णयों में विश्वसनीय साथी'
              : 'Trusted Partner for Clear Credit Guidance'}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {language === 'hi'
              ? 'हमारा उद्देश्य केवल स्कोर बढ़ाने का अवास्तविक दावा करना नहीं, बल्कि आपकी क्रेडिट प्रोफाइल को सही तरीके से समझने और सशक्त बनाने में कानूनी मार्गदर्शन प्रदान करना है।'
              : 'Empowering borrowers with factual bureau literacy, ethical dispute resolution, and disciplined loan readiness without false promises.'}
          </p>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {language === 'hi' ? 'पारदर्शिता (Transparency)' : 'Total Transparency'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'hi'
                  ? 'हम क्रेडिट ब्यूरो नियमों और बैंकिंग दिशानिर्देशों के दायरे में रहकर पूरी पारदर्शिता के साथ आपकी प्रोफाइल का मार्गदर्शन करते हैं।'
                  : 'We operate strictly under the Credit Information Companies Act, ensuring clear documentation with zero hidden agendas.'}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {language === 'hi' ? 'विश्वास व सत्यनिष्ठा (Trust)' : 'Integrity First'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'hi'
                  ? 'हर ग्राहक की वित्तीय स्थिति अनूठी होती है। हम कभी भी किसी व्यक्ति को अनुचित ऋण या फर्जी शॉर्टकट की सलाह नहीं देते।'
                  : 'Every borrower has unique cash flow realities. We never suggest illegal tampering or dubious loan application schemes.'}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {language === 'hi' ? 'सटीक परिणाम (No False Claims)' : 'Factual Timelines'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'hi'
                  ? 'हम किसी 7-दिन के जादुई 800 स्कोर का वादा नहीं करते। क्रेडिट सुधार एक चरणबद्ध प्रक्रिया है जो 30 से 90+ दिनों में स्थायी बनती है।'
                  : 'We never claim overnight 800+ score spikes. Sustainable credit repair relies on algorithmic facts and systematic dispute resolution.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The CareInCibil Story & Prayagraj Office */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {language === 'hi'
                  ? 'प्रयागराज से पूरे भारत में वित्तीय चेतना का प्रसार'
                  : 'Rooted in Prayagraj, Serving Credit Borrowers Pan-India'}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {language === 'hi'
                  ? 'CARE IN CIBIL की स्थापना IIIT चौराहा, पीपल गांव, झलवा, प्रयागराज में इस उद्देश्य के साथ हुई थी कि आम नागरिकों और छोटे उद्यमियों को जटिल बैंकिंग प्रक्रियाओं और क्रेडिट ब्यूरो (CIBIL, Equifax, Experian, CRIF) के तकनीकी नियमों को सरल भाषा में समझाया जा सके।'
                  : 'CareInCibil was founded at IIIT Chouraha, Pipal Gaon, Jhalwa, Prayagraj to bridge the acute gap in genuine credit literacy across Uttar Pradesh and India. When banks reject loans with ambiguous phrases like "policy criteria" or "DPD overdue", consumers are left helpless.'}
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {language === 'hi'
                  ? 'बाजार में कई ऐसे असामाजिक तत्व हैं जो लोगों से पैसे लेकर 7 दिनों में स्कोर ठीक करने का फर्जी दावा करते हैं। CareInCibil ने इस भ्रामक परिदृश्य को बदलकर 100% कानूनी, साक्ष्य-आधारित ब्यूरो डिस्प्यूट और वित्तीय अनुशासन को अपना मूल मंत्र बनाया है।'
                  : 'Predatory agents prey on distressed borrowers by promising instant 800 scores. CareInCibil has redefined this space through strict adherence to the Banking Ombudsman framework, RBI mandates, and authentic No Dues Certificate (NDC) reconciliations.'}
              </p>

              {/* Office Details Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>{language === 'hi' ? 'केंद्रीय कार्यालय एवं परामर्श डेस्क' : 'Head Office & Consultation Desks'}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>{language === 'hi' ? 'मुख्यालय:' : 'Central HQ:'}</strong> IIIT Chouraha, Pipal Gaon, Jhalwa, Prayagraj, UP - 211012
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>{language === 'hi' ? 'सिविल लाइंस डेस्क:' : 'Civil Lines Desk:'}</strong> Professional Report Consultation Desk, Prayagraj
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-emerald-800">
                  <span>Direct: +91 7275389977</span>
                  <span>Support: +91 7275899926</span>
                  <span>WhatsApp: 7275766627</span>
                </div>
              </div>
            </div>

            {/* Right side Stats & Credentials */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                {language === 'hi' ? 'हमारे मुख्य उपलब्धियां' : 'Our Track Record'}
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-emerald-400">27,550+</span>
                    <p className="text-xs text-slate-300">{language === 'hi' ? 'क्रेडिट प्रोफाइल ऑडिट' : 'Credit Profiles Audited'}</p>
                  </div>
                  <Users className="w-6 h-6 text-emerald-500/50" />
                </div>

                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-teal-400">₹688+ Cr</span>
                    <p className="text-xs text-slate-300">{language === 'hi' ? 'लोन एलिजिबिलिटी में सहायता' : 'Loan Approvals Assisted'}</p>
                  </div>
                  <Target className="w-6 h-6 text-teal-500/50" />
                </div>

                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-emerald-400">100%</span>
                    <p className="text-xs text-slate-300">{language === 'hi' ? 'डेटा गोपनीयता एवं सुरक्षा' : 'Data Privacy Compliance'}</p>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-emerald-500/50" />
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/book-free-call"
                  className="w-full text-center py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider block transition"
                >
                  {language === 'hi' ? 'परामर्श सत्र बुक करें' : 'Schedule Consultation'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Regulatory Standing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            {language === 'hi' ? 'कानूनी एवं विनियामक स्थिति' : 'Legal & Regulatory Framework'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {language === 'hi' ? 'सख्त नैतिक संहिता और अस्वीकरण' : 'Strict Code of Ethics & Transparency'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left bg-slate-50 p-6 rounded-2xl border border-slate-200">
            {t('footer_disclaimer_text')}
          </p>
          <div className="pt-4">
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
            >
              <span>{language === 'hi' ? 'हमारी सभी सेवाओं का विवरण देखें' : 'Explore All Our Services in Detail'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
