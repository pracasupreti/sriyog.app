'use client';

import React from 'react';

const videos = [
  {
    title: 'Nepal Startup Meet',
    src: 'https://www.youtube.com/embed/eS0Fm8zbk0c?si=0snlKzRWSF-1CVgk',
  },
  {
    title: 'Nepal Startup Meet 2019: Sriyog.com',
    src: 'https://www.youtube.com/embed/jgcHULl0ML8?si=BIzi3O0k7wpxuwJm',
  },
  {
    title: 'How to Find Job in SRIYOG?',
    src: 'https://www.youtube.com/embed/cNCSaeLGlS0?si=LqdK9I2vw25jUVO4',
  },
  {
    title: 'SRIYOG Nepal Startup Meet',
    src: 'https://www.youtube.com/embed/dwbmS85CanQ?si=Aq6ZKbYUir4JZXih',
  },
  {
    title: 'पार्टटाइम जागिर जुराउन वेबसाइटको बिकास - प्रकाश उप्रेती',
    src: 'https://www.youtube.com/embed/BM9yTsfkgb4?si=_xDlRCHTtU8d3nVK',
  },
  {
    title: 'बेरोजगारको सहारा बन्दै श्रीयोग डट कम संस्थापक उप्रेती',
    src: 'https://www.youtube.com/embed/bc7vYj3Oqz8?si=KHjS3oeVBBRkfgoB',
  },
  {
    title: 'How To Earn From Part Time Job In Nepal Sriyog !',
    src: 'https://www.youtube.com/embed/ejnHoKjom98?si=0iScpSqzRzyENUg5',
  },
  {
    title: 'Sambhawana Podcast 19: Sriyog.com - Desired Professional Platform',
    src: 'https://www.youtube.com/embed/3y1_MxeOq8s?si=3WK1z8ij-sFCyUP8',
  },
  {
    title: 'How to make a sriyog account',
    src: 'https://www.youtube.com/embed/8K1QScXWWic?si=GzRGxeQ9uMehXLj6',
  },
  {
    title: 'Part time jobs in Nepal - SRIYOG',
    src: 'https://www.youtube.com/embed/FPhQOT6H6fg?si=Pdcumj6cLE-zzUby',
  },
  {
    title: 'How to get online jobs by sriyog app',
    src: 'https://www.youtube.com/embed/HhEHWT-DfxQ?si=4mNNpwaRZ5i7xkPn',
  },
  {
    title: 'Sumadhur Bhet- Sima Basnet with Prakash Upreti',
    src: 'https://www.youtube.com/embed/VmTuwHmrTFw?si=B_LWJHxbBp6ub4Qj',
  },
];

export default function VideosSection() {
  return (
    <>
      {/* Featured Video */}
      <section className="w-full bg-[#8b1414] border-b border-red-800">
        <div className="max-w-screen-xl mx-auto text-center px-4 py-10">
          <h1 className="text-white text-3xl font-bold mb-6">Featured SRIYOG Video</h1>
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-[700px]"
              src="https://www.youtube.com/embed/ctzTleg6j1c?si=Z1-niUMrTaCSZyFt"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="max-w-screen-xl mx-auto px-4 py-12 text-black">
        <h2 className="text-2xl font-bold mb-8">SRIYOG Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {videos.map((video, index) => (
            <div key={index} className="w-full">
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-[400px]"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <h4 className="text-lg font-medium">{video.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Border Section */}
      <section className="w-full border-t border-gray-200 py-5"></section>
    </>
  );
}
