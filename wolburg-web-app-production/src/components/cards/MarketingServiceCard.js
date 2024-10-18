import React from "react";
import MarketingServiceImage from "../../assets/images/services/marketService.png";
import dmline from "../../assets/images/services/dmline.png";
import Button from "./../Button/Button";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

const MarketingCaServiceCard = () => {
  return (
    <div className="bg-primary-grey">
      {" "}
      <img
        src={dmline}
        alt="Communications services - Wolburg"
        className="mx-auto p-8 md:px-16 md:p-8"
      />
      <div
        className="grid grid-col-1 lg:grid-cols-2 gap-2 p-8 md:p-16"
        id="marketingService"
      >
        <div className="">
          <h3 className="text-secondary-green uppercase font-bold text-base md:text-lg mb-4">
            Services
          </h3>
          <h2 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold text-black mb-4">
            Marketing Service{" "}
          </h2>

          <p className="text-black text-sm md:text-lg leading-loose font-medium md:leading-9 my-4">
            <span className="text-primary-green ">
              We assist clients in developing a process of exploring, creating,
              and delivering{" "}
            </span>
            value that meets the needs of a target market by expanding the
            target audience, developing and operationalizing advertising
            campaigns, and representation in trade events.
          </p>
          <Link to={"/pricing"} className="block my-8">
            {" "}
            <Button
              value="Order Now"
              Icon={MdOutlineNavigateNext}
              className="bg-primary-green"
            />
          </Link>
        </div>
        <div className="align-center md:mx-auto ">
          <img
            src={MarketingServiceImage}
            alt="Communications services - Wolburg"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingCaServiceCard;
