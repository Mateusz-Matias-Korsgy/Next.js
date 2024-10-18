import React from "react";

const LearnMoreCard = ({
  title,
  imageUrl,
  subTitle,
  bgColor,
  titleColor,
  textColor,
}) => {
  return (
    <>
      <div className="p-8">
        <h2
          className={`uppercase mb-4 text-xl md:text-2xl font-bold leading-9 text-center ${titleColor}`}
        >
          {title}
        </h2>
        <div
          className={`${bgColor} md:p-8 rounded-lg md:rounded-2xl my-8 ${textColor}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
            <div className="align-center p-8 md:mx-auto">
              <img
                src={imageUrl}
                alt="Learn More About Wolburg"
                className="mx-auto rounded-lg"
              />
            </div>
            <div className="my-auto p-4">
              <p className="text-sm md:text-xl leading-loose md:leading-loose mb-8 md:mb-12 font-medium md:text-justify">
                {subTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMoreCard;
