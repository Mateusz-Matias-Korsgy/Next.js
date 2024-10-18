import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

function NavMenuDropDown({ text, content, url }) {
  return (
    <div className="relative group">
      <Link
        to={url}
        className={`px-2 py-2 flex items-center text-sm md:text-md font-medium hover:text-base hover:border-b-0 md:hover:border-b-2 hover:border-primary-green hover:text-primary-green leading-snug hover:opacity-75`}
      >
        <div className="ml-0 flex justify-between items-center cursor-pointer">
          {text}
          <MdKeyboardArrowDown className="md:text-xl" />
        </div>
      </Link>

      <div className={`absolute z-10 hidden group-hover:block`}>
        <div className="grid grid-col-1 gap-4 md:grid-cols-6">{content}</div>
      </div>
    </div>
  );
}
export default NavMenuDropDown;
