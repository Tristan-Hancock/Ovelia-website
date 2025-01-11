import React , {useRef} from "react";
import achievement1 from "../assets/images/achievement_1.png";
import achievement2 from "../assets/images/achievement_2.png";
import appstore_svg from "../assets/svg/appstore.svg";
import playstore_svg from "../assets/svg/playstore.svg";
import placeholder from "../assets/svg/placeholder_img.svg";
import Footer from "../components/Footer";

const Home = () => {

  const getAppSectionRef = useRef(null);

  const scrollToGetApp = () => {
    getAppSectionRef.current.scrollIntoView({ behavior: "smooth" });
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
          <button className="bg-navbar_text py-4 px-6 rounded-full text-xl leading-4 text-button_white font-dmSans font-bold mt-8" onClick={scrollToGetApp}>
            Download Now
          </button>

          <p className="font-poppins font-normal sm:text-2xl text-lg  text-navbar_text pt-32 pb-14">
            Through our own experiences, we realized how difficult it can be to
            understand and manage Polycystic Ovarian Syndrome (PCOS). One day,
            we were sharing our frustrations about the lack of accessible,
            reliable resources for early detection and support—and it hit us.
            Why not create something that truly empowers women to take charge of
            their reproductive health? That's how Ovelia came to life—a space
            where women can assess, track, and manage their health, all while
            feeling supported every step of the way.
          </p>
        </div>
      </section>

      {/* About Section */}

      <section className="bg-light_periwinkle relative">
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

        <div className="grid grid-cols-1 md:grid-cols-4 pt-10 pb-20 px-5">
          <div className="flex flex-col items-center w-4/6 mx-auto text-center justify-center">
            <img src={placeholder} alt="" />
            <div className="font-lato font-extrabold text-lg">Donec vitae.</div>
            <p className="font-poppins font-normal text-xs ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc
              vestibulum ect
            </p>
          </div>

          <div className="flex flex-col items-center w-4/6 mx-auto text-center">
            <img src={placeholder} alt="" />
            <div className="font-lato font-extrabold text-lg">Donec vitae.</div>
            <p className="font-poppins font-normal text-xs ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc
              vestibulum ect
            </p>
          </div>

          <div className="flex flex-col items-center w-4/6 mx-auto text-center">
            <img src={placeholder} alt="" />
            <div className="font-lato font-extrabold text-lg">Donec vitae.</div>
            <p className="font-poppins font-normal text-xs ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc
              vestibulum ect
            </p>
          </div>

          <div className="flex flex-col items-center w-4/6 mx-auto text-center">
            <img src={placeholder} alt="" />
            <div className="font-lato font-extrabold text-lg">Donec vitae.</div>
            <p className="font-poppins font-normal text-xs ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc
              vestibulum ect
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
            Clinically vetted and developed in collaboration with gynecologists
            and researchers from Johns Hopkins
          </p>
        </div>

        <div className="h-[3px] bg-[#495494] w-[50%] mt-10 lg:w-[500px]"></div>

        <div className="flex flex-col items-center justify-center mt-10 w-10/12 sm:w-[63%] text-center">
          <h1 className="text-button_white font-poppins font-medium text-3xl">
            Locates Medical Professionals
          </h1>
          <p className="font-poppins font-normal text-button_white text-xl mt-3 ">
            Gives user access to a list of Ob/Gyns within their radius and can
            book an appointment
          </p>
        </div>

        <div className="h-[3px] bg-[#495494] w-[50%] mt-10 lg:w-[500px]"></div>

        <div className="flex flex-col items-center justify-center mt-10 w-10/12 sm:w-[63%] text-center">
          <h1 className="text-button_white font-poppins font-medium text-3xl">
            Tracks Progress
          </h1>
          <p className="font-poppins font-normal text-button_white text-xl mt-3 ">
            Gives user prescription reader Ensures adherence to medication which
            will lead to better treatment outcomes PerioMood: period tracker to
            monitor user's menstrual cucle and sumptoms
          </p>
        </div>
      </section>

      {/* Know more section*/}
      <section className="bg-radial-gradient">
        <div className="flex flex-col items-center justify-start pt-20 pb-36">
          <div className="flex flex-col items-center md:w-[450px] w-[80%]">
            <h1 className="font-poppins font-semibold text-3xl text-hero text-center">
              Want to know more?
            </h1>
            <p className="font-poppins font-normal text-2xl text-navbar_text mt-10 text-center">
              sign up for our exclusive mailing list.
            </p>

            <div className="md:w-[70%] w-full flex flex-col items-center justify-center">
              <input
                type="email"
                className="outline-none border border-navbar_text bg-transparent rounded p-2 mt-5 w-full placeholder:text-navbar_text placeholder:font-rubiks placeholder:font-normal "
                placeholder="Your Email"
              />

              <button className="mt-5  rounded w-full bg-hero py-2">
                <span className="font-dmSans font-bold text-button_white text-lg  mt-5 ">
                  Sign Up
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-hero">
        <h1 className="text-light_periwinkle font-poppins font-medium text-2xl text-center pt-10">
          OUR ACHIEVEMENTS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-4">
          <img src={achievement1} alt="" />
          <img src={achievement2} alt="" />
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

      {/* Footer */}
      <Footer/>
    </>
  );
};

export default Home;
