import React from "react";
import placeholder from "../assets/placeholder_logo.png";

const InformationSection = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full xl:mt-[200px] mt-10 md:p-10 p-5">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="md:ml-10 xl:ml-20">
            <p className="font-semibold text-xl  xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
              praesentium aliquid. Magni natus quis laboriosam.
            </p>

            <p className="mt-5 text-xl text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis inventore eum qui est harum temporibus rem quod dicta
              quos delectus, placeat quae provident architecto dolorem.
            </p>
          </div>
          <div className="hidden md:flex">
            <img src={placeholder} alt="placeholder" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full xl:mt-[200px] mt-10 md:p-10 p-5">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="hidden md:flex">
            <img
              src={placeholder}
              alt="placeholder"
              className="md:ml-10 xl:ml-20"
            />
          </div>
          <div className=" xl:mr-20">
            <p className="font-semibold text-xl  xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
              praesentium aliquid. Magni natus quis laboriosam.
            </p>

            <p className="mt-5 text-xl text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis inventore eum qui est harum temporibus rem quod dicta
              quos delectus, placeat quae provident architecto dolorem.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full xl:mt-[200px] mt-10 md:p-10 p-5 flex-col">
        <div className="md:text-4xl font-semibold text-2xl">
          Read More about Our Dashboards Detailed Features Here
        </div>

        <div className="bg-gray-200 p-4 rounded-lg">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="bg-purple-500 text-white size-8 flex items-center justify-center rounded-full">1</div>
                <div className="flex flex-col">
                  <p>Feature 1</p>
                  <p>
                    Feature 1 Description Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quos, rem?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationSection;
