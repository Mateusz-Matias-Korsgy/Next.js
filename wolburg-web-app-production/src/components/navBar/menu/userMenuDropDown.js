import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../Contexts/Cart/CartContext";
import Avatar from "./../menu/Avatar";

function UserMenuDropDown({ content, url }) {
  const { cartItems } = useContext(CartContext);
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  let length = cartItems.length;


  return (
    <div className="relative group md:mr-12">
      <Link
        to={url}
        className={`px-2 flex items-center text-xs md:text-md hover:text-base  hover:border-primary-green hover:text-primary-green font-bold leading-snug hover:opacity-75`}
      >
        <div className="ml-0 flex justify-between items-center cursor-pointer">
          <Avatar source={user?.image} />
        </div>
      </Link>

      <div className={`absolute z-10 hidden group-hover:block`}>
        <div className="grid grid-col-1 gap-4">{content}</div>
      </div>
    </div>
  );
}
export default UserMenuDropDown;
