import MembershipSection from "@/components/MembershipSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

export default function HomePage() {
  return (
    <main>
      <MembershipSection />
    </main>
  );
}
