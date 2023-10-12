"use client"
import './globals.css'
import React, { useEffect } from 'react';

const metadata = {
  title: 'Vanilla',
  description: 'Vanilla Website',
};

export default function RootLayout({ children }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
      };
    };
  }, []);

  return (
    <html lang="en-US">
      <head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <description>{metadata.description}</description>
      </head>
      <body>
        {children}
        <div className='flex flex-col p-4'>
        <div
          id="google_translate_element"
          className="p-2 text-white rounded-lg"
          style={{ transform: 'scale(0.85)' }}
        >
          </div>
        </div>
      </body>
    </html>
  );
}
