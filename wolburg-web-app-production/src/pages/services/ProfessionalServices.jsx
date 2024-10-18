import ProfessionalServicesHero from "../../components/hero/ProfessionalServicesHero";
import ServiceBusinessIntelligence from "../../components/cards/ServiceBusinessIntelligence";
import ServiceDataScience from "../../components/cards/ServiceDataScience";
import ServiceDataAnalytics from "../../components/cards/ServiceDataAnalytics";
import ServiceDataMinning from "../../components/cards/ServiceDataMinning";
import ProfessionalCardImageRight from "../../components/cards/ProfessionalCardImageRight";
import ProfessionalCardImageLeft from "../../components/cards/ProfessionalCardImageLeft";
// images
import BackgroundImg from "./../../assets/images/professsionalhero.png";
import data from "./../../assets/images/services/Picture data Science.png";
import businessIntelligence from "./../../assets/images/services/bussiness-inteligence.png";
import dataMining from "./../../assets/images/services/picture data mining.png";
import analytics from "./../../assets/images/services/picture data analytics.png";
import Metatags from "../../components/Metatags";
import { useEffect } from "react";

const ProfessionalServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Metatags
        pageTitle="Expert Professional Services | Wolburg Business Solutions"
        description="Experience the full potential of your business with Wolburg's professional services. Our experts support you in achieving your goals. contact us."
      />
      <ProfessionalServicesHero
        header={"Services"}
        title={"Professional Services"}
        subTitle={`The WOLBURG BUSINESS DIVISION (WBD) helps companies and professionals handle their critical daily business functions in an integrated and systematic approach. 
          Our multinational team of professionals provides our customers with the necessary support enabling them to focus on what they do best.`}
        imageUrl={BackgroundImg}
      />
      <div id="businessIntelligence" className="bg-secondary-grey">
        <ProfessionalCardImageRight
          image={businessIntelligence}
          title={"Business Intelligence"}
          init={"A technology-driven process"}
          subTitle={
            "for analyzing data and delivering actionable information helps business owners, leaders, managers, and professionals make informed decisions."
          }
        />
      </div>
      <div id="dataScience" className="bg-bg-rectangle bg-no-repeat">
        <ProfessionalCardImageLeft
          image={data}
          title={"Data Science"}
          init={"Developing and deploying scientific"}
          subTitle={
            " methods and systems to help our customers extract knowledge and insights from multiple data sources. scientific techniques, algorithms, and systems to assist businesses extract information, and insights from multiple data sources."
          }
        />
      </div>

      <div
        className="flex items-center justify-between md:-mt-24"
        style={{ backgroundColor: "#F8F8FA" }}
        id="dataAnalytics"
      >
        <div className="container relative flex lg:px-6 py-16 mx-auto ">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-3/5">
            <ServiceDataAnalytics />
          </div>
          <div className="relative hidden sm:block sm:w-1/3 lg:w-2/5 ml-10">
            <img
              src={analytics}
              alt="Professional Servicess"
              className="top-0 right-0 "
            />
          </div>
        </div>
      </div>
      <div className="container md:hidden -mt-28 w-[300px] flex mx-auto mb-20 md:py-16">
        <img src={analytics} alt="Professional services business - Wolburg" />
      </div>

      <div
        className="flex items-center justify-between overflow-hidden bg-bg-rectangle bg-right-top bg-no-repeat py-24"
        id="dataMining"
      >
        <div className="container relative flex lg:px-6 py-8 md:py-16 mx-auto">
          <div className="relative order-2 z-20 flex flex-col sm:w-2/3 lg:w-3/5 ">
            <ServiceDataMinning />
          </div>
          <div className="relative order-1 hidden sm:block sm:w-1/3 lg:w-2/5 ml-10">
            <img
              src={dataMining}
              alt="Professional services business - Wolburg"
              className="top-0 right-0 "
            />
          </div>
        </div>
      </div>
      <div className="container md:hidden -mt-28 w-[300px] flex mx-auto">
        <img src={dataMining} alt="Professional services business - Wolburg" />
      </div>
    </>
  );
};

export default ProfessionalServices;
