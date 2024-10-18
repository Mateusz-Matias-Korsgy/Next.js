import React, { useContext, useState } from "react";
import { MdOutlineNavigateNext, MdEuro } from "react-icons/md";
import { PricingLogo } from "../../icons";
import Button from "../Button/Button";
import CartContext from "../../Contexts/Cart/CartContext";
import { Link } from "react-router-dom";

const PricingCard = ({ header, body, price, id }) => {
  const [hide, setHide] = useState(true)
  const { addToCart, cartItems } = useContext(CartContext);
  const product = {
    title: header,
    price,
    id,
  };

  //truncate the text
  const textTruncate = (str, length, ending) => {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };


  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };
  return (
    <>
      <div class="w-full rounded overflow-hidden shadow-lg relative flex flex-col">
        <div className="flex items-center gap-6 px-4">
          <PricingLogo />
          <span className="font-bold">{header}</span>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-primary-green">
            <MdEuro size={27} />
          </span>{" "}
          <span className="text-2xl pr-2 font-bold">{price}</span>{" "}
          <span className="text-xs"> per hour</span>
        </div>
        <div class="px-6 py-4 h-full">
          <div className="w-full mx-auto">
            <p className="pb-8 text-sm font-medium leading-8 text-justify md:text-left">
              {hide ? <>{body.length < 220 ? <>{body}</> : <>{textTruncate(body, 220)} <span className="text-primary-green cursor-pointer" onClick={() => setHide(!hide)}>Show more</span></>}</> : <>{body} <span className="text-primary-green cursor-pointer" onClick={() => setHide(!hide)}>Show less</span></>}
            </p>
          </div>
        </div>
        <p className="border-t border-t-grey "></p>
        <div className="mx-auto">{!isInCart(product) ? (
          <Button
            Icon={MdOutlineNavigateNext}
            className="bg-black text-white capitalize text-xs items-center my-2"
            value="order now"
            click={() => addToCart(product)}
          />
        ) : (
          <>
            <Link to={"/payments/order"}>
              <Button
                Icon={MdOutlineNavigateNext}
                className="bg-primary-green text-white capitalize text-xs items-center my-2"
                value="In Cart"
              />
            </Link>
          </>
        )}
        </div>
      </div>
    </>
  );
};

export default PricingCard;

{/* / <div className="space-y-2 p-4 basis-80 max-w-sm rounded-lg shadow-md shadow-primary-grey mx-auto relative flex flex-col">
    //   <div className="flex items-center gap-6">
    //     <PricingLogo />
    //     <span className="font-bold">{header}</span>
    //   </div>
    //   <div className="flex justify-center items-center">
    //     <span className="text-primary-green">
    //       <MdEuro size={27} />
    //     </span>{" "}
    //     <span className="text-2xl pr-2 font-bold">{price}</span>{" "}
    //     <span className="text-xs"> per hour</span>
    //   </div>
    //   <div className="w-full mx-auto">
    //     <p className="pb-8 text-sm font-medium leading-8">
    //       {hide ? <>{body.length < 220 ? <>{body}</> : <>{textTruncate(body, 220)} <span className="text-primary-green cursor-pointer" onClick={() => setHide(!hide)}>Show more</span></>}</> : <>{body} <span className="text-primary-green cursor-pointer" onClick={() => setHide(!hide)}>Show less</span></>}
    //     </p>
    //   </div>
    //   <p className="border-t border-t-grey "></p>
    //   <div className=" mx-auto">{!isInCart(product) ? ( */}
    //     <Button
    //       Icon={MdOutlineNavigateNext}
    //       className="bg-black text-white capitalize text-xs items-center my-2"
    //       value="order now"
    //       click={() => addToCart(product)}
    //     />
    //   ) : (
    //     <>
    //       <Link to={"/payments/order"}>
    //         <Button
    //           Icon={MdOutlineNavigateNext}
    //           className="bg-primary-green text-white capitalize text-xs items-center my-2"
    //           value="In Cart"
    //         />
    //       </Link>
    //     </>
    //   )}



    //   </div>

    // </div>