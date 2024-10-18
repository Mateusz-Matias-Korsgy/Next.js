import React from "react";

const Button = ({
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
        `inline-flex items-center shadow-md  px-4 py-2 bg-100458   font-semibold text-xs    uppercase tracking-widest active:bg-100458  transition ease-in-out duration-150 ${
          processing && "opacity-25"
        } ` + className
      }
      disabled={processing}
    >
      <div className="flex justify-between items-center ">
        {Icon ? <Icon className="text-secondary-green mr-2" /> : ""}
        {value}
      </div>
    </button>
  );
};

export default Button;
