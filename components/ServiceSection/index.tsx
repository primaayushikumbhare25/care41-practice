import React from "react";
import "./index.css";
import Image from "next/image";
import Link from "next/link";
import serviceData from "./serviceSection.json";

function Service() {
  return (
    <div className="services-section">
      <div>
        <h1 className="heading">{serviceData.title}</h1>
        <p className="paragraph">{serviceData.description}</p>
      </div>

      <div className="cards">
        {serviceData.services.map((service) => (
          <div className={service.className} key={service.id}>
            <h1 className="card-heading">{service.title}</h1>
            <h3>{service.subtitle}</h3>
            <Image
              className={service.imageClass}
              src={service.image}
              alt={service.title}
              width={197}
              height={191}
            />
          </div>
        ))}
      </div>

      <div className="more-services">
        <span className="circle-arrow">
          <Image
            className="arrow"
            src={serviceData.moreServices.arrowImage}
            alt="arrow"
            width={197}
            height={191}
          />
        </span>

        <Link href={serviceData.moreServices.link} className="more-link">
          {serviceData.moreServices.text}
        </Link>
      </div>
    </div>
  );
}

export default Service;
