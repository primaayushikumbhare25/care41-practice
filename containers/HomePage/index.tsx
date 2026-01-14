import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import GoalSection from "@/components/GoalSection";
import FeedbackSection from "@/components/FeedbackSection";
import Community from "@/components/CommunitySection";
function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServiceSection />
      <GoalSection />
      <FeedbackSection />
      <Community />
    </div>
  );
}

export default HomePage;
