import MultimediaServicesHero from "../../components/hero/MultimediaServicesHero";
import BackgroundImg from "./../../assets/images/multimediaserviceshero.png";
import commMarktLine from "../../assets/images/services/communication/commMarktLine.svg";
import broadcasting1 from "../../assets/images/services/multimedia/broadcasting1.png";
import broadcasting2 from "../../assets/images/services/multimedia/broadcasting2.png";
import broadcasting3 from "../../assets/images/services/multimedia/broadcasting3.png";
import MultimediaCardWithBackground from "../../components/cards/MultimediaCardWithBackground";
import MultimediaCard from "../../components/cards/MultimediaCard";
import Metatags from "../../components/Metatags";
import { useEffect } from "react";

const MultimediaServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Metatags
        pageTitle="Expert Multimedia Services | Boost Your Online Presence"
        description="Get top-quality Multimedia services for your business today. Our experts offer a wide range of solutions to enhance your online presence. Contact us for more information."
      />
      <MultimediaServicesHero
        header={"Services"}
        title={"Multimedia Services"}
        subTitle={`The WOLBURG MULTIMEDIA DIVISION (WMD) provides engineering and technical solutions to assist companies with Broadcasting and Content Distribution needs. `}
        imageUrl={BackgroundImg}
      />
      <div className="grid grid-cols-1 gap-0 md:grid-cols-3 text-center p-4 md:p-8 m-6">
        <img
          src={commMarktLine}
          alt="wolburg line"
          className="md:pl-36 md:py-8"
        />
        <div>
          <h3 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold">
            Our Solutions
          </h3>
          <p>
            <span className="text-primary-green">M</span>ultimedia
          </p>
        </div>
        <img
          src={commMarktLine}
          alt="Multimedia services - Wolburg"
          className="rotate-180 md:pl-16 md:py-8"
        />
      </div>
      <div id="BroadcastingSolutions">
        <MultimediaCardWithBackground
          image={broadcasting1}
          title={"Broadcasting Solutions"}
          subTitle={
            " We help broadcasters reduce cost, increase revenue, and simplify operations by providing tailored solutions for DTH, IP Delivery, Cable Distribution, Channel Management, or OTT."
          }
        />
      </div>
      <div id="StreamingSolution">
        <MultimediaCard
          image={broadcasting2}
          title={"Streaming Solution"}
          subTitle={
            "We developed customized platforms that provide fast, consistent, scalable streaming video hosting service with intuitive tools and low bandwidth pricing, enabling our clients to build and grow their streaming while we concentrate on Infrastructure Management. "
          }
        />
      </div>
      <div id="PostProductionSolutions">
        <MultimediaCardWithBackground
          image={broadcasting3}
          title={"Post-production Solutions"}
          subTitle={
            "We extend our services to broadcasters and streaming clients with Integrated Postproduction services, including dubbing, mixing, and re-recording."
          }
        />
      </div>
    </>
  );
};

export default MultimediaServices;
