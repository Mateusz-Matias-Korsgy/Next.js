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
        `inline-flex items-center px-4 py-2 bg-100458 shadow-md hover:bg-primary-blue  bg-secondary-blue   border-transparent font-medium   text-xs text-white focus:bg-secondary-blue  font-medium   rounded-full  transition ease-in-out duration-150 ${
          processing && "opacity-25"
        } ` + className
      }
      disabled={processing}
    >
      <div className="ml-2 flex justify-between items-center ">
        {value}
        <Icon />
      </div>
    </button>
  );
};
export default Button;
