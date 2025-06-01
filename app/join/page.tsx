import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Now | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const page = () => {
  return (
    <div>
      <script
        src="https://static.airtable.com/js/embed/embed_snippet_v1.js"
        async
      ></script>

      {/* Airtable iframe */}
      <div className="w-full border border-gray-300 bg-transparent overflow-hidden">
        <iframe
          className="airtable-embed airtable-dynamic-height w-full"
          src="https://airtable.com/embed/appvrBIeEeSmQTIbQ/shrMeTK67JhB7z3lr?backgroundColor=gray"
          frameBorder="0"
          width="100%"
          height="1440"
          style={{ background: "transparent" }}
        ></iframe>
      </div>

      {/* Optional separator section */}
      <section className="container mx-auto pt-5 pb-5 border-b border-gray-200"></section>
    </div>
  )
}

export default page