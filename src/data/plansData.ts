export interface PricingPlan {
  id: string;
  name: { en: string; hi: string };
  badge?: { en: string; hi: string };
  isPopular?: boolean;
  price: string;
  duration: { en: string; hi: string };
  bestFor: { en: string; hi: string };
  features: { en: string[]; hi: string[] };
}

export const individualPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: { en: 'Basic', hi: 'बेसिक' },
    price: '₹10,999',
    duration: { en: 'For 3 months', hi: '3 माह की अवधि' },
    bestFor: {
      en: 'For individuals looking to fix credit report issues and improve their credit score.',
      hi: 'उन व्यक्तियों के लिए जो रिपोर्ट में मौजूद त्रुटियों की पहचान और बुनियादी सुधार चाहते हैं।'
    },
    features: {
      en: [
        'Detailed Credit Report Analysis across bureaus',
        'Identification of Errors & Negative Remarks',
        'Credit Issue Resolution Support Guidance',
        'Personalized Improvement Suggestions',
        'Basic Score Improvement Guidance',
        'Email & WhatsApp Ticketing Support'
      ],
      hi: [
        'सभी प्रमुख ब्यूरो से विस्तृत क्रेडिट रिपोर्ट विश्लेषण',
        'त्रुटियों और नकारात्मक रिमार्क्स की सटीक पहचान',
        'क्रेडिट समस्या समाधान सहायता मार्गदर्शन',
        'व्यक्तिगत प्राथमिक सुधार सुझाव',
        'बुनियादी स्कोर सुधार मार्गदर्शन',
        'ईमेल व व्हाट्सएप टिकटिंग सपोर्ट'
      ]
    }
  },
  {
    id: 'standard',
    name: { en: 'Standard', hi: 'स्टैंडर्ड' },
    price: '₹14,999',
    duration: { en: 'For 6 months', hi: '6 माह की अवधि' },
    bestFor: {
      en: 'For customers seeking guided credit improvement with dedicated expert support.',
      hi: 'उन ग्राहकों के लिए जो समर्पित विशेषज्ञ के साथ चरणबद्ध सुधार और निगरानी चाहते हैं।'
    },
    features: {
      en: [
        'All features in Basic Plan included',
        'Dedicated Credit Advisor Assigned',
        'Monthly Credit Monitoring & Progress Review',
        'Structured Score Improvement Program',
        'Priority Email & WhatsApp Desk Support',
        'Guidance for Better Loan Eligibility & Approvals'
      ],
      hi: [
        'बेसिक प्लान के सभी फीचर्स सम्मिलित',
        'समर्पित क्रेडिट विशेषज्ञ (Advisor) आवंटित',
        'मासिक क्रेडिट मॉनिटरिंग और प्रगति समीक्षा',
        'व्यवस्थित स्कोर सुधार कार्यक्रम',
        'प्राथमिकता ईमेल व व्हाट्सएप सपोर्ट',
        'लोन पात्रता और अप्रूवल हेतु विशेषज्ञ सलाह'
      ]
    }
  },
  {
    id: 'premium',
    name: { en: 'Premium', hi: 'प्रीमियम' },
    badge: { en: 'MOST POPULAR', hi: 'सर्वाधिक लोकप्रिय' },
    isPopular: true,
    price: '₹19,999',
    duration: { en: 'For 9 months', hi: '9 माह की अवधि' },
    bestFor: {
      en: 'For customers seeking complete credit rebuilding and long-term financial growth.',
      hi: 'उन ग्राहकों के लिए जो पूर्ण क्रेडिट पुनर्निर्माण और दीर्घकालिक ऋण मजबूती चाहते हैं।'
    },
    features: {
      en: [
        'All features in Standard Plan included',
        'Senior Credit Expert Assistance & Strategy',
        'Dedicated Senior Relationship Manager',
        'Continuous Credit Monitoring & Real-time Alerts',
        'Faster Bureau Resolution Coordination',
        'Detailed Loan Readiness Pre-Assessment',
        'Priority Case Escalation Handling',
        'Advanced Credit Strategy & Mix Optimization'
      ],
      hi: [
        'स्टैंडर्ड प्लान के सभी फीचर्स सम्मिलित',
        'सीनियर क्रेडिट विशेषज्ञ की सीधी सहायता',
        'समर्पित वरिष्ठ रिलेशनशिप मैनेजर (RM)',
        'निरंतर क्रेडिट निगरानी और समयबद्ध अलर्ट',
        'त्वरित ब्यूरो समाधान समन्वय (Faster Resolution)',
        'विस्तृत लोन रेडीनेस प्री-असेसमेंट जांच',
        'प्राथमिकता केस एस्केलेशन हैंडलिंग',
        'उन्नत क्रेडिट रणनीति व स्वस्थ क्रेडिट मिक्स'
      ]
    }
  },
  {
    id: 'exquisite',
    name: { en: 'Exquisite VIP', hi: 'एक्सक्विजिट वीआईपी' },
    price: '₹25,000+',
    duration: { en: 'For 12 months', hi: '12 माह की अवधि' },
    bestFor: {
      en: 'For high-ticket loan seekers requiring premium, personalized credit management.',
      hi: 'बड़े लोन (होम/कमर्शियल) चाहने वालों के लिए प्रीमियम, व्यक्तिगत रणनीतिक प्रबंधन।'
    },
    features: {
      en: [
        'Dedicated Senior Credit Strategist',
        'One-to-One In-Person / Direct Phone Consultation',
        'End-to-End Credit Dispute & Record Management',
        'VIP Case Escalation & Bureau Coordination',
        'High-Ticket Loan Readiness Roadmap (Home/Business)',
        'Full 12-Month Score Protection & Monitoring'
      ],
      hi: [
        'समर्पित वरिष्ठ क्रेडिट रणनीतिकार (Senior Strategist)',
        'वन-टू-वन व्यक्तिगत व फोन परामर्श सत्र',
        'एंड-टू-एंड क्रेडिट विवाद व रिकॉर्ड सुधार प्रबंधन',
        'वीआईपी केस एस्केलेशन व ब्यूरो समन्वय',
        'हाई-वैल्यू लोन तैयारी रोडमैप (होम व व्यापारिक)',
        'पूर्ण 12-महीने का स्कोर संरक्षण व निरंतर निगरानी'
      ]
    }
  }
];

export const businessPlans: PricingPlan[] = [
  {
    id: 'msme-starter',
    name: { en: 'MSME Credit Starter', hi: 'MSME क्रेडिट स्टार्टर' },
    price: '₹18,500',
    duration: { en: 'For 6 months', hi: '6 माह की अवधि' },
    bestFor: {
      en: 'Proprietorships and micro-enterprises with CIBIL Rank issues holding back loans.',
      hi: 'प्रोपराइटरशिप और छोटे उद्योग जिनकी बैंक लिमिट व व्यापारिक लोन अटके हैं।'
    },
    features: {
      en: [
        'Commercial Bureau CMR Evaluation (1-10 Rank)',
        'Promoter Personal vs Entity Credit Audit',
        'Trade Creditor & Vendor Dispute Guidance',
        'Working Capital Eligibility Review'
      ],
      hi: [
        'कमर्शियल ब्यूरो CMR मूल्यांकन (1-10 रैंक)',
        'प्रमोटर व्यक्तिगत बनाम फर्म क्रेडिट ऑडिट',
        'ट्रेड क्रेडिटर व सप्लायर विवाद समाधान गाइडेंस',
        'वर्किंग कैपिटल बैंक पात्रता समीक्षा'
      ]
    }
  },
  {
    id: 'corporate-shield',
    name: { en: 'Corporate Credit Shield', hi: 'कॉरपोरेट क्रेडिट शील्ड' },
    badge: { en: 'ENTERPRISE', hi: 'उद्यम विशेष' },
    isPopular: true,
    price: '₹34,999',
    duration: { en: 'For 12 months', hi: '12 माह की अवधि' },
    bestFor: {
      en: 'Pvt Ltd & partnership firms needing CC/OD limit expansion and bank committee presentations.',
      hi: 'प्राइवेट लिमिटेड एवं पार्टनरशिप फर्में जो CC/OD बैंक लिमिट बढ़ाने और ऑडिट की तैयारी कर रही हैं।'
    },
    features: {
      en: [
        'Complete Multi-Bureau Commercial Audit (CIBIL CMR, CRIF, Experian)',
        'Direct Liaison with Company Banking Officers',
        'Removal of Inaccurate Restructuring & Wilful Remarks',
        'Quarterly Consortium Review Preparation',
        'Executive Credit Director Consultation'
      ],
      hi: [
        'मल्टी-ब्यूरो कमर्शियल ऑडिट (CIBIL CMR, CRIF, Experian)',
        'कंपनी बैंकर्स और क्रेडिट ऑफिसर्स के साथ समन्वय',
        'गलत रिस्ट्रक्चरिंग और विलफुल डिफॉल्ट रिमार्क्स पर विधिक कार्यवाही',
        'त्रैमासिक बैंक कंसोर्टियम समीक्षा तैयारी',
        'एग्जीक्यूटिव क्रेडिट डायरेक्टर का विशेष परामर्श'
      ]
    }
  }
];
