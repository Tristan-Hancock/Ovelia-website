import backgroundImage from "../assets/background_img.svg";
import placeholder from "../assets/placeholder_logo.png";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center w-full mt-10 relative p-10">
      <img
        src={backgroundImage}
        alt=""
        className="w-full object-cover absolute inset-0 -z-10 h-full"
      />
      <div className="grid md:grid-cols-2 w-full grid-cols-1">
        <div className="xl:ml-20 p-4 md:ml-10">
          <p className=" w-full md:text-7xl font-semibold leading-tight text-start text-3xl">
            A Platform for <br />
            Inspection <br />
            Preparation
          </p>

          <p className="md:text-2xl mt-8">
            Prepare for inspections in a regulated enviroment with our latest
            and most updated data
          </p>

          <div>
            <button className="bg-purple-500 text-white py-2 px-4 rounded-lg mt-5">
              Request Demo
            </button>

          </div>
        </div>
        <div className="md:flex items-center justify-center hidden ">
          <img src={placeholder} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
