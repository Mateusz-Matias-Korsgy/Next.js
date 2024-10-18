import React, { useEffect } from "react";
import PaymentProcessCard from "../../components/cards/PaymentProcessCard";
import progressBar from "../../assets/images/payments/progressBar2.png";

const ProcessOne = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className="text-2xl md:text-3xl tracking-wider font-sans leading-normal font-bold m-8 text-center">
        Payment Process
      </h1>
      <center>
        <img src={progressBar} alt="wolburg progress bar" className="px-12" />
        <div className="grid grid-cols-3 gap-4 uppercase text-xs font-bold md:text-lg mt-4">
          <span className="">Shipping Cart</span>
          <span className="text-center">PAYMENT PROCESS</span>
          <span className="">Confirmation</span>
        </div>
      </center>
      <PaymentProcessCard />
    </div>
  );
};

export default ProcessOne;
