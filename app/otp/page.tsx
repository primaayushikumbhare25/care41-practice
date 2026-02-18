"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./page.css";
import { useState } from "react";
import Link from "next/link";
import { Pencil, SquarePen } from "lucide-react";
import HomePage from "@/containers/HomePage";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="left-panel">
          <Image src="/goal.png" alt="Caregiver" fill className="left-image" />

          <div className="overlay">
            <div className="logo">
              CARE<span>41</span>
            </div>

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
          <h1>One time password</h1>

          <p className="subtext">
            Enter the code we sent to{" "}
            <span className="email-edit">
              usertest@gmail.com <Pencil />
            </span>
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="continue-btn" onClick={() => router.push("/")}>
            Verify
          </button>
          <p className="subtext-down">
            Didn’t receive code?{" "}
            <Link href="/signup" className="resend-button">
              {" "}
              Resend OTP
            </Link>
          </p>
        </div>
      </div>
    </div>
    
  );
}
