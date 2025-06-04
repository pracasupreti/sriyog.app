import ClientVMGO from "@/components/ClientVMGO";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VMGO | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

export default function VMGOPage() {
  return <ClientVMGO />;
}
