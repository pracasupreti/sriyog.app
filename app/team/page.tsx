import RedSection from '@/components/RedSection';
import Image from 'next/image';
import TeamSection from '@/components/TeamSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const teamMembers = [
  {
    name: 'PRACAS Upreti',
    title: 'Founder',
    image: '/gallery.jpg', // Replace with actual image path
  },
  {
    name: 'Yogendra Dhamala',
    title: 'Chief Executive Officer',
  },
  {
    name: 'Achut Chalise',
    title: 'Chief Operating Officer',
  },
  {
    name: 'Kishor Baskota',
    title: 'Chief Financial Officer',
  },
  {
    name: 'Pankaj Ghimire',
    title: 'Chief Branding Officer',
  },
  {
    name: 'Sudhir Nepal',
    title: 'Chief Media Officer',
  },
  {
    name: 'Aavash Adhikari',
    title: 'Sr. Community Manager',
  },
  {
    name: 'Sobitmaan Shrestha',
    title: 'Chief Digital Strategist',
  },
  {
    name: 'Isha Sunam',
    title: 'Data Manager',
  },
  {
    name: 'Suraj Majhi',
    title: 'Business Manager',
  },
  {
    name: 'Nischal Bhagat',
    title: 'UAE Team Leader',
  },
  {
    name: 'Falguuni Dahal',
    title: 'Community Manager',
  },
  {
    name: 'Dipak Bohora',
    title: 'Community Manager',
  },
];

const Page = () => {
  return (
    <>
      <RedSection title="Team" />
      <TeamSection />
     </> 
  );
};

export default Page;
