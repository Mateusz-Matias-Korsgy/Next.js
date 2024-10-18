import React from "react";
import LinkCard from "./linkCard";
import visual from "./../../../assets/images/icon/icon_Visual_Design.png";
import digital from "./../../../assets/images/icon/icon_Digital_Marketing.png";
import social from "./../../../assets/images/icon/icon_Social_Media_Management.png";
import marketing from "./../../../assets/images/icon/icon_Marketing_Services.png";

const CommunicationSubMenu = ({ onUpdate }) => {
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
              title="Marketing Services "
              link="/services/communication#marketingService"
              icon={marketing}
              onUpdate={handleClick}
            />
            <LinkCard
              title="Social Media Management"
              link="/services/communication#socialMediaManagement"
              icon={social}
              onUpdate={handleClick}
            />
            <LinkCard
              title=" Digital Marketing"
              link="/services/communication#digitalMarketing"
              icon={digital}
              onUpdate={handleClick}
            />
            <LinkCard
              title="Visual Design"
              link="/services/communication#visualDesign"
              icon={visual}
              onUpdate={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CommunicationSubMenu;
