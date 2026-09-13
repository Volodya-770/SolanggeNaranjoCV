import { Header } from "@/components/Header";
import { ProfileSection } from "@/components/ProfileSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#FAFAF9] text-[#27272A]">
      <main className="max-w-[760px] mx-auto px-5 sm:px-8 py-4 sm:py-8 print-clean">
        <Header />
        <ProfileSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <Footer />
      </main>
    </div>
  );
}
