import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import CartIcon from "../Button/cartButton";
import NavMenu from "./menu/navMenu";
import NavMenuDropDown from "./menu/navMenuDropDown";
import CartMenuDropDown from "./menu/cartMenuDropDown";
import UserMenuDropDown from "./menu/userMenuDropDown";
import Avatar from "./menu/Avatar";
import { BiAlignRight } from "react-icons/bi";
import AboutMenuCard from "./subMenus/aboutSubMenu";
import ProfessionalMenuCard from "./subMenus/professionalSubMenu";
import CommunicationSubMenu from "./subMenus/CommunicationSubMenu";
import MultimediaSubMenu from "./subMenus/MultimediaSubMenu";
import BusinnesSubMenu from "./subMenus/businnesSubMenu";
import LanguageSubMenu from "./subMenus/languageSubMenu";
import UserSubMenu from "./subMenus/userSubMenu";
import CartSubMenu from "./subMenus/CartSubMenu";

// IMAGES
import logo from "./../../assets/images/logo/wolburg_cor.png";

export default function Navbar({ loggedIn, user, username }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const cartItem = JSON.parse(localStorage.getItem("cartItems"))?.length;
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  const navMenu = [
    {
      text: "About",
      content: <AboutMenuCard onUpdate={closeMenu} />,
      url: "/about",
    },
    {
      text: "Professional",
      content: <ProfessionalMenuCard onUpdate={closeMenu} />,
      url: "/services/professional",
    },
    {
      text: "Business",
      content: <BusinnesSubMenu onUpdate={closeMenu} />,
      url: "/services/business",
    },
    {
      text: "Communications",
      content: <CommunicationSubMenu onUpdate={closeMenu} />,
      url: "/services/communication",
    },
    {
      text: "Multimedia",
      content: <MultimediaSubMenu onUpdate={closeMenu} />,
      url: "/services/multimedia",
    },
  ];
  return (
    <>
      <nav className="relative flex flex-wrap shadow-md items-center justify-between px-2 mb-1">
        <div className="container mx-auto flex flex-wrap items-center justify-between py-2 md:mx-8">
          <div className="w-full relative flex justify-between lg:w-auto  lg:static lg:block lg:justify-start ">
            <Link
              className="inline-block mr-2 ml-8  py-3 md:py-2 whitespace-nowrap"
              to="/"
            >

              <img src={logo} alt="wolburg logo" className="w-20 md:w-24" />

            </Link>
            <span className="flex flex-row">
              <Link
                className={
                  "basis-1/2 px-3 md:py-2 py-4 items-center text-sm md:text-md uppercase font-bold leading-snug inline md:hidden "
                }
                to="/payments/order"
              >
                <CartIcon itemCount={cartItem} />
              </Link>
              <button
                className="basis-1/2 cursor-pointer text-xl leading-none  border-transparent  bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <BiAlignRight size={30} />
              </button>
            </span>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:ml-auto" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {navMenu.map((menu, idx) => {
                return (
                  <NavMenuDropDown
                    key={idx}
                    text={menu.text}
                    content={menu.content}
                    url={menu.url}
                  />
                );
              })}

              <li className="nav-item" onClick={() => setNavbarOpen(!navbarOpen)}>
                <Link
                  className="px-2 md:px-0 flex items-center text-sm md:text-md hover:text-base font-medium leading-snug  hover:opacity-75"
                  to="/payments/order"
                >
                  <NavMenu text="Pricing" />
                </Link>
              </li>
              <li className="flex items-center leading-snug">
                <CartMenuDropDown
                  content={<CartSubMenu />}
                  url={"/payments/order"}
                />
              </li>
              <li className="flex items-center my-2 md:my-0" onClick={() => setNavbarOpen(!navbarOpen)}>
                <NavMenuDropDown
                  text="EN"
                  // content={<LanguageSubMenu />}
                  url={"#"}

                />
              </li>
              <li className="flex items-center leading-snug">
                {loggedIn ? (
                  <span className="flex items-center" onClick={() => setNavbarOpen(!navbarOpen)} >
                    <UserMenuDropDown
                      text={username}
                      content={<UserSubMenu />}
                      url={"#"}
                    />
                  </span>
                ) : (
                  <Link
                    to="/login"
                    className={
                      "text-white bg-primary-green shadow-md hover:bg-secondary-green focus:outline-none focus:ring-4 focus:bg-secondary-green  font-medium rounded-full text-sm px-4 py-1 text-center "
                    }

                  >
                    <div className="flex items-center" onClick={() => setNavbarOpen(!navbarOpen)}  >
                      Sign In&nbsp;

                    </div>
                  </Link>
                )}

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
