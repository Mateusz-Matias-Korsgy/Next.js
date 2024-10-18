import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Contexts/Cart/CartContext";

const ShippingSummaryCard = () => {
  //the cartitems
  const { cartItems } = useContext(CartContext);

  return (
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
                  <td className="font-medium px-4 py-2">{item.title}</td>
                  <td className="font-medium px-4 py-2 text-right">
                    €{item.price * item.quantity}
                  </td>
                </tr>
              );
            })}
          <tr className="font-bold">
            <td className="px-4 py-2">Total:</td>
            {/* <td className="px-4 py-2 text-right text-green-600">${subTotal}</td> */}
          </tr>
        </tbody>
      </table>
      <Link to={"/payments/confirm"}>
        <button className="mt-4 py-2 px-6 bg-black w-full text-white rounded-lg">
          Payment Method
        </button>
      </Link>
    </div>
  );
};

export default ShippingSummaryCard;
