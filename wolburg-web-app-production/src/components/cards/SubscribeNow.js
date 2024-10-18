import vectorOne from "./../../assets/images/subscribe/vectorlarge.png";
import vectorTwo from "./../../assets/images/subscribe/vectorsmall.png";
import SubscribeForm from "../Forms/SubscribeForm";

const SubscribeNow = () => {
  return (
    <>
      <div className="md:m-8 px-2 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2  p-6 rounded-lg shadow-lg text-primary-blue bg-subscribe-rgba">
          <div className="pl-2 md:pl-24 text-center md:text-left ">
            <h2 className="text-2xl font-bold mb-2 md:mt-6">
              Like our Services ? <br></br>Subscribe Now
            </h2>
            <p className="text-xs md:text-base md:text-sm text-gray-700 md:mt-6 font-semibold">
              Stay updated with our weekly news
            </p>
          </div>
          <div className="p-0 md:py-8 m-4 md:m-0 place-content-center col-span-3 ">
            <SubscribeForm />
          </div>
          <span className="static absolute left-8 -mt-6 ml-2">
            <img className="w-0 md:w-28" src={vectorOne} alt="vector wolburg" />
          </span>
        </div>
        <div className="relative">
          <img
            className="w-0 md:w-12 absolute right-0 bottom-0"
            src={vectorTwo}
            alt="vector wolburg"
          />
        </div>
      </div>
    </>
  );
};

export default SubscribeNow;
