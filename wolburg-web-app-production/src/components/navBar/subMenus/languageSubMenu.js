import React from "react";
import EN from "../../../assets/images/icon/EN.png";
import FR from "../../../assets/images/icon/FR.png";
import PT from "../../../assets/images/icon/Flag_of_Portugal.png";
import CN from "../../../assets/images/icon/CN.png";
import ESP from "../../../assets/images/icon/esp.png";
import LinkCard from "./linkCard";

function LanguageSubMenu() {
  return (
    <>
      <div className="absolute bg-white ">
        <div className="flex z-10 origin-top-right bg-white rounded shadow-lg lg:w-[5rem]">
          <div className="p-5 space-y-4">
            <LinkCard title="EN" link="#" icon={EN} className="mt-2" />
            <LinkCard title="PT" link="#" icon={PT} />
            <LinkCard title="FR" link="#" icon={FR} />
            <LinkCard title="ES" link="#" icon={ESP} />
            <LinkCard title="CN" link="#" icon={CN} />
          </div>
        </div>
      </div>
    </>
  );
}
export default LanguageSubMenu;
