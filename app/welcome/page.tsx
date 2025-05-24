'use client';

import Image from 'next/image';

export default function WelcomeNote() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 bg-white rounded shadow p-6 sm:p-8">
        <div className="px-2 sm:px-4">
          {/* Welcome Logo */}
          <div className="text-center mb-8">
            <Image
              src="/images/welcome/logo.svg"
              alt="Welcome Logo"
              width={200}
              height={100}
              className="mx-auto"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-5 text-justify text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              <span className="font-semibold">SRIYOG</span> पार्ट टाइम गर्न तथा काम गर्ने ब्यक्तीहरु पाउने नेपालकै ठुलो संजाल हो...
            </p>
            <p>
              SRIYOG is Nepal&apos;s largest network for finding part-time and working people...
            </p>
            <p>
              काम भनौ वा काम खोज्ने मान्छे र काम गरिदिने मान्छेको बीचमा सेतु बन्दै...
            </p>
            <p>
              We did work on 12th September 2016 to solve the existing unemployment problem...
            </p>
            <p>
              काम सानो ठुलो भन्ने हुदैन तर पनि सानो भन्दा सानो देखि लिएर ठुलो काम गर्ने व्यक्तिहरुलाई...
            </p>
            <p>
              The job does not mean small or big, but we are arranging the system of digital profiling...
            </p>
            <p>
              पुरानो तरिका अनुसार कामदार खोज्ने भन्दा पनि सर्विस बेच्ने या भनौ सर्विस किन्नु पर्ने बाध्यता...
            </p>
            <p>
              Instead of looking for workers according to the old method, we have developed a tendency...
            </p>
            <p>
              SRIYOG मा १८ समूह अनि १५० भन्दा बढी उप समूहहरुमा दैनिक जीवनमा काम गर्ने व्यक्ति या कामदार खोज्ने अवसर दिनेछ ।
            </p>
            <p>
              In SRIYOG, 18 groups and more than 150 sub-groups will provide an opportunity...
            </p>
          </div>

          {/* Signature and Socials */}
          <div className="mt-10 flex flex-col md:flex-row justify-between items-start gap-10">
            {/* Signature Section */}
            <div className="space-y-2">
              <Image
                src="/images/prakash_sig.png"
                alt="Signature"
                width={150}
                height={50}
              />
              <p className="font-semibold text-lg">प्रकाश उप्रेती</p>
              <p className="text-sm">संस्थापक</p>

              <div className="flex gap-4 mt-2 text-gray-700">
                <a href="https://t.me/sriyog" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/footer/pracas.svg" alt="Telegram" width={25} height={25} />
                </a>
                <a href="https://x.com/pracas" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,21H3V3h18V21z M17.538,17l-4.186-5.99L16.774,7h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/pracasupreti" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 30" fill="currentColor">
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Optional Placeholder */}
            <div className="hidden md:block w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
