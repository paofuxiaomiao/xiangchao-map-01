/**
 * 湘超地图互动页面 - 「湖湘风物志」新中式地图志美学
 * 
 * Design: Neo-Chinese Cartographic style
 * Colors: Rice paper #F5EDE0, Ink #2C2C2C, Cinnabar #C84B31, Indigo #2B4C7E
 * Typography: Ma Shan Zheng (display), Noto Serif SC (headings), Noto Sans SC (body)
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureNav from "@/components/FeatureNav";
import StatsBar from "@/components/StatsBar";
import TeamShowcase from "@/components/TeamShowcase";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen rice-paper-bg">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <FeatureNav />
      <TeamShowcase />
      <ScheduleTimeline />
      <Footer />
    </div>
  );
}
