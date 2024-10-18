import React from "react";
import SearchInput from "../Forms/searchForm";

const HeroPricing = () => {
  return (
    <div className="w-full bg-primary-grey rounded-lg-5 h-96 max-md:h-44 flex  p-5 flex-col justify-center items-center space-y-28 text-black">
      <h1 className="text-4xl font-extrabold text-secondary-blue max-lg:font-lg max-lg:text-4xl text-center leading-[100px] max-md:text-xl max-lg:-mt-2">
        Frequently <span className="text-primary-green">Asked Questions</span>
          <p className="text-sm text-black ">
            How can we help you 
          </p>
          <SearchInput />
      </h1>
    </div>
  );
};

export default HeroPricing;
