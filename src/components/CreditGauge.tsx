import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Info, Sparkles, TrendingUp, AlertTriangle } from 'lucide-react';

export interface CreditGaugeProps {
  score?: number; // Controlled score value
  initialScore?: number; // Fallback initial score
  onChange?: (newScore: number) => void;
  interactive?: boolean;
  title?: string;
  subtitle?: string;
  showSlider?: boolean;
}

export const CreditGauge: React.FC<CreditGaugeProps> = ({
  score: controlledScore,
  initialScore = 728,
  onChange,
  interactive = true,
  title,
  subtitle,
  showSlider
}) => {
  const { language } = useLanguage();
  const [internalScore, setInternalScore] = useState<number>(
    controlledScore !== undefined ? controlledScore : initialScore
  );

  // Synchronize internal state when props change
  useEffect(() => {
    if (controlledScore !== undefined) {
      setInternalScore(controlledScore);
    } else if (initialScore !== undefined) {
      setInternalScore(initialScore);
    }
  }, [controlledScore, initialScore]);

  const activeScore = controlledScore !== undefined ? controlledScore : internalScore;

  // Score range: 300 to 900
  const minScore = 300;
  const maxScore = 900;
  const clampedScore = Math.max(minScore, Math.min(maxScore, Math.round(activeScore)));
  const percentage = (clampedScore - minScore) / (maxScore - minScore);

  // Needle angle from -90 deg (left/red) to 90 deg (right/green)
  const angle = -90 + percentage * 180;

  const handleScoreChange = (newVal: number) => {
    setInternalScore(newVal);
    if (onChange) {
      onChange(newVal);
    }
  };

  const getScoreCategory = (s: number) => {
    if (s < 550) {
      return {
        label: language === 'hi' ? 'खराब (Poor: 300-549)' : 'Poor (300-549)',
        color: 'text-rose-600',
        bg: 'bg-rose-50 border-rose-200',
        badgeBg: 'bg-rose-600 text-white',
        approvalOdds: language === 'hi' ? 'स्वीकृति संभावना: 10% (बहुत कम)' : 'Approval Odds: 10% (Critical Risk)',
        advice: language === 'hi'
          ? 'लोन और क्रेडिट कार्ड अप्रूवल में गंभीर रुकावट। तत्काल आधिकारिक ब्यूरो ऑडिट, सेटलमेंट और डीपीडी निवारण आवश्यक।'
          : 'High probability of automated bank rejection. Urgent bureau report dispute, overdue clearance, and debt remediation required.'
      };
    }
    if (s < 650) {
      return {
        label: language === 'hi' ? 'औसत (Fair: 550-649)' : 'Fair (550-649)',
        color: 'text-amber-600',
        bg: 'bg-amber-50 border-amber-200',
        badgeBg: 'bg-amber-600 text-white',
        approvalOdds: language === 'hi' ? 'स्वीकृति संभावना: 45% (मध्यम)' : 'Approval Odds: 45% (Moderate)',
        advice: language === 'hi'
          ? 'लोन मिल सकता है पर 1% से 2% अधिक ब्याज दर चुकानी होगी। क्रेडिट कार्ड उपयोग 30% से कम करें।'
          : 'Eligible for select secured loans or NBFCs, but with higher risk interest premiums. Reduce card utilization below 30%.'
      };
    }
    if (s < 750) {
      return {
        label: language === 'hi' ? 'अच्छा (Good: 650-749)' : 'Good (650-749)',
        color: 'text-teal-700',
        bg: 'bg-teal-50 border-teal-200',
        badgeBg: 'bg-teal-700 text-white',
        approvalOdds: language === 'hi' ? 'स्वीकृति संभावना: 80% (अच्छी)' : 'Approval Odds: 80% (High)',
        advice: language === 'hi'
          ? 'संतोषजनक स्थिति। थोड़ी सी योजना व अनुशासित समय पर भुगतान से आप 750+ प्राइम ब्याज दरों के हकदार बन सकते हैं।'
          : 'Healthy credit profile. A disciplined 90-day plan can easily push you into prime 750+ rates and save lakhs in interest.'
      };
    }
    return {
      label: language === 'hi' ? 'उत्कृष्ट (Excellent: 750-900)' : 'Excellent / Prime (750-900)',
      color: 'text-emerald-700',
      bg: 'bg-emerald-50 border-emerald-200',
      badgeBg: 'bg-emerald-700 text-white',
      approvalOdds: language === 'hi' ? 'स्वीकृति संभावना: 98% (सर्वोत्तम)' : 'Approval Odds: 98% (Prime Tier)',
      advice: language === 'hi'
        ? 'प्राइम बॉरोअर स्टेटस! बैंक प्री-अप्रूव्ड होम लोन, लाइफटाइम फ्री प्रीमियम कार्ड और न्यूनतम ब्याज दरों के पूर्ण पात्र।'
        : 'Prime borrower status. Eligible for pre-approved instant loans, premium lifetime-free cards, and lowest bank ROI.'
    };
  };

  const category = getScoreCategory(clampedScore);
  const allowSlider = showSlider !== undefined ? showSlider : interactive;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition">
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
        <div>
          <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
            {title || (language === 'hi' ? 'सिबिल स्कोर मीटर' : 'CIBIL Score Gauge')}
          </span>
          <h3 className="text-base font-bold text-slate-900">
            {subtitle || (language === 'hi' ? 'लाइव स्कोर एस्टीमेटर' : 'Live Score Estimator')}
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>300 – 900</span>
        </span>
      </div>

      {/* SVG Arc Gauge */}
      <div className="relative flex flex-col items-center justify-center pt-6 pb-2">
        <svg viewBox="0 0 200 115" className="w-72 max-w-full overflow-visible">
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="28%" stopColor="#f59e0b" />
              <stop offset="60%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>

          {/* Background Arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#f1f5f9"
            strokeWidth="15"
            strokeLinecap="round"
          />

          {/* Color track segments */}
          {/* Active colored gradient path */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="15"
            strokeLinecap="round"
            strokeDasharray="251.3"
            strokeDashoffset={251.3 - (percentage * 251.3)}
            style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
          />

          {/* Scale labels */}
          <text x="14" y="115" fontSize="8" fill="#94a3b8" fontWeight="700">300</text>
          <text x="40" y="44" fontSize="7" fill="#94a3b8" fontWeight="600">550</text>
          <text x="94" y="24" fontSize="8" fill="#64748b" fontWeight="700">650</text>
          <text x="148" y="44" fontSize="7" fill="#94a3b8" fontWeight="600">750</text>
          <text x="175" y="115" fontSize="8" fill="#94a3b8" fontWeight="700">900</text>

          {/* Pivot and Animated Needle */}
          <g
            transform={`rotate(${angle} 100 100)`}
            style={{ transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
          >
            <line x1="100" y1="100" x2="100" y2="30" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="100" cy="100" r="7" fill="#0f172a" />
            <circle cx="100" cy="100" r="3" fill="#ffffff" />
          </g>
        </svg>

        {/* Big Score Readout with smooth number display */}
        <div className="text-center -mt-2">
          <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight transition-all">
            {clampedScore}
          </div>
          <div className={`mt-1.5 inline-block text-xs font-bold px-3.5 py-1 rounded-full border ${category.bg} ${category.color}`}>
            {category.label}
          </div>
          <div className="text-[11px] font-semibold text-slate-500 mt-1">
            {category.approvalOdds}
          </div>
        </div>
      </div>

      {/* Interactive slider if enabled */}
      {allowSlider && (
        <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>{language === 'hi' ? 'स्लाइडर से टेस्ट करें:' : 'Drag to test different score levels:'}</span>
            <span className="font-extrabold text-slate-800 text-sm">{clampedScore}</span>
          </div>
          <input
            type="range"
            min={300}
            max={900}
            step={5}
            value={clampedScore}
            onChange={(e) => handleScoreChange(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
            aria-label="CIBIL score slider"
          />

          {/* Quick Preset Buttons */}
          <div className="grid grid-cols-4 gap-1.5 pt-1">
            <button
              type="button"
              onClick={() => handleScoreChange(480)}
              className="py-1 px-1.5 rounded-lg text-[10px] font-bold border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 transition"
            >
              480 ({language === 'hi' ? 'खराब' : 'Poor'})
            </button>
            <button
              type="button"
              onClick={() => handleScoreChange(610)}
              className="py-1 px-1.5 rounded-lg text-[10px] font-bold border border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-700 transition"
            >
              610 ({language === 'hi' ? 'औसत' : 'Fair'})
            </button>
            <button
              type="button"
              onClick={() => handleScoreChange(720)}
              className="py-1 px-1.5 rounded-lg text-[10px] font-bold border border-teal-200 bg-teal-50 hover:bg-teal-100 text-teal-700 transition"
            >
              720 ({language === 'hi' ? 'अच्छा' : 'Good'})
            </button>
            <button
              type="button"
              onClick={() => handleScoreChange(785)}
              className="py-1 px-1.5 rounded-lg text-[10px] font-bold border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition"
            >
              785 ({language === 'hi' ? 'उत्कृष्ट' : 'Prime'})
            </button>
          </div>
        </div>
      )}

      {/* Advisory Note */}
      <div className="mt-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
        <p className="text-xs text-slate-600 leading-relaxed">
          {category.advice}
        </p>
      </div>
    </div>
  );
};
