"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";

export default function ClientFooter() {
  const pathname = usePathname();

  // Adjust the path if your homepage route differs (e.g., "/home")
  const isHome = pathname === "/";

  if (isHome) return <FooterBottom/>;

  return (
    <>
      <Footer />
      <FooterBottom />
    </>
  );
}
