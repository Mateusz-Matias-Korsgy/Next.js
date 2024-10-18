import React, { useEffect } from "react";
import CompanyCultureCard from "../../components/cards/CompanyCultureCard";
import LearnMoreCard from "../../components/cards/LearnMoreCard";
import budget from "../../assets/images/learnmore/budget1.png";
import budget2 from "../../assets/images/learnmore/budget2.png";
import budget3 from "../../assets/images/learnmore/budget3.png";
import banner from "../../assets/images/learnmore/banner2.png";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const BudgetFriendly = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <CompanyCultureCard
        title="BUDGET-FRIENDLY SERVICES"
        subTitle={
          "We offer different pricing packages for every business to meet their individual budgets. Our portfolio of services is open to small and medium companies.  There is no limit to the amount of budget we can handle."
        }
        imageUrl={banner}
        more={
          "We are capable of delivering within the deadline and replicating our success across a myriad of businesses."
        }
      />
      <LearnMoreCard
        title="WE DON'T MISS A DEADLINE"
        subTitle={
          "There is never a delay in our project delivery schedule. We’re in the business of delivering results on every project, and contributing to our clients' business growth. Each and every project we undertake is treated with equal importance, whether it is simple logo design or comprehensive management of your customer service department."
        }
        imageUrl={budget}
        bgColor={"bg-primary-grey"}
        titleColor={"text-primary-blue"}
        textColor={"text-black"}
      />
      <LearnMoreCard
        title="WE'LL GO THE EXTRA MILE"
        subTitle={
          "Our goal is to ensure that you get it right and that your business is sustained through dedicated and results-driven services. In this way, we will work closely with you on every project; providing you with options to choose from and amending until you are fully satisfied."
        }
        imageUrl={budget2}
        bgColor={"bg-primary-blue"}
        titleColor={"text-primary-blue"}
        textColor={"text-white"}
      />
      <LearnMoreCard
        title="THE RIGHT TOOLS FOR THE RIGHT JOBS"
        subTitle={
          "All aspects of our business operations are driven by high- quality assets. We deliver our services using the right tools, complying with industry standards, and following global best practices."
        }
        imageUrl={budget3}
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

export default BudgetFriendly;
