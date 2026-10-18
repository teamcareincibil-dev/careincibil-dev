import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { blogsData } from '../data/blogsData';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Calendar, ArrowRight, Search, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const BlogListPage: React.FC = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: { en: 'All Articles', hi: 'सभी लेख' } },
    { id: 'Home Loan', label: { en: 'Home Loan', hi: 'होम लोन' } },
    { id: 'Personal Loan', label: { en: 'Personal Loan', hi: 'पर्सनल लोन' } },
    { id: 'Credit Repair', label: { en: 'Credit Repair', hi: 'क्रेडिट सुधार' } },
    { id: 'Bureau Dispute', label: { en: 'Bureau Dispute', hi: 'ब्यूरो विवाद' } },
  ];

  const filteredPosts = blogsData.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category.en === selectedCategory;
    const matchesSearch =
      post.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt[language].toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "CareInCibil Credit Education & Financial Advisory Guides",
    "url": "https://careincibil.com/blogs",
    "description": "Educational articles covering CIBIL score improvement, home loan approvals, DPD markers, and dispute filing."
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEOHead
        title={language === 'hi' ? 'क्रेडिट ब्लॉग्स एवं गाइड – सिबिल सुधार व लोन ज्ञान' : 'Credit Knowledge Blog – CIBIL Repair & Loan Guides'}
        description={language === 'hi' ? 'क्रेडिट स्कोर, होम लोन, पर्सनल लोन, सेटलमेंट और ब्यूरो डिस्प्यूट से जुड़ी सभी महत्वपूर्ण जानकारियों के विस्तृत लेख।' : 'Read in-depth financial advisory articles on home loans, personal loans, CIBIL 750+ score benchmarks, and settling debt without hurting your credit.'}
        keywords="CIBIL blog, credit score articles, home loan minimum CIBIL, personal loan score, settled vs closed CIBIL, file bureau dispute"
        canonicalPath="/blogs"
        schema={blogListSchema}
      />
      {/* Header */}
      <section className="bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white text-slate-800 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            {language === 'hi'
              ? 'क्रेडिट स्कोर सुधारें और लोन की तैयारी करें'
              : 'Improve Your Credit Score and Get Loan-Ready'}
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            {language === 'hi'
              ? 'बैंकों की लोन पॉलिसियां, सेटलमेंट के असर और कानूनी ब्यूरो विवाद की प्रमाणिक जानकारी हिंदी व अंग्रेजी में।'
              : 'In-depth, non-jargon financial guides on home loan approvals, DPD clearing, settlements, and RBI guidelines.'}
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label[language]}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={language === 'hi' ? 'लेख खोजें...' : 'Search articles...'}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <p className="text-base font-semibold">
                {language === 'hi' ? 'कोई लेख नहीं मिला।' : 'No articles match your search criteria.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                      <span className="font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
                        {post.category[language]}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime[language]}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                      <Link to={`/blogs/${post.slug}`} className="hover:text-emerald-700 transition">
                        {post.title[language]}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {post.excerpt[language]}
                    </p>
                  </div>

                  <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      By {post.author[language]}
                    </span>
                    <Link
                      to={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition"
                    >
                      <span>{language === 'hi' ? 'विस्तार से पढ़ें' : 'Read Full Guide'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
