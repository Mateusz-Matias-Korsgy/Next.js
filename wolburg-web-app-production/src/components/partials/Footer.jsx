import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "./../../assets/images/logo/Wolburg-logo.png";
import apple from "./../../assets/images/payments/Applepay.png";
import paypal from "./../../assets/images/payments/Paypal.png";
import master from "./../../assets/images/payments/mastercard.png";
import gpay from "./../../assets/images/payments/google-pay.png";
import visa from "./../../assets/images/payments/visa.png";

const Footer = () => {
  return (
    <footer className="mt-24">
      <div className="bg-black p-8 md:p-24 tracking-wide ">
        <div className=" text-white">
          <div className="text-center">
            <div className="place-content-center">
              <img src={logo} className="w-24 md:w-32" alt="Wolburg logo" />{" "}
            </div>
            <hr></hr>
            <div className="mt-8 p-2">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 text-left">
                <div>
                  <p className="text-base font-bold uppercase mb-4">ABOUT</p>
                  <span className="text-sm text-grey font-medium leading-8 lg:leading-9">
                    <p className="hover:text-primary-green">
                      <HashLink to={"/about#mission"}>Mission</HashLink>
                    </p>
                    <p className="hover:text-primary-green">
                      <HashLink to={"/about#values"}>Values</HashLink>
                    </p>
                    <p className="hover:text-primary-green">
                      <HashLink to={"/about#vision"}>Vision</HashLink>
                    </p>
                    <p className="hover:text-primary-green">
                      <Link to={"/career"}>Careers</Link>
                    </p>
                    <p className="hover:text-primary-green">
                      {" "}
                      <Link to={"/contact-us"}>Contacts</Link>
                    </p>
                  </span>
                </div>
                <div>
                  <p className="text-base font-bold uppercase mb-4">SERVICES</p>
                  <span className="text-sm text-grey font-medium leading-8 lg:leading-9">
                    <p className="hover:text-primary-green">
                      <Link to={"/services/professional"}>
                        Professional Services
                      </Link>
                    </p>
                    <p className="hover:text-primary-green">
                      <Link to={"/services/business"}>Business Services</Link>
                    </p>
                    <p className="hover:text-primary-green">
                      <Link to={"/services/communication"}>Communications</Link>
                    </p>
                    <p className="hover:text-primary-green">
                      <Link to={"/services/multimedia"}>Multimedia</Link>
                    </p>
                    <p className="hover:text-primary-green">
                      <Link to={"/pricing"}>Pricing</Link>
                    </p>
                  </span>
                </div>
                <div>
                  <p className="text-base font-bold uppercase mb-4">Clients</p>
                  <span className="text-sm text-grey font-medium leading-8 lg:leading-9 uppercase ">
                    <p className="hover:text-primary-green">
                      <a
                        href="https://korsgy.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        KORSGY
                      </a>
                    </p>
                    <p className="hover:text-primary-green">
                      <a
                        href="https://lingocomm.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LINGO{" "}
                      </a>
                    </p>
                    <p className="hover:text-primary-green">
                      <a
                        href="#"
                        // target="_blank"
                        // rel="noreferrer"
                      >
                        OGC{" "}
                      </a>
                    </p>
                    <p className="hover:text-primary-green">
                      <a
                        href="https://blewbo.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        BLEWBO{" "}
                      </a>
                    </p>
                    <p className="hover:text-primary-green">
                      <a
                        href="#"
                        // target="_blank"
                        // rel="noreferrer"
                      >
                        KTN{" "}
                      </a>
                    </p>
                    <p className="hover:text-primary-green">
                      <a
                        href="#"
                        // target="_blank" rel="noreferrer"
                      >
                        SETHEX{" "}
                      </a>
                    </p>
                  </span>
                </div>
                <div>
                  <p className="text-base font-bold uppercase mb-4">CONTACTS</p>
                  <span className="text-[12px] text-grey font-medium leading-[18px] ">
                    <p className="mb-2 text-white">Ireland Office</p>
                    <p className="mb-8">
                      6, Fern Road,<br></br> Sandyford Dublin 18
                    </p>

                    <p className="mt-8 mb-2 text-white">Estonia Office</p>
                    <p className="mb-8">
                      Kadaka tee 42b - 1A-211<br></br> 12915 Tallinn<br></br>Rep. <i>of</i> Estonia
                    </p>

                    <p className="text-white leading-2">
                      Mail:{" "}
                      <a
                        href="mailto:admin@Wolburg.com"
                        className="underline-offset-8 hover:text-primary-green"
                      >
                        admin@Wolburg.com
                      </a>
                    </p>
                  </span>
                </div>
                <div>
                  <p className="text-base font-bold uppercase mb-6">Payments</p>
                  <span className="text-sm text-grey font-medium">
                    <div className="grid grid-cols-3 gap-1 pr-12 md:pr-32">
                      <img src={visa} className="" alt="visa" />{" "}
                      <img src={gpay} className="" alt="google pay" />{" "}
                      <img src={master} className="" alt="master card" />{" "}
                      <img src={apple} className="" alt="Apple Pay" />{" "}
                      <img src={paypal} className="" alt="Paypal" />{" "}
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-16 mb-8"></hr>
          <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center text-sm ">
            <p className="order-3 md:order-1 mt-8 md:mt-0 text-center md:-p-8 text-xs md:text-sm">
              {" "}
              &copy; 2024. Wolburg Business Services Limited. All Rights
              Reserved.
            </p>
            <div className="order-2 md:order-2 text-xs md:text-sm text-center ">
              <div className="grid grid-cols-3 gap-2 md:gap-4 md:grid-cols-3">
                <span className="hover:text-primary-green">
                  <Link to="/policy/privacy-notice">Privacy Notice </Link>
                </span>
                <span className="hover:text-primary-green">
                  <Link to="/policy/cookie-preferences">
                    Cookies Preferences
                  </Link>
                </span>
                <span className="hover:text-primary-green">
                  <Link to="/policy/terms-of-service">Terms of Services</Link>
                </span>
              </div>
            </div>
            <div className="order-1 md:order-3 grid grid-cols-5 gap-2 mb-8 md:mt-2">
              <a
                href="https://www.facebook.com/WolburgBSL"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="text-3xl text-black bg-white rounded-full p-1" />
              </a>
              <a
                href="https://www.instagram.com/wolburg.agency/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-3xl text-black bg-white rounded-full p-1" />
              </a>
              <a
                href="https://twitter.com/WolburgBSL"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="text-3xl text-black bg-white rounded-full p-1" />
              </a>

              <a
                href="https://www.linkedin.com/company/wolburg/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="text-3xl text-black bg-white rounded-full p-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
