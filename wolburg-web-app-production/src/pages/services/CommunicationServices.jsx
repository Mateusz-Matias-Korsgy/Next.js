import CommunicationServicesHero from "../../components/hero/CommunicationServicesHero";
import BackgroundImg from "./../../assets/images/communicationserviceshero.png";
import MarketingServiceCard from "../../components/cards/MarketingServiceCard";
import SocialMediaManagementCard from "../../components/cards/SocialMediaManagementCard";
import VisiualDesignCard from "../../components/cards/VisiualDesignCard";
import DigitalMarketingCard from "../../components/cards/DigitalMarketingCard";
import Metatags from "../../components/Metatags";
import { useEffect } from "react";

const CommunicationServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Metatags
        pageTitle="Expert Multimedia Services | Boost Your Online Presence"
        description="Get top-quality Multimedia services for your business today. Our experts offer a wide range of solutions to enhance your online presence. Contact us for more information."
      />
      <CommunicationServicesHero
        header={"Services"}
        title={"Communications Services"}
        subTitle={`The WOLBURG COMMUNICATIONS & MARKETING AGENCY's (WCM) mission is to help our clients communicate their ideas, concepts, and brand identity to their customers in the most professional, consistent, and relevant way while reducing communication and marketing costs.`}
        imageUrl={BackgroundImg}
      />

      <MarketingServiceCard />

      <SocialMediaManagementCard />

      <DigitalMarketingCard />

      <VisiualDesignCard />
    </>
  );
};

export default CommunicationServices;
