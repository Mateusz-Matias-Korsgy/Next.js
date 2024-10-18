import React from "react";
import ColoredLine from "./line";
import FaqIcon from '../../assets/images/icon/faq-icon2.png'
function FaqCard({ title, answer }) {
  return (
    <>
      <div className="mt-5 ">
        <div className="flex items-top">
          <div className="item-center mr-10">
            <img src={FaqIcon}  alt="faq-icon" className="absolute  w-10"/>
          </div>
          <div className="ml-5 item-center">
            <h4 className="font-medium leading-loose">{title}</h4>
            <p className="mt-2 text-sm leading-loose">{answer}</p>
            <ColoredLine color="black" otherStyle="mt-5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqCard;
