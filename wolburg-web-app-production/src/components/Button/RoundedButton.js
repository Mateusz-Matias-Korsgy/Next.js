const Button = ({ type = "button", className = "", processing, value }) => {
  return (
    <button
      type={type}
      className={
        `inline-flex items-center px-4 py-2 bg-primary-green shadow-md hover:bg-secondary-green   border-transparent font-medium   text-xs text-white focus:bg-secondary-green font-medium   rounded-full  transition ease-in-out duration-150 ${
          processing && "opacity-25"
        } ` + className
      }
      disabled={processing}
    >
      <div className="ml-2 flex justify-between items-center ">{value}</div>
    </button>
  );
};
export default Button;
