import HeroWithImage from "../components/hero/HeroWithImage";
import AboutUsCard from "../components/cards/AboutUsCard";
import AboutUsValue from "../components/cards/AboutUsValue.js";
import AboutUsVision from "../components/cards/AboutUsVision.js";
// IMAGES

import BackgroundImg from "./../assets/images/abouthero.png";
import Metatags from "../components/Metatags";

const About = () => {
  return (
    <>
      <Metatags
        pageTitle="Wolburg: Your Trusted Business Consulting Service Company"
        description="Wolburg is a trusted Business Consulting Service Company that can help your business achieve success. Contact us for expert advice and guidance."
      />
      <HeroWithImage
        header={"About"}
        title={"Improving Business Performance"}
        subTitle={`WOLBURG Business Services Limited is an Irish Multinational Business Consulting and Service company headquartered in Dublin, Ireland. WOLBURG is a wholly owned subsidiary of Duronn Paxton, expanding operations in Africa, Asia, Europe, and North America, providing cost-effective back office operational support to small and midsize companies worldwide.  `}
        imageUrl={BackgroundImg}
      />

      <AboutUsCard />
      <AboutUsValue />
      <AboutUsVision />
    </>
  );
};

export default About;
