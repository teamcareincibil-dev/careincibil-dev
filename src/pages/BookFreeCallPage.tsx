import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, MessageSquare, ArrowRight, UserCheck, AlertCircle, Loader2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { WEB3FORMS_ACCESS_KEY } from '../config/web3forms';

export const BookFreeCallPage: React.FC = () => {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Prayagraj',
    preferredDate: '',
    timeSlot: '11:00 AM - 12:00 PM',
    consultationMode: 'phone',
    issueCategory: 'low_score',
    approxScore: '550-650',
    notes: ''
  });

  const [isBooked, setIsBooked] = useState(false);
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
      subject_line: `New Free Call Booking from ${formData.name} - Slot: ${formData.timeSlot}`
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
        setIsBooked(true);
      } else {
        setSubmitError(result.message || (language === 'hi' ? 'कॉल बुक करने में विफल। कृपया पुनः प्रयास करें।' : 'Failed to book call. Please try again later.'));
      }
    } catch {
      setSubmitError(language === 'hi' ? 'नेटवर्क त्रुटि। कृपया अपना इंटरनेट कनेक्शन जांचें।' : 'Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const timeSlots = [
    '10:30 AM - 11:30 AM',
    '11:30 AM - 12:30 PM',
    '02:00 PM - 03:00 PM',
    '03:30 PM - 04:30 PM',
    '05:00 PM - 06:00 PM'
  ];

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Book a Free CIBIL Consultation Call",
    "description": "Schedule a 1-on-1 confidential credit consultation with Prayagraj advisors.",
    "url": "https://careincibil.com/book-free-call"
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEOHead
        title={language === 'hi' ? 'मुफ्त कॉल बुक करें – 1-ऑन-1 क्रेडिट परामर्श' : 'Book a Free Consultation Call – 1-on-1 CIBIL Advice'}
        description={language === 'hi' ? 'हमारे प्रयागराज क्रेडिट विशेषज्ञों से सीधे बात करें और लोन रिजेक्शन व सिबिल स्कोर सुधार के सही कदम जानें।' : 'Book a 100% free, confidential 1-on-1 credit consultation with our Prayagraj advisors. Direct phone, WhatsApp, or in-person desk options.'}
        keywords="book free credit call, CIBIL consultation Prayagraj, credit counselor appointment, loan rejection consultation"
        canonicalPath="/book-free-call"
        schema={bookSchema}
      />
      {/* Header */}
      <section className="bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white text-slate-800 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            {t('book_call_title')}
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            {t('book_call_subtitle')}
          </p>
        </div>
      </section>

      {/* Booking Form Grid */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10">
            {isBooked ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {language === 'hi' ? 'आपकी निःशुल्क कॉल सफलतापूर्वक बुक हो गई है!' : 'Your Free Call Has Been Booked!'}
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                  {language === 'hi'
                    ? `धन्यवाद ${formData.name}! हमारे सीनियर क्रेडिट सलाहकार आपको ${formData.timeSlot} के समय +91 ${formData.phone} पर कॉल करेंगे।`
                    : `Thank you ${formData.name}! Our senior credit counselor will call you at +91 ${formData.phone} during ${formData.timeSlot}.`}
                </p>

                {/* Summary Box */}
                <div className="max-w-md mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">{language === 'hi' ? 'परामर्श माध्यम:' : 'Mode:'}</span>
                    <span className="font-bold text-slate-800 uppercase">{formData.consultationMode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{language === 'hi' ? 'समय स्लॉट:' : 'Slot:'}</span>
                    <span className="font-bold text-slate-800">{formData.timeSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{language === 'hi' ? 'क्रेडिट समस्या श्रेणी:' : 'Topic:'}</span>
                    <span className="font-bold text-slate-800">{formData.issueCategory}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap justify-center gap-4">
                  <a
                    href={`https://wa.me/917275766627?text=Hello%20CareInCibil,%20I%20have%20scheduled%20a%20free%20call.%0A%0A*Name:*%20${encodeURIComponent(formData.name)}%0A*Phone:*%20${encodeURIComponent(formData.phone)}%0A*City:*%20${encodeURIComponent(formData.city || 'Prayagraj')}%0A*Topic:*%20${encodeURIComponent(formData.issueCategory)}%0A*Slot:*%20${encodeURIComponent(formData.timeSlot)}%0A*Mode:*%20${encodeURIComponent(formData.consultationMode)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm"
                  >
                    <span>{language === 'hi' ? 'व्हाट्सएप डेस्क पर तुरंत चैट करें' : 'Confirm on WhatsApp Desk'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      setIsBooked(false);
                      setSubmitError(null);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        city: 'Prayagraj',
                        preferredDate: '',
                        timeSlot: '11:00 AM - 12:00 PM',
                        consultationMode: 'phone',
                        issueCategory: 'low_score',
                        approxScore: '550-650',
                        notes: ''
                      });
                    }}
                    className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
                  >
                    {language === 'hi' ? 'नया अपॉइंटमेंट बुक करें' : 'Book Another Call'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-semibold flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {t('book_call_form_title')}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {language === 'hi'
                      ? 'कोई शुल्क नहीं • कोई बाध्यता नहीं • 100% गोपनीय व सुरक्षित'
                      : 'Zero consultation fee • No obligation • 100% confidential'}
                  </p>
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {language === 'hi' ? 'आपका पूरा नाम' : 'Your Full Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'hi' ? 'उदा. विकास कुमार' : 'e.g. Vikas Kumar'}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {language === 'hi' ? 'मोबाइल नंबर (कॉल हेतु)' : 'Mobile Phone Number'} *
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
                      placeholder="example@mail.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {language === 'hi' ? 'शहर / स्थान' : 'City / Location'}
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Prayagraj"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                {/* Consultation Mode */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                    {language === 'hi' ? 'परामर्श का माध्यम चुनें:' : 'Preferred Consultation Medium:'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label
                      className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer text-xs font-semibold ${
                        formData.consultationMode === 'phone'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-1 ring-emerald-600'
                          : 'border-slate-200 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultationMode"
                        value="phone"
                        checked={formData.consultationMode === 'phone'}
                        onChange={(e) => setFormData({ ...formData, consultationMode: e.target.value })}
                        className="hidden"
                      />
                      <Phone className="w-4 h-4 text-emerald-700" />
                      <span>{language === 'hi' ? 'सीधी फोन कॉल' : 'Direct Phone Call'}</span>
                    </label>

                    <label
                      className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer text-xs font-semibold ${
                        formData.consultationMode === 'whatsapp'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-1 ring-emerald-600'
                          : 'border-slate-200 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultationMode"
                        value="whatsapp"
                        checked={formData.consultationMode === 'whatsapp'}
                        onChange={(e) => setFormData({ ...formData, consultationMode: e.target.value })}
                        className="hidden"
                      />
                      <MessageSquare className="w-4 h-4 text-emerald-700" />
                      <span>WhatsApp Audio / Chat</span>
                    </label>

                    <label
                      className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer text-xs font-semibold ${
                        formData.consultationMode === 'in_person'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-1 ring-emerald-600'
                          : 'border-slate-200 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultationMode"
                        value="in_person"
                        checked={formData.consultationMode === 'in_person'}
                        onChange={(e) => setFormData({ ...formData, consultationMode: e.target.value })}
                        className="hidden"
                      />
                      <MapPin className="w-4 h-4 text-emerald-700" />
                      <span>{language === 'hi' ? 'प्रयागराज ऑफिस में भेंट' : 'In-Person (Prayagraj Desk)'}</span>
                    </label>
                  </div>
                </div>

                {/* Primary Issue Category & Approx Score */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {language === 'hi' ? 'क्रेडिट समस्या का मुख्य कारण' : 'Primary Credit Challenge'}
                    </label>
                    <select
                      value={formData.issueCategory}
                      onChange={(e) => setFormData({ ...formData, issueCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 bg-white"
                    >
                      <option value="low_score">{language === 'hi' ? 'कम सिबिल स्कोर (300-650)' : 'Low CIBIL Score (300-650)'}</option>
                      <option value="home_loan">{language === 'hi' ? 'होम लोन रिजेक्शन' : 'Home Loan Rejection'}</option>
                      <option value="personal_loan">{language === 'hi' ? 'पर्सनल लोन रिजेक्शन' : 'Personal Loan Rejection'}</option>
                      <option value="settlement">{language === 'hi' ? 'क्रेडिट कार्ड / लोन सेटलमेंट स्टेटस' : 'Credit Card Settlement Status'}</option>
                      <option value="dispute">{language === 'hi' ? 'गलत लोन या DPD एंट्री (Dispute)' : 'Inaccurate Account / DPD Dispute'}</option>
                      <option value="business">{language === 'hi' ? 'MSME बिजनेस क्रेडिट / CMR' : 'MSME Commercial CMR'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {language === 'hi' ? 'संभावित वर्तमान स्कोर' : 'Approximate Current Score'}
                    </label>
                    <select
                      value={formData.approxScore}
                      onChange={(e) => setFormData({ ...formData, approxScore: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 bg-white"
                    >
                      <option value="under_550">&lt; 550 ({language === 'hi' ? 'गंभीर' : 'Severe'})</option>
                      <option value="550-650">550 - 650 ({language === 'hi' ? 'कम' : 'Low'})</option>
                      <option value="650-720">650 - 720 ({language === 'hi' ? 'मध्यम' : 'Moderate'})</option>
                      <option value="720+">720+ ({language === 'hi' ? 'अच्छा' : 'Good'})</option>
                      <option value="na">{language === 'hi' ? 'मालूम नहीं / पहली बार' : 'No History / Unknown'}</option>
                    </select>
                  </div>
                </div>

                {/* Time Slot Picker */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                    {language === 'hi' ? 'उपयुक्त समय स्लॉट चुनें:' : 'Select Convenient Time Slot:'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                    {timeSlots.map((slot, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeSlot: slot })}
                        className={`p-2 rounded-xl border text-xs font-semibold text-center transition ${
                          formData.timeSlot === slot
                            ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {language === 'hi' ? 'कोई अतिरिक्त विवरण (वैकल्पिक)' : 'Any Specific Question or Detail (Optional)'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={language === 'hi' ? 'उदा. किस बैंक से लोन रिजेक्ट हुआ या किस वर्ष का सेटलमेंट है...' : 'e.g. Which bank rejected or how many settled cards you have...'}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-wider transition shadow-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{language === 'hi' ? 'अपॉइंटमेंट दर्ज हो रहा है...' : 'Booking Consultation...'}</span>
                    </>
                  ) : (
                    <span>{t('book_call_submit')} →</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
