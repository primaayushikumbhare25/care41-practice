import Link from "next/link";
import "./index.css";
import {
  services , 
  siteLinks , 
  socialLinks,
  socialDetails,
}from "./footer"

export default function Footer() {
  return (
    <footer className="footer">

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
         {services.map((service , index) => (
          <li key = {index} className = "footer-item">
            {service}
          </li>
         ))}
        </ul>
      </div>


      <div className="footer-section">
        <h1 className="footer-title">Site Links</h1>
        <ul className="footer-list">
          {siteLinks.map((item, index) => (
            <li key={index} className="footer-item">
              <Link className="footer-link" href={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-section">
        <h1 className="footer-title">Contacts</h1>
        {socialDetails.map((item , index) => {
          const Icon = item.icon;
          return(
            <li key = {index} className = "footer-item"> <Icon /> <span>{item.text}</span></li>
          );
        })}

        <li className = "footer-socials">
          {socialLinks.map((social , index) => {
            const Icon = social.icon;
            return (
              <a key = {index} className = "socia-icon" target = "_blank" href = {social.link}><Icon /></a>
            );
          })}
        </li>
       </div>
    </footer>
  );
}
