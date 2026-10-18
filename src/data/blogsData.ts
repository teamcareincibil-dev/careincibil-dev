export interface BlogPost {
  id: string;
  slug: string;
  title: { en: string; hi: string };
  excerpt: { en: string; hi: string };
  category: { en: string; hi: string };
  date: string;
  readTime: { en: string; hi: string };
  author: { en: string; hi: string };
  content: {
    en: {
      introduction: string;
      sections: { heading: string; body: string }[];
      summary: string;
    };
    hi: {
      introduction: string;
      sections: { heading: string; body: string }[];
      summary: string;
    };
  };
}

export const blogsData: BlogPost[] = [
  {
    id: 'min-cibil-for-home-loan',
    slug: 'what-is-the-minimum-credit-score-needed-to-get-a-home-loan',
    title: {
      en: 'What is the Minimum Credit Score Needed to Get a Home Loan in India?',
      hi: 'भारत में होम लोन पाने के लिए न्यूनतम सिबिल स्कोर कितना होना चाहिए?'
    },
    excerpt: {
      en: 'Learn how major Indian banks evaluate your CIBIL score for home loans, interest rate concessions above 750, and how to qualify if your score is borderline.',
      hi: 'जानें कि भारतीय बैंक होम लोन हेतु आपके सिबिल स्कोर का मूल्यांकन कैसे करते हैं, 750+ स्कोर पर ब्याज दरों में छूट, और यदि स्कोर कम है तो क्या करें।'
    },
    category: { en: 'Home Loan', hi: 'होम लोन' },
    date: 'Oct 12, 2026',
    readTime: { en: '5 min read', hi: '5 मिनट पढ़ें' },
    author: { en: 'CareInCibil Advisory Desk', hi: 'केयर इन सिबिल एडवाइजरी डेस्क' },
    content: {
      en: {
        introduction: 'Securing a home loan is one of the most substantial financial commitments of an individual\'s life. While banks boast attractive interest rates on billboards, the rate you actually receive—or whether your application is approved at all—hinges heavily on your CIBIL credit score.',
        sections: [
          {
            heading: 'The 750 Benchmark: The Magic Number for Prime Rates',
            body: 'Most public and private lenders (SBI, HDFC, ICICI, Bank of Baroda) treat 750 as the benchmark for pre-approved and lowest-interest housing loans. Borrowers with a score of 750+ typically enjoy interest concessions of 25 to 50 basis points (0.25% to 0.50%), which saves lakhs of rupees across a 20-year tenure.'
          },
          {
            heading: 'Can You Get a Home Loan with a Score Between 650 and 749?',
            body: 'Yes, but with caveats. If your score sits between 650 and 749, banks may still approve your home loan, provided your debt-to-income ratio (FOIR) is healthy (<40%) and your income stability is verified. However, lenders will likely levy higher processing fees or add risk premiums to your interest rate.'
          },
          {
            heading: 'What If Your Score is Below 650?',
            body: 'A score below 650 triggers immediate scrutiny in automated underwriting engines. Common causes include recent 90-day defaults, unsettled credit card dues, or past loan write-offs. Rather than filing repeated loan applications (which lowers your score further with hard inquiries), you should pause and rectify underlying bureau entries first.'
          },
          {
            heading: 'Steps to Take Before Applying for a Home Loan',
            body: '1. Pull official reports from all 4 bureaus (CIBIL, Equifax, Experian, CRIF).\n2. Eliminate high credit card revolving balances to bring utilization under 30%.\n3. Verify that old settled accounts are correctly updated with Bank No Objection Certificates (NOC).'
          }
        ],
        summary: 'Aim for a score above 750 for effortless home loan approval and maximum savings on interest rates. Never submit home loan applications until your credit report has been verified error-free.'
      },
      hi: {
        introduction: 'होम लोन लेना किसी भी व्यक्ति के जीवन का सबसे बड़ा वित्तीय फैसला होता है। बैंक विज्ञापनों में आकर्षक ब्याज दरें दिखाते हैं, लेकिन आपको वह दर मिलेगी या नहीं—यह पूरी तरह से आपके सिबिल स्कोर पर निर्भर करता है।',
        sections: [
          {
            heading: '750 का पैमाना: सबसे कम ब्याज दर के लिए जादुई आंकड़ा',
            body: 'एसबीआई, एचडीएफसी, आईसीआईसीआई और बैंक ऑफ बड़ौदा जैसे प्रमुख बैंक 750 को आदर्श स्कोर मानते हैं। 750+ स्कोर वाले आवेदकों को ब्याज दरों में 0.25% से 0.50% तक की छूट मिलती है, जिससे 20 वर्ष की अवधि में लाखों रुपये की बचत होती है।'
          },
          {
            heading: 'क्या 650 से 749 के बीच स्कोर होने पर होम लोन मिल सकता है?',
            body: 'हाँ, लेकिन कुछ शर्तों के साथ। यदि आपका स्कोर 650 से 749 के बीच है, तो बैंक आपकी आय की निरंतरता और अन्य ईएमआई का अनुपात देखकर लोन दे सकते हैं, लेकिन वे ब्याज दर थोड़ी अधिक तय कर सकते हैं।'
          },
          {
            heading: 'यदि स्कोर 650 से नीचे है तो क्या करें?',
            body: '650 से कम स्कोर होने पर बैंक का सिस्टम सीधे रिजेक्ट कर सकता है। बार-बार नए बैंकों में आवेदन करने से बचें क्योंकि हर बार सिबिल चेक होने से स्कोर और गिर जाता है। पहले रिपोर्ट में मौजूद गलतियों या पुराने ओवरड्यू को ठीक कराएं।'
          },
          {
            heading: 'होम लोन आवेदन से पहले आवश्यक कदम',
            body: '1. सभी 4 क्रेडिट ब्यूरो से अपनी नवीनतम रिपोर्ट निकालें।\n2. क्रेडिट कार्ड का उपयोग 30% से कम रखें।\n3. सुनिश्चित करें कि पुराने सेटल किए गए ऋण बैंक की एनओसी (NOC) के साथ ब्यूरो में अपडेट हो चुके हैं।'
          }
        ],
        summary: 'आसान होम लोन और न्यूनतम ब्याज दर पाने के लिए 750+ स्कोर का लक्ष्य रखें। आवेदन करने से पहले अपनी क्रेडिट रिपोर्ट का संपूर्ण ऑडिट जरूर करवाएं।'
      }
    }
  },
  {
    id: 'good-score-for-personal-loan',
    slug: 'what-is-a-good-credit-score-for-a-personal-loan',
    title: {
      en: 'What is a Good Credit Score for an Instant Personal Loan?',
      hi: 'इंस्टेंट पर्सनल लोन के लिए कितना सिबिल स्कोर अच्छा माना जाता है?'
    },
    excerpt: {
      en: 'Personal loans are unsecured credit. Understand why lenders are hyper-sensitive to DPD late payment markers and how to qualify smoothly.',
      hi: 'पर्सनल लोन बिना किसी गिरवी (Unsecured) के दिया जाता है। जानें कि बैंक लेट पेमेंट और DPD को लेकर इतने सख्त क्यों होते हैं और पात्रता कैसे सुधारें।'
    },
    category: { en: 'Personal Loan', hi: 'पर्सनल लोन' },
    date: 'Oct 08, 2026',
    readTime: { en: '4 min read', hi: '4 मिनट पढ़ें' },
    author: { en: 'CareInCibil Advisory Desk', hi: 'केयर इन सिबिल एडवाइजरी डेस्क' },
    content: {
      en: {
        introduction: 'Unlike a home loan or car loan, a personal loan requires no collateral or property pledge. Because the lender has zero physical recourse if you default, their decision rests almost entirely on your credit track record and repayment discipline.',
        sections: [
          {
            heading: 'Ideal Credit Score for Personal Loans (720+)',
            body: 'A score of 720 to 750+ positions you in the top tier for instant, pre-approved personal loans with minimal documentation. You secure lower processing charges and favorable prepayment terms.'
          },
          {
            heading: 'Why DPD (Days Past Due) Matters More than Total Score',
            body: 'Even if your overall score is 710, if your credit report shows recent "030" or "060" DPD entries in the last 6 months, digital loan algorithms will flag you as high risk. Lenders look for 100% on-time payment track records without any delinquent entries.'
          },
          {
            heading: 'The Risk of Applying on Multiple Loan Apps',
            body: 'Applying on 5 different fintech loan apps within 2 weeks generates 5 "Hard Enquiries". Each hard enquiry knocks points off your score and marks you as credit-hungry. Always check your eligibility through soft assessment channels before submitting final loan forms.'
          }
        ],
        summary: 'Maintain at least 720+ and zero late payment tags over the preceding 12 months to guarantee instant personal loan approvals at lowest interest.'
      },
      hi: {
        introduction: 'होम लोन या कार लोन के विपरीत, पर्सनल लोन के लिए कोई संपत्ति गिरवी नहीं रखी जाती। बैंक के पास कोई सुरक्षा न होने के कारण, वह पूरी तरह आपके पिछले रीपेमेंट रिकॉर्ड और सिबिल स्कोर पर निर्भर करता है।',
        sections: [
          {
            heading: 'पर्सनल लोन के लिए आदर्श स्कोर (720+)',
            body: '720 से 750+ का स्कोर होने पर बैंक आपको न्यूनतम ब्याज दर और तुरंत प्री-अप्रूव्ड पर्सनल लोन ऑफर करते हैं, जिसमें प्रोसेसिंग फीस भी कम होती है।'
          },
          {
            heading: 'कुल स्कोर से अधिक DPD (Days Past Due) क्यों मायने रखता है?',
            body: 'यदि आपका स्कोर 710 भी है, लेकिन पिछले 6 महीनों में किसी क्रेडिट कार्ड या ईएमआई में 30 या 60 दिन की देरी (DPD) दर्ज है, तो डिजिटल सिस्टम आवेदन रिजेक्ट कर सकता है। बैंक समय पर भुगतान की 100% शुद्धता देखते हैं।'
          },
          {
            heading: 'अलग-अलग लोन ऐप्स पर बार-बार अप्लाई करने का नुकसान',
            body: 'एक ही हफ्ते में 4-5 लोन ऐप्स पर अप्लाई करने से हर बार हार्ड इनक्वायरी दर्ज होती है, जिससे सिबिल स्कोर तेजी से गिरता है और बैंक आपको कर्ज के भूखे (Credit Hungry) के रूप में देखते हैं।'
          }
        ],
        summary: 'पर्सनल लोन की आसान स्वीकृति के लिए 720+ स्कोर रखें और पिछले 12 महीनों में किसी भी ईएमआई में 1 दिन की भी देरी न होने दें।'
      }
    }
  },
  {
    id: 'settled-vs-closed-cibil',
    slug: 'understanding-settled-vs-closed-status-in-cibil',
    title: {
      en: 'Settled vs Closed Status in CIBIL: The Hidden Trap That Ruins Loans',
      hi: 'CIBIL में Settled बनाम Closed स्टेटस: वह छिपा जाल जो नए लोन रोक देता है'
    },
    excerpt: {
      en: 'Did your collection agent tell you that a one-time settlement will clear your record? Learn the harsh truth and how to legally convert it to Closed.',
      hi: 'क्या रिकवरी एजेंट ने कहा था कि सेटलमेंट से सब साफ हो जाएगा? जानें इसकी कड़वी सच्चाई और इसे कानूनी रूप से Closed में बदलने का तरीका।'
    },
    category: { en: 'Credit Repair', hi: 'क्रेडिट रिपेयर' },
    date: 'Sep 29, 2026',
    readTime: { en: '6 min read', hi: '6 मिनट पढ़ें' },
    author: { en: 'Senior Credit Counselors', hi: 'सीनियर क्रेडिट काउंसलर्स' },
    content: {
      en: {
        introduction: 'One of the most widespread credit misconceptions in India is that opting for a "One-Time Settlement" (OTS) cleans your CIBIL profile. In reality, a settlement is viewed by lenders as an admission of financial failure, barring you from major loans for up to 7 years.',
        sections: [
          {
            heading: 'What Actually Happens When You Settle a Debt?',
            body: 'Suppose you owed ₹1,00,000 on a credit card, and the collection agency offered to close the account for ₹45,000. While the bank stops calling you, they report the remaining ₹55,000 as a loss to the credit bureaus and flag the account as "Settled" or "Post-Write-Off Settled".'
          },
          {
            heading: 'How Future Lenders React to "Settled" Status',
            body: 'When you apply for a home loan 3 years later, underwriting officers see that a previous bank had to take a financial haircut to recover funds from you. Most nationalized banks have strict underwriting policies that mandate immediate rejection of applicants with any "Settled" status.'
          },
          {
            heading: 'The Legal Solution: Upgrading to "Closed" with NDC/NOC',
            body: 'To fix this, you must contact the original lending bank, request a calculation of the waived differential balance, settle that amount, and secure a formal No Dues Certificate (NDC). The bank then submits an official update file to CIBIL to convert the account remark to "Closed".'
          }
        ],
        summary: 'Never settle without understanding the long-term impact on your credit reputation. If already settled, work with certified advisors to clear the balance and secure a clean "Closed" status.'
      },
      hi: {
        introduction: 'भारत में एक बहुत बड़ा भ्रम फैला है कि लोन या क्रेडिट कार्ड का "वन-टाइम सेटलमेंट" (OTS) करने से सिबिल रिपोर्ट साफ हो जाती है। सच्चाई यह है कि बैंक सेटलमेंट को कर्ज चुकाने में असमर्थता मानते हैं और अगले 7 वर्षों तक लोन देने से बचते हैं।',
        sections: [
          {
            heading: 'कर्ज सेटल करने पर असल में क्या होता है?',
            body: 'मान लीजिए आपके क्रेडिट कार्ड पर ₹1,00,000 बकाया था और बैंक ने ₹45,000 लेकर केस बंद करने की बात कही। बैंक ने कॉल करना तो बंद कर दिया, लेकिन बाकी ₹55,000 का नुकसान ब्यूरो को रिपोर्ट करके आपके खाते को "Settled" मार्क कर दिया।'
          },
          {
            heading: 'भविष्य में अन्य बैंक इस पर क्या प्रतिक्रिया देते हैं?',
            body: 'जब आप कुछ वर्षों बाद होम लोन या बिजनेस लोन लेने जाते हैं, तो बैंक देखते हैं कि आपने पहले बैंक का पूरा पैसा नहीं चुकाया था। अधिकांश बैंक सेटलमेंट वाले मामलों को तुरंत निरस्त कर देते हैं।'
          },
          {
            heading: 'कानूनी समाधान: खाते को "Closed" में अपग्रेड करवाना',
            body: 'इसे ठीक करने के लिए मूल बैंक से संपर्क करके बची हुई छूट राशि (Waived Balance) का भुगतान करना होता है और बैंक से नो ड्यूज सर्टिफिकेट (NOC/NDC) लेना होता है। इसके बाद बैंक सिबिल में स्टेटस को "Closed" में बदलता है।'
          }
        ],
        summary: 'बिना सोचे-समझे सेटलमेंट कभी न करें। यदि पहले कर चुके हैं, तो बचे हुए अंतर को चुकाकर बैंक से क्लीन "Closed" स्टेटस और एनओसी प्राप्त करें।'
      }
    }
  },
  {
    id: 'how-to-file-cibil-dispute',
    slug: 'how-to-file-an-official-cibil-dispute-step-by-step',
    title: {
      en: 'How to File an Official CIBIL Dispute and Resolve Errors in 30 Days',
      hi: 'CIBIL में आधिकारिक शिकायत (Dispute) कैसे दर्ज करें और 30 दिनों में सुधार पाएं'
    },
    excerpt: {
      en: 'A practical, step-by-step guide to disputing incorrect loan accounts, clerical DPD errors, and fraudulent PAN misuses under RBI guidelines.',
      hi: 'आरबीआई दिशानिर्देशों के तहत गलत लोन खातों, लिपिकीय त्रुटियों और पैन कार्ड के दुरुपयोग पर कानूनी आपत्ति दर्ज करने की चरणबद्ध गाइड।'
    },
    category: { en: 'Bureau Dispute', hi: 'ब्यूरो विवाद' },
    date: 'Sep 15, 2026',
    readTime: { en: '5 min read', hi: '5 मिनट पढ़ें' },
    author: { en: 'Legal & Bureau Advisory Team', hi: 'लीगल व ब्यूरो एडवाइजरी टीम' },
    content: {
      en: {
        introduction: 'Nearly 1 out of 5 credit reports in India contain clerical or banking errors—from wrongly tagged overdue days to loans taken by someone with a similar name or PAN error. You do not have to accept these errors; the law gives you full rights to contest them.',
        sections: [
          {
            heading: 'Step 1: Obtain Your Official Credit Report with Control Number (ECN)',
            body: 'Every CIBIL report has an Enquiry Control Number (ECN). Note down this 9-digit number alongside the exact Account Number and Lender Name that contains the discrepancy.'
          },
          {
            heading: 'Step 2: Submit Formal Dispute on the Bureau Portal',
            body: 'Navigate to the bureau dispute resolution desk. Select the specific section (e.g., Accounts, Personal Info, or Inquiries) and state the factual discrepancy with supporting payment receipts or bank NOCs.'
          },
          {
            heading: 'Step 3: The Mandatory 30-Day Lender Verification Cycle',
            body: 'Under RBI regulations, once a dispute is raised, the credit bureau must forward the query to the reporting bank within 7 days. The lender has a statutory obligation to respond within 21 to 30 days. If the bank fails to substantiate the overdue entry, the bureau must purge or rectify it.'
          },
          {
            heading: 'Step 4: Escalation to the RBI Ombudsman',
            body: 'If a bank continues to report wrongful information despite valid proof of closure, you can escalate the matter directly to the Reserve Bank of India Integrated Ombudsman with zero fees.'
          }
        ],
        summary: 'Never let incorrect records hurt your financial future. Use official bureau dispute mechanisms and RBI Ombudsman escalation to protect your credit integrity.'
      },
      hi: {
        introduction: 'भारत में लगभग हर 5 में से 1 क्रेडिट रिपोर्ट में कोई न कोई बैंकिंग या लिपिकीय त्रुटि होती है—जैसे बैंक की गलती से लेट पेमेंट चढ़ना या किसी अन्य व्यक्ति का लोन आपके पैन कार्ड पर दिखना। आपको इसे चुपचाप सहने की जरूरत नहीं है, कानून आपको सुधार का पूरा अधिकार देता है।',
        sections: [
          {
            heading: 'चरण 1: कंट्रोल नंबर (ECN) के साथ आधिकारिक रिपोर्ट प्राप्त करें',
            body: 'प्रत्येक CIBIL रिपोर्ट पर 9-अंकों का ECN नंबर होता है। इस नंबर, संबंधित बैंक के नाम और गलत खाता संख्या को नोट करें।'
          },
          {
            heading: 'चरण 2: ब्यूरो पोर्टल पर औपचारिक शिकायत (Dispute) दर्ज करें',
            body: 'ब्यूरो के विवाद समाधान अनुभाग में जाकर संबंधित खाते का चयन करें और बैंक स्टेटमेंट या भुगतान रसीद जैसे साक्ष्यों के साथ सही विवरण दर्ज करें।'
          },
          {
            heading: 'चरण 3: आरबीआई द्वारा तय 30-दिवसीय सत्यापन चक्र',
            body: 'आरबीआई के नियमों के अनुसार, ब्यूरो को 7 दिनों के भीतर बैंक से पुष्टि मांगनी होती है। बैंक को 21 से 30 दिनों में जवाब देना अनिवार्य है। यदि बैंक गलती प्रमाणित नहीं कर पाता, तो ब्यूरो को रिकॉर्ड ठीक करना होता है।'
          },
          {
            heading: 'चरण 4: समाधान न होने पर आरबीआई लोकपाल (Ombudsman) में अपील',
            body: 'यदि बैंक साक्ष्य देने के बाद भी गलत एंट्री नहीं हटाता, तो आप सीधे भारतीय रिज़र्व बैंक के एकीकृत लोकपाल के पास निशुल्क शिकायत दर्ज कर सकते हैं।'
          }
        ],
        summary: 'गलत एंट्रीज को अपनी क्रेडिट प्रोफाइल खराब न करने दें। आधिकारिक ब्यूरो डिस्प्यूट और आरबीआई गाइडलाइंस का उपयोग कर समय पर सुधार करवाएं।'
      }
    }
  }
];
