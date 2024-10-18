import React from "react";
import chemImg from "./../../assets/images/about/Cheminement values.png";

const AboutUsCard = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-2 md:gap-4 p-2 md:p-16 my-8" id="values">
      <div className="align-center p-8 md:mx-auto order-2 md:order-1">
        <img
          src={chemImg}
          alt="Learn More About Wolburg"
          className="mx-auto rounded-lg"
        />
      </div>
      <div className="border-l border-primary-green pl-5 bg-white order-1 md:order-2">
        <h3 className="font-bold text-base md:text-lg text-secondary-green uppercase  ">
          About
        </h3>
        <h2 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold mb-5">
          Value
        </h2>
        <p className="text-sm md:text-lg leading-loose font-medium text-black ">
          <span className="text-primary-green">Our values are</span> the core of
          our actions; they drive our decision making and shape whom we aspire
          to be.
        </p>
      </div>
    </div>
  );
};

export default AboutUsCard;
