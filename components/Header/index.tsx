"use client";

import Link from "next/link";
import { useState } from "react";
import "./index.css";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { Phone } from "lucide-react";

function header() {
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <Image src="/logo.png" alt="My App Logo" width={120} height={40} />
          </Link>
        </div>

        {/* Navigation */}
        <div className = "nav">

        <ul className="nav-links">
          <li>
            <Link className = "ans" href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">Packages</Link>
          </li>
          <li>
            <div className="phone">
              <Phone className="phone-icon" />
            
              <Link href="/about">(+91) 9374873623</Link>
            </div>
          </li>
        <button className="login-btn">Sign In</button>
        </ul>
        </div>

        {/* Button */}
      </nav>
    </header>
  );
}

export default header;
