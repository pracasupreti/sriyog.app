import React from 'react'
import HowSRIYOGWorks from '@/components/HowSRIYOGworks'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const page = () => {
  return (
    <div>
      <HowSRIYOGWorks/>

    </div>
  )
}

export default page