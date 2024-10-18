import React from "react";
import { HashLink } from "react-router-hash-link";
import LinkCard from "./linkCard";
import intelligence from "./../../../assets/images/icon/iconBusInteligence.png";
import business from "./../../../assets/images/icon/icon_Business_Templates.png";
import datascience from "./../../../assets/images/icon/iconDatScience.png";
import mining from "./../../../assets/images/icon/iconDataMining.png";

const AboutubMenuCard = ({ onUpdate }) => {
  function handleClick() {
    onUpdate();
  }
  return (
    <>
      <div className="absolute bg-white ">
        <div
          className="flex z-10 origin-top-right bg-white rounded shadow-lg"
          style={{ width: "20rem" }}
        >
          <div className="p-5 space-y-4">
            <LinkCard
              title="Business Intelligence"
              link="/services/professional#businessIntelligence"
              icon={business}
              onUpdate={handleClick}
            />

            <LinkCard
              title="Data Science "
              link="/services/professional#dataScience"
              icon={datascience}
              onUpdate={handleClick}
            />
            <LinkCard
              title="Data Analytics "
              link="/services/professional#dataAnalytics"
              icon={intelligence}
              onUpdate={handleClick}
            />
            <LinkCard
              title="Data Mining "
              link="/services/professional#dataMining"
              icon={mining}
              onUpdate={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutubMenuCard;
