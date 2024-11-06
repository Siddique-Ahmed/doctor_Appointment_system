import DocterSection from "@/components/DocterSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DocterSection />
    </div>
  );
}
