import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-bgApply bg-cover h-96 max-md:h-44 flex flex-col justify-center items-center space-y-28 text-white">
      {/* <BreadCrumb /> */}
      <div className="flex flex-col text-white mt-12 max-xl:-mt-2">
        {/* <span className="font-semibold text-end">Search for Jobs</span> */}
        <h1 className="text-7xl font-extrabold max-lg:font-lg max-lg:text-4xl max-md:text-xl max-lg:-mt-12">
          Apply For This Position
        </h1>
      </div>
    </div>
  );
};

export default Banner;
