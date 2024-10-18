import React from "react";

const CommServiceGrayCard = (prop) => {
  const Mark = () => (
    <svg
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5021 3.21973L7.53385 12.1873C6.86975 12.8516 5.79246 12.8516 5.12772 12.1873L0.498269 7.55753C-0.16609 6.8933 -0.16609 5.81588 0.498269 5.15153C1.16275 4.48704 2.23996 4.48704 2.90415 5.15127L6.33114 8.57831L14.0958 0.813604C14.7603 0.14912 15.8376 0.149623 16.5018 0.813604C17.166 1.47796 17.166 2.555 16.5021 3.21973Z"
        fill="#08AC04"
      />
    </svg>
  );

  return (
    <div className="grid grid-cols-1 gap-0 md:gap-2 md:grid-cols-2 bg-white mb-20 rounded-b-lg border-grey">
      <div className="items-center justify-center p-8 md:p-12">
        <div className="w-content h-content">
          <img
            src={prop.prop.img}
            className="w-4/5 h-4/5 "
            alt={prop.prop.alt}
          />
        </div>
      </div>
      <div className=" md:pt-24">
        <div className=" justify-center w-content h-content px-8 ">
          <h2 className="text-2xl md:text-3xl tracking-wider font-sans leading-normal font-bold mb-4">
            {prop.prop.title}
          </h2>
          <p className="text-sm md:text-base leading-loose md:leading-loose mb-5 font-medium">
            <span className=" text-secondary-green">{prop.prop.text1}</span>{" "}
            {prop.prop.text2}
          </p>

          {prop.prop.text3?.map((item, index) => (
            <ul className="list-none ">
              <li
                className=" flex flex-row items-center text-sm md:text-base leading-loose md:leading-loose mb-5 font-medium gap-2"
                key={item[5] + index}
              >
                <Mark />
                {item}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommServiceGrayCard;
