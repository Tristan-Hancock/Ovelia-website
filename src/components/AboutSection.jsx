import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-[150px] md:px-[50px] px-7">
      <div className="md:w-[80%]">
        <div className="text-3xl font-semibold text-center">
          Make informed decision-making in quality management with us
        </div>

        <div className="mt-10 text-xl">
          Staying compliant is time-consuming and costly, especially in an
          environment of bountiful but poorly organized data. We offer a
          platform designed to organize compliance actions with a streamlined
          data dashboard.
        </div>

        <div className="grid xl:grid-cols-3 mt-[50px] sm:grid-cols-2 grid-cols-1 md:p-3 md:gap-x-16">
          <div className="flex flex-col p-2">
            <div className="flex flex-row items-center justify-start">
              <p className="text-purple-600 font-bold md:text-4xl text-xl">100M+</p>
              <p className="md:text-3xl ml-2 text-xl">Downloads</p>
            </div>
            <ul className="list-disc ml-5 space-y-1 md:text-xl font-semibold">
              <li>Thing 1</li>
              <li>Thing 2</li>
            </ul>
          </div>

          <div className="flex flex-col p-2">
            <div className="flex flex-row items-center justify-start">
              <p className="text-purple-600 font-bold md:text-4xl text-xl">100M+</p>
              <p className="md:text-3xl ml-2 text-xl">Downloads</p>
            </div>
            <ul className="list-disc ml-5 space-y-1 md:text-xl font-semibold">
              <li>Thing 1</li>
              <li>Thing 2</li>
            </ul>
          </div>

          <div className="flex flex-col p-2">
            <div className="flex flex-row items-center justify-start">
              <p className="text-purple-600 font-bold md:text-4xl text-xl">100M+</p>
              <p className="md:text-3xl ml-2 text-xl">Downloads</p>
            </div>
            <ul className="list-disc ml-5 space-y-1 md:text-xl font-semibold">
              <li>Thing 1</li>
              <li>Thing 2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
