import React from "react";
import { BiCart } from "react-icons/bi";
const CartIcon = ({ itemCount }) => {
  return (
    <div className="relative">
      <BiCart size={20} className="hover:text-primary-green" />
      {itemCount > 0 && (
        <span className="bg-primary-red text-center text-white p-1 rounded-full w-5 h-5  float-right shrink-0 grow-0 text-xs absolute bottom-0 right-0 mr-3 mb-3">
          {itemCount}
        </span>
      )}
    </div>
  );
};
export default CartIcon;
