import Link from "next/link";
import "./index.css";
import {
  Clock3,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  LinkedinIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      {/* About Section */}
      <div className="footer-box">
        <div className="about-website">
          <h1 className="footer-logo">
            Care<span className="four-one">41</span>
          </h1>
          <p className="footer-description">
            Our mission is to tap into the utmost potential of human expertise,
            technology, and compassion to ensure the vitality of our aging loved
            ones while easing the burden on their families.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="footer-section">
        <h1 className="footer-title">Our Services</h1>
        <ul className="footer-list">
          <li className="footer-item">Medical Care</li>
          <li className="footer-item">Yoga Session</li>
          <li className="footer-item">Physical Therapy</li>
          <li className="footer-item">CCTV</li>
          <li className="footer-item">Spiritual Advancement</li>
        </ul>
      </div>

      {/* Site Links Section */}
      <div className="footer-section">
        <h1 className="footer-title">Site Links</h1>
        <ul className="footer-list">
          <li className="footer-item">
            <Link className="footer-link" href="/aboutcompany">
              About Company
            </Link>
          </li>
          <li className="footer-item">
            <Link className="footer-link" href="/contactus">
              Contact Us
            </Link>
          </li>
          <li className="footer-item">
            <Link className="footer-link" href="/services">
              Services
            </Link>
          </li>
          <li className="footer-item">
            <Link className="footer-link" href="/packages">
              Packages
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h1 className="footer-title">Contacts</h1>

        <ul className="footer-list">
          <li className="footer-item">
            <Clock3 />
            <span>Daily from 9:00 to 21:00</span>
          </li>

          <li className="footer-item">
            <Phone />
            <span>8 (353) 248 64 58</span>
          </li>

          <li className="footer-item">
            <Mail />
            <span>care41.com</span>
          </li>

          <li className="footer-item">
            <MapPin />
            <span>Orenburg, Shevchenko St., 169</span>
          </li>

          <li className="footer-socials">
  <a href="https://www.instagram.com/" className="social-icon">
    <Instagram />
  </a>

  <a href="https://www.facebook.com/" className="social-icon">
    <Facebook />
  </a>

  <a href="https://www.linkedin.com/login" className="social-icon">
    <Linkedin />
  </a>
</li>

        </ul>
      </div>
    </footer>
  );
}
