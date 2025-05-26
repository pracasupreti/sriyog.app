"use client";

export default function AirtableEmbed() {
  return (
    <div className="w-full">
      {/* Airtable Embed Script */}
      <script
        src="https://static.airtable.com/js/embed/embed_snippet_v1.js"
        async
      ></script>

      {/* Airtable Iframe Embed */}
      <div className="w-full border border-gray-300" style={{ background: "transparent" }}>
        <iframe
          className="w-full h-[1440px] airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/appvrBIeEeSmQTIbQ/shrMeTK67JhB7z3lr?backgroundColor=gray"
          frameBorder="0"
          
          title="Airtable Form"
        ></iframe>
      </div>

      {/* Section Divider (like the one after about page) */}
      <section className="w-full py-10 border-b border-gray-300"></section>
    </div>
  );
}
