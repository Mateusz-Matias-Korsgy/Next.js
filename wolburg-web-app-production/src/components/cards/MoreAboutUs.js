import culture from "./../../assets/images/contactus/one.png";
import budget from "./../../assets/images/contactus/two.png";
import team from "./../../assets/images/contactus/three.png";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const MoreAboutUs = () => {
  return (
    <div className="m-4 md:m-8 py-12">
      <h1 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold text-center mb-24 text-black uppercase">
        more about us
      </h1>
      <div className=" grid grid-col-1 md:grid-cols-3 gap-2 md:gap-8">
        <div className="bg-white rounded-lg shadow-xl relative">
          <img
            src={culture}
            alt="Wolburg culture"
            className="w-full rounded-t-lg h-48"
          />
          <div className="p-4 m-2 leading-5 mb-4 ">
            <h4 className="font-bold text-base md:text-lg mb-2 -m-6 p-4 py-0  border-l-8 border-primary-green mt-2">
              OUR CULTURE OF EXCELLENCE, DIVERSITY AND INCLUSION
            </h4>
            <p className="text-black text-xs md:text-sm leading-loose font-medium md:leading-9 ">
              We push the envelope. We are a global organization focused on
              promoting human growth, inclusivity, and diversity. Diversity and
              inclusion are the cornerstones of our culture.
            </p>

            <Link to={"/learn-more/our-culture"}>
              <p className="md:absolute bottom-2 right-2 pt-8 text-base text-black text-right capitalize mt-4 font-semibold hover:text-primary-green focus:bg-primary-green">
                Learn More
                <IoIosArrowRoundForward
                  className="inline text-primary-green hover:text-black"
                  size={25}
                />
              </p>
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-xl relative">
          <img
            src={budget}
            alt="wolburg services"
            className="w-full rounded-t-lg md:rounded-t-none h-48"
          />
          <div className="p-4 m-2 leading-5 mb-4 ">
            <h4 className="font-bold text-base md:text-lg mb-2 -m-6 p-4 py-0 text-black capitalize border-l-8 border-primary-green mt-2">
              BUDGET-FRIENDLY SERVICES
            </h4>
            <p className="text-black text-xs md:text-sm leading-loose font-medium md:leading-9 ">
              We offer different pricing packages for every business to meet
              their individual budgets. Our portfolio of services is open to
              small and medium companies.
            </p>
            <Link to={"/learn-more/budget-friendly"}>
              <p className="md:absolute bottom-2 right-2 pt-8 text-base text-black text-right capitalize mt-4 font-semibold hover:text-primary-green focus:bg-primary-green">
                Learn More
                <IoIosArrowRoundForward
                  className="inline text-primary-green hover:text-black"
                  size={25}
                />
              </p>
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-xl relative">
          <img
            src={team}
            alt="Wolburg process"
            className="w-full rounded-t-lg md:rounded-t-none h-48"
          />
          <div className="p-4 m-2 leading-5 mb-4">
            <h4 className="font-bold text-base md:text-lg mb-2 -m-6 p-4 py-0 text-black capitalize border-l-8 border-primary-green mt-2">
              OUR TEAM AND PROCESSES
            </h4>
            <p className="text-black text-xs md:text-sm leading-loose font-medium md:leading-9">
              Our team consists of highly cerebral and innovative individuals
              who deliver impeccable professional, multimedia, technical, and
              customer services to businesses.
            </p>

            <Link to={"/learn-more/we-are-professionals"}>
              {" "}
              <p className="md:absolute bottom-2 right-2 pt-8 text-base text-black text-right capitalize mt-4 font-semibold hover:text-primary-green focus:bg-primary-green">
                Learn More
                <IoIosArrowRoundForward
                  className="inline text-primary-green hover:text-black"
                  size={25}
                />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutUs;
