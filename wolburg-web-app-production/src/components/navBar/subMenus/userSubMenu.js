import React, { useState } from "react";
import LinkCard from "./linkCard";
import social from "./../../../assets/images/icon/icon_Social_Media_Management.png";

const AboutubMenuCard = ({ onUpdate }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const logout = () => {
    sessionStorage.removeItem("user");
    window.location.href = "/";
  };
  function handleClick() {
    onUpdate();
  }
  return (
    <>
      <div className="absolute bg-white ">
        <div
          className="flex z-10 origin-top-right bg-white rounded shadow-lg"
          style={{ width: "7rem" }}
        >
          <div className="py-4 space-y-4">
            <LinkCard
              title="Profile"
              link="/profile/details"
              icon={social}
              onUpdate={handleClick}
            />
            {user && (
              <button onClick={logout}>
                <LinkCard title="Logout" link="#" icon={social} />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutubMenuCard;
