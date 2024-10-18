import ProfileHero from "../../components/Banner/ProfileHero";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileButton from "../../components/Button/ProfileButton";
import { FaUserCircle } from "react-icons/fa";

const ProfileDetails = () => {
  let user = sessionStorage.getItem("user");
  user = JSON.parse(user);
  if (!user) window.location.href = "/login";
  return (
    <div className="mx-4">
      <ProfileHero />
      <div className="px-8 mb-8 rounded-b-lg md:px-24">
        <div className="flex flex-row gap-2">
          {user.image ? (
            <img
              src={user.image}
              alt="wolburg profile"
              className="w-20 h-20 -mt-8 z-40"
            />
          ) : (
            <FaUserCircle size={50} />
          )}
          <span>
            <p className="text-md font-bold">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-xs md:text-sm text-black">{user.title}</p>
            <span className="flex flex-row gap-2 text-xl md:text-3xl text-primary-green">
              {" "}
              <a
                href={user.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className=" bg-none rounded-full p-1" />
              </a>
              <a
                href={user.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className=" bg-none rounded-full p-1" />
              </a>
              <a
                href={user.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="bg-none rounded-full p-1" />
              </a>
            </span>
          </span>{" "}
        </div>
        <div className="text-right mb-24 -mt-6">
          {" "}
          <Link to={"/profile"}>
            <ProfileButton
              className="md:p-2 md:px-8 my-8 align-left float-right rounded-lg capitalize ml-4 md:visible invisible"
              value={"Edit Profile"}
              Icon={FaPen}
            />
            <FaPen className=" visible md:invisible text-primary-green text-right" />
          </Link>
        </div>{" "}
        <div className="mt-2 md:px-8 shadow-lg px-2 md:px-24 text-sm md:text-base font-medium rounded-lg px-4">
          <p className=" text-black font-bold my-8 text-center md:text-left">
            Details Information
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-8">
            <p>First Name : {user?.firstName} </p>
            <p>Last Name : {user?.lasttName} </p>
            <p>Birth Date : {user?.dateOfBirth}</p>
            <p>Email : {user?.email}</p>
            <p>Phone Number : {user?.phone}</p>
            <p>Country : {user?.country}</p>
            <p>City : {user?.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
