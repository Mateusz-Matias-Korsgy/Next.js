import React from "react";
import Button from "../Button/Button";
import Progressbar from "./../progressbar/ProgressBar";
import img from "./../../assets/images/logo/career-logo.png";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { BiCart } from "react-icons/bi";


const CardsTemplate = ({ data, styles }) => {

  // const { jobCode, dateCreated, title, description,isOpen } = data;
  const { title, description, isOpen, location, jobType, _id } = data;
  return (
    <div className="px-2 py-4  max-w-sm shadow-md shadow-primary-grey">
      <div className="p-1 space-y-2">
        <img src={img || ""} alt={title || "wolburg logo"} className="" />
        <div className="space-y-4">
          <span className="text-lg md:text-xl font-bold capitalize block leading-7 mb-4">
            {title}
          </span>
          <span className="text-gray-500 text-xs md:text-sm text-justify leading-9 line-clamp-6">
            {parse(description)}
          </span>
          <p>

            {jobType.map((item, index) => (
              <span
                key={index}
                className="mx-2 bg-primary-grey px-2 rounded-xl text-xs md:text-sm"
              >
                {item}
              </span>
            ))}
          </p>
        </div>
        <div className="w-full">
          <Progressbar percent={75} />
        </div>
        <div className="flex justify-between ">
          <div className="flex justify-between p-2 border border-grey">
            <select className="focus:border-grey text-grey ">
              {location.map((item, index) => (
                <option key={index}>{item}</option>
              ))}

            </select>
            <span className="relative">
              {location.length > 0 && (
                <span className="bg-primary-green text-center text-white p-1 rounded-full w-5 h-5 float-right shrink-0 grow-0 text-xs absolute bottom-0 right-0 mr-3 mb-6">
                  {location.length}
                </span>
              )}
            </span>
          </div>
          {isOpen ? (
            <>
              <Link to={`/career/apply/${_id}`}>
                {" "}
                <Button
                  type="button"
                  className="bg-black text-white"
                  processing={false}
                  value={"Apply"}
                />
              </Link>
            </>
          ) : (
            <>
              <Button
                type="button"
                className="bg-black text-white"
                processing={true}
                value={"Closed"}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardsTemplate;
