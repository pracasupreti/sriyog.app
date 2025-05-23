"use client"
import React from "react";
import Container from "@/components/Container";
import AboutCards from "@/components/AboutCards";
import AboutTimeline from "@/components/AboutTimeline";
import AboutFounder from "@/components/AboutFounder";

const page = () => {
  return (
    <>
    <Container/>
    <AboutCards/>
    <AboutTimeline/>
    <AboutFounder/>
    </>
  );
};

export default page;
