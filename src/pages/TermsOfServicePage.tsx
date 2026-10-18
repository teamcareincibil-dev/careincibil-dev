import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Scale, ShieldAlert, CheckCircle2, AlertTriangle, FileText, Printer, Building2, MapPin } from 'lucide-react';

export const TermsOfServicePage: React.FC = () => {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SEOHead
        title={isHi ? 'नियम और शर्तें एवं कानूनी अस्वीकरण' : 'Terms of Service & Regulatory Disclaimer'}
        description={
          isHi
            ? 'केयर इन सिबिल की आधिकारिक सेवा शर्तें, परामर्श दिशानिर्देश और आरबीआई क्रेडिट ब्यूरो संबंधित कानूनी अस्वीकरण।'
            : 'CareInCibil Terms of Service, credit consultation guidelines, and official non-affiliation regulatory disclaimer.'
        }
        canonicalPath="/terms-of-service"
      />

      <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center sm:text-left sm:flex sm:items-center sm:justify-between border-b border-slate-200 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
                <Scale className="w-3.5 h-3.5" />
                <span>{isHi ? 'पारदर्शी सेवा अनुबंध' : 'Transparent Service Framework'}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {isHi ? 'सेवा की शर्तें और कानूनी अस्वीकरण' : 'Terms of Service & Disclaimer'}
              </h1>
              <p className="text-sm text-slate-500 mt-2">
                {isHi
                  ? 'अंतिम अद्यतन: 16 अक्टूबर 2026 | सभी परामर्श अनुबंधों पर लागू'
                  : 'Effective: October 2026 | Governing all advisory and consultation retainers'}
              </p>
            </div>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-xs transition"
              title="Print Document"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>{isHi ? 'प्रिंट करें' : 'Print Document'}</span>
            </button>
          </div>

          {/* Critical Statutory Disclaimer Callout */}
          <div className="p-6 rounded-3xl bg-amber-50/90 border-2 border-amber-200 mb-10">
            <div className="flex items-start gap-4">
              <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
                <h2 className="text-sm sm:text-base font-bold text-amber-900">
                  {isHi ? 'वैधानिक विनियामक अस्वीकरण (Statutory Disclaimer)' : 'Statutory Regulatory Disclaimer'}
                </h2>
                <p>
                  {isHi
                    ? 'केयर इन सिबिल (CareInCibil – careincibil.com) एक स्वतंत्र वित्तीय क्रेडिट परामर्श फर्म है। हम ट्रांसयूनियन सिबिल (TransUnion CIBIL™), एक्सपीरियन (Experian™), इक्विफैक्स (Equifax™), क्रिफ हाईमार्क (CRIF High Mark™) या भारतीय रिज़र्व बैंक (RBI) के संबद्ध एजेंट या प्रतिनिधि नहीं हैं। सभी ब्यूरो ट्रेडमार्क उनके संबंधित स्वामियों की संपत्ति हैं।'
                    : 'CareInCibil (careincibil.com) operates as an independent credit information analysis and financial consulting firm. CareInCibil is NOT an official agency, bureau affiliate, or authorized representative of TransUnion CIBIL™, Experian™, Equifax™, CRIF High Mark™, or the Reserve Bank of India (RBI). All trademark names belong to their respective statutory owners.'}
                </p>
                <p className="font-semibold text-amber-900">
                  {isHi
                    ? 'हम किसी भी प्रकार का "रातों-रात 100% स्कोर ठीक करने" या अवैध डेटा हेरफेर का झूठा दावा नहीं करते। हमारे सभी प्रयास क्रेडिट सूचना कंपनी (विनियमन) अधिनियम (CICRA) 2005 के अनुसार वास्तविक त्रुटि सुधार और वित्तीय अनुशासन पर आधारित हैं।'
                    : 'We reject and condemn misleading overnight score manipulation claims. All our advisory actions strictly adhere to lawful correction protocols under the Credit Information Companies (Regulation) Act (CICRA), 2005.'}
                </p>
              </div>
            </div>
          </div>

          {/* Main Terms Sections */}
          <div className="space-y-8 text-slate-700 text-sm leading-relaxed bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">1</span>
                <span>{isHi ? 'परामर्श सेवा का दायरा' : 'Scope of Advisory Services'}</span>
              </h2>
              <p>
                {isHi
                  ? 'CareInCibil क्लाइंट्स को निम्नलिखित क्षेत्रों में पेशेवर परामर्श सहायता प्रदान करता है:'
                  : 'CareInCibil renders professional consulting in the following operational areas:'}
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>{isHi ? 'क्रेडिट रिपोर्ट की तकनीकी विसंगतियों, गलत नामों, डुप्लिकेट खातों और गलत डीपीडी (DPD) की पहचान।' : 'Forensic audit of credit reports for misreported accounts, typographical errors, and erroneous DPD entries.'}</li>
                <li>{isHi ? 'ब्यूरो ऑनलाइन डिस्प्यूट फॉर्मूले और बैंकों को भेजे जाने वाले औपचारिक पत्राचार का मसौदा तैयार करना।' : 'Formulating procedural dispute drafts and formal representation letters addressed to lenders and credit bureaus.'}</li>
                <li>{isHi ? 'बैंक सेटलमेंट मामलों में नो ड्यूज सर्टिफिकेट (NOC) प्राप्त करने और रिपोर्ट अपडेट कराने का मार्गदर्शन।' : 'Structuring Bank Settlement resolutions to procure valid No Dues Certificates (NOC) and status update regularizations.'}</li>
                <li>{isHi ? 'भविष्य में होम लोन, पर्सनल लोन या एमएसएमई बिजनेस क्रेडिट योग्यता में सुधार के लिए व्यक्तिगत योजना।' : 'Personalized debt-to-income and credit utilization restructuring roadmap for home and business loan readiness.'}</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">2</span>
                <span>{isHi ? 'क्लाइंट की जिम्मेदारियां एवं सत्यनिष्ठा' : 'Client Obligations & Truthfulness'}</span>
              </h2>
              <p>
                {isHi
                  ? 'सफल परिणाम और सटीक रिपोर्ट सुधार के लिए क्लाइंट को निम्नलिखित का पालन करना अनिवार्य है:'
                  : 'To enable accurate credit audit and compliant dispute processing, the client agrees to:'}
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>{isHi ? 'अपने वित्तीय इतिहास और लोन बकाए के संबंध में पूर्णतः सत्य और सटीक जानकारी देना।' : 'Provide strictly authentic, non-falsified loan histories, settlement receipts, and identification proofs.'}</li>
                <li>{isHi ? 'बैंकों या ब्यूरो से प्राप्त ओटीपी या सत्यापन संदेशों में समय पर सहयोग करना।' : 'Promptly communicate official responses or authentication OTPs received directly from reporting banks.'}</li>
                <li>{isHi ? 'सलाह अवधि के दौरान नए गैर-जरूरी क्रेडिट कार्ड या लोन के लिए बार-बार अनियंत्रित आवेदन न करना।' : 'Refrain from making multiple hard loan inquiries or acquiring high-interest unvetted credit during the counseling period.'}</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">3</span>
                <span>{isHi ? 'समय-सीमा और ब्यूरो की प्रतिक्रिया (CICRA 30-दिन नियम)' : 'Turnaround Timelines (CICRA 30-Day Window)'}</span>
              </h2>
              <p>
                {isHi
                  ? 'आरबीआई और सीआईसीआरए विनियमों के तहत, जब किसी बैंक या क्रेडिट ब्यूरो को डिस्प्यूट भेजा जाता है, तो उनके पास सत्यापन और डेटा संशोधन के लिए कानूनी रूप से 30 से 45 कार्य दिवस का समय होता है। केयर इन सिबिल इस प्रक्रिया को तेजी से आगे बढ़ाने के लिए फॉलो-अप का काम करता है, परंतु अंतिम डेटा संशोधन का अधिकार केवल संबंधित बैंक और ब्यूरो के पास सुरक्षित होता है।'
                  : 'Under statutory CICRA rules, credit institutions are mandated a standard window of 30 to 45 business days to investigate and report corrections back to credit bureaus. While CareInCibil actively tracks and escalates your petition, actual ledger adjustments remain within the exclusive operational purview of the reporting bank and bureau.'}
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">4</span>
                <span>{isHi ? 'फीस और भुगतान पारदर्शिता' : 'Advisory Retainer Fees & Transparency'}</span>
              </h2>
              <p>
                {isHi
                  ? 'हमारी परामर्श योजनाएं (बेसिक, स्टैंडर्ड, प्रीमियम, एक्सक्विजिट) पारदर्शी पेशेवर सेवा शुल्क पर आधारित हैं। सभी शुल्कों का विवरण सेवा शुरू होने से पहले लिखित में दिया जाता है। किसी भी प्रकार का कोई छिपा हुआ शुल्क (hidden fee) नहीं है।'
                  : 'All retainer packages (Basic, Standard, Premium, Exquisite) are fixed professional fees covering audit drafting, document follow-ups, and dedicated counselor support. There are zero unannounced hidden charges.'}
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">5</span>
                <span>{isHi ? 'कानूनी क्षेत्राधिकार (Jurisdiction)' : 'Governing Law & Legal Jurisdiction'}</span>
              </h2>
              <p>
                {isHi
                  ? 'यह अनुबंध भारतीय कानूनों और उत्तर प्रदेश राज्य के नियमों द्वारा शासित होगा। किसी भी प्रकार के विवाद या कानूनी प्रक्रिया की स्थिति में विशेष क्षेत्राधिकार प्रयागराज (इलाहाबाद), उत्तर प्रदेश की सक्षम अदालतों का होगा।'
                  : 'These terms and all advisory engagements shall be governed by the laws of India. Any legal dispute or interpretation shall fall under the exclusive jurisdiction of the competent courts in Prayagraj (Allahabad), Uttar Pradesh.'}
              </p>
            </section>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-8 flex items-center justify-between text-xs text-slate-500">
            <Link to="/" className="text-emerald-700 hover:underline font-semibold">
              ← {isHi ? 'होम पेज पर वापस जाएं' : 'Return to Home'}
            </Link>
            <Link to="/privacy-policy" className="text-emerald-700 hover:underline font-semibold">
              {isHi ? 'गोपनीयता नीति पढ़ें →' : 'Read Privacy Policy →'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;
