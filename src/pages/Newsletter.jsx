import React, { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post("https://8m3t11sbkg.execute-api.us-east-2.amazonaws.com/newsletter", {
        email,
       }
    );

      setMessage(response.data);
      alert("Thank you for registering!");
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
      setMessage("Failed to sign up. Please try again.");
    }
  };

  return (
    <>
      <div className="flex items-center justify-start pt-10 sm:pt-32 min-h-screen bg-hero overflow-y-hidden">
        <div className="flex flex-col items-center justify-center text-center">
          <div className=" flex flex-col items-center sm:w-[50%] p-2 ">
            <div className="text-button_white font-poppins text-4xl font-semibold">
              Join Our Newsletter
            </div>
            <p className="text-button_white font-poppins text-xl font-normal mt-5 p-5">
              You deserve to feel empowered, informed, and supported every step
              of the way.You deserve to feel empowered, informed, and supported
              every step of the way.
            </p>
           

            <form
              className="flex flex-col items-center w-1/2  mt-4"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                className="bg-hero border-button_white border rounded mt-2 py-1 mb-6 outline-none px-4 text-button_white w-full placeholder:text-center placeholder:text-button_white placeholder:font-poppins placeholder:font-normal"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className=" bg-[#bbbffe] px-4 py-1 w-full rounded">
                <span className="text-navbar_text font-poppins font-semibold ">
                  SIGN UP!
                </span>
              </button>
            </form>

            <div className="p-4">
              <h1 className="text-button_white font-poppins text-4xl font-normal mt-5 p-5">
                Why Subscribe?
              </h1>
              <ul className="text-button_white font-poppins text-xl font-normal p-5 list-disc">
                <li className="mb-2 text-start">
                  Be the first to gain access to updates, new features, and
                  announcements.
                </li>
                <li className="mb-2 text-start">
                  Be a part of the process - help Ovelia serve you better by
                  providing us with feedback.
                </li>
                <li className="mb-2 text-start">
                  Connect with a network of women who inspire and uplift each
                  other.
                </li>
              </ul>
            </div>

            <p className="text-button_white font-poppins text-xl font-normal mt-5 p-4 text-start">
              Let's navigate your journey together with care, insight, and
              connection. Sign up today and become part of something
              extraordinary!{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
