"use client";

import React from "react";
import "./index.css";
import Image from "next/image";

export default function GoalSection() {
  return (
    <section className="goal-section">
      <div className="goal-overlay">
        <div>
          <h1 className="goal-title">
            Our Goal is to Make Your <br />
            Life Better
          </h1>
        </div>
        <div className="ciclegoals">
          <div className="goals">
            <div className="smallcircle">
              <Image src="/circle1.png" alt="icon" width={45} height={45} />
            </div>
            <div className = "small-headings">
              <h3 className="form-heading">Community Engagement</h3>
            </div>
          </div>
          <div className="goals">
            <div className="smallcircle1">
              <Image src="/circle2.png" alt="icon" width={50} height={65} />
            </div>
            <div className = "small-headings">
                <h3 className="form-heading">Medical Support</h3>
            </div>
          </div>
          <div className="goals">
            <div className="smallcircle2">
              <Image src="/circle3.png" alt="icon" width={45} height={45} />
            </div>
            <div className = "small-headings">
                <h3 className="form-heading">Home Care Assistance</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
