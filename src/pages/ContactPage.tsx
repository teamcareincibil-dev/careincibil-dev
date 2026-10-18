import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { WEB3FORMS_ACCESS_KEY } from '../config/web3forms';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'CIBIL Report Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsLoading(true);

    const payload = {
      ...formData,
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: "CareInCibil Website",
      subject_line: `New Inquiry from ${formData.name} - ${formData.subject}`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(result.message || (language === 'hi' ? 'संदेश भेजने में विफल। कृपया पुनः प्रयास करें।' : 'Failed to send message. Please try again later.'));
      }
    } catch {
      setSubmitError(language === 'hi' ? 'नेटवर्क त्रुटि। कृपया अपना इंटरनेट कनेक्शन जांचें।' : 'Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact CareInCibil Prayagraj",
    "description": "Get in touch with CareInCibil credit advisory desk at IIIT Chouraha, Jhalwa, Prayagraj.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "CareInCibil",
      "telephone": ["+917275389977", "+917275899926"],
      "email": "teamcareincibil@gmail.com", 
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "IIIT Chouraha, Jhalwa",
        "addressLocality": "Prayagraj",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "211012",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEOHead
        title={language === 'hi' ? 'संपर्क करें – केयर इन सिबिल प्रयागराज डेस्क' : 'Contact Us – CareInCibil Prayagraj Consultation Desk'}
        description={language === 'hi' ? 'CareInCibil केंद्रीय कार्यालय: IIIT चौराहा, झलवा, प्रयागराज - 211012। हेल्पलाइन: +91 7275389977, WhatsApp: 7275766627।' : 'Contact CareInCibil at IIIT Chouraha, Jhalwa, Prayagraj. Call +91 7275389977 or WhatsApp 7275766627 for instant credit profile advisory.'}
        keywords="contact CareInCibil, Prayagraj credit office, CIBIL advisor phone number, IIIT Chouraha Jhalwa Prayagraj, Civil Lines credit desk"
        canonicalPath="/contact"
        schema={contactSchema}
      />
      {/* Header */}
      <section className="bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white text-slate-800 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            {t('contact_title')}
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            {t('contact_subtitle')}
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 Cols: Contact Information & Location */}
            <div className="lg:col-span-5 space-y-6">
              {/* Central Office Card */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
                <div>
      
                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    CareInCibil Headquarters
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">
                        {language === 'hi' ? 'झलवा केंद्रीय कार्यालय:' : 'Jhalwa Central Office:'}
                      </strong>
                      <span>IIIT Chouraha, Jhalwa, Prayagraj, Uttar Pradesh - 211012</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">
                        {language === 'hi' ? 'सिविल लाइंस डेस्क:' : 'Civil Lines Desk:'}
                      </strong>
                      <span>Civil Lines, Prayagraj • Professional Consultation Desk</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">
                        {language === 'hi' ? 'फोन हेल्पलाइन:' : 'Phone Helplines:'}
                      </strong>
                      <div className="space-y-0.5 font-medium">
                        <p><a href="tel:+917275389977" className="text-emerald-800 hover:underline">+91 7275389977</a></p>
                        <p><a href="tel:+917275899926" className="text-emerald-800 hover:underline">+91 7275899926</a></p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">
                        WhatsApp Support:
                      </strong>
                      <a
                        href="https://wa.me/917275766627"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        +91 7275766627 (Instant Chat)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">
                        {language === 'hi' ? 'आधिकारिक ईमेल:' : 'Official Email:'}
                      </strong>
                      <a href="mailto:teamcareincibil@gmail.com" className="text-emerald-800 hover:underline">
                        teamcareincibil@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">
                        {language === 'hi' ? 'कार्यालय समय:' : 'Working Hours:'}
                      </strong>
                      <span>{t('hours_text')}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{t('badge_no_false_claims')}</span>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Interactive Message Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
              <div className="border-b border-slate-100 pb-4 mb-6">
            
                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  {language === 'hi' ? 'सीधे हमारी कंसल्टेंसी टीम से जुड़ें' : 'Get in Touch with Our Credit Experts'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {language === 'hi'
                    ? 'हम 24 कार्य घंटों के भीतर आपसे सीधे संपर्क करेंगे।'
                    : 'We respond within 24 working hours with factual guidance.'}
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950">
                    {language === 'hi' ? 'संदेश सफलतापूर्वक प्राप्त हुआ!' : 'Message Received Successfully!'}
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-900 max-w-md mx-auto leading-relaxed">
                    {language === 'hi'
                      ? 'धन्यवाद! आपकी पूछताछ हमारी प्रयागराज टीम को भेज दी गई है। हम शीघ्र ही +91 ' + formData.phone + ' पर आपसे संपर्क करेंगे।'
                      : 'Thank you! Your inquiry has been routed to our Prayagraj desk. We will connect with you at +91 ' + formData.phone + ' shortly.'}
                  </p>

                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={`https://wa.me/917275766627?text=Hello%20CareInCibil,%20I%20have%20an%20inquiry%20regarding%20${encodeURIComponent(formData.subject)}.%0A%0A*Name:*%20${encodeURIComponent(formData.name)}%0A*Phone:*%20${encodeURIComponent(formData.phone)}%0A*Email:*%20${encodeURIComponent(formData.email)}%0A*Message:*%20${encodeURIComponent(formData.message || 'Please consult me')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition shadow-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{language === 'hi' ? 'व्हाट्सएप पर तुरंत विवरण भेजें' : 'Send to WhatsApp Desk Now'}</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setSubmitError(null);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          subject: 'CIBIL Report Inquiry',
                          message: ''
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
                    >
                      {language === 'hi' ? 'अन्य संदेश भेजें' : 'Send Another Message'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitError && (
                    <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-semibold flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        {language === 'hi' ? 'पूरा नाम' : 'Your Full Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={language === 'hi' ? 'उदा. पूजा तिवारी' : 'e.g. Pooja Tiwari'}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        {language === 'hi' ? 'मोबाइल नंबर (कॉल / WhatsApp)' : 'Mobile Number'} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="7275389977"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        {language === 'hi' ? 'ईमेल पता' : 'Email Address'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        {language === 'hi' ? 'विषय / विषयवस्तु' : 'Inquiry Topic'}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 bg-white"
                      >
                        <option value="CIBIL Report Inquiry">{language === 'hi' ? 'सिबिल रिपोर्ट विश्लेषण' : 'CIBIL Report Analysis'}</option>
                        <option value="Low Score Improvement">{language === 'hi' ? 'कम स्कोर सुधार (300-750+)' : 'Low Score Improvement'}</option>
                        <option value="Settlement Issue">{language === 'hi' ? 'लोन या कार्ड सेटलमेंट समाधान' : 'Credit Card Settlement Removal'}</option>
                        <option value="Loan Rejection">{language === 'hi' ? 'होम या पर्सनल लोन रिजेक्शन' : 'Home / Personal Loan Rejection'}</option>
                        <option value="Bureau Dispute">{language === 'hi' ? 'गलत ब्यूरो एंट्री पर विवाद' : 'Inaccurate Bureau Account Dispute'}</option>
                        <option value="MSME Commercial">{language === 'hi' ? 'MSME व्यापारिक क्रेडिट (CMR)' : 'MSME Commercial CMR Rank'}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {language === 'hi' ? 'विस्तृत संदेश या अपनी समस्या लिखें' : 'Message / Details of Your Credit Situation'} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={language === 'hi' ? 'कृपया अपनी स्थिति संक्षेप में बताएं...' : 'Please describe the loan or score issue...'}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-wider transition shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{language === 'hi' ? 'संदेश भेजा जा रहा है...' : 'Sending Message...'}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{language === 'hi' ? 'पूछताछ भेजें' : 'Send Message Now'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
