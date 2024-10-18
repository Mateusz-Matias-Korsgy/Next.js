import React from "react";
import Button from "./../Button/Button";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

const ServiceCard = () => {
  return (
    <div className="flex lg:w-[450px] mb-20">
      <div className="w-[2px] mt-10 mb-10  ml-4 mr-4"></div>
      <div className="flex flex-col sm:pr-4 px-auto">
        <p className="font-bold text-base md:text-lg text-secondary-green uppercase mb-4">
          Services
        </p>
        <div className="">
          <h2 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold text-justify text-black mb-3">
            Business Intelligence
          </h2>
          <p className="text-sm leading-loose md:text-lg md:leading-9 font-medium">
            <span className="text-primary-green">
              {" "}
              A technology-driven process
            </span>{" "}
            for analyzing data and delivering actionable information helps
            business owners, leaders, managers, and professionals make informed
            decisions.
          </p>
          <Link to={"/pricing"} className="my-8 block">
            {" "}
            <Button
              value="Order Now"
              Icon={MdOutlineNavigateNext}
              className="bg-primary-green"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
