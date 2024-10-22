import React from "react";
import finalImg from "./../../assets/images/about/final picture vision.png";

const AboutUsCard = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 gap-2 p-2 md:p-16 my-8" id="vision">
      <div className="border-l border-primary-green pl-5 bg-white md:pr-16">
        <h3 className="font-bold text-base md:text-lg text-secondary-green uppercase  ">
          About
        </h3>
        <h2 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold mb-5">
          Vision
        </h2>
        <p className="text-sm md:text-lg leading-loose font-medium text-black ">
          We are committed to{" "}
          <span className="text-primary-green">
            exceeding customers’ expectations
          </span>{" "}
          through effective, and budget-friendly agile solutions.
        </p>
      </div>
      <div className="align-center p-8 md:mx-auto md:w-4/5">
        <img
          src={finalImg}
          alt="Learn More About Wolburg"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default AboutUsCard;
