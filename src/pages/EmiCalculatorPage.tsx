import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, TrendingDown, ShieldCheck, ArrowRight, DollarSign, Percent, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

export const EmiCalculatorPage: React.FC = () => {
  const { language } = useLanguage();

  // EMI Calculator Inputs
  const [loanAmount, setLoanAmount] = useState<number>(3000000); // 30 Lakhs
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years

  // Calculate standard EMI: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  const emi =
    monthlyRate === 0
      ? loanAmount / totalMonths
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  // Comparison Calculator: High CIBIL (8.40%) vs Low CIBIL (9.25%)
  const primeROI = 8.4;
  const highRiskROI = 9.45;
  const primeMonthlyRate = primeROI / (12 * 100);
  const highMonthlyRate = highRiskROI / (12 * 100);

  const primeEMI =
    (loanAmount * primeMonthlyRate * Math.pow(1 + primeMonthlyRate, totalMonths)) /
    (Math.pow(1 + primeMonthlyRate, totalMonths) - 1);
  const highEMI =
    (loanAmount * highMonthlyRate * Math.pow(1 + highMonthlyRate, totalMonths)) /
    (Math.pow(1 + highMonthlyRate, totalMonths) - 1);

  const primeTotalPayment = primeEMI * totalMonths;
  const highTotalPayment = highEMI * totalMonths;
  const interestSaved = highTotalPayment - primeTotalPayment;

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Loan EMI & CIBIL Interest Savings Calculator",
    "applicationCategory": "FinancialCalculator",
    "operatingSystem": "All",
    "url": "https://careincibil.com/calculator",
    "description": "Calculate monthly home & personal loan EMI and see cash saved with a 750+ CIBIL score."
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEOHead
        title={language === 'hi' ? 'ईएमआई व सिबिल बचत कैलकुलेटर – लोन ब्याज बचत' : 'Loan EMI & CIBIL Score Savings Calculator – Instant Simulator'}
        description={language === 'hi' ? 'ऑनलाइन ईएमआई कैलकुलेटर: जानें कि 750+ सिबिल स्कोर होने पर होम लोन की ब्याज दरों में लाखों रुपये कैसे बचाए जा सकते हैं।' : 'Calculate monthly loan EMI and simulate how improving your credit score to 750+ saves up to ₹5-7 Lakhs in bank interest charges.'}
        keywords="loan EMI calculator, CIBIL score interest calculator, home loan EMI simulator, credit score savings calculator"
        canonicalPath="/calculator"
        schema={calculatorSchema}
      />
      {/* Header */}
      <section className="bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white text-slate-800 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            {language === 'hi'
              ? 'लोन ईएमआई एवं सिबिल स्कोर बचत कैलकुलेटर'
              : 'Loan EMI & CIBIL Score Savings Calculator'}
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            {language === 'hi'
              ? 'देखें कि सिबिल स्कोर 750+ होने पर आप होम या पर्सनल लोन की ब्याज दरों में लाखों रुपये कैसे बचा सकते हैं।'
              : 'Calculate monthly EMIs and discover how having a 750+ credit score saves you lakhs in interest.'}
          </p>
        </div>
      </section>

      {/* Main Calculator Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 1. Standard EMI Calculator */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="border-b border-slate-100 pb-4 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mt-2">
                {language === 'hi' ? 'मासिक ईएमआई की गणना करें' : 'Calculate Your Monthly EMI'}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Sliders */}
              <div className="lg:col-span-7 space-y-6">
                {/* Loan Amount */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>{language === 'hi' ? 'लोन राशि (Loan Amount):' : 'Loan Amount:'}</span>
                    <span className="text-emerald-800 text-sm font-extrabold">
                      ₹{loanAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={100000}
                    max={15000000}
                    step={50000}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                    aria-label="Loan amount slider"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>₹1 Lakh</span>
                    <span>₹50 Lakhs</span>
                    <span>₹1.5 Crore</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>{language === 'hi' ? 'ब्याज दर (Interest Rate % p.a.):' : 'Interest Rate (% p.a.):'}</span>
                    <span className="text-emerald-800 text-sm font-extrabold">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={6.5}
                    max={18.0}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                    aria-label="Interest rate slider"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>6.5% ({language === 'hi' ? 'प्राइम' : 'Prime'})</span>
                    <span>10.5% ({language === 'hi' ? 'औसत' : 'Avg'})</span>
                    <span>18.0% ({language === 'hi' ? 'पर्सनल' : 'Personal'})</span>
                  </div>
                </div>

                {/* Tenure */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>{language === 'hi' ? 'अवधि (Tenure):' : 'Loan Tenure:'}</span>
                    <span className="text-emerald-800 text-sm font-extrabold">
                      {tenureYears} {language === 'hi' ? 'वर्ष' : 'Years'} ({totalMonths} {language === 'hi' ? 'माह' : 'Months'})
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                    aria-label="Tenure slider"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>1 {language === 'hi' ? 'वर्ष' : 'Yr'}</span>
                    <span>15 {language === 'hi' ? 'वर्ष' : 'Yrs'}</span>
                    <span>30 {language === 'hi' ? 'वर्ष' : 'Yrs'}</span>
                  </div>
                </div>
              </div>

              {/* Result Summary Box */}
              <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-emerald-400">
                    {language === 'hi' ? 'आपकी मासिक ईएमआई' : 'Monthly Loan EMI'}
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                    ₹{Math.round(emi).toLocaleString('en-IN')}
                  </div>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    {language === 'hi' ? 'प्रति माह देय राशि' : 'Payable every month'}
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{language === 'hi' ? 'मूल ऋण राशि (Principal):' : 'Principal Amount:'}</span>
                    <span className="font-bold text-white">₹{loanAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{language === 'hi' ? 'कुल देय ब्याज (Interest):' : 'Total Interest:'}</span>
                    <span className="font-bold text-amber-400">₹{Math.round(totalInterest).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-800 text-sm">
                    <span className="text-slate-300 font-semibold">{language === 'hi' ? 'कुल भुगतान (Total):' : 'Total Payment:'}</span>
                    <span className="font-extrabold text-emerald-400">₹{Math.round(totalPayment).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <Link
                  to="/book-free-call"
                  className="w-full text-center py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider block transition"
                >
                  {language === 'hi' ? 'लोन पात्रता परामर्श लें' : 'Check Loan Readiness'}
                </Link>
              </div>
            </div>
          </div>

          {/* 2. CIBIL Impact Simulator: How Much Does a 750+ Score Save? */}
          <div className="bg-emerald-900/10 border-2 border-emerald-600/30 rounded-3xl p-6 sm:p-10 space-y-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 mb-2">
                <TrendingDown className="w-3.5 h-3.5 text-emerald-700" />
                {language === 'hi' ? 'स्कोर का वित्तीय प्रभाव' : 'The Value of Fixing Your CIBIL Score'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {language === 'hi'
                  ? '750+ सिबिल स्कोर होने पर ब्याज में कितनी बचत होती है?'
                  : 'How Much Money Does a 750+ Score Save You in Real Cash?'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                {language === 'hi'
                  ? 'बैंक खराब या औसत स्कोर (600-680) वाले ग्राहकों से 1% से 2% अधिक ब्याज वसूलते हैं। नीचे दिए गए तुलनात्मक विश्लेषण को देखें:'
                  : 'Borrowers with scores below 680 are charged risk premiums of 100 to 150 basis points. See how that compounds over your loan tenure:'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Low CIBIL Card */}
              <div className="bg-white rounded-2xl border border-rose-200 p-6 shadow-xs space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
                  {language === 'hi' ? 'स्कोर 600 - 680 (औसत)' : 'Score 600 - 680 (Low/Fair)'}
                </span>
                <div>
                  <span className="text-xs text-slate-500 block">{language === 'hi' ? 'औसत बैंक ब्याज दर:' : 'Typical Bank ROI:'}</span>
                  <span className="text-2xl font-extrabold text-rose-700">{highRiskROI}%</span>
                </div>
                <div className="space-y-1 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <p><strong>{language === 'hi' ? 'मासिक ईएमआई:' : 'Monthly EMI:'}</strong> ₹{Math.round(highEMI).toLocaleString('en-IN')}</p>
                  <p><strong>{language === 'hi' ? 'कुल भुगतान:' : 'Total Outflow:'}</strong> ₹{Math.round(highTotalPayment).toLocaleString('en-IN')}</p>
                </div>
              </div>

              {/* Prime CIBIL Card */}
              <div className="bg-white rounded-2xl border border-emerald-300 p-6 shadow-md ring-2 ring-emerald-500/20 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  {language === 'hi' ? 'स्कोर 750+ (प्राइम)' : 'Score 750+ (Prime Borrower)'}
                </span>
                <div>
                  <span className="text-xs text-slate-500 block">{language === 'hi' ? 'रियायती ब्याज दर:' : 'Concessional ROI:'}</span>
                  <span className="text-2xl font-extrabold text-emerald-700">{primeROI}%</span>
                </div>
                <div className="space-y-1 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <p><strong>{language === 'hi' ? 'मासिक ईएमआई:' : 'Monthly EMI:'}</strong> ₹{Math.round(primeEMI).toLocaleString('en-IN')}</p>
                  <p><strong>{language === 'hi' ? 'कुल भुगतान:' : 'Total Outflow:'}</strong> ₹{Math.round(primeTotalPayment).toLocaleString('en-IN')}</p>
                </div>
              </div>

              {/* Savings Box */}
              <div className="bg-emerald-800 text-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-200">
                    {language === 'hi' ? 'आपकी कुल सीधी बचत' : 'Your Direct Cash Savings'}
                  </span>
                  <div className="text-3xl font-black text-white mt-2">
                    ₹{Math.round(interestSaved).toLocaleString('en-IN')}
                  </div>
                  <p className="text-xs text-emerald-100 mt-2 leading-relaxed">
                    {language === 'hi'
                      ? 'केवल अपने क्रेडिट स्कोर को 650 से 750+ तक सुधारकर आप इतने रुपये की बचत कर सकते हैं!'
                      : 'Just by rebuilding your score to 750+, you keep this entire amount in your pocket!'}
                  </p>
                </div>

                <Link
                  to="/book-free-call"
                  className="w-full text-center py-2.5 px-3 rounded-xl bg-white text-emerald-950 font-bold text-xs uppercase tracking-wider mt-4 block transition hover:bg-emerald-50"
                >
                  {language === 'hi' ? 'स्कोर सुधार योजना शुरू करें' : 'Start Score Rebuilding'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
