export interface ServiceItem {
  id: string;
  iconName: string;
  title: { en: string; hi: string };
  shortDesc: { en: string; hi: string };
  fullDesc: { en: string; hi: string };
  bulletPoints: { en: string[]; hi: string[] };
  targetAudience: { en: string; hi: string };
  deliverables: { en: string[]; hi: string[] };
}

export const servicesData: ServiceItem[] = [
  {
    id: 'cibil-report-analysis',
    iconName: 'FileSearch',
    title: {
      en: 'CIBIL & Bureau Report Analysis',
      hi: 'CIBIL एवं ब्यूरो रिपोर्ट विश्लेषण'
    },
    shortDesc: {
      en: 'Detailed inspection of your accounts, payment history, credit mix, enquiries, overdue amounts, and negative bureau remarks.',
      hi: 'आपकी CIBIL रिपोर्ट में एकाउंट्स, पेमेंट हिस्ट्री, इनक्वायरी, ओवरड्यू और अन्य महत्वपूर्ण नेगेटिव एंट्रीज का सूक्ष्म विश्लेषण।'
    },
    fullDesc: {
      en: 'A credit report contains complex codes like DPD (Days Past Due), SMA, Written-off, Settled, and Restructured. Our experts translate this technical data into clear insights so you know exactly what banks see when they review your application.',
      hi: 'क्रेडिट रिपोर्ट में जटिल बैंकिंग कोड्स जैसे DPD (Days Past Due), SMA, Written-off, Settled और Restructured शामिल होते हैं। हमारे विशेषज्ञ इस तकनीकी डेटा को सरल भाषा में समझाते हैं ताकि आप जान सकें कि बैंक आपकी प्रोफ़ाइल में क्या देख रहे हैं।'
    },
    bulletPoints: {
      en: [
        'Line-by-line inspection of all active and closed accounts',
        'Identification of erroneous DPD (30, 60, 90+ days past due)',
        'Check for duplicate or identity theft loan entries',
        'Credit utilization ratio assessment across all credit cards'
      ],
      hi: [
        'सभी सक्रिय और बंद ऋण खातों की लाइन-दर-लाइन जांच',
        'गलत DPD (30, 60, 90+ दिन लेट पेमेंट) की पहचान',
        'पहचान चोरी या फर्जी लोन एंट्रीज की सुरक्षा जांच',
        'सभी क्रेडिट कार्ड्स में क्रेडिट उपयोग अनुपात (Credit Utilisation) का सटीक आंकलन'
      ]
    },
    targetAudience: {
      en: 'Anyone wanting to understand their credit status before applying for any loan.',
      hi: 'कोई भी व्यक्ति जो नया लोन या क्रेडिट कार्ड अप्लाई करने से पहले अपनी क्रेडिट स्थिति समझना चाहता है।'
    },
    deliverables: {
      en: ['Detailed Credit Health Audit Report', 'Negative Remarks Identification Sheet', 'Bureau Error Highlighting Summary'],
      hi: ['विस्तृत क्रेडिट हेल्थ ऑडिट रिपोर्ट', 'नकारात्मक रिमार्क्स पहचान पत्रक', 'ब्यूरो त्रुटि सारांश दस्तावेज']
    }
  },
  {
    id: 'low-score-improvement',
    iconName: 'TrendingUp',
    title: {
      en: 'Low Score Improvement Guidance (300 to 750+)',
      hi: 'कम सिबिल स्कोर सुधार मार्गदर्शन (300 से 750+)'
    },
    shortDesc: {
      en: 'Ethical, step-by-step strategy to rebuild credit score from as low as 300 up to prime eligibility levels (750+).',
      hi: '300 के निचले स्तर से लेकर 750+ के प्राइम एलिजिबिलिटी स्कोर तक क्रेडिट स्कोर को कानूनी व नैतिक रूप से पुनर्निर्मित करने की रणनीति।'
    },
    fullDesc: {
      en: 'Improving a poor credit score is not magic or a 7-day hack. It requires systematic debt structuring, correcting repayment cycles, reducing utilization below 30%, and following disciplined bureau guidelines.',
      hi: 'खराब क्रेडिट स्कोर सुधारना कोई जादुई छड़ी या 7-दिन का खेल नहीं है। इसके लिए व्यवस्थित ऋण संरचना, रीपेमेंट चक्र में सुधार, क्रेडिट उपयोग 30% से नीचे लाना और अनुशासित ब्यूरो नियमों का पालन जरूरी होता है।'
    },
    bulletPoints: {
      en: [
        'Personalized 90-day to 180-day credit recovery roadmap',
        'Guidance on credit card utilization optimization (maintaining <30%)',
        'Healthy credit mix balancing (Secured vs. Unsecured)',
        'Disciplined EMI scheduling to avoid negative bureau reporting'
      ],
      hi: [
        'व्यक्तिगत 90-दिवसीय से 180-दिवसीय क्रेडिट रिकवरी रोडमैप',
        'क्रेडिट कार्ड यूटिलाइजेशन अनुकूलन (30% से कम बनाए रखने की योजना)',
        'स्वस्थ क्रेडिट मिश्रण संतुलन (सिक्योर्ड बनाम अनसिक्योर्ड ऋण)',
        'नेगेटिव ब्यूरो रिपोर्टिंग से बचने के लिए अनुशासित ईएमआई शेड्यूलिंग'
      ]
    },
    targetAudience: {
      en: 'Borrowers with CIBIL score below 650 who face loan rejections or high interest penalties.',
      hi: 'वे कर्जदार जिनका स्कोर 650 से कम है और जिन्हें बैंक लोन देने से मना कर रहे हैं या भारी ब्याज मांग रहे हैं।'
    },
    deliverables: {
      en: ['Step-by-step Score Building Blueprint', 'Debt-to-Income Optimization Advisory', 'Monthly Score Milestones Tracker'],
      hi: ['चरणबद्ध स्कोर निर्माण ब्लूप्रिंट', 'डेट-टू-इनकम ऑप्टिमाइजेशन सलाह', 'मासिक स्कोर सुधार मील का पत्थर ट्रैकर']
    }
  },
  {
    id: 'settlement-guidance',
    iconName: 'ShieldAlert',
    title: {
      en: 'Credit Card & Loan Settlement Guidance',
      hi: 'क्रेडिट कार्ड व लोन सेटलमेंट गाइडेंस'
    },
    shortDesc: {
      en: 'Understand the severe impact of Settled vs Closed status and learn how to convert settled accounts into Clean Closed with NDC/NOC.',
      hi: 'सेटलमेंट (Settled) और क्लोजर (Closed) के अंतर को समझें और सेटल खातों को एनओसी (NOC) प्राप्त कर क्लीन क्लोज करवाने का मार्गदर्शन पाएं।'
    },
    fullDesc: {
      en: 'Many borrowers mistakenly believe that settling a credit card or loan clears their name. In reality, banks tag it as "Settled" or "Post-Write-Off Settled", which severely damages future loan chances for up to 7 years. We guide you on the exact procedure to pay differential balances, obtain No Dues Certificates (NOC), and update bureau records to "Closed".',
      hi: 'कई लोग मानते हैं कि सेटलमेंट करने से कर्ज पूरी तरह खत्म हो जाता है। वास्तव में बैंक इसे "Settled" दर्ज करते हैं, जो अगले 7 वर्षों तक होम या पर्सनल लोन मिलने में बड़ी बाधा बनता है। हम बचे हुए अंतर का भुगतान करने, बैंक से नो ड्यूज सर्टिफिकेट (NOC) प्राप्त करने और ब्यूरो में "Closed" अपडेट कराने का वैध रास्ता बताते हैं।'
    },
    bulletPoints: {
      en: [
        'Clear distinction between "Settled", "Written-Off", and "Closed"',
        'Step-by-step guidance on obtaining official bank No Dues Certificate (NOC)',
        'Procedure for updating bureau records from Settled to Closed',
        'Strategies to negotiate ethical waiver reconciliation with lenders'
      ],
      hi: [
        '"Settled", "Written-Off" और "Closed" स्थिति के बीच स्पष्ट अंतर',
        'बैंक से आधिकारिक नो ड्यूज सर्टिफिकेट (NOC/NDC) प्राप्त करने की चरणबद्ध गाइडेंस',
        'ब्यूरो रिकॉर्ड में सेटलमेंट को "Closed" में परिवर्तित कराने की कानूनी प्रक्रिया',
        'बैंकों के साथ विधिक व नैतिक बकाया सुलह करने की रणनीति'
      ]
    },
    targetAudience: {
      en: 'Borrowers whose loans were settled in the past and are now facing rejection on new home or vehicle loans.',
      hi: 'वे लोग जिन्होंने पहले कोई लोन या क्रेडिट कार्ड सेटल किया था और अब नया होम या ऑटो लोन नहीं मिल पा रहा है।'
    },
    deliverables: {
      en: ['Settlement Status Impact Assessment', 'Bank NOC Reconciliation Checklist', 'Bureau Record Update Dossier'],
      hi: ['सेटलमेंट स्टेटस प्रभाव आंकलन', 'बैंक एनओसी मिलान चेकलिस्ट', 'ब्यूरो रिकॉर्ड अपडेशन डॉसियर']
    }
  },
  {
    id: 'loan-rejection-assistance',
    iconName: 'CheckCircle2',
    title: {
      en: 'Loan Rejection Assistance & Readiness',
      hi: 'लोन रिजेक्शन सहायता व लोन रेडीनेस'
    },
    shortDesc: {
      en: 'Identify the exact internal banking underwriting criteria that caused loan rejections and prepare a bulletproof profile.',
      hi: 'बैंक द्वारा लोन रिजेक्ट किए जाने के सटीक कारणों को पहचानें और आगामी आवेदन हेतु बैंक-मानदंडों के अनुरूप प्रोफ़ाइल तैयार करें।'
    },
    fullDesc: {
      en: 'Banks reject applications due to excessive hard enquiries, high FOIR (Fixed Obligation to Income Ratio), recent DPD spikes, or low bureau score. Repeated applications within a short span damage your score even further. We help you pause, diagnose the issue, and become genuinely loan-ready.',
      hi: 'बैंक अक्सर अत्यधिक इनक्वायरी, अधिक FOIR (आय की तुलना में अधिक ईएमआई), हालिया लेट पेमेंट या कम स्कोर के कारण लोन निरस्त करते हैं। बार-बार आवेदन करने से स्कोर और गिरता है। हम आपको रुककर सही कारण समझने और लोन हेतु तैयार होने में मदद करते हैं।'
    },
    bulletPoints: {
      en: [
        'Root-cause rejection analysis (FOIR, DPD, Enquiry overload)',
        'Elimination of multiple hard inquiry clusters',
        'Home Loan, Personal Loan & Car Loan specific criteria matching',
        'Guidance on co-applicant eligibility and collateral presentation'
      ],
      hi: [
        'रिजेक्शन का मूल कारण विश्लेषण (FOIR, DPD या इनक्वायरी की अधिकता)',
        'लगातार की गई हार्ड इनक्वायरी के नकारात्मक प्रभाव को संतुलित करना',
        'होम लोन, पर्सनल लोन और कार लोन के विशिष्ट बैंक नियमों के अनुरूप तैयारी',
        'सह-आवेदक (Co-applicant) की पात्रता और सही डॉक्यूमेंटेशन मार्गदर्शन'
      ]
    },
    targetAudience: {
      en: 'Individuals recently rejected for Home, Personal, or Education Loans.',
      hi: 'वे आवेदक जिनका हाल ही में होम लोन, पर्सनल लोन या अन्य बैंक ऋण निरस्त हुआ है।'
    },
    deliverables: {
      en: ['Loan Underwriting Diagnostic Report', 'Debt Consolidation Feasibility Study', 'Lender Policy Readiness Roadmap'],
      hi: ['लोन अंडरराइटिंग डायग्नोस्टिक रिपोर्ट', 'ऋण समेकन (Debt Consolidation) अध्ययन', 'बैंक नीति के अनुसार लोन रेडीनेस रोडमैप']
    }
  },
  {
    id: 'bureau-dispute-guidance',
    iconName: 'AlertCircle',
    title: {
      en: 'CIBIL & Multi-Bureau Dispute Assistance',
      hi: 'CIBIL व बहु-ब्यूरो डिस्प्यूट सहायता'
    },
    shortDesc: {
      en: 'Assistance in filing official dispute requests for inaccurate accounts, wrong payment status, or clerical bank errors.',
      hi: 'क्रेडिट रिपोर्ट में दर्ज गलत एकाउंट्स, गलत लेट पेमेंट स्टेटस या बैंक की लिपिकीय त्रुटियों के खिलाफ आधिकारिक डिस्प्यूट दर्ज करने में सहायता।'
    },
    fullDesc: {
      en: 'Under RBI regulations and the Credit Information Companies Act, borrowers have a statutory right to dispute any factual error in their credit report. We guide you through drafting and filing dispute tickets with TransUnion CIBIL, Equifax, Experian, and CRIF High Mark.',
      hi: 'आरबीआई के नियमों और क्रेडिट इंफॉर्मेशन कंपनीज एक्ट के तहत, हर नागरिक को अपनी रिपोर्ट में गलत जानकारी पर आधिकारिक विवाद (Dispute) उठाने का कानूनी अधिकार है। हम CIBIL, Equifax, Experian और CRIF के पास सही दस्तावेजों के साथ शिकायत दर्ज करने में मार्गदर्शन करते हैं।'
    },
    bulletPoints: {
      en: [
        'Drafting formal dispute applications with valid transaction evidence',
        'Handling disputes across CIBIL, Equifax, Experian, and CRIF High Mark',
        'Tracking 30-day resolution timeline mandated by RBI',
        'Escalation protocols to Banking Ombudsman if lender fails to respond'
      ],
      hi: [
        'वैध बैंक लेन-देन साक्ष्यों के साथ औपचारिक डिस्प्यूट आवेदन तैयार करना',
        'सिबिल, इक्विफैक्स, एक्सपेरियन और क्रिफ हाई मार्क चारों ब्यूरो में डिस्प्यूट',
        'आरबीआई द्वारा निर्धारित 30-दिवसीय समाधान समयसीमा की ट्रैकिंग',
        'बैंक द्वारा उत्तर न देने की स्थिति में बैंकिंग लोकपाल (Ombudsman) एस्केलेशन प्रक्रिया'
      ]
    },
    targetAudience: {
      en: 'Consumers victimized by wrong loan reporting, clerical errors, or delayed bank clearance NOCs.',
      hi: 'वे उपभोक्ता जिनकी रिपोर्ट में किसी और का लोन दिख रहा है, या बैंक की गलती से लेट पेमेंट चढ़ गया है।'
    },
    deliverables: {
      en: ['Formal Bureau Dispute Application Draft', 'Supporting Document Indexing', 'Resolution Tracking Log'],
      hi: ['आधिकारिक ब्यूरो डिस्प्यूट आवेदन पत्र प्रारूप', 'सहायक दस्तावेज सूची', 'समाधान ट्रैकिंग लॉग']
    }
  },
  {
    id: 'msme-business-credit',
    iconName: 'Building2',
    title: {
      en: 'Business Credit & CMR Improvement (MSME)',
      hi: 'व्यापारिक क्रेडिट एवं CMR सुधार (MSME)'
    },
    shortDesc: {
      en: 'Build and enhance Company Credit Report (CMR) ranking (1 to 10 scale) to unlock large CC/OD limits and commercial financing.',
      hi: 'कंपनी क्रेडिट रिपोर्ट (CMR 1 से 10 स्केल) को मजबूत बनाकर बड़े कैश क्रेडिट (CC), ओवरड्राफ्ट (OD) और व्यापारिक ऋण के द्वार खोलना।'
    },
    fullDesc: {
      en: 'Commercial credit ratings (CIBIL Rank 1 to 10, where Rank 1 is the best) govern business loans and vendor credit. Outstanding director disputes, partnership mismatches, or old machinery loans can stall your working capital. We audit your business credit profile comprehensively.',
      hi: 'व्यावसायिक क्रेडिट रेटिंग (CIBIL Rank 1 से 10, जहां रैंक 1 सबसे उत्कृष्ट है) आपकी कंपनी के ऋण और बैंक लिमिट तय करती है। डायरेक्टर्स के पुराने विवाद या व्यापारिक डिफॉल्ट आपकी कंपनी की लिमिट रोक देते हैं। हम आपकी कमर्शियल प्रोफाइल का पूर्ण ऑडिट करते हैं।'
    },
    bulletPoints: {
      en: [
        'MSME Company Credit Report (CMR) audit and ranking elevation',
        'Separating promoter personal liability from business credit footprint',
        'Resolving vendor disputes and supplier non-payment tags',
        'Preparation for bank consortium loan committee presentation'
      ],
      hi: [
        'MSME कंपनी क्रेडिट रिपोर्ट (CMR) ऑडिट और रैंकिंग सुधार (रैंक 1 की ओर)',
        'प्रमोटर/डायरेक्टर की व्यक्तिगत देनदारियों और कंपनी क्रेडिट का पृथक्करण',
        'सप्लायर और बैंक डिफॉल्ट टिप्पणियों का कानूनी समाधान',
        'बैंक क्रेडिट कमेटी के समक्ष मजबूत प्रोफाइल प्रस्तुतीकरण'
      ]
    },
    targetAudience: {
      en: 'Proprietors, Partnership Firms, and Private Limited Companies seeking higher working capital limits.',
      hi: 'प्रोपराइटर, पार्टनरशिप फर्म और प्राइवेट लिमिटेड कंपनियां जो बैंक लिमिट बढ़ाने या कम ब्याज पर बिजनेस लोन चाहते हैं।'
    },
    deliverables: {
      en: ['MSME CMR Diagnostic Report', 'Commercial Discrepancy Correction Plan', 'Bank Working Capital Presentation Guide'],
      hi: ['MSME CMR डायग्नोस्टिक रिपोर्ट', 'कमर्शियल विसंगति सुधार योजना', 'बैंक वर्किंग कैपिटल प्रेजेंटेशन गाइड']
    }
  }
];
