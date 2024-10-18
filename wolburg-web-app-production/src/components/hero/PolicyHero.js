const PolicyHero = ({ category }) => {
  return (
    <>
      <div className="bg-primary-grey p-8 md:p-24 text-center text-white text-xl md:text-5xl bg-policy-banner bg-contain bg-no-repeat bg-cover backdrop-opacity-0 backdrop-invert  bg-black/70 bg-blend-color-burn font-bold ">
        <p className="text-left text-xs md:text-md -p-24 mb-8 md:mb-8">
          Home / {category}
        </p>
        {/* <h2 className="p-2 md:p-4  ">
          <span className="border-dashed border-b-2 md:border-b-4 border-primary-green">
            {category}
          </span>
        </h2> */}
      </div>
    </>
  );
};

export default PolicyHero;
