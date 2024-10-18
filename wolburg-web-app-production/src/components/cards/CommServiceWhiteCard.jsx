import React from "react";

const CommServiceWhiteCard = (prop) => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 p-4 md:p-12 mb-20 bg-white">
      <div className="">
        <div className=" justify-center w-content h-content gap-3 p-2 ">
          <h2 className="text-2xl md:text-3xl tracking-wider font-sans leading-normal font-bold mb-4 ">
            {prop.prop.title}
          </h2>
          <p className="text-sm md:text-base leading-loose md:leading-loose mb-5 font-medium">
            <span className="text-secondary-green">{prop.prop.text1}</span>{" "}
            {prop.prop.text2}
          </p>
        </div>
      </div>

      <div className="items-center justify-center p-8 md:p-12">
        <img
          src={prop.prop.img}
          className="w-full h-full "
          alt={prop.prop.alt}
        />
      </div>
    </div>
  );
};

export default CommServiceWhiteCard;
