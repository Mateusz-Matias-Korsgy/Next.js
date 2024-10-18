import React from "react";
import VisiualDesign from "../../assets/images/services/visiualDesign.png";
import Button from "./../Button/Button";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

const VisiualDesignCard = () => {
  return (
    <>
      {" "}
      <div
        className="grid grid-col-1 lg:grid-cols-2 gap-2 p-8 md:p-16 md:my-8 bg-white"
        id="visualDesign"
      >
        <div className="align-center md:mx-auto">
          <img
            src={VisiualDesign}
            alt="Visual Design services - Wolburg"
            className=""
          />
        </div>
        <div className="py-8 order-1 md:order-2">
          <h3 className="text-secondary-green uppercase font-bold text-base md:text-lg mb-4">
            Services
          </h3>
          <h2 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold mb-4">
            Visual Design
          </h2>
          <p className="text-sm md:text-lg leading-loose font-medium md:leading-9">
            <span className="text-primary-green text-justify">
              Our Visual design teams{" "}
            </span>{" "}
            focus on the aesthetics of a site, brochure, video, and promotional
            materials by strategically implementing images, colors, fonts, and
            other elements to optimize brand identity and value.
          </p>
          <Link to={"/pricing"} className="block my-8">
            {" "}
            <Button
              value="Order Now"
              Icon={MdOutlineNavigateNext}
              className="bg-primary-green"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default VisiualDesignCard;
