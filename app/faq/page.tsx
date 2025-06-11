import React from "react";
import FaqSection from "@/components/FaqSection";
import type { Metadata } from "next";
import RedSection from "@/components/RedSection";

export const metadata: Metadata = {
  title: "FAQ | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const page = () => {
  return (
    <div>
      <RedSection title="Frequently Asked Questions" />
      <FaqSection />
    </div>
  );
};

export default page;
