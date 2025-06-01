"use client";

import RedSection from "@/components/RedSection";
import Image from "next/image";

const features = [
  {
    img: "1.svg",
    title: "Lightweight App",
    desc: "Our app is designed to be lightweight and fast, ensuring smooth performance even on devices with limited storage and processing power. Enjoy a seamless experience without any lag.",
  },
  {
    img: "2.svg",
    title: "Open Platform",
    desc: "SRIYOG is an open platform that welcomes businesses and professionals from various industries. Easily connect with a diverse range of opportunities and services without any barriers.",
  },
  {
    img: "3.svg",
    title: "Digital Profiling",
    desc: "Create a comprehensive digital profile that showcases your skills, experiences, and qualifications. Stand out to potential employers or clients with a professional and detailed profile.",
  },
  {
    img: "4.svg",
    title: "Verified Professionals",
    desc: "We prioritize trust and quality. All professionals on SRIYOG are verified to ensure they meet our standards, giving you peace of mind when hiring or collaborating.",
  },
  {
    img: "5.svg",
    title: "WhatsApp Integrated",
    desc: "Communicate effortlessly with professionals or businesses through our WhatsApp integration. Enjoy fast and convenient messaging directly from the app.",
  },
  {
    img: "6.svg",
    title: "Secured Payment",
    desc: "Pay your membership fee securely through IME Pay. Enjoy peace of mind with safe and convenient transactions, ensuring your membership is activated without any hassle.",
  },
  {
    img: "7.svg",
    title: "Easy Registration",
    desc: "Join SRIYOG with ease. Our simple registration process allows businesses and professionals to sign up and start connecting with opportunities in no time.",
  },
  {
    img: "8.svg",
    title: "Wide Network",
    desc: "Tap into a wide network of businesses and professionals. Whether you're looking for a specific service or offering one, SRIYOG connects you with the right people.",
  },
  {
    img: "9.svg",
    title: "Fast Access",
    desc: "Experience fast access to job opportunities and professional services. Our platform is designed for quick and efficient navigation, saving you time and effort.",
  },
];

const FeaturesSection = () => {
  return (
    <>
        <RedSection title="Features"/>
      <section className="w-full bg-white text-black">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <Image
                  src={`/images/features/${feature.img}`}
                  alt={feature.title}
                  width={50}
                  height={50}
                  className="mx-auto mb-4"
                />
                <h4 className="text-base sm:text-lg font-semibold mb-2">
                  {feature.title}
                </h4>
                <p className="text-justify px-4 text-gray-700 text-sm sm:text-base">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full pt-10 pb-10 border-b border-gray-300"></section>
    </>
  );
};

export default FeaturesSection;
