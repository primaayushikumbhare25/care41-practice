
"use client";
import React, { useState } from "react";import Image from "next/image";
import "./index.css";

export default function CaregiverService() {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [phone , setphone] = useState("");
    const [code , setCode] = useState(""); 

    const handleSubmit = (e : any) => {
        e.preventDefault();

        console.log("Form submit event: ",e);

        if(!name || !email){
            alert("Please fill all required fields");
            return;
        }
        console.log("Form submitted successfully");
    };
  return (
    <div className="caregiver-wrapper">
      <div className="caregiver-card">
        <div className="caregiver-left">
          <h1>One step to perfect care of your loved ones</h1>

          <p>
            Send a request, our manager will contact you and clarify all the
            details.
          </p>

          <form className="caregiver-form" onSubmit = {handleSubmit}>
            <input type="text"
             placeholder="Full Name" 
             value = {name}
             onChange={(e) => setName(e.target.value)}
             />
            <input type="email"
             placeholder="Email" 
             value = {email}
             onChange = {(e) => setEmail(e.target.value)}
             />
            {/* <input type="tel" placeholder="+91 Phone number (optional)" /> */}
            <div className="phone-group">
              <select>
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+61">+61</option>
              </select>

              <input type="tel" 
              placeholder="Phone number (optional)"
              value = {phone}
              onChange = {(e) => setphone(e.target.value)}
              />
            </div>

            <input
              type="text"
              placeholder="Loved one's postal code (optional)"
              value = {code}
              onChange = {(e) => setCode(e.target.value)}
            />

            <button type="submit">Send</button>
          </form>
        </div>

        <div className="caregiver-right">
          <Image src="/cutout.png" alt="Caregiver" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
