"use client";
import Header from "@/components/Header";
import "./page.css";
import { useRef } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import Footer from "@/components/Footer";

export default function ServicesPage() {
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

      {/* HERO */}
      <div className="services-hero">
        <h1>Core Services We Offer for Comprehensive Care</h1>
      </div>

      {/* BLUE INFO SECTION */}
      <div className="services-info">
        <p>
          Empowering Caregivers with Seamless Solutions for Elderly Well-being
          and Support
        </p>
        <button className="contact-btn">Contact Us</button>
      </div>

      {/* FILTER BUTTONS */}
      <div className="tabs-wrapper">
        <button className="circle-btn left" onClick={() => scrollTabs("left")}>
          ❮
        </button>

        <div className="tabs" ref={tabsRef}>
          <button className="tab-btn ">All Services</button>
          <button className="tab-btn ">Security</button>
          <button className="tab-btn ">Health</button>
          <button className="tab-btn ">Medical</button>
          <button className="tab-btn ">All Services</button>
          <button className="tab-btn ">Security</button>
          <button className="tab-btn ">Health</button>
          <button className="tab-btn ">Medical</button>
        </div>

        <button
          className="circle-btn right"
          onClick={() => scrollTabs("right")}
        >
          ❯
        </button>
      </div>

      {/* CARDS */}
      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div
              className="icon-box"
              style={{ backgroundColor: item.bgColor || "#E6F0FF" }}
            >
              <Image src={item.image} alt={item.fees} width={60} height={60} />
            </div>

            <h3 className="service-title">{item.title}</h3>

            <p className="service-desc">{item.desc}</p>

            <div className="price-box">
              <p>⭐ Service Fees: {item.fees}</p>
              <p>⭐ Monthly cost: {item.monthly}</p>
            </div>
            <div className="download-btn">
            <button><Download/>Download Prospectus</button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
}

const services = [
  {
    title: "CCTV Camera Service Provider",
    desc: "Ensure your safety with our reliable CCTV camera services, including installation, maintenance,and upgrades.",
    fees: "$200",
    monthly: "$2",
    image: "/noun-security-camera-3800770 1 (1).svg",
  },
  {
    title: "Yoga Session",
    desc: "Ensure your safety with our reliable CCTV camera services, including installation, maintenance,and upgrades.",
    fees: "$150",
    monthly: "$3",
    image: "/Group 3676234.svg",
    bgColor: "#D2E4D1",
  },
  {
    title: "Medical Support",
    desc: "Ensure your safety with our reliable CCTV camera services, including installation, maintenance,and upgrades.",
    fees: "$300",
    monthly: "$5",
    image: "/noun-security-camera-3800770 1 (1).svg",
  },
  {
    title: "CCTV Camera Service Provider",
    desc: "Ensure your safety with our reliable CCTV camera services, including installation, maintenance,and upgrades.",
    fees: "$200",
    monthly: "$2",
    image: "noun-security-camera-3800770 1 (1).svg",
  },
  {
    title: "Yoga Session",
    desc: "Ensure your safety with our reliable CCTV camera services, including installation, maintenance,and upgrades.",
    fees: "$150",
    monthly: "$3",
    image: "/Group 3676234.svg",
    bgColor: "#D2E4D1",
  },
  {
    title: "Medical Support",
    desc: "Ensure your safety with our reliable CCTV camera services, including installation, maintenance,and upgrades.",
    fees: "$300",
    monthly: "$5",
    image: "noun-security-camera-3800770 1 (1).svg",
  },
];
