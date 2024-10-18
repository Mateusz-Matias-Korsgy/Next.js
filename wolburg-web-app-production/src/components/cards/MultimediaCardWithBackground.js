import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import commMarktLine from "../../assets/images/services/communication/commMarktLine.svg";
import Button from "./../Button/Button";
import { Link } from "react-router-dom";

const MultimediaCardWithBackground = ({ image, title, subTitle }) => {
  return (
    <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 text-center p-4 md:p-8 m-6 bg-bgMultimedia bg-no-repeat bg-cover mb-12">
      <div className="items-center justify-center p-8 md:p-12">
        <img
          src={image}
          className="w-full h-full "
          alt="Multimedia services - Wolburg"
        />
      </div>
      <div className="md:py-16">
        <div className=" text-left w-content h-content gap-3 p-2 ">
          <h3 className="text-secondary-green uppercase font-bold text-base md:text-lg mb-4">
            Services
          </h3>
          <h2 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold mb-4 ">
            {title}
          </h2>
          <img
            src={commMarktLine}
            alt="Multimedia services - Wolburg"
            className=" md:my-2 mb-4 rotate-180"
          />
          <p className="text-black text-sm md:text-lg leading-loose font-medium md:leading-9 mb-8 md:mb-12">
            {subTitle}
          </p>
          <Link to={"/pricing"}>
            {" "}
            <Button
              value="Order Now"
              Icon={MdOutlineNavigateNext}
              className="bg-primary-green"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MultimediaCardWithBackground;
