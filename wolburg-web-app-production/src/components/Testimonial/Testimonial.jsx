import React from "react";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CgQuote } from "react-icons/cg";

const Testimonial = ({ starCount, title, testimony, testimonial }) => {
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push(<FaStar key={i} />);
  }
  return (
    <div className="h-auto relative">
      <div className="font-semibold">
        <div className="justify-item text-primary-blue ">
          <CgQuote size={50} />
          <h2 className="font-bold text-base md:text-lg">{title}</h2>
        </div>
        <div className="flex justify-between items-center mb-5 ">
          <div className="flex justify-between items-center ">
            {stars.map((Star, index) => (
              <>
                <IconContext.Provider
                  key={index}
                  value={{ className: " text-primary-green " }}
                >
                  <div>
                    <FaStar />
                  </div>
                </IconContext.Provider>
              </>
            ))}
          </div>
        </div>{" "}
        <p className="text-black text-sm leading-loose font-semibold mb-8">
          {testimony}
        </p>
        <p className="absolute bottom-0 right-0 text-xs md:text-base font-bold leading-none text-black text-right">
          -{testimonial}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
