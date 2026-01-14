"use client";
import React, { useState } from "react";
import "./index.css";
import Image from "next/image";

function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();

    console.log("Form submit event:", e);

    if (!name || !email || !phone) {
      alert("Please fill all required fields");
      return;
    }

    if (!terms) {
      alert("Please accept Terms & Conditions");
      return;
    }

    console.log("Form submitted successfully");
  };

  return (
    <div className="form">
      <section className="care">
        <h1 className="card">Compassionate care for elderly well-being.</h1>

        <p className="form-subtext">
          Everything you need to ensure your loved one's wellbeing
          <br />
          and your peace of mind.
        </p>

        <form className="care-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="phone-field">
            <span className="country-code">+91</span>
            <input
              type="tel"
              placeholder="Phone number*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <input type="text" placeholder="Loved one's postal code (Optional)" />

          <label className="checkbox">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <span>
              By checking this box, you agree to Care41{" "}
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
