import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center bg-hero h-screen ">
      <div className="flex flex-col items-center justify-center text-center sm:-mt-14">
        <div className="flex flex-col items-center sm:w-[50%] p-2">
          <h1 className="text-button_white font-poppins text-4xl font-semibold mb-6">
            Get In Touch
          </h1>
          <p className="text-button_white font-poppins text-xl font-normal p-5">
            Etiam ornare massa arcu, vitae pellentesque sapien tempor non. Ut ac
            arcu metus. Aenean nec neque felis. Fusce fermentum accumsan orci
            non posuere. Cras quis arcu feugiat, tincidunt justo quis, hendrerit
            justo
          </p>

          <div className="flex flex-col items-center sm:w-1/2 mt-4 space-y-4">
            <input
              type="text"
              className="bg-hero border-button_white border rounded mt-2 py-1  outline-none px-4 text-button_white w-full placeholder:text-start placeholder:text-button_white placeholder:font-poppins placeholder:font-normal"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="bg-hero border-button_white border rounded mt-2 py-1 outline-none px-4 text-button_white w-full placeholder:text-start placeholder:text-button_white placeholder:font-poppins placeholder:font-normal"
              placeholder="Your Email"
            />
            <select className="bg-hero border-button_white border rounded mt-2 py-1  outline-none px-4 text-button_white w-full placeholder:text-button_white placeholder:font-poppins placeholder:font-normal">
                <option value="" disabled selected >Reason</option>
                
            </select>
            <button className=" bg-[#bbbffe] px-4 py-1 w-full rounded">
              <span className="text-navbar_text font-poppins font-semibold ">
                SEND
              </span>
            </button>

          </div>
            <p className="font-poppins text-xl font-normal text-button_white mt-10">email  us at  info@ovelia</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
