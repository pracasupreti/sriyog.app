import React from 'react'
import FaqSection from '@/components/FaqSection'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const page = () => {
  return (
    <div>
      <section className="w-full border-b bg-[#8B1414]">
        {/* This aligns text with Header */}
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-6">
          <div className="w-full md:w-8/12 lg:w-10/12 my-auto">
            <h1 className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-4">
              Frequently Asked Questions
            </h1>
          </div>
        </div>
      </section>
      <FaqSection/>
    </div>
  )
}

export default page