import React, { useState } from "react";
import LinkCard from "./linkCard";

// images
import techSupport from "./../../../assets/images/icon/icon_Technical_Support_Customer_Care.png";
import billing from "./../../../assets/images/icon/icon_Billing_Collection_Services.png";
import ecommerce from "./../../../assets/images/icon/icon_E_Commerce_Management.png";
import brand from "./../../../assets/images/icon/icon_Brand_Management.png";
import talent from "./../../../assets/images/icon/icon_Talent_Management.png";
import template from "./../../../assets/images/icon/icon_Business_Templates.png";
import bookkeeping from "./../../../assets/images/icon/icon_Bookkeping_Services.png";

const AboutubMenuCard = ({ onUpdate }) => {
  function handleClick() {
    onUpdate();
  }
  return (
    <>
      <div className={"relative"}>
        <div
          className="flex z-10 origin-top-right bg-white rounded shadow-lg"
          style={{ width: "20rem" }}
        >
          <div className="p-5 space-y-4">
            <LinkCard
              title="Technical Support & Customer Care "
              link="/services/business#technicalSupport"
              icon={techSupport}
              onUpdate={handleClick}
            />
            <LinkCard
              title="Billing & Collection Services"
              link="/services/business#billingCollection"
              icon={billing}
              onUpdate={handleClick}
            />
            <LinkCard
              title="Talent Management"
              link="/services/business#talentManagement"
              icon={talent}
              onUpdate={handleClick}
            />
            <LinkCard
              title="Brand Management"
              link="/services/business#brandManagement"
              icon={brand}
              onUpdate={handleClick}
            />
            <LinkCard
              title="E Commerce Management"
              link="/services/business#eCommerceManagment"
              icon={ecommerce}
              onUpdate={handleClick}
            />
            <LinkCard
              title="Business Templates"
              link="/services/business#bussinessTemplate"
              icon={template}
              onUpdate={handleClick}
            />
            <LinkCard
              title="Bookkeeping Services"
              link="/services/business#bookkeeping"
              icon={bookkeeping}
              onUpdate={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutubMenuCard;
