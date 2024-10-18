import React from "react";
import Button from "./../Button/Button";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

const ServiceCard = () => {
  return (
    <div className="flex lg:w-[650px] mb-20">
      <div className="w-[2px]   mt-10 mb-10   mr-4"></div>
      <div className="flex flex-col">
        <p className="font-bold text-base md:text-lg text-secondary-green uppercase mb-4">
          Services
        </p>
        <div className="">
          <h2 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold text-black mb-3">
            Data Science{" "}
          </h2>
          <p className="text-black text-sm md:text-lg leading-loose font-medium md:leading-9">
            Developing and deploying scientific methods and systems
            <span className="text-primary-green">
              {" "}
              to help our customers extract{" "}
            </span>
            knowledge and insights from multiple data sources. scientific
            techniques, algorithms, and systems to assist businesses extract
            information, and insights from multiple data sources.
          </p>
          <Link to={"/pricing"} className="my-8 block">
            {" "}
            <Button
              value="Order Now"
              Icon={MdOutlineNavigateNext}
              className="bg-primary-green text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
