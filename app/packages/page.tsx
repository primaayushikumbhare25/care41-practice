"use client";
import Header from "@/components/Header";
import "./page.css";
import { useRef } from "react";
import Footer from "@/components/Footer";
import QueAndAns from "@/components/QueAndAns";

export default function PackagesPage() {
  const tabsRef = useRef<HTMLDivElement | null>(null);

  const scrollTabs = (direction: "left" | "right") => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Header />

      <div className="services-hero">
        <h1>Core Services We Offer for Comprehensive Care</h1>
      </div>
      <div className="tabs-wrapper">

        <div className="pricing-container">
        <button className="circle-btn left" onClick={() => scrollTabs("left")}>
          ❮
        </button>
          <div className="package-card">
            <h3>Basic</h3>
            <h2>
              $99 <span>/monthly</span>
            </h2>
            <a href="#">Terms & Conditions</a>

            <div className="divider"></div>

            <h4>What's Included</h4>
            <ul>
              <li>All Services (Yoga, CCTV, Health etc.)</li>
              <li>24*7 Support</li>
              <li>Community Feature Available on All Services</li>
            </ul>

            <button className="contact-btn">Contact Us</button>
          </div>

          <div className="package-card">
            <h3>Elite Package</h3>
            <h2>
              $349 <span>/monthly</span>
            </h2>
            <a href="#">Terms & Conditions</a>

            <div className="divider"></div>

            <h4>What's Included</h4>
            <ul>
              <li>All Services (Yoga, CCTV, Health etc.)</li>
              <li>24*7 Support</li>
              <li>Community Feature Available on All Services</li>
            </ul>

            <button className="contact-btn">Contact Us</button>
          </div>

          <div className="package-card">
            <h3>Pro Package</h3>
            <h2>
              $199 <span>/monthly</span>
            </h2>
            <a href="#">Terms & Conditions</a>

            <div className="divider"></div>

            <h4>What's Included</h4>
            <ul>
              <li>All Services (Yoga, CCTV, Health etc.)</li>
              <li>24*7 Support</li>
              <li>Community Feature Available on All Services</li>
            </ul>
            <button className="contact-btn">Contact Us</button>
          </div>
        <button
          className="circle-btn right"
          onClick={() => scrollTabs("right")} 
        >
          ❯
        </button>
        </div>
        <QueAndAns/>
        <Footer/>

      </div>
    </>
  );
}


const packages = [
  {
    title: "Basic",
    price: "$99",
    features: [
      "All Services (Yoga, CCTV, Health etc.)",
      "24*7 Support",
      "Community Feature Available on All Services"
    ]
  },
  {
    title: "Elite Package",
    price: "$349",
    featured: true,
    features: [
      "All Services (Yoga, CCTV, Health etc.)",
      "24*7 Support",
      "Community Feature Available on All Services"
    ]
  },
  {
    title: "Pro Package",
    price: "$199",
    features: [
      "All Services (Yoga, CCTV, Health etc.)",
      "24*7 Support",
      "Community Feature Available on All Services"
    ]
  },
   {
    title: "Basic",
    price: "$99",
    features: [
      "All Services (Yoga, CCTV, Health etc.)",
      "24*7 Support",
      "Community Feature Available on All Services"
    ]
  },
  {
    title: "Elite Package",
    price: "$349",
    featured: true,
    features: [
      "All Services (Yoga, CCTV, Health etc.)",
      "24*7 Support",
      "Community Feature Available on All Services"
    ]
  },
  {
    title: "Pro Package",
    price: "$199",
    features: [
      "All Services (Yoga, CCTV, Health etc.)",
      "24*7 Support",
      "Community Feature Available on All Services"
    ]
  }
];