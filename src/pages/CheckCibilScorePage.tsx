import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CreditGauge } from '../components/CreditGauge';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  FileText,
  ArrowRight,
  AlertTriangle,
  RotateCcw,
  Send,
  TrendingUp,
  TrendingDown,
  Building2,
  BadgeCheck,
  Percent,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { WEB3FORMS_ACCESS_KEY } from '../config/web3forms';

export const CheckCibilScorePage: React.FC = () => {
  const { language, t } = useLanguage();

  // Questionnaire state
  const [onTimePayments, setOnTimePayments] = useState<'always' | 'occasional' | 'frequent'>('always');
  const [utilization, setUtilization] = useState<'low' | 'medium' | 'high' | 'max'>('low');
  const [creditAge, setCreditAge] = useState<'new' | 'mid' | 'old'>('mid');
  const [rejections, setRejections] = useState<'none' | 'one' | 'multiple'>('none');
  const [settlementHistory, setSettlementHistory] = useState<'none' | 'settled' | 'writtenOff'>('none');

  // Allow manual slider adjustment if user chooses
  const [manualOverride, setManualOverride] = useState<number | null>(null);

  // Lead capture form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Prayagraj',
    panNumber: '',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'estimator' | 'form'>('estimator');

  // Compute calculated score dynamically
  const calculateScore = () => {
    let score = 750;

    // 1. Payments factor (+40 to -150 pts)
    if (onTimePayments === 'always') score += 40;
    else if (onTimePayments === 'occasional') score -= 60;
    else if (onTimePayments === 'frequent') score -= 150;

    // 2. Utilization factor (+30 to -90 pts)
    if (utilization === 'low') score += 30;
    else if (utilization === 'medium') score += 0;
    else if (utilization === 'high') score -= 50;
    else if (utilization === 'max') score -= 90;

    // 3. Credit Age (+30 to -20 pts)
    if (creditAge === 'old') score += 30;
    else if (creditAge === 'mid') score += 10;
    else score -= 20;

    // 4. Rejections (+10 to -70 pts)
    if (rejections === 'none') score += 10;
    else if (rejections === 'one') score -= 30;
    else score -= 70;

    // 5. Settlement / Write-off (0 to -160 pts)
    if (settlementHistory === 'settled') score -= 100;
    else if (settlementHistory === 'writtenOff') score -= 160;

    return Math.max(320, Math.min(880, score));
  };

  const calculatedScore = calculateScore();
  const currentDisplayScore = manualOverride !== null ? manualOverride : calculatedScore;

  const handleReset = () => {
    setOnTimePayments('always');
    setUtilization('low');
    setCreditAge('mid');
    setRejections('none');
    setSettlementHistory('none');
    setManualOverride(null);
  };

  const handleGaugeChange = (newScore: number) => {
    setManualOverride(newScore);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsLoading(true);

    const payload = {
      ...formData,
      estimated_cibil_score: currentDisplayScore,
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: "CareInCibil Website",
      subject_line: `New CIBIL Report Evaluation: ${formData.fullName} (Est. Score: ${currentDisplayScore})`
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
        setFormSubmitted(true);
      } else {
        setSubmitError(result.message || (language === 'hi' ? 'अनुरोध दर्ज करने में विफल। कृपया पुनः प्रयास करें।' : 'Failed to submit request. Please try again later.'));
      }
    } catch {
      setSubmitError(language === 'hi' ? 'नेटवर्क त्रुटि। कृपया अपना इंटरनेट कनेक्शन जांचें।' : 'Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "CareInCibil Score Estimator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "url": "https://careincibil.com/check-cibil-score",
    "description": "Free instant CIBIL score simulator and bureau audit request application.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEOHead
        title={language === 'hi' ? 'सिबिल स्कोर चेक करें – मुफ्त सॉफ्ट एस्टीमेट व रिपोर्ट विश्लेषण' : 'Check CIBIL Score Online – Free Soft Estimator & Report Audit'}
        description={language === 'hi' ? 'बिना सिबिल स्कोर को नुकसान पहुंचाए तुरंत संभावित स्कोर जानें और विशेषज्ञ ब्यूरो रिपोर्ट विश्लेषण का अनुरोध करें।' : 'Estimate your credit score with our soft simulation tool (zero impact on CIBIL). Request a line-by-line bureau health audit from Prayagraj experts.'}
        keywords="check CIBIL score, free CIBIL estimator, soft credit inquiry, CIBIL score calculator, CareInCibil report audit, Prayagraj"
        canonicalPath="/check-cibil-score"
        schema={toolSchema}
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white text-slate-800 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 mb-4">
            <Lock className="w-3.5 h-3.5 text-emerald-700" />
            {language === 'hi' ? '100% फ्री सॉफ्ट एस्टीमेट • सिबिल पर कोई असर नहीं' : 'Free Soft Estimate • Zero Score Impact'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            {t('score_check_title')}
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            {t('score_check_subtitle')}
          </p>

          {/* Quick Tab Switcher: Estimator vs Official Form */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white border border-slate-300 shadow-2xs">
            <button
              onClick={() => setActiveTab('estimator')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeTab === 'estimator'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'hi' ? '1. लाइव स्कोर एस्टीमेटर' : '1. Live Score Estimator'}
            </button>
            <button
              onClick={() => setActiveTab('form')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeTab === 'form'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'hi' ? '2. आधिकारिक रिपोर्ट ऑडिट फॉर्म' : '2. Official Report Audit Request'}
            </button>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'estimator' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left 7 cols: Interactive Questions */}
              <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
                      {language === 'hi' ? 'क्रेडिट प्रोफाइल कैलकुलेटर' : 'Step 1: Rapid Profile Assessment'}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                      {language === 'hi' ? 'अपनी वित्तीय स्थिति का चयन करें' : 'Select Your Credit Profile Factors'}
                    </h2>
                  </div>
                  <button
                    onClick={handleReset}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-700 bg-slate-100 hover:bg-emerald-50 rounded-lg transition"
                    title="Reset to defaults"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{language === 'hi' ? 'रीसेट' : 'Reset'}</span>
                  </button>
                </div>

                {/* Question 1: Payment History */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      {language === 'hi' ? '1. ईएमआई व कार्ड बिल भुगतान (35% वेटेज):' : '1. On-Time Payment History (35% weight):'}
                    </label>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {onTimePayments === 'always' ? '+40 pts' : onTimePayments === 'occasional' ? '-60 pts' : '-150 pts'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => { setOnTimePayments('always'); setManualOverride(null); }}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition cursor-pointer ${
                        onTimePayments === 'always'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-2 ring-emerald-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold">✓ {language === 'hi' ? 'हमेशा समय पर' : '100% On-Time'}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{language === 'hi' ? 'कोई लेट पेमेंट नहीं' : 'Zero missed payments'}</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => { setOnTimePayments('occasional'); setManualOverride(null); }}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition cursor-pointer ${
                        onTimePayments === 'occasional'
                          ? 'bg-amber-50 border-amber-600 text-amber-900 ring-2 ring-amber-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold">⚠ {language === 'hi' ? '1-2 बार देरी' : '1-2 Minor Delays'}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{language === 'hi' ? '15-30 दिन की देरी' : 'Less than 30 DPD'}</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => { setOnTimePayments('frequent'); setManualOverride(null); }}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition cursor-pointer ${
                        onTimePayments === 'frequent'
                          ? 'bg-rose-50 border-rose-600 text-rose-900 ring-2 ring-rose-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold">✕ {language === 'hi' ? 'अक्सर लेट' : 'Frequent Defaults'}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{language === 'hi' ? '60-90+ DPD ओवरड्यू' : '60 to 90+ DPD overdue'}</div>
                    </button>
                  </div>
                </div>

                {/* Question 2: Utilization */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      {language === 'hi' ? '2. क्रेडिट कार्ड उपयोग अनुपात (30% वेटेज):' : '2. Credit Card Limit Utilization (30% weight):'}
                    </label>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {utilization === 'low' ? '+30 pts' : utilization === 'medium' ? '0 pts' : utilization === 'high' ? '-50 pts' : '-90 pts'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <button
                      type="button"
                      onClick={() => { setUtilization('low'); setManualOverride(null); }}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition cursor-pointer ${
                        utilization === 'low'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-2 ring-emerald-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      &lt; 30% ({language === 'hi' ? 'आदर्श' : 'Optimal'})
                    </button>
                    <button
                      type="button"
                      onClick={() => { setUtilization('medium'); setManualOverride(null); }}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition cursor-pointer ${
                        utilization === 'medium'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-2 ring-emerald-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      30% - 50%
                    </button>
                    <button
                      type="button"
                      onClick={() => { setUtilization('high'); setManualOverride(null); }}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition cursor-pointer ${
                        utilization === 'high'
                          ? 'bg-amber-50 border-amber-600 text-amber-900 ring-2 ring-amber-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      50% - 80%
                    </button>
                    <button
                      type="button"
                      onClick={() => { setUtilization('max'); setManualOverride(null); }}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition cursor-pointer ${
                        utilization === 'max'
                          ? 'bg-rose-50 border-rose-600 text-rose-900 ring-2 ring-rose-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      &gt; 80% ({language === 'hi' ? 'अति-उपयोग' : 'Overburdened'})
                    </button>
                  </div>
                </div>

                {/* Question 3: Credit History Age */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      {language === 'hi' ? '3. सबसे पुराने लोन या कार्ड की उम्र (15% वेटेज):' : '3. Credit History Longevity (15% weight):'}
                    </label>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {creditAge === 'old' ? '+30 pts' : creditAge === 'mid' ? '+10 pts' : '-20 pts'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => { setCreditAge('old'); setManualOverride(null); }}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition cursor-pointer ${
                        creditAge === 'old'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-2 ring-emerald-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold">5+ {language === 'hi' ? 'वर्ष से अधिक' : 'Years Established'}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{language === 'hi' ? 'लंबा और पुराना इतिहास' : 'Seasoned credit profile'}</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => { setCreditAge('mid'); setManualOverride(null); }}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition cursor-pointer ${
                        creditAge === 'mid'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-2 ring-emerald-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold">1 – 4 {language === 'hi' ? 'वर्ष' : 'Years'}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{language === 'hi' ? 'मध्यम इतिहास' : 'Moderate account age'}</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => { setCreditAge('new'); setManualOverride(null); }}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition cursor-pointer ${
                        creditAge === 'new'
                          ? 'bg-amber-50 border-amber-600 text-amber-900 ring-2 ring-amber-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold">&lt; 1 {language === 'hi' ? 'वर्ष / नया' : 'Year / New to Credit'}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{language === 'hi' ? 'नया खाताधारक' : 'Thin file borrower'}</div>
                    </button>
                  </div>
                </div>

                {/* Question 4: Recent Rejections */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      {language === 'hi' ? '4. हालिया लोन रिजेक्शन (पिछले 6 माह):' : '4. Recent Loan/Card Rejections (Last 6 Months):'}
                    </label>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {rejections === 'none' ? '+10 pts' : rejections === 'one' ? '-30 pts' : '-70 pts'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => { setRejections('none'); setManualOverride(null); }}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition cursor-pointer ${
                        rejections === 'none'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-2 ring-emerald-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold">{language === 'hi' ? 'कोई रिजेक्शन नहीं' : 'Zero Rejections'}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{language === 'hi' ? 'स्वच्छ इनक्वायरी रिकॉर्ड' : 'No hard inquiry spikes'}</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => { setRejections('one'); setManualOverride(null); }}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition cursor-pointer ${
                        rejections === 'one'
                          ? 'bg-amber-50 border-amber-600 text-amber-900 ring-2 ring-amber-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold">{language === 'hi' ? '1 बार रिजेक्ट' : '1 Rejection'}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{language === 'hi' ? 'हाल में मना किया गया' : 'Recent inquiry alert'}</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => { setRejections('multiple'); setManualOverride(null); }}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition cursor-pointer ${
                        rejections === 'multiple'
                          ? 'bg-rose-50 border-rose-600 text-rose-900 ring-2 ring-rose-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold">{language === 'hi' ? '2 या अधिक रिजेक्शन' : '2+ Rejections'}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{language === 'hi' ? 'क्रेडिट-हंग्री एल्गोरिदम टैग' : 'Algorithmically flagged'}</div>
                    </button>
                  </div>
                </div>

                {/* Question 5: Settlement / Write-off History */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      {language === 'hi' ? '5. सेटलमेंट या राइट-ऑफ रिकॉर्ड:' : '5. Past Settlement or Write-Off Status:'}
                    </label>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {settlementHistory === 'none' ? '0 pts (Clean)' : settlementHistory === 'settled' ? '-100 pts' : '-160 pts'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => { setSettlementHistory('none'); setManualOverride(null); }}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition cursor-pointer ${
                        settlementHistory === 'none'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-2 ring-emerald-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold">{language === 'hi' ? 'क्लीन (कोई सेटलमेंट नहीं)' : 'Clean (No Settlements)'}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{language === 'hi' ? 'सभी लोन सामान्य या बंद' : 'Standard closed accounts'}</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => { setSettlementHistory('settled'); setManualOverride(null); }}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition cursor-pointer ${
                        settlementHistory === 'settled'
                          ? 'bg-amber-50 border-amber-600 text-amber-900 ring-2 ring-amber-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold">{language === 'hi' ? '1 खाता "Settled" है' : '1 Settled Account'}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{language === 'hi' ? 'OTS सेटलमेंट कराया था' : 'One-time settlement taken'}</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => { setSettlementHistory('writtenOff'); setManualOverride(null); }}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition cursor-pointer ${
                        settlementHistory === 'writtenOff'
                          ? 'bg-rose-50 border-rose-600 text-rose-900 ring-2 ring-rose-600/30'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold">{language === 'hi' ? 'राइट-ऑफ / कानूनी डिफॉल्ट' : 'Written-Off / Suit Filed'}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{language === 'hi' ? 'बैंक ने बट्टे खाते में डाला' : 'Lender marked bad debt'}</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right 5 cols: Prominent Live Meter & Action Box */}
              <div className="lg:col-span-5 space-y-6">
                {/* Real-time Controlled Gauge */}
                <CreditGauge
                  score={currentDisplayScore}
                  onChange={handleGaugeChange}
                  interactive={true}
                  title={language === 'hi' ? 'लाइव सिमुलेशन परिणाम' : 'Calculated Score Output'}
                  subtitle={language === 'hi' ? 'रीयल-टाइम स्कोर मीटर' : 'Dynamic Score Needle'}
                  showSlider={true}
                />

                {/* Score Breakdown Analysis Box */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center justify-between">
                    <span>{language === 'hi' ? 'स्कोर कारक विश्लेषण' : 'Score Diagnostic Breakdown'}</span>
                    <span className="text-xs font-extrabold text-emerald-800">
                      {currentDisplayScore} / 900
                    </span>
                  </h4>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                      <span className="text-slate-600">{language === 'hi' ? 'भुगतान आदतें:' : 'Repayment Habit:'}</span>
                      <span className={`font-bold ${onTimePayments === 'always' ? 'text-emerald-700' : 'text-rose-600'}`}>
                        {onTimePayments === 'always' ? '+40 pts (Strong)' : onTimePayments === 'occasional' ? '-60 pts (Alert)' : '-150 pts (Severe)'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                      <span className="text-slate-600">{language === 'hi' ? 'कार्ड उपयोग अनुपात:' : 'Card Utilization:'}</span>
                      <span className={`font-bold ${utilization === 'low' ? 'text-emerald-700' : 'text-amber-600'}`}>
                        {utilization === 'low' ? '+30 pts (<30%)' : utilization === 'medium' ? '0 pts (30-50%)' : '-50 pts (>50%)'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                      <span className="text-slate-600">{language === 'hi' ? 'सेटलमेंट प्रभाव:' : 'Settlement Tag:'}</span>
                      <span className={`font-bold ${settlementHistory === 'none' ? 'text-emerald-700' : 'text-rose-600'}`}>
                        {settlementHistory === 'none' ? '0 pts (Clean)' : settlementHistory === 'settled' ? '-100 pts (Settled)' : '-160 pts (Write-off)'}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveTab('form')}
                      className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FileText className="w-4 h-4" />
                      <span>{language === 'hi' ? 'आधिकारिक CIBIL रिपोर्ट ऑडिट करवाएं' : 'Request Official Bureau Audit'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Tab 2: Formal Report Audit Request Form */
            <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
                  {language === 'hi' ? 'आधिकारिक ब्यूरो विश्लेषण' : 'Step 2: Formal Report Analysis'}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  {t('score_check_form_heading')}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {language === 'hi'
                    ? 'अपनी CIBIL, Equifax या Experian रिपोर्ट हमारे प्रयागराज डेस्क से लाइन-दर-लाइन जांच करवाएं।'
                    : 'Get your full bureau report audited line-by-line by our Prayagraj credit consultants.'}
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950">
                    {language === 'hi' ? 'अनुरोध सफलतापूर्वक दर्ज!' : 'Audit Request Received!'}
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    {language === 'hi'
                      ? 'धन्यवाद! हमारे सीनियर क्रेडिट सलाहकार शीघ्र ही +91 ' + formData.phone + ' पर संपर्क करेंगे।'
                      : 'Thank you! Our credit specialist will call you at +91 ' + formData.phone + ' within working hours.'}
                  </p>

                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={`https://wa.me/917275766627?text=Hello%20CareInCibil,%20I%20have%20submitted%20my%20credit%20report%20request.%0A%0A*Name:*%20${encodeURIComponent(formData.fullName)}%0A*Phone:*%20${encodeURIComponent(formData.phone)}%0A*City:*%20${encodeURIComponent(formData.city || 'Prayagraj')}%0A*Email:*%20${encodeURIComponent(formData.email)}%0A*Estimated%20Score:*%20${currentDisplayScore}%0A*Issue:*%20${encodeURIComponent(formData.notes || 'Please audit my CIBIL report')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider shadow-xs transition"
                    >
                      <span>{language === 'hi' ? 'व्हाट्सएप पर तुरंत रिपोर्ट भेजें' : 'Send Details to WhatsApp Desk'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setSubmitError(null);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          city: 'Prayagraj',
                          panNumber: '',
                          notes: ''
                        });
                      }}
                      className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
                    >
                      {language === 'hi' ? 'नया फॉर्म भरें' : 'Submit Another Request'}
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
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {language === 'hi' ? 'पूरा नाम (आधार / पैन के अनुसार)' : 'Full Name (as per PAN)'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={language === 'hi' ? 'उदा. अमित श्रीवास्तव' : 'e.g. Amit Srivastava'}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        {language === 'hi' ? 'मोबाइल नंबर (कॉल / WhatsApp)' : 'Mobile Phone'} *
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
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        {language === 'hi' ? 'शहर / जिला' : 'City / Town'}
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

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {language === 'hi' ? 'ईमेल पता' : 'Email Address'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="yourname@gmail.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {language === 'hi' ? 'मुख्य समस्या या प्रश्न बताएं' : 'Credit Issue / Loan Goal'}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={language === 'hi' ? 'उदा. होम लोन रिजेक्ट हो गया है या पुराना क्रेडिट कार्ड सेटलमेंट दिख रहा है...' : 'e.g., Home loan rejected by bank, or want to remove settled mark...'}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  {/* Security Note */}
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{t('badge_confidential')}</span>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveTab('estimator')}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      ← {language === 'hi' ? 'एस्टीमेटर पर लौटें' : 'Back to Estimator'}
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-wider transition shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{language === 'hi' ? 'अनुरोध भेजा जा रहा है...' : 'Submitting Request...'}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{language === 'hi' ? 'विश्लेषण अनुरोध भेजें' : 'Submit Free Evaluation'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
