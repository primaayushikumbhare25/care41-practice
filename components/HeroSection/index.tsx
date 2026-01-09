"use client";
import React from "react";
import "./index.css";
import Image from "next/image";


function Hero() {
  return (
     <div className = "overall">
      <div className="care-wrapper">
      <div className="care-container">
        <div className="image image-one">
          <Image src="/image1.jpg" alt="Care" width={260} height={400} />
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
    

   
      <div className="form">

    <section className="care">
      <h1 className="form-heading">
        Compassionate care for elderly well-being.
      </h1>

      <p className="form-subtext">
        Everything you need to ensure your loved one's wellbeing
        <br />
        and your peace of mind.
      </p>

      <form className="care-form">
        <input type="text" placeholder="Full Name*" />
        <input type="email" placeholder="Email*" />

        <div className="phone-field">
          <span className="country-code">+91</span>
          <input type="tel" placeholder="Phone number" />
        </div>

        <input
          type="text"
          placeholder="Loved one's postal code (Optional)"
        />

        <label className="checkbox">
          <input type="checkbox" />
          <span>
            By checking this box, you confirm that you agree to Care41{" "}
            <a href="#">Terms & Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </span>
        </label>

        <button type="submit" className="submit-btn">
          Send Request
        </button>
      </form>
    </section>

      </div>
    </div>
   
   
  );
}

export default Hero;
