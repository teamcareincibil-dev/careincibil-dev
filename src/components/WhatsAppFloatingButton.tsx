import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Phone, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const { language } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      {/* {showTooltip && (
        <div className="bg-white border border-slate-200 text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-lg flex items-center gap-2 animate-bounce">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-semibold text-slate-800">
            {language === 'hi' ? 'CIBIL हेल्पडेस्क से सीधे चैट करें' : 'Chat with CIBIL Advisors'}
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )} */}

      <div className="flex items-center gap-2">
        

        {/* WhatsApp primary floating button */}
        <a
          href="https://wa.me/917275766627?text=Hello%20CareInCibil,%20I%20need%20guidance%20with%20my%20CIBIL%20score%20and%20credit%20report."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all relative group"
          title={language === 'hi' ? 'व्हाट्सएप पर बात करें' : 'WhatsApp Support Desk'}
          aria-label="WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center border-2 border-white ">
            1
          </span>
        </a>
      </div>
    </div>
  );
};
