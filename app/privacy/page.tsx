import PrivacyPolicy from '@/components/Policy'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const page = () => {
  return (
    <div>
      <PrivacyPolicy/>
    </div>
  )
}

export default page