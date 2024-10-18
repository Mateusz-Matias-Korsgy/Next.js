import React, { useEffect, useContext } from "react";
import ShippingCartCard from "../../components/cards/ShippingCartCard";
import progressBar from "../../assets/images/payments/progressBar.png";
import { Link } from "react-router-dom";
import CartContext from "../../Contexts/Cart/CartContext";

const ProcessOne = () => {
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      {cartItems && cartItems?.length !== 0 ? (
        <>
          <h1 className="text-2xl md:text-3xl tracking-wider font-sans leading-normal font-bold m-8 text-center">
            Payment Process
          </h1>
          <center>
            {" "}
            <img
              src={progressBar}
              alt="wolburg progress bar"
              className="px-12"
            />
            <div className="grid grid-cols-3 gap-4 uppercase text-xs font-bold md:text-lg mt-4">
              <span className="">Shipping Cart</span>
              <span className="text-center">PAYMENT PROCESS</span>
              <span className="">Confirmation</span>
            </div>
            <ShippingCartCard />
          </center>
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

export default ProcessOne;
