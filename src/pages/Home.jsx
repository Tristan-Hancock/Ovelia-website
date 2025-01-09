import React from "react";

const Home = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-hero-gradient flex-col">
      <div className="text-center flex flex-col items-center justify-center lg:-mt-32 ">
        <div className="">
          <h1 className="md:text-12xl text-hero font-quicksand font-semibold sm:text-8xl text-7xl leading-4 ">
            Ovelia
          </h1>
          <p className="font-poppins font-normal sm:text-3xl text-lg inline-block text-wrap text-navbar_text mt-2 leading-9 w-full ">
            Empowering women to take control of their menstrual health
          </p>
        </div>
        <button className="bg-navbar_text py-4 px-6 rounded-full text-xl leading-4 text-button_white font-dmSans font-bold mt-8">
          Download Now
        </button>
      </div>
    </div>
    </>
  );
};

export default Home;
