import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ButtonWithIconOnLeft from "../Button/ButtonWithIconOnLeft";
import greenRoundMark from "./../../assets/images/icon/greenRoundMark.svg";
import { FaAngleLeft } from "react-icons/fa";
import { usePostRequest } from "../../mutation";

const OrderConfirmationCard = (data) => {
  let contact = useParams();
  const [send, setSend] = useState(false)

  let userInfo = JSON.parse(sessionStorage.getItem("paymentInfo"))

  const { createPost, isLoading, errorResp, success } = usePostRequest(
    `api/payment/notification/${contact.email}`
  );

  useEffect(() => {
    setSend(true)
    if (send && (contact.email !== null || contact.email !== undefined)) {
      createPost(userInfo);
    }

  }, [send])
  return (
    <div className="mb-20 p-8 md:p-8 bg-white border-0.5 container shadow-xl rounded-md">
      <div className="container pt-8 text-start">
        <h2 className="font-black text-base mb-3 leading-tight text-grey">
          03
        </h2>
        <h2 className="font-bold text-xl uppercase tracking-tight">
          Confirmation
        </h2>
        <hr className="border-[1px] mt-2 mb-8 w-[125px] bg-white items-center border-grey" />
      </div>
      <div className="mb-20 items-center justify-center">
        <img
          src={greenRoundMark}
          alt="greenMark"
          className="w-12 h-12 md:w-16 md:h-16"
        />
        <h1 className="font-bold text-base md:text-xl tracking-tight leading-loose my-8">
          The order has been placed
        </h1>

        <Link to={"/"}>
          <ButtonWithIconOnLeft
            className="bg-black text-white m-2 text-md md:text-base capitalize"
            value={"Back To Home"}
            Icon={FaAngleLeft}
          />
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationCard;
