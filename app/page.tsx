import AchievementHero from "@/components/AchievementHero";
import BlogHero from "@/components/BlogHero";
import ConsultHero from "@/components/ConsultHero";
import ContactHero from "@/components/ContactHero";
import HomeHero from "@/components/HomeHero";
import ProjectsHero from "@/components/ProjectsHero";
import ServicesHero from "@/components/ServicesHero";
import SolutionsHero from "@/components/SolutionsHero";
import StatHero from "@/components/StatHero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-svw ">
      <div className="h-dvh w-full">
        <HomeHero />
      </div>
      <div className="h-full w-full">
        <AchievementHero />
      </div>
      <div id="services" className="h-full w-full" >
        <StatHero />
      </div>
      <div className="h-full w-full" >
        <SolutionsHero />
      </div>
      <div className="h-full w-full" >
        <ConsultHero />
      </div>
      <div className="h-full w-full" >
        <ServicesHero />
      </div>
      <div className="h-full w-full">
        <ProjectsHero />
      </div>
      <div className="h-dvh w-full">
        <BlogHero />
      </div>
      <div id="contact" className="h-full w-full">
        <ContactHero />
      </div>
    </main>
  );
}
