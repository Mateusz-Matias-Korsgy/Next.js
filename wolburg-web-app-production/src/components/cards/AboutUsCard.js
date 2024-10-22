import React from "react";
import { MdCheck } from "react-icons/md";
import businessImg from "./../../assets/images/about/Final Picture Mission.png";

const AboutUsCard = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 gap-2 md:gap-4 p-2 md:p-16 my-8" id="mission">
      <div className="border-l border-primary-green pl-5 bg-white">
        <h3 className="font-bold text-base md:text-lg text-secondary-green uppercase  ">
          About
        </h3>
        <h2 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold mb-5">
          Mission
        </h2>
        <p className="text-sm md:text-lg leading-loose font-medium text-black ">
          WOLBURG seeks to provide integrated business support services to small
          and midsize
          <br /> enterprises to improve our customers' performance in:
        </p>
        <ul className="list-none  mt-2 mb-5 text-sm md:text-lg leading-9 font-medium">
          <li className="flex flex-row gap-2 items-center">
            <MdCheck className="text-primary-green" size={22} />
            <span>Strategic Marketing & Social Media Management</span>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <MdCheck className="text-primary-green" size={22} />
            <span>Business Intelligence</span>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <MdCheck className="text-primary-green" size={22} />
            <span>Public Relations</span>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <MdCheck className="text-primary-green" size={22} />
            <span>Advertising</span>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <MdCheck className="text-primary-green" size={22} />
            <span>Data science</span>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <MdCheck className="text-primary-green" size={22} />
            <span>Accounting & Finance Management.</span>
          </li>
        </ul>
      </div>
      <div className="align-center p-8 md:mx-auto">
        <img
          src={businessImg}
          alt="Learn More About Wolburg"
          className="mx-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default AboutUsCard;
