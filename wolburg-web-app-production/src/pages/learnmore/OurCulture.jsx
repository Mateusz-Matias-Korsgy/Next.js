import React, { useEffect } from "react";
import CompanyCultureCard from "../../components/cards/CompanyCultureCard";
import LearnMoreCard from "../../components/cards/LearnMoreCard";
import touch from "../../assets/images/learnmore/touch.png";
import philosophy from "../../assets/images/learnmore/philosophy.png";
import passion from "../../assets/images/learnmore/passion.png";
import banner from "../../assets/images/learnmore/banner1.png";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurCulture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <CompanyCultureCard
        title="OUR CULTURE OF EXCELLENCE, DIVERSITY AND INCLUSION"
        subTitle={
          "We push the envelope. We are a global organization focused on promoting human growth, inclusivity, and diversity. Diversity and inclusion are the cornerstones of our culture."
        }
        imageUrl={banner}
        more={
          "Our DNA is rooted in supporting businesses to improve their operations and make a significant difference in their fields of expertise."
        }
      />
      <LearnMoreCard
        title="A DEFT TOUCH OF EXPERTISE AND PASSION"
        subTitle={
          "Our global team of experienced professionals and dedicated staff are formidable forces when it comes to what we do. Our pedigree ranks among the highest in the business of communication, bu- siness, technical, and customer services.Our commitment to meeting customer expectations and paying close attention to detail is reflected in all of the projects we take on."
        }
        imageUrl={touch}
        bgColor={"bg-primary-grey"}
        titleColor={"text-primary-blue"}
        textColor={"text-black"}
      />
      <LearnMoreCard
        title="PASSION AND INTEGRITY"
        subTitle={
          "As experts in back-office operation, and customer service management, we pride ourselves on being known for premium quality service within agreed upon timelines. At WOLBURG, we are passionate about what we do and committed to successfully performing every phase of your project, with our team of in-depth professionals with years of experience in their métiers."
        }
        imageUrl={passion}
        bgColor={"bg-primary-blue"}
        titleColor={"text-primary-blue"}
        textColor={"text-white"}
      />
      <LearnMoreCard
        title="OUR PHILOSOPHY"
        subTitle={
          "Our philosophy is hinged on delivering optimum quality service without compromising our high standards, in a cost-effective and timely tradition. We take pride in the perfection that webring to bear, which has earned us warm affections, accoladeand numerous referrals from satisfied clients.We are particularly concerned with offering effective business solutions that help clients achieve their business goals. Nothing makes us happier than receiving positive feedback for a job well done from our satisfied customers."
        }
        imageUrl={philosophy}
        bgColor={"bg-primary-grey"}
        titleColor={"text-black"}
        textColor={"text-black"}
      />
      <button className="p-8 font-bold md:-mt-8">
        <Link to={"/"}>
          <div className="flex justify-between items-center text-black text-right capitalize mt-4 font-bold hover:text-primary-green focus:bg-primary-green ">
            <FaAngleLeft /> Back
          </div>
        </Link>
      </button>
    </div>
  );
};

export default OurCulture;
