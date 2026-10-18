export type TranslationKey =
  | 'nav_home'
  | 'nav_about'
  | 'nav_what_we_do'
  | 'nav_cibil_check'
  | 'nav_plans'
  | 'nav_calculator'
  | 'nav_blogs'
  | 'nav_contact'
  | 'nav_book_call'
  | 'hero_badge'
  | 'hero_title'
  | 'hero_subtitle'
  | 'hero_card_ind_title'
  | 'hero_card_ind_desc'
  | 'hero_card_biz_title'
  | 'hero_card_biz_desc'
  | 'badge_confidential'
  | 'badge_bureau_compliant'
  | 'badge_no_false_claims'
  | 'badge_equifax_cert'
  | 'stat_customers'
  | 'stat_customers_label'
  | 'stat_loans'
  | 'stat_loans_label'
  | 'stat_improvement'
  | 'stat_improvement_label'
  | 'stat_partners'
  | 'stat_partners_label'
  | 'stat_bankers'
  | 'stat_bankers_label'
  | 'stat_pan_india'
  | 'stat_pan_india_label'
  | 'problem_title'
  | 'problem_subtitle'
  | 'for_ind_title'
  | 'for_ind_desc'
  | 'for_ind_f1'
  | 'for_ind_f2'
  | 'for_ind_f3'
  | 'for_ind_f4'
  | 'for_ind_btn'
  | 'for_biz_title'
  | 'for_biz_desc'
  | 'for_biz_f1'
  | 'for_biz_f2'
  | 'for_biz_f3'
  | 'for_biz_f4'
  | 'for_biz_btn'
  | 'method_badge'
  | 'method_title'
  | 'method_subtitle'
  | 'step1_title'
  | 'step1_desc'
  | 'step2_title'
  | 'step2_desc'
  | 'step3_title'
  | 'step3_desc'
  | 'step4_title'
  | 'step4_desc'
  | 'step5_title'
  | 'step5_desc'
  | 'cta_banner_title'
  | 'cta_banner_subtitle'
  | 'cta_banner_btn'
  | 'why_us_badge'
  | 'why_us_title'
  | 'why_us_subtitle'
  | 'why_feature1_title'
  | 'why_feature1_desc'
  | 'why_feature2_title'
  | 'why_feature2_desc'
  | 'why_feature3_title'
  | 'why_feature3_desc'
  | 'why_feature4_title'
  | 'why_feature4_desc'
  | 'why_feature5_title'
  | 'why_feature5_desc'
  | 'why_feature6_title'
  | 'why_feature6_desc'
  | 'bureau_title'
  | 'bureau_subtitle'
  | 'bureau_btn'
  | 'plans_badge'
  | 'plans_title'
  | 'plans_subtitle'
  | 'plan_basic_name'
  | 'plan_basic_desc'
  | 'plan_standard_name'
  | 'plan_standard_desc'
  | 'plan_premium_name'
  | 'plan_premium_desc'
  | 'plan_exquisite_name'
  | 'plan_exquisite_desc'
  | 'plan_choose_btn'
  | 'testimonials_badge'
  | 'testimonials_title'
  | 'testimonials_subtitle'
  | 'faq_title'
  | 'faq_subtitle'
  | 'footer_tagline'
  | 'footer_desc'
  | 'footer_quick_links'
  | 'footer_services'
  | 'footer_contact_info'
  | 'footer_disclaimer_title'
  | 'footer_disclaimer_text'
  | 'footer_rights'
  | 'score_check_title'
  | 'score_check_subtitle'
  | 'score_check_form_heading'
  | 'score_sim_current'
  | 'score_sim_factors'
  | 'book_call_title'
  | 'book_call_subtitle'
  | 'book_call_form_title'
  | 'book_call_submit'
  | 'contact_title'
  | 'contact_subtitle'
  | 'address_prayagraj'
  | 'address_head_office'
  | 'phone_primary'
  | 'hours_text'
  | 'lang_toggle_label';

export const translations: Record<'en' | 'hi', Record<TranslationKey, string>> = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_what_we_do: 'Services',
    nav_cibil_check: 'Check CIBIL Score',
    nav_plans: 'Pricing',
    nav_calculator: 'EMI & Tools',
    nav_blogs: 'Blogs',
    nav_contact: 'Contact',
    nav_book_call: 'Book Free Call',
    hero_badge: 'Ethical Credit Profile Analysis • Legal Bureau Guidelines',
    hero_title: 'Get Your Credit Profile Fixed Legally & Ethically',
    hero_subtitle: ' From identifying hidden credit report errors to repairing low CIBIL scores, we fix the issues holding you back. We bridge the gap between your loan rejections and guaranteed financial freedom',
    hero_card_ind_title: 'Check Your Credit Score',
    hero_card_ind_desc: 'Personal Credit Score & Report Insights',
    hero_card_biz_title: 'Check Your Business CMR',
    hero_card_biz_desc: 'For MSMEs and Commercial Credit Profiles',
    badge_confidential: '100% Confidential Handling',
    badge_bureau_compliant: 'Genuine Bureau Guidelines',
    badge_no_false_claims: 'No False Overnight Claims',
    badge_equifax_cert: 'Working with all 4 RBI-Licensed Bureaus',
    stat_customers: '27,550+',
    stat_customers_label: 'Credit Profiles Evaluated',
    stat_loans: '₹688+ Cr',
    stat_loans_label: 'Loan Value Assisted',
    stat_improvement: '100%',
    stat_improvement_label: 'Transparent Advice',
    stat_partners: '11+',
    stat_partners_label: 'Bank & NBFC Network Insights',
    stat_bankers: '2,750+',
    stat_bankers_label: 'Bankers & CAs Associated',
    stat_pan_india: 'Pan-India',
    stat_pan_india_label: 'Across All States & Prayagraj HQ',
    problem_title: 'Loan Rejected? Score Dropped? Confused by Inaccurate Remarks?',
    problem_subtitle: 'We have guided thousands of borrowers and business owners in understanding their CIBIL score and resolving real credit report disputes without shortcuts.',
    for_ind_title: 'For Individuals',
    for_ind_desc: 'Fix your credit foundation. Get the loan you need without predatory traps.',
    for_ind_f1: 'Understand your CIBIL score clearly & find errors',
    for_ind_f2: 'Identify exact reasons why loans or credit cards get rejected',
    for_ind_f3: 'Resolve Written-Off / Settled / DPD overdue marks',
    for_ind_f4: 'Get loan-ready faster with disciplined score habits',
    for_ind_btn: 'Fix Personal Credit →',
    for_biz_title: 'For Businesses (MSME)',
    for_biz_desc: 'Strong business credit. Unlock commercial financing and working capital.',
    for_biz_f1: 'Build and rebuild official Company Credit Report (CMR)',
    for_biz_f2: 'Remove discrepancy bottlenecks holding back CC/OD limits',
    for_biz_f3: 'Prepare audit-ready balance-to-credit mapping',
    for_biz_f4: 'Senior financial consultant guidance for business loans',
    for_biz_btn: 'Fix Business Credit →',
    method_badge: 'How It Works',
    method_title: 'Fix Your Credit in 5 Transparent Steps',
    method_subtitle: 'No jargon, no deception, no unrealistic promises. A clear, legal roadmap to a healthy credit standing.',
    step1_title: '01. Contact Us & Consultation',
    step1_desc: 'Reach out via WhatsApp or call our Prayagraj desk to outline your current credit situation or loan rejections.',
    step2_title: '02. Share Your Bureau Report',
    step2_desc: 'Submit your CIBIL or Equifax/Experian/CRIF credit report securely under 100% data confidentiality guarantee.',
    step3_title: '03. In-Depth Profile Analysis',
    step3_desc: 'Our credit experts examine account remarks, Days Past Due (DPD), written-off accounts, and duplicate inquiries.',
    step4_title: '04. Structured Action Plan',
    step4_desc: 'Receive a personalized, legal step-by-step action plan to challenge errors with bureaus and optimize repayments.',
    step5_title: '05. Dispute & Follow-Up Support',
    step5_desc: 'End-to-end follow-up until inaccuracies are updated by credit bureaus and your score profile reflects the truth.',
    cta_banner_title: 'Have Your CIBIL Report Analyzed Safely & Accurately',
    cta_banner_subtitle: 'Dedicated Prayagraj Desk: IIIT Chouraha Jhalwa • Helpline: +91 7275389977',
    cta_banner_btn: 'Start on WhatsApp (+91 7275766627)',
    why_us_badge: 'Transparency • Trust • Integrity',
    why_us_title: 'Why Choose CARE IN CIBIL?',
    why_us_subtitle: 'Our aim is not to make unrealistic score guarantees, but to empower you with legal bureau knowledge and genuine profile correction.',
    why_feature1_title: 'Professional & Transparent Guidance',
    why_feature1_desc: 'We operate strictly under RBI credit information companies regulations with total honesty and documentation.',
    why_feature2_title: 'Customer-Focused Approach',
    why_feature2_desc: 'Every financial situation is distinct; we offer customized roadmaps suited to your individual repayment capability.',
    why_feature3_title: 'Easy Report Analysis',
    why_feature3_desc: 'We decode complex banking acronyms like DPD, Suit Filed, Settled, and Wilful Default into simple terms.',
    why_feature4_title: 'Step-by-Step Dispute Assistance',
    why_feature4_desc: 'From official bureau dispute filings to bank reconciliation NOCs, we guide you through each verified procedure.',
    why_feature5_title: 'Confidential & Secure Handling',
    why_feature5_desc: 'Your private banking records and personal identity documents are shielded with strict confidentiality protocols.',
    why_feature6_title: 'No False Promises',
    why_feature6_desc: 'We never claim magical 800+ score spikes in 7 days. We only follow proven, lawful credit repair principles.',
    bureau_title: 'We Work with All 4 Licensed Credit Bureaus',
    bureau_subtitle: 'Your credit score can vary across bureaus. A bank might check CIBIL while an error sits on your Experian or Equifax report. We address all 4 bureaus so nothing slips through.',
    bureau_btn: 'Consult All Bureaus Profile →',
    plans_badge: 'Transparent Pricing',
    plans_title: 'Pick a Plan That Works for You',
    plans_subtitle: 'Honest pricing tailored for individuals and businesses requiring structured guidance and dispute monitoring.',
    plan_basic_name: 'Basic',
    plan_basic_desc: 'Best for individuals looking to understand credit report issues and initiate dispute corrections.',
    plan_standard_name: 'Standard',
    plan_standard_desc: 'Best for borrowers needing guided credit improvement and dedicated relationship manager.',
    plan_premium_name: 'Premium',
    plan_premium_desc: 'Most popular. Complete credit rebuilding, faster resolution coordination, and loan readiness.',
    plan_exquisite_name: 'Exquisite VIP',
    plan_exquisite_desc: 'For high-ticket loan applicants, MSMEs, and complex multi-account write-off resolutions.',
    plan_choose_btn: 'Select Plan',
    testimonials_badge: 'Client Feedback • Proven Reputation',
    testimonials_title: 'What Real Clients Say About CareInCibil',
    testimonials_subtitle: 'Real experiences from individuals and business owners across Prayagraj and Uttar Pradesh.',
    faq_title: 'Frequently Asked Questions',
    faq_subtitle: 'Clear answers to common questions about CIBIL scores, loan approvals, disputes, and our advisory.',
    footer_tagline: 'CARE • CREDIT • GROWTH',
    footer_desc: 'CareInCibil is a premier credit advisory and profile consultancy located at IIIT Chouraha, Jhalwa, Prayagraj. We educate and guide borrowers to overcome credit barriers ethically.',
    footer_quick_links: 'Quick Links',
    footer_services: 'Our Services',
    footer_contact_info: 'Get In Touch',
    footer_disclaimer_title: 'Important Regulatory Disclaimer',
    footer_disclaimer_text: 'CareInCibil (careincibil.com) is an independent credit consultancy and financial literacy advisory firm. We are NOT an official representative or agent of TransUnion CIBIL, Equifax, Experian, CRIF High Mark, RBI, or any bank/NBFC. We do not provide illegal credit report manipulation, nor do we guarantee any fixed credit score increase or automated loan sanction. All improvements depend on individual credit repayment history and lender policies.',
    footer_rights: 'All Rights Reserved. Registered at Prayagraj, UP 211012.',
    score_check_title: 'Check & Estimate Your Credit Score',
    score_check_subtitle: 'Get an instant estimate and request a detailed bureau health audit without harming your score.',
    score_check_form_heading: 'Request Official CIBIL Report Evaluation',
    score_sim_current: 'Calculated Credit Score Rating',
    score_sim_factors: 'Key Factors Influencing Your Score',
    book_call_title: 'Book a Free Credit Consultation Call',
    book_call_subtitle: 'Talk directly with our credit advisors in Prayagraj. Get clarity on loan rejections and score recovery steps.',
    book_call_form_title: 'Schedule Your Confidential 1-on-1 Call',
    book_call_submit: 'Confirm Appointment Request',
    contact_title: 'Contact CareInCibil Desk',
    contact_subtitle: 'Visit our office in Prayagraj or reach our telephone and WhatsApp helplines for prompt assistance.',
    address_prayagraj: 'IIIT Chouraha, Pipal Gaon, Jhalwa, Prayagraj, Uttar Pradesh - 211012',
    address_head_office: 'Civil Lines Consultation Desk & Jhalwa Central Office, Prayagraj',
    phone_primary: '+91 7275389977 / +91 7275899926',
    hours_text: 'Monday to Saturday: 10:00 AM – 6:00 PM',
    lang_toggle_label: 'हिंदी में देखें'
  },
  hi: {
    nav_home: 'होम',
    nav_about: 'बारे में',
    nav_what_we_do: 'सेवाएं',
    nav_cibil_check: 'सिबिल स्कोर चेक करें',
    nav_plans: 'शुल्क',
    nav_calculator: 'ईएमआई व टूल्स',
    nav_blogs: 'ब्लॉग्स',
    nav_contact: 'संपर्क',
    nav_book_call: 'फ्री कॉल बुक करें',
    hero_badge: 'नैतिक क्रेडिट प्रोफाइल विश्लेषण • वास्तविक ब्यूरो दिशानिर्देश',
    hero_title: 'अपनी क्रेडिट प्रोफाइल को कानूनी व नैतिक रूप से सुधारें',
    hero_subtitle: 'सिबिल (CIBIL) स्कोर सुधारने से लेकर क्रेडिट रिपोर्ट की गलतियां ठीक करने तक, हम हर उस कमी को दूर करते हैं जो आपका लोन रोकती है। हम आपको लोन रिजेक्शन से बचाकर सीधे वित्तीय आजादी की ओर ले जाते हैं।',
    hero_card_ind_title: 'अपना सिबिल स्कोर जांचें',
    hero_card_ind_desc: 'व्यक्तिगत क्रेडिट स्कोर व ब्यूरो रिपोर्ट विश्लेषण',
    hero_card_biz_title: 'बिजनेस CMR स्कोर जांचें',
    hero_card_biz_desc: 'MSME और व्यावसायिक क्रेडिट प्रोफाइल के लिए',
    badge_confidential: '100% गोपनीय व सुरक्षित डेटा',
    badge_bureau_compliant: 'ब्यूरो नियमों के अनुसार कार्य',
    badge_no_false_claims: 'कोई झूठा या रातों-रात का दावा नहीं',
    badge_equifax_cert: 'सभी 4 प्रमुख क्रेडिट ब्यूरो के साथ मार्गदर्शन',
    stat_customers: '27,550+',
    stat_customers_label: 'क्रेडिट प्रोफाइल विश्लेषित',
    stat_loans: '₹688+ करोड़',
    stat_loans_label: 'लोन वैल्यू में मार्गदर्शन',
    stat_improvement: '100%',
    stat_improvement_label: 'पारदर्शी व नैतिक सलाह',
    stat_partners: '11+',
    stat_partners_label: 'बैंक व एनबीएफसी इनसाइट्स',
    stat_bankers: '2,750+',
    stat_bankers_label: 'बैंकर्स, CA और एडवाइजर्स जुड़े',
    stat_pan_india: 'पैन इंडिया',
    stat_pan_india_label: 'प्रयागराज मुख्यालय व पूरे भारत में सेवा',
    problem_title: 'लोन रिजेक्ट हो गया? स्कोर गिर गया? रिपोर्ट में गलत एंट्री से परेशान हैं?',
    problem_subtitle: 'हमने हज़ारों व्यक्तियों और कारोबारियों को उनके सिबिल स्कोर को समझने और बिना किसी शॉर्टकट के वास्तविक क्रेडिट विवाद सुलझाने में मदद की है।',
    for_ind_title: 'व्यक्तिगत ग्राहकों के लिए (Individuals)',
    for_ind_desc: 'अपनी क्रेडिट नींव मजबूत करें। बिना किसी भ्रम के आवश्यक लोन प्राप्त करने योग्य बनें।',
    for_ind_f1: 'सिबिल स्कोर को सरल भाषा में समझें और गलतियों को पहचानें',
    for_ind_f2: 'लोन या क्रेडिट कार्ड रिजेक्ट होने के सही कारणों को जानें',
    for_ind_f3: 'Written-Off / Settled / DPD ओवरड्यू एंट्रीज को सुलझाएं',
    for_ind_f4: 'सही क्रेडिट आदतों से लोन के लिए तेजी से तैयार हों',
    for_ind_btn: 'पर्सनल क्रेडिट सुधारें →',
    for_biz_title: 'व्यापारियों के लिए (MSME / Commercial)',
    for_biz_desc: 'मजबूत व्यापारिक क्रेडिट प्रोफाइल बनाएं। वर्किंग कैपिटल और बैंक लिमिट आसानी से पाएं।',
    for_biz_f1: 'कंपनी क्रेडिट रिपोर्ट (CMR) बनाएं और सुधारें',
    for_biz_f2: 'CC/OD लिमिट में रुकावट डालने वाले विवादों को दूर करें',
    for_biz_f3: 'ऑडिट-रेडी बैलेंस व क्रेडिट मैपिंग तैयार करें',
    for_biz_f4: 'सीनियर वित्तीय सलाहकारों से बिजनेस लोन हेतु मार्गदर्शन',
    for_biz_btn: 'बिजनेस क्रेडिट सुधारें →',
    method_badge: 'हमारी कार्यप्रणाली',
    method_title: '5 सरल व पारदर्शी चरणों में क्रेडिट सुधार',
    method_subtitle: 'कोई भ्रामक शब्दावली नहीं, कोई छलावा नहीं। बेहतर क्रेडिट स्थिति के लिए एक स्पष्ट और कानूनी रोडमैप।',
    step1_title: '01. संपर्क व प्रारंभिक परामर्श',
    step1_desc: 'कॉल या व्हाट्सएप (+91 7275389977) के माध्यम से हमारे प्रयागराज डेस्क से सीधे संपर्क करें।',
    step2_title: '02. रिपोर्ट शेयर करें',
    step2_desc: 'अपनी वर्तमान CIBIL या Equifax/Experian रिपोर्ट 100% गोपनीयता और सुरक्षा के साथ उपलब्ध कराएं।',
    step3_title: '03. गहन प्रोफाइल विश्लेषण',
    step3_desc: 'हमारे विशेषज्ञ ओवरड्यू, DPD (Days Past Due), सेटल्ड एकाउंट्स और गलत इनक्वायरी का विश्लेषण करते हैं।',
    step4_title: '04. व्यावहारिक सुधार योजना',
    step4_desc: 'ब्यूरो में आधिकारिक सुधार दर्ज कराने और रीपेमेंट ऑप्टिमाइज़ करने के लिए चरणबद्ध योजना प्राप्त करें।',
    step5_title: '05. फॉलो-अप व निरंतर सहयोग',
    step5_desc: 'जब तक क्रेडिट ब्यूरो में आपकी सही जानकारी अपडेट न हो जाए, तब तक पूरा मार्गदर्शन और सहायता।',
    cta_banner_title: 'अपनी CIBIL रिपोर्ट का सुरक्षित व पारदर्शी विश्लेषण करवाएं',
    cta_banner_subtitle: 'ट्रस्टेड प्रयागराज डेस्क: IIIT चौराहा, पीपल गांव, झलवा • हेल्पलाइन: +91 7275389977',
    cta_banner_btn: 'व्हाट्सएप पर तुरंत शुरू करें (+91 7275766627)',
    why_us_badge: 'पारदर्शिता • विश्वास • ईमानदारी',
    why_us_title: 'CARE IN CIBIL क्यों चुनें?',
    why_us_subtitle: 'हमारा दृष्टिकोण केवल स्कोर बढ़ाने का अवास्तविक दावा करना नहीं, बल्कि आपकी क्रेडिट प्रोफाइल को सही तरीके से समझने और सशक्त बनाने में मार्गदर्शन करना है।',
    why_feature1_title: 'पेशेवर व पारदर्शी मार्गदर्शन',
    why_feature1_desc: 'हम क्रेडिट ब्यूरो नियमों और बैंकिंग गाइडलाइंस के दायरे में रहकर पूरी पारदर्शिता के साथ आपकी प्रोफाइल का मार्गदर्शन करते हैं।',
    why_feature2_title: 'ग्राहक-केंद्रित दृष्टिकोण',
    why_feature2_desc: 'हर व्यक्ति की फाइनेंशियल स्थिति अलग होती है; हम व्यक्तिगत प्राथमिकताओं के अनुरूप समाधान व गाइडेंस देते हैं।',
    why_feature3_title: 'सरल रिपोर्ट विश्लेषण',
    why_feature3_desc: 'क्रेडिट रिपोर्ट के जटिल बैंकिंग कोड्स, DPD और ओवरड्यू टर्म्स को बेहद सरल हिंदी में समझाना।',
    why_feature4_title: 'स्टेप-बाय-स्टेप डिस्प्यूट सहायता',
    why_feature4_desc: 'रिपोर्ट चेक करने से लेकर डिस्प्यूट सबमिशन और बैंक NOC प्राप्त करने तक हर कदम पर सहयोग।',
    why_feature5_title: '100% गोपनीय व सुरक्षित हैंडलिंग',
    why_feature5_desc: 'आपकी संवेदनशील फाइनेंशियल जानकारी और क्रेडिट डेटा को अत्यंत गोपनीय व सुरक्षित रखा जाता है।',
    why_feature6_title: 'कोई झूठे वादे नहीं',
    why_feature6_desc: 'हम किसी निश्चित स्कोर वृद्धि या गैरकानूनी शॉर्टकट का झूठा दावा नहीं करते; केवल सही कानूनी प्रक्रिया बताते हैं।',
    bureau_title: 'हम सभी 4 अधिकृत क्रेडिट ब्यूरो पर काम करते हैं',
    bureau_subtitle: 'अलग-अलग ब्यूरो में क्रेडिट स्कोर 50-80 पॉइंट्स तक भिन्न हो सकता है। बैंक CIBIL देख सकता है जबकि गलती Experian या Equifax में हो सकती है। हम चारों का समन्वय करते हैं।',
    bureau_btn: 'चारों ब्यूरो प्रोफाइल गाइडेंस लें →',
    plans_badge: 'पारदर्शी पैकेज',
    plans_title: 'अपनी जरूरत के अनुसार सही प्लान चुनें',
    plans_subtitle: 'व्यक्तिगत ग्राहकों और व्यावसायिक प्रतिष्ठानों के लिए स्पष्ट और पारदर्शी परामर्श शुल्क संरचना।',
    plan_basic_name: 'बेसिक प्लान (Basic)',
    plan_basic_desc: 'क्रेडिट रिपोर्ट में मौजूद त्रुटियों को समझने और प्राथमिक सुधार सुझावों के लिए उपयुक्त।',
    plan_standard_name: 'स्टैंडर्ड प्लान (Standard)',
    plan_standard_desc: 'समर्पित क्रेडिट एक्सपर्ट और मासिक क्रेडिट मॉनिटरिंग के साथ व्यवस्थित सुधार के लिए।',
    plan_premium_name: 'प्रीमियम प्लान (Premium)',
    plan_premium_desc: 'सर्वाधिक लोकप्रिय। पूर्ण क्रेडिट पुनर्निर्माण, त्वरित डिस्प्यूट समन्वय और लोन रेडीनेस।',
    plan_exquisite_name: 'एक्सक्विजिट वीआईपी (Exquisite)',
    plan_exquisite_desc: 'उच्च मूल्य लोन (High-Ticket Loan), MSME कमर्शियल विवादों और वरिष्ठ क्रेडिट स्ट्रैटेजिस्ट परामर्श हेतु।',
    plan_choose_btn: 'प्लान चुनें',
    testimonials_badge: 'संतुष्ट ग्राहकों की राय',
    testimonials_title: 'CARE IN CIBIL के बारे में ग्राहकों के अनुभव',
    testimonials_subtitle: 'प्रयागराज और उत्तर प्रदेश के हमारे ग्राहकों के वास्तविक अनुभव और विचार।',
    faq_title: 'अक्सर पूछे जाने वाले प्रश्न (FAQ)',
    faq_subtitle: 'सिबिल स्कोर, लोन रिजेक्शन, सेटलमेंट और क्रेडिट रिपोर्ट सुधार से जुड़े सभी सवालों के स्पष्ट उत्तर।',
    footer_tagline: 'CARE • CREDIT • GROWTH',
    footer_desc: 'CARE IN CIBIL (IIIT चौराहा, पीपल गांव, झलवा, प्रयागराज) में हमारा मुख्य उद्देश्य आपको अपनी क्रेडिट प्रोफाइल को पारदर्शी और कानूनी तरीके से समझने तथा बेहतर प्रबंधित करने में सहायता करना है।',
    footer_quick_links: 'महत्वपूर्ण लिंक्स',
    footer_services: 'हमारी सेवाएं',
    footer_contact_info: 'संपर्क सूत्र',
    footer_disclaimer_title: 'महत्वपूर्ण अस्वीकरण (Regulatory Disclaimer)',
    footer_disclaimer_text: 'CARE IN CIBIL (careincibil.com) एक स्वतंत्र क्रेडिट परामर्श व रिपोर्ट विश्लेषण सेवा प्रदाता है। हम किसी बैंक, एनबीएफसी (NBFC) या क्रेडिट सूचना ब्यूरो (TransUnion CIBIL, Experian, Equifax, CRIF High Mark) के आधिकारिक एजेंट नहीं हैं। हम किसी निश्चित क्रेडिट स्कोर वृद्धि या ऋण स्वीकृति (Loan Approval) की कानूनी या वित्तीय गारंटी नहीं देते हैं। सुधार ग्राहक के वास्तविक रीपेमेंट रिकॉर्ड व बैंक नीतियों पर निर्भर करता है।',
    footer_rights: 'सर्वाधिकार सुरक्षित। पंजीकृत कार्यालय: प्रयागराज, उत्तर प्रदेश - 211012।',
    score_check_title: 'अपना संभावित सिबिल स्कोर जांचें व समझें',
    score_check_subtitle: 'बिना स्कोर को नुकसान पहुंचाए तुरंत संभावित स्कोर जानें और विशेषज्ञ ब्यूरो विश्लेषण का अनुरोध करें।',
    score_check_form_heading: 'आधिकारिक CIBIL रिपोर्ट विश्लेषण हेतु अनुरोध करें',
    score_sim_current: 'आकलित क्रेडिट रेटिंग',
    score_sim_factors: 'आपके स्कोर को प्रभावित करने वाले मुख्य कारक',
    book_call_title: 'मुफ्त क्रेडिट परामर्श कॉल बुक करें',
    book_call_subtitle: 'हमारे प्रयागराज स्थित क्रेडिट सलाहकारों से सीधे बात करें और लोन रिजेक्शन से बचने के सही कदम जानें।',
    book_call_form_title: 'अपनी 1-ऑन-1 गोपनीय कॉल शेड्यूल करें',
    book_call_submit: 'अपॉइंटमेंट अनुरोध भेजें',
    contact_title: 'CARE IN CIBIL हेल्पडेस्क से संपर्क करें',
    contact_subtitle: 'प्रयागराज कार्यालय पधारें या फोन और व्हाट्सएप द्वारा तुरंत सहायता प्राप्त करें।',
    address_prayagraj: 'IIIT चौराहा, पीपल गांव, झलवा, प्रयागराज, उत्तर प्रदेश - 211012',
    address_head_office: 'सिविल लाइंस कंसल्टेशन डेस्क एवं झलवा केंद्रीय कार्यालय, प्रयागराज',
    phone_primary: '+91 7275389977 / +91 7275899926',
    hours_text: 'सोमवार से शनिवार: सुबह 10:00 बजे से शाम 6:00 बजे तक',
    lang_toggle_label: 'View in English'
  }
};
