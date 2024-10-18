import React from "react";
import CompanyCultureCard from "../../components/cards/CompanyCultureCard";
import LearnMoreCard from "../../components/cards/LearnMoreCard";
import prof from "../../assets/images/learnmore/prof1.png";
import prof2 from "../../assets/images/learnmore/prof2.png";
import prof3 from "../../assets/images/learnmore/prof3.png";
import banner from "../../assets/images/learnmore/banner3.png";
import { Link } from "react-router-dom";

import { FaAngleLeft } from "react-icons/fa";

const Professionals = () => {
  return (
    <div className="">
      <CompanyCultureCard
        title="WE ARE A TEAM OF PROFESSIONALS"
        subTitle={
          "Our team consists of highly cerebral and innovative individuals who deliver impeccable professional, multimedia, technical, and customer services to businesses. We bridge the gap between where you are and where you want to be, through commitment and results."
        }
        imageUrl={banner}
        more={
          "We are capable of delivering within the deadline and replicating our success across a myriad of businesses."
        }
      />
      <LearnMoreCard
        title="We execute discreetly"
        subTitle={
          "Our position is not to compete for recognition with our clients; rather, we are dedicated to providing back-office operations to meet their business needs."
        }
        imageUrl={prof}
        bgColor={"bg-primary-grey"}
        titleColor={"text-primary-blue"}
        textColor={"text-black"}
      />
      <LearnMoreCard
        title="We connect uniquely"
        subTitle={
          "Our goal is to ensure that you get it right and that your business is sustained through dedicated and results-driven services. In this way, we will work closely with you on every project; providing you with options to choose from and amending until you are fully satisfied."
        }
        imageUrl={prof2}
        bgColor={"bg-primary-blue"}
        titleColor={"text-primary-blue"}
        textColor={"text-white"}
      />
      <LearnMoreCard
        title="We measure consistently"
        subTitle={
          "We ensure we deliver on set objectives amidst multiple fast-paced executions by leveraging technology to track and measure performance throughout project stages."
        }
        imageUrl={prof3}
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

export default Professionals;
