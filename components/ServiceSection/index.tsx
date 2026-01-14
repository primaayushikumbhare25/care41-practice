import React from 'react'
import './index.css'
import Image from "next/image";
import Link from 'next/link';
function service() {
  return (
    <div className="services-section">
  <div>
    <h1 className="heading">Core Services We Offer for Comprehensive Care</h1>
    <p className="paragraph">
      We hire only the best people, choosing from 30 applicants for 1 position.
    </p>
  </div>

  <div className="cards">
    <div className="cards-wrapper">
      <h1 className="card-heading">CCTV Service Provider</h1>
      <h3>Your eyes, your safety, our priority.</h3>
      <Image className ="camera" src="/camera.png" alt = "camera" width ={197} height={191}/> 
    </div>
    <div className="cards-wrapper2">
      <h1 className="card-heading">Yoga Sessions</h1>
      <h3>Balance and wellness through yoga.</h3>
      <Image className ="group" src="/Group.png" alt = "group" width ={197} height={191}/> 
      </div>
    <div className="cards-wrapper3">
      <h1 className="card-heading">Medical Care</h1>
      <h3>Expert care for your loved ones.</h3>
      <Image className ="Vector1" src="/Vector1.png" alt = "Vector1" width ={197} height={191}/> 
    </div>
    <div className="cards-wrapper4">
      <h1 className="card-heading">Physical therapy</h1>
      <h3>Rebuilding strength with care.</h3>
      <Image className ="Vector" src="/Vector.png" alt = "vector" width ={197} height={191}/> 
    </div>
  </div>
  <div className="more-services">
    <span className="circle-arrow"><Image className ="arrow" src="/arrow.png" alt = "circle" width ={197} height={191}/></span>
  <a href="/services" className="more-link">
    Show more core services
  </a>
</div>

</div>

  )
}

export default service;
