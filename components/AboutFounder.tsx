"use client";
import React from "react";

export default function AboutFounder() {
  return (
    <>
    <section className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-7/12">
            <hr className="border-t-2 border-[#8b1414] w-20 mb-4" />
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#8b1414] mb-6 text-black">
              The Man Behind SRIYOG
            </h1>

            <p className="mb-4 text-justify text-black">
              Pracas Upreti's journey from a startup founder to a technology-driven change-maker in Biratnagar, Nepal,
              exemplifies the profound impact that individuals can have when they combine innovation with a commitment to
              social responsibility.
            </p>

            <p className="mb-4 text-justify text-black">
              Through his endeavors, Upreti has not only transformed his community but has also set a precedent for how
              technology can be harnessed to drive positive change and create a better future for all.
            </p>

            <p className="mb-4 text-justify text-black">
              Upreti's journey into the realm of technology began over a decade ago when he founded his first IT startup
              in 2007 A.D. as PRACAS Infosys in Biratnagar. Recognizing the potential of technology to bridge gaps and
              catalyze progress, he embarked on a mission to leverage digital solutions to address local challenges and
              foster economic development. His vision was not merely to create successful businesses but to effect
              meaningful change in his community.
            </p>

            <img src="/images/prakash_sig.png" alt="Signature" className="mt-6 w-40" />

            <p className="font-semibold mt-2 text-black">PRACAS Upreti</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://t.me/pracasupreti"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
              >
                <img src="/images/telegram.svg" alt="Telegram" width="24" height="24" />
              </a>
              <a
                href="https://x.com/pracas"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter/X"
              >
                <img src="/images/x.svg" alt="Twitter" width="24" height="24" />
              </a>
              <a
                href="https://linkedin.com/in/pracasupreti"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <img src="/images/linkedin.svg" alt="LinkedIn" width="24" height="24" />
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-5/12">
            <img
              src="/images/pracas_large.png"
              alt="Pracas Upreti"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="container-fluid  pt-5 pb-5 border-bottom border-faded">
  </section>
  </>

  );
}
