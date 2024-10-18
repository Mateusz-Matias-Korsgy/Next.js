import React from "react";

function Button({
  type = "button",
  className = "",
  processing,
  text,
  Icon,
  click,
}) {
  return (
    <button
      type={type}
      className={
        `inline-flex items-center shadow-md px-2 py-2 font-semibold text-xs uppercase tracking-widest transition ease-in-out duration-150 ${
          processing && "opacity-25"
        } ` + className
      }
      disabled={processing}
      onClick={click}
    >
      <p className="ml-2 flex justify-between items-center text-xs">
        {text}
        {Icon ? <Icon /> : ""}
      </p>
    </button>
  );
}

export default Button;
