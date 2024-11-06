import DocterSection from "@/components/DocterSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DocterSection isHome= {true} />
    </div>
  );
}
