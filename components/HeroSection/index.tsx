"use client";
import React from "react";
import HeroSectionForm from "@/components/HeroSectionForm";
import "./index.css";
import Image from "next/image";


function Hero() {
  return (
     <div className = "overall">
      <div className="care-wrapper">
      <div className="care-container">
        <div className="image image-one">
          <Image src="/image1.jpg" alt="Care" width={280} height={600} />
        </div>
        <div className="info-card top-card">
          <h4>Care</h4>
          <p>
            Personalized home care for comfort and well-being.
          </p>
        </div>
        <div className = "info-card1"> <Image className="icon" src="/carbon_result-old.png" alt= "logo" width = {200} height = {200} /></div>
        <div className="center-icon">
          <Image src="/right 1.png" alt= "logo" width = {200} height = {200} />
        </div>   
        <div className="image image-two">     
          <Image src="/unique2.png" alt="Companionship" width={250} height={500} />
        </div>
        <div className = "info-card2"><Image className="icon" src = "/generate 1.png" alt = "icon1" width = {60} height = {50}/></div>
        <div className="info-card bottom-card">
          <h4>Companionship</h4>
          <p>
            Supportive services <br/>for a fulfilling,<br/> connected life.
          </p>
        </div>

      </div>
    </div>
    <HeroSectionForm />
    </div>
   
   
  );
}

export default Hero;
