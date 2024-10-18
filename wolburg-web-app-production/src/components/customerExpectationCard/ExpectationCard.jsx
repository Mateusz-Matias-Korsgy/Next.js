import React from "react";
import Button from "../Button/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

const ExpectationCard = ({ title, testimony, icon, first, link }) => {
  const divProperties = first ? "xl:w-1/1 " : "xl:w-1/1 border-l border-grey";
  return (
    <div className="my-3 md:my-0">
      <div className={divProperties}>
        <div className="pl-4 pt-2 relative w-full flex items-start justify-between h-56 md:h-96 gap-4 mb-8">
          <div className=" font-semibold">
            <div className="justify-item mb-4">
              <img
                src={icon}
                alt="icon"
                className="mb-3"
                style={{ width: "35px" }}
              />
              <p className="font-bold text-base md:text-lg">{title}</p>
            </div>
            <p className="text-black text-sm md:text-base leading-loose font-medium md:leading-relaxed mb-4">
              {testimony}
            </p>
            <a href={link} className="md:absolute bottom-0 my-16 ">
              <button className="inline-flex items-center shadow-md px-2 py-2 font-semibold text-xs capitalize tracking-widest transition ease-in-out duration-150 bg-primary-grey hover:bg-primary-green hover:text-white">
                <div className="ml-2 flex justify-between items-center text-black">
                  Learn More
                  <IoIosArrowRoundForward
                    className="text-primary-green hover:text-white"
                    size={25}
                  />
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpectationCard;
