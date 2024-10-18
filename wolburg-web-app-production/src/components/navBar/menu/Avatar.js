import React from "react";
import { FaUserCircle } from "react-icons/fa";
function Avatar({ source }) {
  console.log(source)
  return (

    <>
      <div className="flex items-center sm:flex-row flex-wrap">
        <div className="">
          {source ? (
            <img
              src={source}
              alt="avatar icon"
              className=" rounded-full overflow-hidden shadow"
              width={30}
              height={30}
            />
          ) : (
            <FaUserCircle size={20} />
          )}
        </div>
      </div>
    </>
  );
}
export default Avatar;
