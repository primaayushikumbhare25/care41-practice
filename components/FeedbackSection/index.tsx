"use client";

import React from "react";
import Image from "next/image";
import "./index.css";
import data from "./feedbackSection.json";

const Testimonials = () => {
  return (
    <div className = "feedbacksection">
        <section className="testimonials">
      <h2 className="testimonials-title">{data.title}</h2>

      <div className="testimonials-cards">
        {data.testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <div className="avatar">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
              />
            </div>

            <p className="testimonial-text">{item.message}</p>

            <div className="testimonial-user">
              <span className="name">{item.name},</span>
              <br/>
              <span className="role">{item.role}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
    </div>
    
  );
};

export default Testimonials;
