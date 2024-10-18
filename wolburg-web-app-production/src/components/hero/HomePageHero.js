import Button from "./../Button/Button";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import BackgroundImg from "./../../assets/images/hero.png";

const HomePageHero = () => {
  return (
    <>
      <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-4 px-8 py-4 md:p-12 w-full md:pb-0 md:px-16 md:bg-home-hero-bg bg-home-hero bg-right-bottom bg-no-repeat bg-contain md:bg-cover backdrop-opacity-0 backdrop-invert md:bg-black/0 bg-black/70 bg-blend-color-burn">
        <div className="p-4 lg:pt-20 md:pr-12 leading-8">
          <span className="md:pl-12">
            <h1
              style={{ lineHeight: "3.2rem" }}
              className="text-3xl md:text-4xl text-white md:text-black font-bold capitalize mb-8 md:mb-8"
            >
              Improve your business performance with Wolburg
            </h1>
            <p className="text-base leading-8 text-white md:font-normal md:text-black pr-0 md:pr-16 mb-8 md:mb-10">
              Our values are the core of our actions, they drive our decision
              making and shape who we aspire to be.
            </p>
          </span>
          <Link to="/contact-us">
            <Button
              className="bg-primary-green text-white mb-4 text-md md:text-xl capitalize shadow-xl"
              value={"Get in touch"}
              Icon={MdOutlineNavigateNext}
            />
          </Link>
        </div>
        <div className="h-8 md:h-full flex justify-center">
          <div className="hidden md:block pr-8">
            <img
              src={BackgroundImg}
              className="h-fill w-fit max-w-xl lg:max-w-3xl object-contain md:object-cover"
              alt="Welcome to Wolburg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageHero;
