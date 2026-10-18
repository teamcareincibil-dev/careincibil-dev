import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Shield, Lock, FileText, CheckCircle2, AlertCircle, Phone, Mail, MapPin, Printer } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SEOHead
        title={isHi ? 'गोपनीयता नीति (Privacy Policy)' : 'Privacy Policy & Data Protection'}
        description={
          isHi
            ? 'केयर इन सिबिल की आधिकारिक गोपनीयता नीति। जानें कि हम आपके व्यक्तिगत और वित्तीय क्रेडिट डेटा की सुरक्षा कैसे करते हैं।'
            : 'CareInCibil Privacy Policy and Data Protection standards. Learn how we safeguard your personal credit reports, PAN, and identity.'
        }
        canonicalPath="/privacy-policy"
      />

      <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center sm:text-left sm:flex sm:items-center sm:justify-between border-b border-slate-200 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
                <Shield className="w-3.5 h-3.5" />
                <span>{isHi ? 'डेटा सुरक्षा और DPDP अनुपालन' : 'Data Security & DPDP Compliance'}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {isHi ? 'गोपनीयता नीति (Privacy Policy)' : 'Privacy Policy'}
              </h1>
              <p className="text-sm text-slate-500 mt-2">
                {isHi
                  ? 'अंतिम अद्यतन: 16 अक्टूबर 2026 | डिजिटल पर्सनल डेटा प्रोटेक्शन (DPDP) अधिनियम अनुरूप'
                  : 'Last Updated: October 2026 | Compliant with Digital Personal Data Protection (DPDP) Standards'}
              </p>
            </div>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-xs transition"
              title="Print Policy"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>{isHi ? 'प्रिंट करें' : 'Print Document'}</span>
            </button>
          </div>

          {/* Quick Summary Notice */}
          <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 mb-10 flex items-start gap-4">
            <Lock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              <span className="font-bold">
                {isHi ? 'डेटा गोपनीयता संकल्प:' : 'Core Privacy Commitment:'}
              </span>{' '}
              {isHi
                ? 'केयर इन सिबिल (CareInCibil) आपकी निजी और वित्तीय क्रेडिट जानकारी को किसी भी तीसरे पक्ष या बैंक को बिना आपकी स्पष्ट लिखित अनुमति के कभी नहीं बेचता और न ही साझा करता है। आपकी क्रेडिट रिपोर्ट केवल आपके स्कोर विश्लेषण और कानूनी सुधार मार्गदर्शन के लिए उपयोग की जाती है।'
                : 'CareInCibil does not sell, lease, or monetize your personal or financial credit report data to any third-party loan brokers or marketing entities. Your data is strictly utilized for your designated credit audit and dispute consultation.'}
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-8 text-slate-700 text-sm leading-relaxed bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">1</span>
                <span>{isHi ? 'हम कौन सी जानकारी एकत्र करते हैं' : 'Information We Collect'}</span>
              </h2>
              <p>
                {isHi
                  ? 'जब आप हमारी परामर्श सेवाओं का उपयोग करते हैं या निःशुल्क कॉल बुक करते हैं, तो हम निम्नलिखित आवश्यक जानकारी प्राप्त करते हैं:'
                  : 'When engaging with CareInCibil for credit advisory, score estimation, or consultation booking, we collect the following:'}
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>
                  <strong className="text-slate-800">{isHi ? 'व्यक्तिगत पहचान विवरण:' : 'Identity & Contact Details:'}</strong>{' '}
                  {isHi ? 'नाम, मोबाइल नंबर, ईमेल आईडी, शहर (जैसे प्रयागराज व अन्य राज्य)।' : 'Full Name, Phone Number, Email Address, City / State of residence.'}
                </li>
                <li>
                  <strong className="text-slate-800">{isHi ? 'वित्तीय व क्रेडिट रिकॉर्ड:' : 'Credit & Financial Records:'}</strong>{' '}
                  {isHi ? 'सिबिल/एक्सपीरियन/इक्विफैक्स/क्रिफ हाईमार्क रिपोर्ट की पीडीएफ, खाता स्थिति (Settled/Written-Off/DPD), मुकदमे संबंधी फाइलें, गलत या विवादित प्रविष्टियाँ, SMA डेटा और ऋण विवरण।' : 'Credit bureau report extracts (CIBIL, Experian, Equifax, CRIF High Mark), account status entries (Settled, Written-Off, DPD delays), suit-file records, incorrect or disputed entries, SMA (Special Mention Account) data, and loan history.'}
                </li>
                <li>
                  <strong className="text-slate-800">{isHi ? 'तकनीकी डेटा:' : 'Technical Logs:'}</strong>{' '}
                  {isHi ? 'ब्राउज़र प्रकार, आईपी पता और वेबसाइट नेविगेशन मेट्रिक्स (कुकीज़ के माध्यम से केवल सत्र प्रबंधन हेतु)।' : 'Browser type, IP address, device telemetry strictly for security and user session handling.'}
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">2</span>
                <span>{isHi ? 'हम डेटा का उपयोग किस उद्देश्य से करते हैं' : 'Purpose of Data Utilization'}</span>
              </h2>
              <p>
                {isHi
                  ? 'एकत्र की गई जानकारी का उपयोग केवल निम्नलिखित वैध वित्तीय परामर्श उद्देश्यों के लिए किया जाता है:'
                  : 'Your information is processed strictly for legitimate financial advisory and credit consulting purposes:'}
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>{isHi ? 'आपकी क्रेडिट रिपोर्ट में मौजूद गलतियों और क्लेरिकल त्रुटियों की पहचान करना।' : 'Auditing credit report inaccuracies, clerical misreports, and unauthorized inquiries.'}</li>
                <li>{isHi ? 'CICRA अधिनियम 2005 के तहत वैध ब्यूरो ऑनलाइन डिस्प्यूट ड्राफ्ट तैयार करने में मार्गदर्शन।' : 'Structuring formal dispute petitions under the Credit Information Companies (Regulation) Act, 2005.'}</li>
                <li>{isHi ? 'बैंक एनओसी (NOC) और सेटलमेंट क्लोजर स्टेटस अपडेट में क्लाइंट की सहायता करना।' : 'Assisting clients in acquiring and submitting Bank NOCs to reflect regularized "Closed" status.'}</li>
                <li>{isHi ? 'आपके द्वारा निर्धारित समय पर क्रेडिट एक्सपर्ट से परामर्श कॉल आयोजित करना।' : 'Conducting scheduled one-on-one advisory consultations over phone or WhatsApp.'}</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">3</span>
                <span>{isHi ? 'डेटा सुरक्षा और भंडारण मानक' : 'Data Protection & Security Infrastructure'}</span>
              </h2>
              <p>
                {isHi
                  ? 'हम वित्तीय डेटा की संवेदनशीलता को समझते हैं। हम एसएसएल/टीएलएस 256-बिट एन्क्रिप्शन का उपयोग करते हैं और हमारे सर्वर भारतीय डेटा संप्रभुता कानूनों के अनुरूप प्रबंधित होते हैं। आपके क्रेडिट दस्तावेजों को केवल केस की अवधि तक सुरक्षित रखा जाता है और सेवा समाप्ति पर आपके अनुरोध पर स्थायी रूप से नष्ट किया जा सकता है।'
                  : 'We implement industry-grade SSL/TLS 256-bit encryption protocols. Uploaded credit report copies are accessible solely to your assigned senior credit advisor and are permanently purged upon case resolution or upon customer written request.'}
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">4</span>
                <span>{isHi ? 'उपयोगकर्ता के अधिकार (DPDP Act, 2023)' : 'Your Rights under DPDP Act'}</span>
              </h2>
              <p>
                {isHi
                  ? 'भारतीय डेटा संरक्षण कानून के अंतर्गत आपके पास निम्नलिखित पूर्ण अधिकार हैं:'
                  : 'Under Indian digital privacy framework, you have explicit rights regarding your data:'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-slate-800 text-xs mb-1">{isHi ? 'डेटा वापस लेने का अधिकार' : 'Right to Revoke Consent'}</div>
                  <div className="text-xs text-slate-500">{isHi ? 'आप किसी भी समय अपना परामर्श रोक सकते हैं।' : 'Withdraw authorization for ongoing case advisory at any time.'}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-slate-800 text-xs mb-1">{isHi ? 'डेटा हटाने का अधिकार' : 'Right to Erasure'}</div>
                  <div className="text-xs text-slate-500">{isHi ? 'हमारी फाइलों से अपने दस्तावेज स्थायी मिटाने का अनुरोध करें।' : 'Request permanent deletion of your report and contact history.'}</div>
                </div>
              </div>
            </section>

            {/* Section 5: Grievance Redressal */}
            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">5</span>
                <span>{isHi ? 'शिकायत निवारण अधिकारी और संपर्क' : 'Grievance Officer & Contact Desk'}</span>
              </h2>
              <p>
                {isHi
                  ? 'यदि आपके पास इस गोपनीयता नीति या अपने डेटा के संबंध में कोई प्रश्न या शिकायत है, तो आप सीधे हमारे प्रयागराज कार्यालय से संपर्क कर सकते हैं:'
                  : 'For questions, data access requests, or privacy concerns, contact our designated Grievance Desk:'}
              </p>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-700">
                <div className="font-bold text-slate-900">CareInCibil Privacy & Compliance Desk</div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>IIIT Chouraha, Pipal Gaon, Jhalwa, Prayagraj - 211012, Uttar Pradesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <a href="mailto:Teamcareincibil@gmail.com" className="text-emerald-700 hover:underline">Teamcareincibil@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>+91 7275389977 / +91 7275899926 (WhatsApp: +91 7275766627)</span>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-8 flex items-center justify-between text-xs text-slate-500">
            <Link to="/" className="text-emerald-700 hover:underline font-semibold">
              ← {isHi ? 'होम पेज पर वापस जाएं' : 'Return to Home'}
            </Link>
            <Link to="/terms-of-service" className="text-emerald-700 hover:underline font-semibold">
              {isHi ? 'सेवा की शर्तें पढ़ें →' : 'Read Terms of Service →'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
