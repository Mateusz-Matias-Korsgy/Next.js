import React from "react";
import LinkCard from "./linkCard";

import broadcast from "./../../../assets/images/icon/icon_Broadcasting_Solutions.png";
import streaming from "./../../../assets/images/icon/icon_Streaming_Solutions.png";
import prod from "./../../../assets/images/icon/iconPost_Production.png";

const MultimediaSubMenu = ({ onUpdate }) => {
  function handleClick() {
    onUpdate();
  }
  return (
    <>
      <div className="absolute bg-white">
        <div
          className="flex z-10 origin-top-right bg-white rounded shadow-lg"
          style={{ width: "18rem" }}
        >
          <div className="p-5 space-y-4">
            <LinkCard
              title="Broadcasting Solutions"
              link="/services/multimedia#BroadcastingSolutions"
              icon={broadcast}
              onUpdate={handleClick}
            />
            <LinkCard
              title="Streaming Solutions"
              link="/services/multimedia#StreamingSolution"
              icon={streaming}
              onUpdate={handleClick}
            />
            <LinkCard
              title="Post Production"
              link="/services/multimedia#PostProductionSolutions"
              icon={prod}
              onUpdate={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default MultimediaSubMenu;
