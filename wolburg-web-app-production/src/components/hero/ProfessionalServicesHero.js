import ButtonWithIconOnLeft from "../Button/ButtonWithIconOnLeft";
import { FaDollarSign } from "react-icons/fa";

const ProfessionalServicesHero = ({ header, title, subTitle, imageUrl }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 px-8 py-2 md:p-8 w-full md:pb-0 md:px-24 mb-24 bg-professional-hero bg-contain bg-no-repeat ">
        <div className="p-4 md:pr-12 md:pt-24 md:pb-12 text-center md:text-left">
          <h1 className="text-base md:text-lg text-secondary-green font-bold uppercase mb-4">
            {header}
          </h1>
          <h5 className="text-3xl md:text-4xl leading-normal text-black font-bold capitalize mb-8 md:mb-8">
            {title}
          </h5>
          <p className="text-base md:text-lg tracking-wider leading-normal text-center md:text-justify font-medium mb-8">
            {subTitle}
          </p>

          <a href="/pricing">
            <ButtonWithIconOnLeft
              className="bg-primary-green text-white mb-4 text-lg md:text-base capitalize"
              value={"See Pricing"}
              Icon={FaDollarSign}
            />
          </a>
        </div>
        <div className="p-8 hidden md:block">
          <img
            src={imageUrl}
            className=" h-full w-full -z-40"
            alt="Wolburg multimedia services"
          />
        </div>
      </div>
    </>
  );
};

export default ProfessionalServicesHero;
