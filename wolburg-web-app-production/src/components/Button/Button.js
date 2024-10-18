import React from "react";

function Button({
  type = "button",
  className = "",
  processing,
  value,
  Icon,
  click,
}) {
  return (
    <button
      type={type}
      className={
        `inline-flex items-center shadow-md  px-2 py-4 bg-100458 font-semibold text-xs uppercase tracking-widest active:bg-100458  transition ease-in-out duration-150 ${
          processing && "opacity-25"
        } ` + className
      }
      disabled={processing}
      onClick={click}
    >
      <div className="ml-2 flex justify-between items-center text-white ">
        {value}
        {Icon ? <Icon /> : ""}
      </div>
    </button>
  );
}

export default Button;
