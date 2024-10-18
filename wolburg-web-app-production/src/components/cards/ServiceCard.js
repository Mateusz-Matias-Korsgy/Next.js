import React from "react";
import { DiAptana } from "react-icons/di";
import Button from "./../Button/Button";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

const ServiceCard = ({ id, image, text, styles, btn = "" }) => {
  const { header, styledtxt, body, category } = text;
  const { imgStyle, headerStyle } = styles;
  const { value } = btn;
  return (
    <div
      className="grid grid-col-1 lg:grid-cols-2 gap-2 md:gap-4 p-8 even:bg-primary-businessGrey max-lg:h-max px-8"
      id={id}
    >
      <div className={`${imgStyle} max-md:order-last mx-auto`}>
        <img src={image} alt={`${image} ${id}`} className="object-contain" />
      </div>
      <div className="border-l pl-2 md:pl-6 border-primary-green  md:py-12 my-4">
        <h3 className="text-secondary-green uppercase font-bold text-base md:text-lg mb-4">
          Services
        </h3>
        <h3 className={`${headerStyle} mb-4`}>{header}</h3>
        <span className="text-black text-sm md:text-lg leading-loose font-medium md:leading-9">
          <span className="text-primary-green inline ">{styledtxt}</span> {body}
        </span>
        <Link to={"/pricing"} className="my-8 block">
          {" "}
          <Button
            value="Order Now"
            Icon={MdOutlineNavigateNext}
            className="bg-primary-green"
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
