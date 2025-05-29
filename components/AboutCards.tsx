"use client";
import React from "react";

const AboutCards = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36">
        <div className="bg-[#d4c3c3] rounded-lg shadow-lg p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div className="flex items-start gap-4">
              <img src="/images/team.svg" alt="team" className="w-12 h-12" />
              <div>
                <h2 className="text-[#841515] text-lg font-semibold mb-2">Experienced Team</h2>
                <p className="text-gray-800 text-sm sm:text-base">
                  Founded by a group of second-generation entrepreneurs for providing something valuable
                  for society and people who enjoy digital connectivity.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4">
              <img src="/images/building.svg" alt="global reach" className="w-12 h-12" />
              <div>
                <h2 className="text-[#841515] text-lg font-semibold mb-2">Global Reach</h2>
                <p className="text-gray-800 text-sm sm:text-base">
                  Started from Biratnagar, Nepal, we are gradually growing to cover few major cities of
                  Nepal. As a part of our global expansion, we are opening membership for skilled
                  professionals in New Delhi & Dubai.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4">
              <img src="/images/flag.svg" alt="opportunities" className="w-12 h-12" />
              <div>
                <h2 className="text-[#841515] text-lg font-semibold mb-2">Multiple Opportunities</h2>
                <p className="text-gray-800 text-sm sm:text-base">
                  Starting from 24 services, we have upgraded now to 18 categories and 158 sub-categories.
                  We have been continuously upgrading and modifying your service categories as per the user
                  requirements and specification.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-start gap-4">
              <img src="/images/skills.svg" alt="ai ml" className="w-12 h-12" />
              <div>
                <h2 className="text-[#841515] text-lg font-semibold mb-2">AI and ML Integration</h2>
                <p className="text-gray-800 text-sm sm:text-base">
                  By adopting the latest technology and innovation, we are automating our system. Once we
                  are equipped with sufficient database, Artificial Intelligence (AI) and Machine Language
                  (ML) can be used to make the user experience much easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
