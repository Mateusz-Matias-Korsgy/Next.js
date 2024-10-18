import ButtonWithIconOnLeft from "./../Button/ButtonWithIconOnLeft";
import { FaDollarSign } from "react-icons/fa";

const HeroWithImage = ({ header, title, subTitle, imageUrl }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 px-8 py-2 md:p-8 bg-secondary-grey w-full md:pb-0 md:px-24">
        <div className="p-4 md:pr-12 md:pt-24 md:pb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl text-black font-bold uppercase mb-6">
            {header}
          </h1>
          <h5 className="text-xl md:text-2xl tracking-wider leading-normal text-black font-bold uppercase mb-6">
            {title}
          </h5>
          <p className="text-sm md:text-base text-black pr-0 mb-8 md:mb-12 tracking-wider leading-normal text-center md:text-justify font-medium">
            {subTitle}
          </p>

          <a href="/pricing">
            <ButtonWithIconOnLeft
              className="bg-primary-green text-white mb-4 text-lg md:text-lg capitalize"
              value={"See Pricing"}
              Icon={FaDollarSign}
            />
          </a>
        </div>
        <div className="lg:pl-12 md:pt-24">
          <img src={imageUrl} className="lg:h-full lg:w-full h-fill w-fit md:max-w-xl lg:max-w-3xl object-contain lg:object-cover" alt="About Wolburg" />
        </div>
      </div>
    </>
  );
};

export default HeroWithImage;
