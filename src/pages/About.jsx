import React from "react";
import image from "../assets/images/image.png";
import Footer from "../components/Footer";
import articleImage from "../assets/images/Full-Fall-2024-Cohort-new.png";

const About = () => {
  const teamMembers = [
    {
      name: "Himanshi Sharma",
      role: "Founder & CEO",
      description:
        "There are many reasons to get down and start to get depressed about your situation.",
      image: image,
    },
    {
      name: "Tristan Hancock",
      role: "CTO",
      description:
        "There are many reasons to get down and start to get depressed about your situation.",
      image: image,
    },
    {
      name: "Rajshri Sukhani",
      role: "Chief Research Officer",
      description:
        "There are many reasons to get down and start to get depressed about your situation.",
      image: image,
    },
    {
      name: "Emily Chen",
      role: "Chief Fundraising Officer",
      description:
        "There are many reasons to get down and start to get depressed about your situation.",
      image: image,
    },
    {
      name: "Amika Patel",
      role: "Chief Business Development Officer",
      description:
        "There are many reasons to get down and start to get depressed about your situation.",
      image: image,
    },
    {
      name: "Aaryan Mahipal",
      role: "Chief Product Officer",
      description:
        "There are many reasons to get down and start to get depressed about your situation.",
      image: image,
    },
    {
      name: "Nuha Contractor",
      role: "Chief Design Officer",
      description:
        "There are many reasons to get down and start to get depressed about your situation.",
      image: image,
    },
    {
      name: "Heet Jaiswal",
      role: "Chief Insights Officer",
      description:
        "There are many reasons to get down and start to get depressed about your situation.",
      image: image,
    },
  ];

  const advisors = [
    {
      name: "Dr. James Segars",
      role: "Director, Division of Women's Health Research, Johns Hopkins Medicine",
      description:
        "There are many reasons to get down and start to get depressed about your situation.",
      image: image,
    },
    {
      name: "Dr. Bhuchitra Singh",
      role: "Director of Clinical Research, Seegars Jones Laboratory, Johns Hopkins Medicine",
      description:
        "There are many reasons to get down and start to get depressed about your situation.",
      image: image,
    },
    {
      name: "Ashley Duque Kienzle",
      role: "CEO, Almma Health",
      description:
        "There are many reasons to get down and start to get depressed about your situation.",
      image: image,
    },
    {
      name: "Andrei Masharin",
      role: "CEO",
      description:
        "There are many reasons to get down and start to get depressed about your situation.",
      image: image,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient h-full block">
        <div className="flex flex-col items-center justify-start">
          <h1 className="font-dmSans font-bold text-center text-4xl pt-20">
            Our Story
          </h1>

          <iframe
            src="https://www.youtube.com/embed/13LZjfKUq5Q?si=99bjxo-EHbXKSWvh"
            frameborder="0"
            webkitallowfullscreen
            className="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px] p-6 rounded"
          ></iframe>

          <p className="md:w-7/12 font-poppins font-normal text-xl p-6 mt-16 text-center">
            Ovelia is a digital tool that helps women assess their risk of
            Polycystic Ovarian Syndrome (PCOS) through a clinically vetted
            questionnaire developed with experts from Johns Hopkins. The app
            offers tools for menstrual tracking, symptom management, and access
            to a supportive community, empowering women to take charge of their
            reproductive health. By raising awareness and providing early
            detection resources, Ovelia aims to address the widespread
            underdiagnosis of PCOS.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#DCDFFE]">
        <div>
          <h1 className="font-poppins text-3xl font-bold text-center pt-5">
            Our Team
          </h1>
          <p className="font-rubiks text-center font-normal text-xl mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
            fames ut
          </p>
        </div>

        <div className="grid md:grid-cols-2 mt-10 pt-10 lg:px-28 px-6 gap-10 grid-cols-1 pb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex md:flex-row items-center justify-center flex-col"
            >
              <img src={member.image} alt={`${member.name}-img`} />
              <div className="flex flex-col justify-start ml-5 mt-4 sm:mt-0">
                <h1 className="font-poppins font-medium text-2xl">
                  {member.name}
                </h1>
                <p className="font-poppins font-medium text-xl text-navbar_text">
                  {member.role}
                </p>
                <p className="font-rubiks font-normal text-lg text-navbar_text">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisors Section */}
      <section className="bg-hero">
        <div className="text-center text-light_periwinkle font-bold sm:text-3xl pt-20 text-2xl ">
          Our Advisors / Mentor
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-5 gap-10 sm:px-16 px-8 pb-20">
          {advisors.map((advisors, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex flex-col ">
                <img
                  src={advisors.image}
                  alt={`${advisors.name}-img`}
                  className="w-52 h-40"
                />
                <div className="flex sm:justify-start flex-col ">
                  <h1 className="font-rubiks font-medium text-lg text-button_white">
                    {advisors.name}
                  </h1>
                  <p className="font-rubiks text-light_periwinkle font-medium text-sm mt-2">
                    {advisors.role}
                  </p>
                  <p className="font-rubiks text-light_periwinkle font-normal text-sm mt-1">
                    {advisors.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-radial-gradient grid place-items-center pb-10">
        <h1 className="text-center font-dmSans font-bold text-3xl pt-10">
          Articles featuring Ovelia
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-10 px-4 md:px-20">
          <div className="flex flex-col">
            <a href="https://ventures.jhu.edu/news/the-pava-center-welcomes-fall-2024-fuel-accelerator-cohort/">
              <img src={articleImage} alt="" />
              <p className="font-poppins font-normal text-navbar_text text-lg mt-5 hover:underline cursor-pointer">
                Although this is well intentioned and the goal certainly is to
                reduce the quantity of these bothersome thoughts, the technique
                is inherently flawed.{" "}
              </p>
              <div className="text-[#FF599A] font-poppins font-medium text-xl mt-5 hover:underline cursor-pointer">
                JOHNS HOPKINS TECHNOLOGY VENTURES
              </div>
            </a>
          </div>

          <div className="flex flex-col">
            <a href="https://technical.ly/professional-development/pava-center-johns-hopkins-accelerator-baltimore-power-moves/">
              <img src={articleImage} alt="" />
              <p className="font-poppins font-normal text-navbar_text text-lg mt-5 hover:underline cursor-pointer">
                Although this is well intentioned and the goal certainly is to
                reduce the quantity of these bothersome thoughts, the technique
                is inherently flawed.{" "}
              </p>
              <div className="text-[#FF599A] font-poppins font-medium text-xl mt-5 hover:underline cursor-pointer">
                TECHNICAL.LY
              </div>
            </a>
          </div>

          <div className="flex flex-col">
            <a href="">
              <img src={image} alt="" className="w-full" />
              <p className="font-poppins font-normal text-navbar_text text-lg mt-5">
                Although this is well intentioned and the goal certainly is to
                reduce the quantity of these bothersome thoughts, the technique
                is inherently flawed.{" "}
              </p>
              <div className="text-[#FF599A] font-poppins font-medium text-xl mt-5">
                SOURCE NAME
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
