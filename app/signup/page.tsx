"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./page.css";
import { useState } from "react";


export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    if (!email) {
      alert("Please enter email");
      return;
    }
    router.push(`/otp?email=${email}`);
  };
  return (
    
    <div className="signup-wrapper">
      <div className="signup-container">
        
        
        <div className="left-panel">
          <Image
            src="/goal.png"  
            alt="Caregiver"
            fill
            className="left-image"
          />

          <div className="overlay">
            <div className="logo">CARE<span>41</span></div>

            <div className="bottom-text">
              <p>
                Compassionate care and support services <br />
                tailored for elderly well-being.
              </p>

              <div className="dots">
                <span className="active"></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="right-panel">
          <h1>
            Welcome to <br />
            <span>Care41</span>
          </h1>

          <p className="subtext">
            To access account and manage services
          </p>

          <label>Please Sign Up or Sign In</label>

          <input
            type="email"
            placeholder="Enter your email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="continue-btn" onClick={handleContinue}>
            Continue
          </button>
        </div>

      </div>
    </div>
   
  );
}
