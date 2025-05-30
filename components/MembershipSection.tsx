"use client";

import Image from "next/image";
import Link from "next/link";

export default function MembershipSection() {
  return (
    <section className="w-full bg-gray-100 pt-10 pb-10" aria-labelledby="membership-heading">
      <div className="max-w-screen-xl mx-auto bg-white rounded shadow p-6 md:p-10">
        <article className="p-3">
          <header>
            <h2 id="membership-heading" className="text-center text-2xl sm:text-3xl font-semibold mb-6 text-black">
              मेम्बरशिप मोडेल मा SRIYOG (Membership Model of SRIYOG)
            </h2>
          </header>

          <div className="text-justify space-y-6 text-gray-800 leading-relaxed">
            <p className="italic">
              बि. स. १९ जेठ २०८१, तदनुसार ई. स. १ जुन २०२४, शनिबार, बिराटनगर
            </p>

            <p>
              सीप भएका दक्ष जनशक्तीहरुको प्रोफाइलिङ गरि काम गर्ने र गराउने व्यक्तीहरु बिच सोझै सम्पर्क स्थापित गर्न सन २०१८ मा{" "}
              <Link href="https://ocr.gov.np" target="_blank" className="text-blue-600 underline" rel="noopener noreferrer">
                कम्पनी रजिष्ट्रारको कार्यालय
              </Link>{" "}
              अन्तर्गत दर्ता भएको SRIYOG डिजिटल प्लेटफर्मले छोटो समयमा नै हजारौं प्रयोगकर्ताहरुलाई सजिलो र छरितो माध्यमबाट काम गर्ने अवसर प्रदान गर्दै आएको छ ।
            </p>

            <p>
              डिजिटल कनेक्टिभिटीको माध्यमबाट बेरोजगारी समस्या समाधान गर्न SRIYOG स्टार्टअप मोडेलमा सञ्चालनमा आएको हो ।
            </p>

            <figure className="flex justify-center">
              <Image src="/images/press/1.jpg" alt="SRIYOG प्रेस कभरेज" width={800} height={400} className="rounded" />
            </figure>

            <p>
              गुगल प्ले स्टोरमा १ लाख भन्दा बढी डाउनलोड भएको SRIYOG एप अहिले झन उत्कृष्ट सेवा प्रदान गर्ने नयाँ भर्सनमा अपडेट भएको छ ।
            </p>

            <p>
              ६ मार्च २०२४ मा{" "}
              <Link href="https://www.microsoft.com/en/startups/" target="_blank" className="text-blue-600 underline" rel="noopener noreferrer">
                Microsoft for Startups
              </Link>{" "}
              मा भेरिफाई भएको SRIYOG ले{" "}
              <Link href="https://azure.microsoft.com/en-us" target="_blank" className="text-blue-600 underline" rel="noopener noreferrer">
                Azure
              </Link>{" "}
              लगायतका सेवाहरूमा $125,000 को क्रेडिट सुविधा प्राप्त गरेको छ ।
            </p>

            <p>
              नेपालकै सबैभन्दा ठूलो प्रविधिक सेवा नेटवर्कको रूपमा SRIYOG एप बहुउपयोगी भएको छ ।
            </p>

            <figure className="flex justify-center">
              <Image src="/images/press/2.png" alt="Verified Professional Banner" width={800} height={400} className="rounded" />
            </figure>

            <p>
              SRIYOG सीपयुक्त जनशक्तिलाई डिजिटल प्रोफाइलिङ गरेर काम दिन बनाइएको खुला प्लेटफर्म हो ।
            </p>

            <p>
              Play Store मा एक लाखभन्दा बढी डाउनलोड भएको यो एप एप्पल स्टोरमा २०२४ सेप्टेम्बर भित्र ल्याउने योजना रहेको छ ।
            </p>

            <p>
              <Link href="https://en.wikipedia.org/wiki/Disintermediation" target="_blank" className="text-blue-600 underline" rel="noopener noreferrer">
                No Middleman Concept
              </Link>{" "}
              अनुसार आम्दानीको १००% कामदारलाई प्रदान गर्ने लक्ष्य रहेको छ ।
            </p>

            <p>
              हाल एपमा २९,९०० प्रयोगकर्ता तथा अन्य ५५ हजार प्राविधिक रहेको छ ।
            </p>

            <p>
              <Link href="https://www.ratopati.com/story/345665" target="_blank" className="text-blue-600 underline" rel="noopener noreferrer">
                IME Pay
              </Link>{" "}
              को माध्यमबाट मेम्बरशिप फी तिर्न सकिने सुविधा ८ फेब्रुअरी २०२३ मा सुरु गरिएको हो ।
            </p>

            <p>
              सदस्यता लिएपछि Yandex आधारित @sriyog.com इमेल उपलब्ध हुनेछ ।
            </p>

            <figure className="flex justify-center">
              <Image src="/images/press/3.jpg" alt="SRIYOG कार्यशाला" width={800} height={400} className="rounded" />
            </figure>

            <p>
              Verified प्रोफाइलहरुलाई Facebook पेजमा ब्यानर, एपमा ब्याच, Visibility वृद्धि र डिजिटल मार्केटिङ्गमा प्राथमिकता दिइनेछ ।
            </p>

            <p>
              SRIYOG एप प्रकाश इन्फोशिस प्रा.लि. द्वारा Chamber of Industries Morang अन्तर्गत सञ्चालनमा रहेको हो ।
            </p>

            <p>
              सदस्यता लिएपछि एक वर्ष निःशुल्क डिजिटल प्रोफाइल र इमेल, त्यसपछि रु १,९९९ मा नवीकरण गर्न सकिने व्यवस्था गरिएको छ ।
            </p>

            <p>
              सेवा लिने र दिनेबीच कुनै बिचौलिया बिना सीधा समझदारीमा आधारित डिजिटल सेवा प्रदान गर्ने उद्देश्य रहेको छ ।
            </p>

            <footer className="space-y-2">
              <p>📲 <strong>App Download:</strong>{" "}
                <Link href="https://bit.ly/sriyog" target="_blank" className="text-blue-600 underline" rel="noopener noreferrer">
                  Click here
                </Link>
              </p>
              <p>🌐 <strong>Website:</strong>{" "}
                <Link href="https://www.sriyog.com" target="_blank" className="text-blue-600 underline" rel="noopener noreferrer">
                  www.sriyog.com
                </Link>
              </p>
              <div className="flex gap-4 mt-2" aria-label="Download Documents">
                <Link href="/cdn/press/membership-model-sriyog.docx" download>
                  <Image src="/images/press/docx.svg" alt="Download Word Document" width={30} height={30} />
                </Link>
                <Link href="/cdn/press/membership-model-sriyog.pdf" download>
                  <Image src="/images/press/pdf.svg" alt="Download PDF Document" width={30} height={30} />
                </Link>
                <Link href="/cdn/press/membership-model-sriyog.epub" download>
                  <Image src="/images/press/epub.svg" alt="Download EPUB Document" width={30} height={30} />
                </Link>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </section>
  );
}
