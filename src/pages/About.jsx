import React from "react";
import image from "../assets/image.png";

const About = () => {
  const teamMembers = [
    {
      name: "Andrei Masharin",
      role: "CEO",
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
    {
      name: "Andrei Masharin",
      role: "CEO",
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
    {
      name: "Andrei Masharin",
      role: "CEO",
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

  const advisors = [
    {
      name: "Andrei Masharin",
      role: "CEO",
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
    {
      name: "Andrei Masharin",
      role: "CEO",
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
      <div className="bg-hero-gradient h-full block">
        <div className="flex flex-col items-center justify-start">
          <h1 className="font-dmSans font-bold text-center text-4xl pt-20">
            Our Story
          </h1>

          <iframe
            src="https://www.loom.com/share/0ef81bbda3474ed380f9e01c1461d85b"
            frameborder="0"
            webkitallowfullscreen
            className="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px] p-6 rounded"
          ></iframe>

          <p className="md:w-7/12 font-poppins font-normal text-xl p-6 mt-16">
            ABOUT PCOS / OVELIA PARAGRAPH Donec ultrices auctor tempor. Nunc
            vitae volutpat ipsum. Sed faucibus risus in nibh molestie, non
            venenatis ex volutpat. Aenean in bibendum erat. Etiam ornare massa
            arcu, vitae pellentesque sapien tempor non. Ut ac arcu metus. Aenean
            nec neque felis. Fusce fermentum accumsan orci non posuere. Cras
            quis arcu feugiat, tincidunt justo quis, hendrerit justo
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-[#BBBFFE]">
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
      </div>

      {/* Advisors Section */}
      <div className="bg-hero">
        <div className="text-center text-light_periwinkle font-bold sm:text-3xl pt-20 text-2xl ">
          Our Advisors / Mentor
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-5 gap-10 sm:px-16 px-8 pb-20">
          {advisors.map((advisors, index) => (
            <div key={index}
            className="flex flex-col">
              <div className="flex flex-col ">
                <img src={advisors.image} alt={`${advisors.name}-img`} className="w-52 h-40" />
                <div className="flex sm:justify-start flex-col ">
                  <h1 className="font-rubiks font-medium text-lg text-button_white">
                    {advisors.name}
                  </h1>
                  <p className="font-rubiks text-light_periwinkle font-medium text-xs">
                    {advisors.role}
                  </p>
                  <p className="font-rubiks text-light_periwinkle font-normal text-sm">
                    {advisors.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Articles Section */}
      <div className="bg-radial-gradient grid place-items-center">
          <h1 className="text-center font-dmSans font-bold text-3xl pt-10">Articles featuring Ovelia</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-10 px-4 md:px-20">
            <div className="flex flex-col">
              <img src={image} alt="" />
              <p className="font-poppins font-normal text-navbar_text text-lg mt-5">Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed. </p>
              <a href="" className="text-[#FF599A] font-poppins font-medium text-xl mt-5">SOURCE NAME</a>
            </div>

            <div className="flex flex-col">
              <img src={image} alt="" />
              <p className="font-poppins font-normal text-navbar_text text-lg mt-5">Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed. </p>
              <a href="" className="text-[#FF599A] font-poppins font-medium text-xl mt-5">SOURCE NAME</a>
            </div>

            <div className="flex flex-col">
              <img src={image} alt="" />
              <p className="font-poppins font-normal text-navbar_text text-lg mt-5">Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed. </p>
              <a href="" className="text-[#FF599A] font-poppins font-medium text-xl mt-5">SOURCE NAME</a>
            </div>
          </div>
      </div>
    </>
  );
};

export default About;
