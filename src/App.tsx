import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WhatWeDoPage } from './pages/Services';
import { CheckCibilScorePage } from './pages/CheckCibilScorePage';
import { BookFreeCallPage } from './pages/BookFreeCallPage';
import { PlansPage } from './pages/PlansPage';
import { EmiCalculatorPage } from './pages/EmiCalculatorPage';
import { ContactPage } from './pages/ContactPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { NotFoundPage } from './pages/NotFoundPage';

import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />

              {/* Core Pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<WhatWeDoPage />} />

              {/* Tools & Call */}
              <Route path="/check-cibil-score" element={<CheckCibilScorePage />} />
              <Route path="/check-your-cibil-score" element={<CheckCibilScorePage />} />
              <Route path="/book-free-call" element={<BookFreeCallPage />} />
              <Route path="/book-a-free-call" element={<BookFreeCallPage />} />

              {/* Pricing & Calculator */}
              <Route path="/plans" element={<PlansPage />} />
              <Route path="/pricing" element={<PlansPage />} />
              <Route path="/calculator" element={<EmiCalculatorPage />} />
              <Route path="/emi-calculator" element={<EmiCalculatorPage />} />

              {/* Contact */}
              <Route path="/contact" element={<ContactPage />} />

              {/* Blogs */}
              <Route path="/blogs" element={<BlogListPage />} />
              <Route path="/blogs/:slug" element={<BlogDetailPage />} />

              {/* Legal & Compliance */}
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/disclaimer" element={<TermsOfServicePage />} />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloatingButton />
        </div>
        <Analytics />
      </LanguageProvider>
    </BrowserRouter>
  );
}
