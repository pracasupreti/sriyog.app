'use client';
import { useEffect } from 'react';

export default function AirtableEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.airtable.com/js/embed/embed_snippet_v1.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full px-4 lg:px-36 py-10">
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <iframe
          className="airtable-embed airtable-dynamic-height w-full"
          src="https://airtable.com/embed/appvrBIeEeSmQTIbQ/shrqe1Vnc3IQexORd?backgroundColor=gray"
          frameBorder="0"
          height="1070"
          style={{ background: 'transparent' }}
        ></iframe>
      </div>
    </div>
  );
}
