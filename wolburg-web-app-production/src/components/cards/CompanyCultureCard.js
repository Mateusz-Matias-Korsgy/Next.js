import React from "react";

const CompanyCultureCard = ({ title, subTitle, imageUrl, more }) => {
  return (
    <>
      <div className="text-black text-center px-8 md:px-24 py-8">
        <h2 className="capitalize mb-4 text-2xl md:text-3xl font-bold leading-9">
          {title}
        </h2>
        <p className="justify-content text-md md:text-xl leading-loose md:leading-loose mb-2 md:mb-4 font-medium text-center">
          {subTitle}
        </p>
        <div className="align-center p-8 md:mx-auto">
          <img src={imageUrl} alt="" className="mx-auto" />
        </div>
        <p className="justify-content text-md md:text-xl leading-loose md:leading-loose mt-2 md:mt-4 font-medium text-center">
          {more}
        </p>
      </div>
    </>
  );
};

export default CompanyCultureCard;
