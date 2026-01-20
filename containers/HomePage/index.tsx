import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import GoalSection from "@/components/GoalSection";
import FeedbackSection from "@/components/FeedbackSection";
import Community from "@/components/CommunitySection";
import CaregiverService from "@/components/CaregiverService";
import QueAndAns from "@/components/QueAndAns";
import Footer from "@/components/Footer";
function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServiceSection />
      <GoalSection />
      <FeedbackSection />
      <Community />
      <CaregiverService/>
      <QueAndAns />
      <Footer />
    </div>
  );
}

export default HomePage;
