import React from "react";
import image from "../assets/images/image.png";
import Footer from "../components/Footer";
import articleImage from "../assets/images/Full-Fall-2024-Cohort-new.png";
import advisor_image_1 from "../assets/images/advisors/Dr_James_Segars.png"
import advisor_image_2 from "../assets/images/advisors/Dr_Bhuchitra_Singh.png"
import advisor_image_3 from "../assets/images/advisors/Ashley_Duque_Kienzle.png"
import team_member_1 from "../assets/images/team_members/Himanshi_Sharma.jpg"
import team_member_2 from "../assets/images/team_members/Tristan_Hancock.jpg"
import team_member_3 from "../assets/images/team_members/Rajshri_Sukhani.jpg"
import team_member_4 from "../assets/images/team_members/Emily_Chen.jpg"
import team_member_5 from "../assets/images/team_members/Amika_Patel.jpg"
import team_member_6 from "../assets/images/team_members/Aaryan_Mahipal.png"
import team_member_7 from "../assets/images/team_members/Nuha_Contractor.jpg"
import team_member_8 from "../assets/images/team_members/Heet_Jaiswal.jpg"

const About = () => {
  const teamMembers = [
    {
      name: "Himanshi Sharma",
      role: "Founder & CEO",
      description:
        "",
      image: team_member_1,
    },
    {
      name: "Tristan Hancock",
      role: "CTO",
      description:
        "",
      image: team_member_2,
    },
    {
      name: "Rajshri Sukhani",
      role: "Chief Research Officer",
      description:
        "",
      image: team_member_3,
    },
    {
      name: "Emily Chen",
      role: "Chief Fundraising Officer",
      description:
        "",
      image: team_member_4,
    },
    {
      name: "Amika Patel",
      role: "Chief Business Development Officer",
      description:
        "",
      image: team_member_5,
    },
    {
      name: "Aaryan Mahipal",
      role: "Chief Product Officer",
      description:
        "",
      image: team_member_6,
    },
    {
      name: "Nuha Contractor",
      role: "Chief Design Officer",
      description:
        "",
      image: team_member_7,
    },
    {
      name: "Heet Jaiswal",
      role: "Chief Insights Officer",
      description:
        "",
      image: team_member_8,
    },
  ];

  const advisors = [
    {
      name: "Dr. James Segars",
      role: "Director, Division of Women's Health Research, Johns Hopkins Medicine",
      description:
        "",
      image: advisor_image_1,
    },
    {
      name: "Dr. Bhuchitra Singh",
      role: "Director of Clinical Research, Seegars Jones Laboratory, Johns Hopkins Medicine",
      description:
        "",
      image: advisor_image_2,
    },
    {
      name: "Ashley Duque Kienzle",
      role: "CEO, Almma Health",
      description:
        "",
      image: advisor_image_3,
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
            
          </p>
        </div>

        <div className="grid md:grid-cols-2 mt-10 pt-10 lg:px-28 px-6 gap-12 grid-cols-1 pb-20 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex lg:flex-row items-center justify-center flex-col"
            >
              <img src={member.image} alt={`${member.name}-img`} className="h-32 w-32 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-56 lg:w-56 object-contain rounded-full" />
              <div className="flex flex-col justify-start lg:ml-5 mt-4 sm:mt-0 max-w-sm text-center md:text-left w-full">
                <h1 className="font-poppins font-medium text-2xl text-center mt-5">
                  {member.name}
                </h1>
                <p className="font-poppins font-medium text-xl text-navbar_text break-words text-center">
                  {member.role}
                </p>
                <p className="font-rubiks font-normal text-lg text-navbar_text text-center">
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-5 gap-10 sm:px-16 px-8 pb-20 items-center justify-center">
          {advisors.map((advisors, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img
                  src={advisors.image}
                  alt={`${advisors.name}-img`}
                  className="h-32 w-32 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-56 lg:w-56 rounded-full object-contain"
                />
                <div className="flex sm:justify-start flex-col ">
                  <h1 className="font-rubiks font-medium text-lg text-button_white text-center mt-5">
                    {advisors.name}
                  </h1>
                  <p className="font-rubiks text-light_periwinkle font-medium text-sm mt-2 text-center">
                    {advisors.role}
                  </p>
                  {/* <p className="font-rubiks text-light_periwinkle font-normal text-sm mt-1">
                    {advisors.description}
                  </p> */}
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

        <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 pt-10 px-4 md:px-20">
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

          {/* <div className="flex flex-col">
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
          </div> */}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
