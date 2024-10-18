import React from "react";
import { Link } from "react-router-dom";

function NavMenu({ text, url }) {
  return (
    <div className="relative group">
      <Link
        to={"/pricing"}
        className="px-0 md:px-2 py-2 flex items-center text-sm md:text-md hover:text-base font-medium leading-snug hover:opacity-75 hover:text-primary-green"
      >
        <div className="flex justify-between items-center ">{text}</div>
      </Link>
    </div>
  );
}
export default NavMenu;
