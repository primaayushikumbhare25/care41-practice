"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import "./index.css";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <Link href="/" className="logo">
          <Image src="/logo.png" alt="My App Logo" width={95} height={28} />
        </Link>

       
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Right Section */}
        <div className={`nav-right ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={pathname === "/services" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/packages"
                className={pathname === "/packages" ? "active" : ""}
              >
                Packages
              </Link>
            </li>
                        <li>
              <Link
                href="/aboutus"
                className={pathname === "/aboutus" ? "active" : ""}
              >
                About us
              </Link>
            </li>
          </ul>

          <div className="phone">
            <Phone size={18} />
            <span className="phoneno">(+91) 9374873623</span>
            <a
              href="https://wa.me/919930007241"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="whatsapp-icon" />
            </a>
          </div>

          <Link href="/signup">
            <button className="login-btn">Sign Up</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
