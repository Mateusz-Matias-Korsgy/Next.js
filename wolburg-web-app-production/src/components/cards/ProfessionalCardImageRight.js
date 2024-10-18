import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const ProfessionalCardImageRight = ({ image, title, subTitle, init }) => {
  return (
    <div className="grid grid-col-1 gap-0 lg:grid-cols-2 text-center md:p-8 mt-24">
      <div className="md:py-16 order-1 px-8 py-4">
        <div className=" text-left">
          <p className="font-bold text-base md:text-lg text-secondary-green uppercase mb-4">
            Services
          </p>
          <h2 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold mb-4 ">
            {title}
          </h2>
          <p className="text-sm leading-loose md:text-lg md:leading-9 font-medium mb-8 ">
            <span className="text-primary-green">
              {" "}
              {init}
            </span>{" "}
            {subTitle}
          </p>


          <Link to={"/pricing"}>
            {" "}
            <Button
              value="Order Now"
              Icon={MdOutlineNavigateNext}
              className="bg-primary-green"
            />
          </Link>
        </div>
      </div>
      <div className="items-center justify-center p-8 md:px-24 order-2">
        <img
          src={image}
          className="w-full h-full "
          alt="Multimedia services - Wolburg"
        />
      </div>
    </div>
  );
};

export default ProfessionalCardImageRight;
