import React from "react";
import { MdCheck } from "react-icons/md";
import SocialMediaManagemt from "../../assets/images/services/socialMediaManagemt.png";
import Button from "./../Button/Button";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

const SocialMediaManagementCard = () => {
  return (
    <>
      {" "}
      <div
        className="grid grid-col-1 lg:grid-cols-2 gap-2 p-8 md:p-16 md:my-8 bg-white"
        id="socialMediaManagement"
      >
        <div className="align-center md:mx-auto">
          <img
            src={SocialMediaManagemt}
            alt="Social media services - Wolburg"
            className=""
          />
        </div>
        <div className="py-8 order-1 md:order-2">
          <div className="flex flex-col">
            <div className="pl-5">
              <h3 className="text-secondary-green uppercase font-bold text-base md:text-lg mb-4">
                Services
              </h3>
              <h2 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold mb-4">
                Social Media Management
              </h2>
              <p className=" text-sm md:text-lg leading-loose font-medium md:leading-9 text-black ">
                Our Integrated Social Media Management service involves: The
                analysis of social media audiences.
              </p>
              <ul className="list-none text-black text-sm md:text-lg leading-loose font-medium md:leading-9 mt-2 mb-5">
                <li className="flex flex-row gap-2 items-center">
                  <MdCheck className="text-primary-green" size={22} />
                  <span>
                    Developing a tailored strategy to maximize visibility.
                  </span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <MdCheck className="text-primary-green" size={22} />
                  <span>
                    Creating and distributing content on social media profiles.
                  </span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <MdCheck className="text-primary-green" size={22} />
                  <span>Monitoring online communication</span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <MdCheck className="text-primary-green" size={22} />
                  <span>Collaborate with influencers</span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <MdCheck className="text-primary-green" size={22} />
                  <span>
                    Monitor, measure, and report on social media performance
                  </span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <MdCheck className="text-primary-green" size={22} />
                  <span>Provide community service</span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <MdCheck className="text-primary-green" size={22} />
                  <span>Managing budget and ROI.</span>
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
      </div>
    </>
  );
};

export default SocialMediaManagementCard;
