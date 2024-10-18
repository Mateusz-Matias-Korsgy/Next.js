import React from "react";
import { MdCheck } from "react-icons/md";
import DigitalMarketingImg from "../../assets/images/services/digitapmarketing.png";
import Button from "./../Button/Button";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

const DigitalMarketing = () => {
  return (
    <>
      {" "}
      <div
        className="grid grid-col-1 lg:grid-cols-2 gap-2 p-8 md:p-16 md:my-8 bg-primary-grey"
        id="digitalMarketing"
      >
        <div className="py-8">
          <div className="flex flex-col">
            <div className="pl-5">
              <h3 className="text-secondary-green uppercase font-bold text-base md:text-lg mb-4">
                Services
              </h3>
              <h2 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold mb-4">
                Digital Marketing
              </h2>
              <p className="text-sm md:text-lg leading-loose font-medium md:leading-9 text-black">
                The Agency's Digital Marketing Team refers to the following
                services and solutions:
              </p>
              <ul className="list-none  mt-2 mb-5 text-black text-sm md:text-lg leading-loose font-medium md:leading-9 ">
                <li className="flex flex-row gap-2 items-center">
                  <MdCheck className="text-primary-green" size={22} />
                  <span>Content Creation</span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <MdCheck className="text-primary-green" size={22} />
                  <span>Content dissemination through approved platforms</span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <MdCheck className="text-primary-green" size={22} />
                  <span>
                    Multi-Strategy Content Promotion across paid, earned and
                    owned digital channels
                  </span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <MdCheck className="text-primary-green" size={22} />
                  <span>SEO, SEM, and Pay-per-click</span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <MdCheck className="text-primary-green" size={22} />
                  <span>Advertising</span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <MdCheck className="text-primary-green" size={22} />
                  <span>Content Syndication</span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <MdCheck className="text-primary-green" size={22} />
                  <span>Social Media Distribution</span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <MdCheck className="text-primary-green" size={22} />
                  <span>Email , Text</span>
                </li>
              </ul>
              <Link to={"/pricing"} className="block my-8">
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
        <div className="">
          <img
            src={DigitalMarketingImg}
            alt="Social media services - Wolburg"
            className="object-center w-full"
          />
        </div>
      </div>
    </>
  );
};

export default DigitalMarketing;
