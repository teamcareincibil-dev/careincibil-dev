import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const { pathname, search, hash } = useLocation();
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  // Automatically scroll to the top of the page whenever the route changes
  useEffect(() => {
    // If there is an anchor hash (e.g. #faq), scroll to it; otherwise scroll to the very top
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Comprehensive scroll to top for all browsers and viewport containers
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.body.scrollTop = 0;
  }, [pathname, search, hash]);

  // Track scroll position to show a floating "Back to Top" button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          title="Back to top"
          className="fixed bottom-22 right-6 z-40 p-2.5 rounded-full bg-white text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 flex items-center justify-center group"
        >
          <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
