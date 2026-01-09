"use client";
import React from "react";
import "./index.css";
import Image from "next/image";

function Hero() {
  return (
    
      <div className="form">
        <section className="care">
          <h1 className="card">
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
    
  );
}

export default Hero;