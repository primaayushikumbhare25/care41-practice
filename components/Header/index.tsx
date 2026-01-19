"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import "./index.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <Link href="/" className="logo">
          <Image src="/logo.png" alt="My App Logo" width={95} height={28} />
        </Link>

        {/* Right Section */}
        <div className="nav-right">
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
          </ul>

          {/* Phone */}
          <div className="phone">
            <Phone size={20} />
            <span className="phoneno">(+91) 9374873623</span>
            <a
              href="https://wa.me/919930007241"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="whatsapp-icon" />
            </a>
          </div>

          {/* Button */}
          <Link href="/signup">
            <button className="login-btn">Sign Up</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
