import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
  schema?: Record<string, any>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalPath,
  ogType = 'website',
  publishedTime,
  author,
  schema
}) => {
  const location = useLocation();
  const { language } = useLanguage();

  const baseUrl = 'https://careincibil.com';
  const fullUrl = `${baseUrl}${canonicalPath || location.pathname}`;

  useEffect(() => {
    // 1. Update Document Title
    const formattedTitle = title.includes('CareInCibil') ? title : `${title} | CareInCibil`;
    document.title = formattedTitle;

    // Helper to set or create meta tag
    const setMeta = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    if (keywords) {
      setMeta('name', 'keywords', keywords);
    }

    // 3. Canonical Link Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // 4. OpenGraph Tags
    setMeta('property', 'og:title', formattedTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', 'CareInCibil');
    setMeta('property', 'og:locale', language === 'hi' ? 'hi_IN' : 'en_IN');

    // 5. Twitter Card Tags
    setMeta('name', 'twitter:title', formattedTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:card', 'summary_large_image');

    // 6. Dynamic JSON-LD Structured Data
    const scriptId = 'schema-dynamic-page-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, keywords, fullUrl, ogType, language, schema]);

  return null;
};
