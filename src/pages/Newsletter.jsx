import React, { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "https://ovelia-backend.onrender.com/newsletter",
        {
          email,
        }
      );

      setMessage(response.data);
      alert("Thank you for registering!");
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
      setMessage("Failed to sign up. Please try again.");
    } finally {
      // Reset the button state after 30 seconds
      setTimeout(() => {
        setLoading(false);
      }, 30000); // 30 seconds
    }
  };

  return (
    <>
      <div className="flex items-center justify-start pt-10 sm:pt-16 min-h-screen bg-hero  ">
        <div className="flex flex-col items-center justify-center text-center w-full">
          <div className=" flex flex-col items-center sm:w-[50%] ">
            <div className="text-button_white font-poppins text-4xl font-semibold -mt-10">
              Join Our Newsletter
            </div>

            <div className="p-4">
              <ul className="text-button_white font-poppins text-xl font-normal p-5  list-disc text-center">
                <ol className="mb-2 text-center">
                  Be the first to gain access to updates, new features, and
                  announcements
                </ol>
                <ol className="mb-2 text-center">
                  Be a part of the process - help Ovelia serve you better by
                  providing us with feedback
                </ol>
                <ol className="mb-2 text-center">
                  Connect with a network of women who inspire and uplift each
                  other
                </ol>
              </ul>

              <p className="text-button_white font-poppins text-xl font-normal text-center ">
                Let's navigate your journey together with care, insight, and
                connection. Sign up today and become part of something
                extraordinary!{" "}
              </p>
            </div>

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
              <button
                className=" bg-[#bbbffe] px-4 py-1 w-full rounded"
                disabled={loading}
              >
                <span className="text-navbar_text font-poppins font-semibold ">
                  {loading ? "Loading..." : "Sign Up"}
                </span>
              </button>
            </form>

            

            <p className="text-button_white font-poppins text-xl font-normal  p-5">
              You deserve to feel empowered, informed, and supported every step
              of the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
