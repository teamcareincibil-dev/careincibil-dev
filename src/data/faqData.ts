export interface FAQItem {
  id: string;
  question: { en: string; hi: string };
  answer: { en: string; hi: string };
  category: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'what-is-cibil',
    question: {
      en: 'What is the role played by CIBIL and Credit Information Companies?',
      hi: 'CIBIL और क्रेडिट सूचना कंपनियों की क्या भूमिका होती है?'
    },
    answer: {
      en: 'CIBIL (TransUnion CIBIL) is an RBI-licensed Credit Information Company (CIC) that maintains repayment records collected from banks and NBFCs across India. It does not approve or reject loans directly; rather, lenders consult CIBIL reports to evaluate a borrower’s repayment reliability.',
      hi: 'CIBIL (TransUnion) भारतीय रिज़र्व बैंक (RBI) द्वारा अधिकृत क्रेडिट ब्यूरो है, जो सभी बैंकों और वित्तीय संस्थानों से ग्राहकों के ऋण और क्रेडिट कार्ड भुगतान का रिकॉर्ड एकत्र करता है। यह स्वयं लोन पास या रिजेक्ट नहीं करता, बल्कि बैंक इसके रिकॉर्ड देखकर फैसला लेते हैं।'
    },
    category: 'basics'
  },
  {
    id: 'no-false-promises',
    question: {
      en: 'Do you guarantee an 800+ CIBIL score in 7 to 15 days?',
      hi: 'क्या आप 7 या 15 दिनों में 800+ सिबिल स्कोर की गारंटी देते हैं?'
    },
    answer: {
      en: 'NO. We strictly reject and caution borrowers against fraudulent agencies promising overnight or magical score jumps. Credit scores are computed algorithmically based on your actual repayment history over 24-36 months. We guide you through genuine, legal procedures—disputing factual errors with evidence, restructuring debt, and optimizing credit utilization—which yields sustainable improvement over 30 to 90+ days.',
      hi: 'बिल्कुल नहीं! हम किसी भी ऐसे झूठे या गैरकानूनी वादे का कड़ा विरोध करते हैं जो रातों-रात स्कोर 800 करने का दावा करते हैं। स्कोर बैंक के वास्तविक आंकड़ों और एल्गोरिदम पर आधारित होता है। हम आपको पूरी तरह कानूनी और वैध तरीके (सच्चे विवाद दर्ज करना, सही रीपेमेंट आदतें, कार्ड यूटिलाइजेशन कम करना) सिखाते हैं, जिसका सकारात्मक असर 30 से 90+ दिनों में दिखता है।'
    },
    category: 'ethics'
  },
  {
    id: 'settled-status',
    question: {
      en: 'My loan or credit card shows "Settled". Can I still get a Home Loan?',
      hi: 'मेरी रिपोर्ट में "Settled" दिख रहा है। क्या मुझे नया होम लोन मिल सकता है?'
    },
    answer: {
      en: 'A "Settled" status signifies that the lender incurred a financial haircut to close the account, leading most nationalized banks to reject new applications. To qualify for a home loan, we guide you through approaching the original lender, paying the waived differential sum, securing a formal No Dues Certificate (NDC/NOC), and updating the bureau record to "Closed".',
      hi: '"Settled" स्टेटस का अर्थ है कि बैंक ने नुकसान उठाकर खाता बंद किया था, जिससे बड़े बैंक नया लोन देने से कतराते हैं। नया होम लोन पाने के लिए हम आपको मूल बैंक से संपर्क कर बची हुई छूट राशि चुकाने, आधिकारिक नो ड्यूज सर्टिफिकेट (NOC) प्राप्त करने और ब्यूरो में "Closed" अपडेट कराने की सटीक कानूनी प्रक्रिया में मदद करते हैं।'
    },
    category: 'disputes'
  },
  {
    id: 'how-long-it-takes',
    question: {
      en: 'How long does measurable credit profile improvement realistically take?',
      hi: 'क्रेडिट प्रोफाइल में वास्तविक सुधार दिखने में कितना समय लगता है?'
    },
    answer: {
      en: 'For factual clerical errors (e.g., incorrect overdue mark or wrong PAN association), official bureau disputes are typically resolved within 30 days as mandated by the RBI. For deep debt recovery, rebuilding credit habits, and score elevation from 300-550 up to 750+, it realistically takes 3 to 6 months of disciplined repayment guidance.',
      hi: 'लिपिकीय गलतियों या बैंक की चूक को ठीक कराने में आरबीआई की समयसीमा के अनुसार 30 दिनों का समय लगता है। वहीं गहरे खराब स्कोर (300-550) को 750+ तक पहुंचाने के लिए 3 से 6 महीने की अनुशासित वित्तीय आदतें और व्यवस्थित मार्गदर्शन की आवश्यकता होती है।'
    },
    category: 'timeline'
  },
  {
    id: 'office-visit-prayagraj',
    question: {
      en: 'Where is CareInCibil located? Can I visit in person in Prayagraj?',
      hi: 'CareInCibil का कार्यालय कहां है? क्या मैं प्रयागराज में व्यक्तिगत रूप से मिल सकता हूँ?'
    },
    answer: {
      en: 'Yes! Our central office is located at IIIT Chouraha, Pipal Gaon, Jhalwa, Prayagraj, UP (Pin: 211012), along with our Civil Lines Consultation Desk. You can walk in during business hours (Mon-Sat, 10:00 AM - 6:00 PM) or call our direct helpline at +91 7275389977.',
      hi: 'हाँ, बिल्कुल! हमारा केंद्रीय कार्यालय IIIT चौराहा, पीपल गांव, झलवा, प्रयागराज (पिन: 211012) पर स्थित है, तथा सिविल लाइंस में हमारा कंसल्टेशन डेस्क है। आप कार्यदिवसों में (सोम-शनि सुबह 10 से शाम 6 बजे) सीधे आ सकते हैं या +91 7275389977 पर कॉल करके अपॉइंटमेंट बुक कर सकते हैं।'
    },
    category: 'location'
  },
  {
    id: 'soft-check-harm',
    question: {
      en: 'Will estimating my credit score on CareInCibil lower my CIBIL score?',
      hi: 'क्या CareInCibil पर स्कोर चेक या अनुमान लगाने से मेरा सिबिल स्कोर घटेगा?'
    },
    answer: {
      en: 'Not at all. Checking or estimating your own credit profile is classified as a "Soft Check" and has zero negative impact on your score. Hard enquiries only occur when banks pull your report for an actual loan disbursement review.',
      hi: 'बिल्कुल नहीं! स्वयं अपना स्कोर जांचना या अनुमान लगाना "सॉफ्ट चेक" (Soft Inquiry) कहलाता है, जिससे स्कोर पर शून्य असर पड़ता है। केवल तब स्कोर पर असर पड़ता है जब कोई बैंक आपके लोन आवेदन पर औपचारिक जांच करता है।'
    },
    category: 'basics'
  }
];
