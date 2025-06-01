import React from "react";
import Container from "@/components/Container";
import AboutCards from "@/components/AboutCards";
import AboutTimeline from "@/components/AboutTimeline";
import AboutFounder from "@/components/AboutFounder";
import RedSection from "@/components/RedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const page = () => {
  return (
    <>
    <RedSection title="About SRIYOG">
      SRIYOG has been functioning under a start-up model, and is the most
      recent example of leveraging digital technology to address social
      problems like unemployment through digital connectivity.
    </RedSection>
    <Container/>
    <AboutCards/>
    <AboutTimeline/>
    {/* <AboutFounder/> */}
    </>
  );
};

export default page;
