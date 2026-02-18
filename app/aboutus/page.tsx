import Header from "@/components/Header";
import React from "react";
import "./page.css";
import Image from "next/image";
import GoalSection from "@/components/GoalSection";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <div className="services-hero">
        <h1>About us</h1>
      </div>
      <section className="empower-section">
        <div className="empower-container">
          <h2 className="empower-title">
            Empowering Caregivers with Seamless Solutions for Elderly Well-being
            and Support
          </h2>

          <div className="empower-content">
            {/* Left Image */}
            <div className="empower-image">
              <img
                src="/aboutus1.png"
                alt="Caregiving"
                width={449}
                height={695}
              />
            </div>

            {/* Right Content */}
            <div className="empower-text">
              <h3>
                Compassion Meets Innovation:<br/>
                <span>Redefining the Caregiving Experience</span>
              </h3>

              <p className="description">
                At Care41, we are dedicated to simplifying caregiving for
                elderly individuals by blending compassion and innovation. Our
                platform offers tailored services, including home care, medical
                support, and spiritual wellness, ensuring every senior receives
                the attention and dignity they deserve. Designed with caregivers
                in mind, Care41 streamlines service management, reduces stress,
                and fosters a supportive community for sharing experiences and
                advice. We empower caregivers to focus on meaningful connections
                with their loved ones while we handle the complexities of
                eldercare loved ones while we handle the complexities of
                eldercare. We empower caregivers to focus on meaningful connections
                with their loved ones while we handle the complexities of
                eldercare loved ones while we handle the complexities of
                eldercare.
              </p>

              <div className="mission-vision">
                <div className="card blue">
                  <h4>Our mission</h4>
                  <p>
                    To empower caregivers with innovative tools and
                    compassionate services, simplifying eldercare and promoting
                    holistic well-being. We aim to ensure every elderly
                    individual receives dignity, respect, and quality care while
                    supporting, holistic well-being. We aim to ensure every
                    elderly individual  supporting, holistic well-being. We aim to ensure every
                    elderly individual..
                  </p>
                </div>

                <div className="card green">
                  <h4>Our vision</h4>
                  <p>
                    To empower caregivers with innovative tools and
                    compassionate services, simplifying eldercare and promoting
                    holistic well-being. We aim to ensure every elderly
                    individual receives dignity, respect, and quality care while
                    supporting, holistic well-being. We aim to ensure every
                    elderly individual  supporting, holistic well-being. We aim to ensure every
                    elderly individual..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="team-section">
            <h3 className="team-title">Meet our team</h3>

           <div className="team-grid">
              <div className="team-card">
                <Image src="/team1.png" alt="Team Member 1" width ={350} height = {500}/>
                <h4>Team Member 1</h4>
                <p className="role">Founder</p>
              </div>

              <div className="team-card">
                <Image src="/team2.png" alt="Team Member 2" width ={350} height = {500}/>
                <h4>Team Member 2</h4>
                <p className="role">Co-founder</p>
              </div>

              <div className="team-card">
                <Image src="/team3.png" alt="Team Member 3" width ={350} height = {500} />
                <h4>Team Member 3</h4>
                <p className="role">CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className = "goal-team">
      <GoalSection/>
      </div>
      <FeedbackSection />
      <Footer/>
    </div>
  );
};
export default page;
