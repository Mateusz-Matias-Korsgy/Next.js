import React from "react";

const ButtonWithIconOnLeft = ({
  type = "button",
  className = "",
  processing,
  value,
  Icon,
}) => {
  return (
    <button
      type={type}
      className={
        `inline-flex items-center shadow-md px-4 py-2 bg-100458 font-semibold text-xs uppercase tracking-wide active:bg-100458 transition ease-in-out duration-150 ${processing && "opacity-25"
        } ` + className
      }
      disabled={processing}
    >
      <div className="ml-2 flex justify-between items-center ">
        <span className="pr-2"> {Icon ? <Icon /> : ""}</span>
        <span className="border-l-2 border-primary-grey pl-2 text-sm md:text-base">
          {" "}
          {value}
        </span>
      </div>
    </button>
  );
};

export default ButtonWithIconOnLeft;
