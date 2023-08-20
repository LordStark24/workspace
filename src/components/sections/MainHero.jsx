import React from "react";
import heroImg from "sahero002.jpgsahero002.jpg";
import certs from "sahero002.jpg/Components.png";

const Hero = () => {
  return (
    <div className="bg-cover md:w-full md:h-full md:top-[90px]">
      <div className="relative md:overflow-hidden md:w-full">
        <img
          className=" bg-object-cover w-screen -z-10"
          src={heroImg}
          alt="consuting_bg"
        />
        <div className="absolute top-0 md:top-16 right-0 justify-center items-center h-full w-[50%] xl:mt-0 xl:pt-0">
          <img className="w-full  top-10 md:mt-0" src={certs} alt="" />
        </div>

        <div className="absolute bottom-10 left-0 justify-center items-center w-[50%] text-white ml-5 md:bottom-20 xl:pt-0 xl:top-60">
          <h1 className="leading-relaxed text-zinc-200 text-medium p-3 font-bold mt-3 md:text-4xl xl:text-6xl xl:mb-5 ">
            YOUR{" "}
            <span className="text-gradient-to-br from-cyan-500 to-blue-500 ">
              AGILE JOURNEY
            </span>{" "}
            DOESN'T HAVE TO BE A CHALLENGE!
          </h1>
          {/* <h1 className="text-2xl font-bold mt-3 md:text-4xl xl:text-6xl xl:mb-5 ">
            Can be Easier!
          </h1> */}
          <h1 className="text-1xl p-3 text-zinc-200 text-gradient-to-br from-cyan-500 to-blue-500 pb-5 font-bold mt-3 md:text-4xl xl:text-5xl xl:mb-5">
            WE ARE HERE TO GUIDE YOU!
          </h1>

          <a
            className="relative mt-5 left-0 justify-center items-center text-center md:ml-10 bg-[#13517D] bg-opacity-60 border-2 w-2/3 py-3 px-8 rounded-3xl text-sm drop-shadow-md hover:bg-[#13517D] active:bg-[#0F3F61] lg:text-xl lg:w-1/3"
            href="mailto:inquire@starkagile.com"
          >
            Contact us TODAY!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
