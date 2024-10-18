import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import commMarktLine from "../../assets/images/services/communication/commMarktLine.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const ProfessionalCardImageLeft = ({ image, title, subTitle, init }) => {
  return (
    <div className="grid grid-col-1 gap-0 lg:grid-cols-2 text-center md:p-8">
      <div className=" order-1 md:order-2 px-8 py-8">
        <div className=" text-left w-content h-content gap-3">
          <p className="font-bold text-base md:text-lg text-secondary-green uppercase mb-4">
            Services
          </p>
          <h2 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold mb-4 ">
            {title}
          </h2>

          <p className="text-sm leading-loose md:text-lg md:leading-9 font-medium mb-8 text-justify">
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
      <div className="p-8 order-2 md:order-1 md:px-24">
        <img
          src={image}
          className="w-full h-3/5"
          alt="Professional services - Wolburg"
        />
      </div>
    </div>
  );
};

export default ProfessionalCardImageLeft;
