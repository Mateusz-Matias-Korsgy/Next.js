import React, { useState, useEffect, useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartContext from "../../Contexts/Cart/CartContext";

const ShippingCartCard = () => {
  const { cartItems, removeFromCart, decrease, increase } =
    useContext(CartContext);

  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const subtotal = cartItems?.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubTotal(subtotal);
  }, [cartItems, subTotal]);

  return (
    <div className="mt-4 m-4 md:shadow-xl rounded-lg">
      {cartItems.length > 0 ? (
        <>
          {" "}
          <div className="p-2 md:p-8 md:-mb-12 flex flex-col pt-8 text-start ">
            <h1 className="mb-2 text-left text-grey">01</h1>
            <h1 className="text-left text-black uppercase font-bold">
              Shipping Cart
            </h1>
            <hr className="border-[1px] mt-2 w-[150px] bg-white items-center border-grey" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 md:p-6 mt-4 md:mt-8">
            <div className="col-span-1 md:col-span-2">
              <div className="">
                <table className="w-full h-full table-collapse">
                  <thead className="py-8">
                    <tr className="text-center text-xs md:text-lg capitalize">
                      <th className="md:text-left text-left pl-2">PRODUCT</th>
                      <th>PRICE</th>
                      <th className="hidden md:inline">QUANTITY</th>
                      <th className="md:hidden inline pr-6">QTY</th>
                      <th className="text-left">SUBTOTAL</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {cartItems &&
                      cartItems?.map((item, index) => {
                        return (
                          <tr
                            className="shadow-md py-2 md:p-4 text-xs md:text-lg"
                            key={item.id}
                          >
                            <td className="text-left md:p-4 p-2">
                              <p>{item.title}</p>
                            </td>
                            <td className="text-center">
                              <p>€ {item.price}</p>
                            </td>
                            <td className="text-center">
                              <div className="flex flex-row gap-1 justify-center">


                                <input
                                  type="text"
                                  value={item.quantity}
                                  className="w-10 h-8 text-center border  border-0.5 text-green-500 rounded-md"
                                  readOnly
                                />
                                <button
                                  onClick={() => increase(item)}
                                  className="text-primary-green font-bold hover:text-2xl px-2 rounded-r"
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="md:text-center">
                              <span className="font-bold text-primary-green text-center">
                                €{item.price * item.quantity}{" "}
                              </span>
                            </td>
                            <td>
                              <FaTrash
                                className="text-primary-red md:m-0"
                                onClick={() => removeFromCart(item)}
                              />
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-span-1">
              {/* <ShippingSummaryCard /> */}

              {cartItems?.length === 0 ? (
                <></>
              ) : (
                <div className="p-8 bg-gray-100 h-full rounded-lg shadow-lg">
                  <h2 className="text-lg font-bold">Summary</h2>
                  <hr className="my-4 border-gray-400" />
                  <table className="w-full mt-4">
                    <tbody>
                      <tr>
                        <td className="font-medium px-4 py-2">SUBTOTAL</td>
                      </tr>
                      {cartItems &&
                        cartItems.map((item, index) => {
                          return (
                            <tr key={item.id}>
                              <td className="font-medium px-4 py-2">
                                {item.title}
                              </td>
                              <td className="font-medium px-4 py-2 text-right">
                                €{item.price * item.quantity}
                              </td>
                            </tr>
                          );
                        })}
                      <tr className="font-bold">
                        <td className="px-4 py-2">Total:</td>
                        <td className="px-4 py-2 text-right text-green-600">
                          €{subTotal}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to={"/payments/confirm"}>
                    <button className="mt-4 py-2 px-6 bg-black w-full text-white rounded-lg">
                      Payment Method
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <center className="my-8 md:my-24">
            <p className="text-xs md:text-lg mt-8">Your cart is empty</p>
            <Link to={"/pricing"}>
              <button className="m-8 my-12 py-2 px-6 bg-black text-white rounded-lg">
                Order Now
              </button>
            </Link>
          </center>
        </>
      )}
    </div>
  );
};

export default ShippingCartCard;
