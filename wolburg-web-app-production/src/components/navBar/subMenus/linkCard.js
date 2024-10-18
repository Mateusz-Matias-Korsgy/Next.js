import React from "react";
import { HashLink } from "react-router-hash-link";

function linkCard({ link, icon, title, onUpdate }) {
  function handleClick() {
    onUpdate();
  }
  return (
    <>
      <div className="flex items-center" onClick={handleClick}>
        <div className="item-center">
          <img src={icon} alt="icon" />
        </div>
        <div className=" ml-2">
          <HashLink
            to={link}
            className="block text-xs hover:border-b-2 hover:border-primary-green hover:text-primary-green "
          >
            <h4 className="font-medium">{title}</h4>
          </HashLink>
        </div>
      </div>
    </>
  );
}
export default linkCard;
