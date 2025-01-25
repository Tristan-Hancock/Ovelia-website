import React, { useRef, useState } from "react";
import axios from "axios";

import achievement1 from "../assets/images/achievement_1.png";
import achievement2 from "../assets/images/mng_grant.jpg";
import achievement3 from '../assets/images/achievement_3.png';
import cohort from '../assets/images/cohort.png';
import appstore_svg from "../assets/svg/appstore.svg";
import playstore_svg from "../assets/svg/playstore.svg";
import Footer from "../components/Footer";

const Home = () => {
  const getAppSectionRef = useRef(null);

  const scrollToGetApp = () => {
    getAppSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post("https://8m3t11sbkg.execute-api.us-east-2.amazonaws.com/prod/newsletter", {
        email,
      });

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
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen bg-hero-gradient flex-col">
        <div className="text-center flex flex-col items-center justify-start pt-48 md:w-[640px] w-[80%]">
          <div className="">
            <h1 className="md:text-12xl text-hero font-quicksand font-semibold sm:text-8xl text-7xl leading-4 ">
              Ovelia
            </h1>
            <p className="font-poppins font-normal sm:text-3xl text-lg inline-block text-wrap text-navbar_text mt-2 sm:leading-9 w-full pt-5 ">
              Empowering women to take control of their menstrual health
            </p>
          </div>
          <button
            className="bg-navbar_text py-4 px-6 rounded-full text-xl leading-4 text-button_white font-dmSans font-bold mt-8"
            onClick={scrollToGetApp}
          >
            Sign Up For Beta Testing
          </button>

          <p className="font-poppins font-normal sm:text-2xl text-lg  text-navbar_text pt-32 pb-14">
            Polycystic Ovarian Syndrome (PCOS) affects up to 20% of women of
            reproductive age (18-45), yet 70% of cases remain undiagnosed due to
            limited awareness and masked symptoms from birth control use. The
            healthcare system lacks an accessible early detection method,
            leaving millions at risk. Ovelia bridges this gap, empowering women
            to take charge of their health and seek timely care.
          </p>
        </div>
      </section>

      {/* About Section */}

      <section className="bg-[#DCDFFE] relative">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            overflow: "hidden",
            lineHeight: 0,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{
              position: "relative",
              display: "block",
              width: "calc(102% + 1.3px)",
              height: "42px",
            }}
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              style={{ fill: "#FFFAFF" }}
            ></path>
          </svg>
        </div>

        <h1 className="font-dmSans font-bold text-black text-3xl text-center pt-20">
          PCOS affects 1-in-10 women
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 pt-10 pb-20 px-5 space-y-6 sm:space-y-0">
          <div className="flex flex-col items-center w-4/6 mx-auto text-center">
            {/* <img src={placeholder} alt="" /> */}
            <h1 className="font-lato font-extrabold text-5xl">70%</h1>
            <p className="font-poppins font-normal text-base ">
              70% of women with PCOS go undiagnosed
            </p>
          </div>

          <div className="flex flex-col items-center w-4/6 mx-auto text-center">
            {/* <img src={placeholder} alt="" /> */}
            <h1 className="font-lato font-extrabold text-5xl">3X</h1>
            <p className="font-poppins font-normal text-base ">
              The risk of endometrial cancer is tripled for women with PCOS
            </p>
          </div>

          <div className="flex flex-col items-center w-4/6 mx-auto text-center">
            {/* <img src={placeholder} alt="" /> */}
            <h1 className="font-lato font-extrabold text-5xl">50%</h1>
            <p className="font-poppins font-normal text-base ">
              There is a 50% likelihood of developing T2DM (Type 2 diabetes
              mellitus) or pre-diabetes before the age of 40
            </p>
          </div>

          <div className="flex flex-col items-center w-4/6 mx-auto text-center">
            {/* <img src={placeholder} alt="" /> */}
            <h1 className="font-lato font-extrabold text-5xl">50%</h1>
            <p className="font-poppins font-normal text-base ">
              There is a 50% higher risk of developing heart diseases
            </p>
          </div>
        </div>

        <p className="font-poppins italic font-normal sm:text-3xl text-center text-[#495494] pb-10 lg:px-52 px-5 sm:mt-5 text-xl">
          Ovelia aims to ameliorate the burden of PCOS by bridging the diagnosis
          gap
        </p>
      </section>

      {/* How It Works Section */}
      <section className="bg-hero flex flex-col items-center justify-center py-20 pb-20">
        <h1 className="font-dmSans font-bold text-3xl text-button_white ">
          HOW IT WORKS
        </h1>

        <div className="flex flex-col items-center justify-center mt-10 w-10/12 sm:w-[63%] text-center">
          <h1 className="text-button_white font-poppins font-medium text-3xl">
            PCOS Screening Test
          </h1>
          <p className="font-poppins font-normal text-button_white text-xl mt-3 ">
            A clinically validated tool developed in collaboration with
            gynecologists and researchers from Johns Hopkins to provide a
            personalized risk assessment for PCOS.
          </p>
        </div>

        <div className="h-[3px] bg-[#495494] w-[50%] mt-10 lg:w-[500px]"></div>

        <div className="flex flex-col items-center justify-center mt-10 w-10/12 sm:w-[63%] text-center">
          <h1 className="text-button_white font-poppins font-medium text-3xl">
            Locates Medical Professionals
          </h1>
          <p className="font-poppins font-normal text-button_white text-xl mt-3 ">
            Simplifies the journey by helping users quickly locate nearby
            doctors, saving time and effort.
          </p>
        </div>

        <div className="h-[3px] bg-[#495494] w-[50%] mt-10 lg:w-[500px]"></div>

        <div className="flex flex-col items-center justify-center mt-10 w-10/12 sm:w-[63%] text-center">
          <h1 className="text-button_white font-poppins font-medium text-3xl">
            Tracks Progress
          </h1>
          <p className="font-poppins font-normal text-button_white text-xl mt-3 ">
            Empowers users to monitor their menstrual cycles, manage
            prescriptions, and stay on top of their treatment for improved
            health outcomes.
          </p>
        </div>
      </section>

      {/* Get the App*/}
      <section className="bg-custom-radial pb-20 " ref={getAppSectionRef}>
        <h1 className="font-poppins font-semibold text-4xl text-center pt-20">
          Get the app
        </h1>

        <div className="flex sm:flex-row flex-col items-center justify-center md:space-x-28 mt-20 sm:px-10 gap-10 p-5">
          <a href="">
            <img src={appstore_svg} alt="" />
          </a>
          <a href="">
            <img src={playstore_svg} alt="" />
          </a>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-hero">
  <h1 className="text-light_periwinkle font-poppins font-medium text-2xl text-center pt-10">
    OUR ACHIEVEMENTS
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-4">
    {/* Achievement 1 */}
    <img src={achievement1} alt="Achievement 1" />

    {/* Achievement 2 */}
    <div className="flex flex-col items-center justify-center">
      <img src={achievement2} alt="Achievement 2" className="w-80 h-36 object-contain" />
      <p className="text-button_white font-normal font-poppins p-4 text-center">
        Winners of the Maroon & Gold Grant
      </p>
    </div>

    {/* Achievement 3 */}
    <div className="flex flex-col items-center justify-center">
  <img src={cohort} alt="Achievement 3" className="w-80 h-auto object-contain rounded-lg shadow-lg" />
  <p className="text-button_white font-normal font-poppins text-xl text-center pt-4">
    2024 Fall Cohort
  </p>
  <p className="text-button_white font-light font-poppins text-base text-center">
    PAVA Center Fuel Accelerator
  </p>
</div>


  </div>
</section>


      {/* Know more section*/}
      <section className="bg-radial-gradient" >
        <div className="flex flex-col items-center justify-start pt-20 pb-36">
          <div className="flex flex-col items-center md:w-[450px] w-[80%]">
            <h1 className="font-poppins font-semibold text-3xl text-hero text-center">
              Want to know more?
            </h1>
            <p className="font-poppins font-normal text-2xl text-navbar_text mt-10 text-center">
              sign up for our exclusive mailing list.
            </p>

            <form
              className="md:w-[70%] w-full flex flex-col items-center justify-center"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                className="outline-none border border-navbar_text bg-transparent rounded p-2 mt-5 w-full placeholder:text-navbar_text placeholder:font-rubiks placeholder:font-normal "
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <button className="mt-5  rounded w-full bg-hero py-2">
                <span className="font-dmSans font-bold text-button_white text-lg  mt-5 ">
                  Sign Up
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
