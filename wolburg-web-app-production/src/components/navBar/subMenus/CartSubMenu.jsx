import React, { useState, useEffect, useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartContext from "../../../Contexts/Cart/CartContext";

const CartSubMenu = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [subTotal, setSubTotal] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {}, [del]);

  return (
    <>
      <div className="absolute bg-white ">
        <div className="flex z-10 origin-top-right bg-white rounded shadow-lg w-full">
          <div className="">
            <div className="grid grid-col-1 p-2">
              <div className="col-span-1">
                {cartItems === null || cartItems.length === 0 ? (
                  <p className="p-4 text-xm">your cart is empty</p>
                ) : (
                  <div className=" m-2">
                    <table className="w-full h-full table-collapse p-2">
                      <thead className="m-2 border-b-2">
                        <tr className="text-left text-xs md:text-sm capitalise">
                          <th className="pr-2">Product</th>
                          <th className="pr-2">Price</th>
                          <th className="pr-2">Del</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm my-8  border-b-2">
                        {cartItems &&
                          cartItems?.map((item, index) => {
                            return (
                              <tr
                                className="text-xs p-8 divide-y py-4"
                                key={item.id}
                              >
                                <td>
                                  <p>{item.title}</p>
                                </td>
                                <td>
                                  <p>€ {item.price}</p>
                                </td>

                                <td className="text-right">
                                  <FaTrash
                                    className="text-primary-red ml-2"
                                    onClick={() => removeFromCart(item)}
                                  />
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                    <>
                      <Link to={"/payments/order"}>
                        <button className="bg-black text-xs w-full p-2 rounded-lg my-4 text-white hover:bg-primary-green hover:font-bold">
                          Checkout
                        </button>
                      </Link>
                    </>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSubMenu;
