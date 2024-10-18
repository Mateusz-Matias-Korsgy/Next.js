import React from "react";
import { BiCategory } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { SearchIcon } from "../../icons";

const Banner = ({ data }) => {
  console.log("hero banner", data);
  return (
    <div className="w-full bg-bgCareer bg-cover h-96 max-md:h-44 flex flex-col justify-center items-center max-sm:w-11/12	 text-white">
      <div className="flex flex-col text-white mt-12 max-xl:-mt-2">
        <span className="font-semibold text-end">Search for Jobs</span>
        <h1 className="text-7xl font-extrabold">Careers</h1>
      </div>
      <div className="bg-white rounded-lg shadow p-4 py-2 px-2 w-9/12 max-xl:w-11/12 mx-auto flex justify-between mt-10 items-center max-sm:hidden">
        <div className="flex items-center rounded p-4 py-2 bg-primary-lightGrey justify-between ">
          <SearchIcon />
          <input
            type="text"
            className="focus:border-grey text-black ml-4 p-2 bg-primary-lightGrey focus:ml-2 !outline-none"
            placeholder="Job Title, Any words..."
          />
        </div>
        <div className="flex items-center text-black rounded p-1 bg-primary-lightGrey justify-between">
          <BiCategory size={20} />
          <select className="focus:border-grey text-grey ml-4 p-2 bg-primary-lightGrey focus:ml-2 !outline-none">
            <option>Select Your Categories</option>
            <option>Full Stack Engineer</option>
          </select>
        </div>
        <div className="flex items-center text-black rounded p-1 bg-primary-lightGrey justify-between">
          <MdOutlineLocationOn size={20} />
          <select className="focus:border-grey text-grey ml-4 p-2 bg-primary-lightGrey focus:ml-2 !outline-none">
            <option>Locations</option>
            <option>Dublin, Ireland</option>
          </select>
        </div>
        <button className="bg-primary-green shadow shadow-primary-grey rounded p-2 w-32 border-none capitalize text-base max-lg:text-sm">
          Find Job
        </button>
      </div>
    </div>
  );
};

export default Banner;
