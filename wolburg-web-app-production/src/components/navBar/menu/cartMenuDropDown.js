import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../../Button/cartButton";
import CartContext from "../../../Contexts/Cart/CartContext";

function CartMenuDropDown({ content, url }) {
  const { cartItems } = useContext(CartContext);
  let length = cartItems.length;

  return (
    <div className="relative group">
      <Link
        to={url}
        className={`px-2 flex items-center text-sm md:text-md hover:text-basehover:border-primary-green hover:text-primary-green font-bold leading-snug hover:opacity-75`}
      >
        <div className="ml-0 flex justify-between items-center cursor-pointer">
          <CartIcon itemCount={length} />
        </div>
      </Link>

      <div className={`absolute z-10 hidden group-hover:block`}>
        <div className="grid grid-col-1 gap-4">{content}</div>
      </div>
    </div>
  );
}
export default CartMenuDropDown;
