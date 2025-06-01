import AirtableEmbed from '@/components/Feedback'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};


const page = () => {
  return (
    <div>
      <AirtableEmbed/>
    </div>
  )
}

export default page