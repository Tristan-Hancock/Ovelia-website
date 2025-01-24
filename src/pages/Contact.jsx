import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name | !email | !reason){
      alert("Please fill in all the fields");
      return;
    }

    try{
      console.log('Sending data:', { name, email, reason });
      const response = await axios.post("https://8m3t11sbkg.execute-api.us-east-2.amazonaws.com/prod/contact", {
        email,
        name,
        reason
      },
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
      
    )}catch (err){
      console.error("Full error:", {
    data: err.response?.data,
    status: err.response?.status,
    headers: err.response?.headers,
    config: err.config // This will show what was actually sent
  });
  setMessage("Failed to submit form. Please try again.");
    }
  } 

  return (
    <div className="flex items-center justify-center bg-hero h-screen ">
      <div className="flex flex-col items-center justify-center text-center sm:-mt-14">
        <div className="flex flex-col items-center sm:w-[50%] p-2">
          <h1 className="text-button_white font-poppins text-4xl font-semibold mb-6">
            Get In Touch
          </h1>
          <p className="text-button_white font-poppins text-xl font-normal p-5">
            We'd love to hear from you! Whether you have a question, are
            interested in collaborating, or want to join our team, we're here to
            connect. Reach out for inquiries, partnership opportunities, or
            career possibilities—we're excited to hear your ideas and explore
            how we can work together. Let's start the conversation!
          </p>

          <form className="flex flex-col items-center sm:w-1/2 mt-4 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              className="bg-hero border-button_white border rounded mt-2 py-1  outline-none px-2 text-button_white w-full placeholder:text-start placeholder:text-button_white placeholder:font-poppins placeholder:font-normal"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="bg-hero border-button_white border rounded mt-2 py-1 outline-none px-2 text-button_white w-full placeholder:text-start placeholder:text-button_white placeholder:font-poppins placeholder:font-normal"
              placeholder="Rour Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <select className="bg-hero border-button_white border rounded mt-2 py-1  outline-none px-1 text-button_white w-full placeholder:text-button_white placeholder:font-poppins placeholder:font-normal"
            onChange={(e) => setReason(e.target.value)} value={reason}>
              <option value="" disabled selected>
                Reason
              </option>
              <option value="Inquiries">Inquiries</option>
              <option value="Partnership Opportunities">Partnership Opportunities</option>
              <option value="Career Possibilities">Career Possibilities</option>
            </select>
            <button className=" bg-[#bbbffe] px-4 py-1 w-full rounded">
              <span className="text-navbar_text font-poppins font-semibold ">
                SEND
              </span>
            </button>
          </form>
          <p className="font-poppins text-xl font-normal text-button_white mt-10">
            email us at info@ovelia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
