import React from "react";
// IMAGES
import aboutIcon from "./../../../assets/images/icon/iconAbout.png";
import contactUs from "./../../../assets/images/icon/icon_Contact_us.png";
import careers from "./../../../assets/images/icon/icon_Carrers.png";
import faq from "./../../../assets/images/icon/icon_FAQ.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const AboutubMenuCard = ({ onUpdate }) => {
  function handleClick() {
    onUpdate();
  }
  return (
    <>
      <div className="absolute bg-white ">
        <div
          className="flex z-10 origin-top-right bg-white rounded shadow-lg"
          style={{ width: "20rem" }}
        >
          <div className="p-5 space-y-4">
            <div className="flex  items-center">
              <div className="item-center">
                <img src={aboutIcon} alt=" about-us-icon" />
              </div>
              <div className=" ml-2">
                <Link
                  to="/about"
                  className="block text-xs hover:border-b-2 hover:border-primary-green hover:text-primary-green "
                  onClick={handleClick}
                >
                  <h4 className="font-medium  ">About</h4>
                </Link>
              </div>
            </div>
            <div className="border-l-2  ml-5">
              <HashLink
                to={"/about#mission"}
                className="block px-5 py-2 text-xs hover:border-b-2 hover:border-primary-green hover:text-primary-green "
                onClick={handleClick}
              >
                Mission
              </HashLink>
              <HashLink
                to={"/about#values"}
                className="block px-5 py-2 text-xs hover:border-b-2 hover:border-primary-green hover:text-primary-green "
                onClick={handleClick}
              >
                Values
              </HashLink>
              <HashLink
                to={"/about#vision"}
                className="block px-5 py-2 text-xs hover:border-b-2 hover:border-primary-green hover:text-primary-green "
                onClick={handleClick}
              >
                Vision
              </HashLink>
            </div>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex  items-center">
              <div className="item-center">
                <img src={contactUs} alt=" contact-us-icon" />
              </div>
              <div className=" ml-2">
                <Link
                  to={"/contact-us"}
                  className="block text-xs hover:border-b-2 hover:border-primary-green hover:text-primary-green "
                  onClick={handleClick}
                >
                  <h4 className="font-medium  ">Contact Us</h4>
                </Link>
              </div>
            </div>
            <div className="flex  items-center">
              <div className="item-center">
                <img src={careers} alt=" careers-icon" />
              </div>
              <div className=" ml-2">
                <Link
                  to={"/career"}
                  className="block text-xs hover:border-b-2 hover:border-primary-green hover:text-primary-green "
                  onClick={handleClick}
                >
                  <h4 className="font-medium  ">Careers </h4>
                </Link>
              </div>
            </div>
            <div className="flex  items-center">
              <div className="item-center">
                <img src={faq} alt=" faq-icon" />
              </div>
              <div className=" ml-2">
                <Link
                  to={"/faq"}
                  className="block text-xs hover:border-b-2 hover:border-primary-green hover:text-primary-green "
                  onClick={handleClick}
                >
                  <h4 className="font-medium  ">FAQs </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutubMenuCard;
