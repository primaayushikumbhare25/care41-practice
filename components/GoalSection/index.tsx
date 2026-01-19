"use client";

import React from "react";
import "./index.css";
import Image from "next/image";
import goal from "./goalSection.json";

export default function GoalSection() {
  return (
    <section className="goal-section">
      <div className="goal-overlay">
        <div>
          <h1 className="goal-title">{goal.title}</h1>
        </div>

        <div className="ciclegoals">
          {goal.goals.map((item) => (
            <div className="goals" key={item.id}>
              <div className={item.iconClass}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                />
              </div>

              <div className="small-headings">
                <h3 className="form-heading">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
