import React from "react";

const Newsletter = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-hero overflow-y-hidden">
      <div className="flex flex-col items-center justify-center text-center">
        <div className=" flex flex-col items-center sm:w-[50%] p-2">
          <div className="text-button_white font-poppins text-4xl font-semibold">
            Join Our Newsletter
          </div>
          <p className="text-button_white font-poppins text-xl font-normal mt-10 p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            nisl, elementum elit arcu amet nec non eget felis. Eu ut cursus
            luctus nunc.
          </p>

          <div className="flex flex-col items-center w-1/2  mt-4">
            <input
              type="email"
              className="bg-hero border-button_white border rounded mt-2 py-1 mb-6 outline-none px-4 text-button_white w-full placeholder:text-center placeholder:text-button_white placeholder:font-poppins placeholder:font-normal"
              placeholder="Your Email"
            />
            <button className=" bg-[#bbbffe] px-4 py-1 w-full rounded">
              <span className="text-navbar_text font-poppins font-semibold ">
                SIGN UP!
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Newsletter;
