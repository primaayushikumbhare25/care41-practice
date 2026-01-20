"use client";
import { useState } from "react";
import "./index.css";
import data from "./queAndAns.json";

export default function QueAndAns() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="que-wrapper">

      <div>
        <h1 className="que-heading">{data.title}</h1>
        <p className="que-paragraph">{data.paragraph}</p>
      </div>

      <div className="faq-container">
        {data.faqs.map((item, index) => (
          <div className="faq-item" key={index}>

            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  );
}
