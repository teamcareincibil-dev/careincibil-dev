import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { blogsData } from '../data/blogsData';
import { Calendar, Clock, ArrowLeft, ArrowRight, ShieldCheck, Share2, CheckCircle2, PhoneCall } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const post = blogsData.find((b) => b.slug === slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const content = post.content[language];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title[language],
    "description": post.excerpt[language],
    "author": {
      "@type": "Organization",
      "name": post.author[language]
    },
    "publisher": {
      "@type": "Organization",
      "name": "CareInCibil",
      "url": "https://careincibil.com",
      "logo": "https://careincibil.com/logo.png"
    },
    "datePublished": "2026-10-12",
    "mainEntityOfPage": `https://careincibil.com/blogs/${post.slug}`
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEOHead
        title={post.title[language]}
        description={post.excerpt[language]}
        keywords={`${post.category.en}, CIBIL score advice, credit repair guide, loan approval help, CareInCibil`}
        canonicalPath={`/blogs/${post.slug}`}
        ogType="article"
        publishedTime="2026-10-12"
        author={post.author[language]}
        schema={articleSchema}
      />
      {/* Breadcrumb Header */}
      <section className="bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white text-slate-800 pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 text-xs text-emerald-800 hover:text-emerald-950 font-semibold mb-6 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'सभी ब्लॉग्स पर लौटें' : 'Back to All Guides'}</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mb-4">
            <span className="font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-300">
              {post.category[language]}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {post.readTime[language]}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4 leading-snug">
            {post.title[language]}
          </h1>

          <p className="text-slate-500 text-xs sm:text-sm font-medium">
            By {post.author[language]} • CareInCibil Financial Literacy Series
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-12 shadow-xs space-y-8">
            {/* Lead introduction */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
              {content.introduction}
            </div>

            {/* Sections */}
            <div className="space-y-8 pt-2">
              {content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {sec.heading}
                  </h2>
                  <div className="text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line">
                    {sec.body}
                  </div>
                </div>
              ))}
            </div>

            {/* Takeaways Summary Box */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>{language === 'hi' ? 'मुख्य निष्कर्ष (Key Takeaway):' : 'Key Takeaway:'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {content.summary}
              </p>
            </div>

            {/* Author note & Consultation CTA */}
            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm font-bold text-slate-900">
                  {language === 'hi' ? 'क्या आपकी रिपोर्ट में भी ऐसी समस्या है?' : 'Experiencing Similar Credit Report Remarks?'}
                </h4>
                <p className="text-xs text-slate-500">
                  {language === 'hi'
                    ? 'हमारे प्रयागराज केंद्रीय डेस्क से सीधे 1-ऑन-1 गोपनीय परामर्श प्राप्त करें।'
                    : 'Get 1-on-1 confidential advice from our certified credit counselors.'}
                </p>
              </div>

              <Link
                to="/book-free-call"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition shadow-xs shrink-0"
              >
                <span>{language === 'hi' ? 'फ्री कॉल बुक करें' : 'Book Free Call'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Related Articles Navigation */}
          <div className="mt-10 text-center">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'hi' ? 'सभी क्रेडिट गाइड्स देखें' : 'Explore More Credit Guides'}</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};
