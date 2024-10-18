import React, { useEffect, useState } from "react";
import one from "../../assets/images/payments/01.svg";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Forms/CheckoutForm";
import qs from "qs";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const PaymentProcessCard = () => {
  const user = useState(JSON.parse(sessionStorage.getItem("user")));
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [fullname, setFullname] = useState("");
  const [sState, setSstate] = useState("");
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [subTotal, setSubTotal] = useState(0);
  const [hide, setHide] = useState(false);
  const [info, setInfo] = useState({});

  const submit = (data) => {
    setInfo(data);
    if (info !== null) {
      setHide(!hide);
    }
  };

  const processPayments = (data) => {
    let newCart = cartItems;
    // remove the id from the cart
    newCart.forEach((object) => {
      delete object["id"];
    });

    var cartString = newCart.map(function (item) {
      return (
        item["title"] +
        " , €" +
        item["price"] +
        " , " +
        item["quantity"] +
        "x - "
      );
    });

    const formData = {
      amount: Number(subTotal),
      fullname: info.fullname,
      email: info.email,
      state: info.state,
      zipcode: info.zipcode,
      cart: cartString.toString(),
    };
    if (subTotal >= 1 && info !== {}) {
      const url = `${process.env.REACT_APP_API_URL}/api/payment/intent`;
      try {
        const options = {
          method: "POST",
          headers: { "content-type": "application/x-www-form-urlencoded" },
          data: qs.stringify(formData),
          url,
        };
        axios(options)
          .then(async (result) => {
            const paymentInfo = {
              amount: Number(subTotal),
              fullname: info.fullname,
              email: info.email,
              state: info.state,
              zipcode: info.zipcode,
              cart: cartItems,
            };
            //store the user information
            sessionStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));
            var client = await result.data.clientSecret;
            setClientSecret(client);
          })
          .catch(function (error) {
            console.log("Error Msg ax:", error);
          });
      } catch (error) {
        console.log("Error Msg:", error);
      }
    }
  };

  useEffect(() => {
    const getKey = async () => {
      fetch(`${process.env.REACT_APP_API_URL}/api/payment/getkey`).then(
        async (r) => {
          const { publishableKey } = await r.json();
          setStripePromise(loadStripe(publishableKey));
        }
      );
    };

    getKey();

    //get the user
    if (user) {
      setFullname(user?.firstName + " " + user?.lastName);
      setSstate(user?.city);
      setEmail(user?.email);
    }
    //get the totalamount
    const subtotal = cartItems?.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubTotal(subtotal);
  }, []);

  useEffect(() => {
    processPayments();
  }, [subTotal, info]);

  return (
    <>
      <div className="bg-white p-6 m-4 rounded-lg border-0.5 shadow-lg mb-[200px] capitalise ">
        <div className="flex flex-col pt-8 text-start">
          <h2 className="font-black text-base mb-3 leading-tight text-grey">
            02
          </h2>
          <h2 className="font-bold text-xl uppercase tracking-tight">
            PAYMENT PROCESS
          </h2>
          <hr className="border-[1px] mt-2 mb-8 w-[125px] bg-white items-center border-grey" />
        </div>{" "}
        {/* PAYMENT DETAILS FORM */}
        {hide ? (
          <>
            <div className="px-8 md:px-48">
              <>
                {clientSecret && stripePromise && (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm total={subTotal} customerInfo={info} />
                  </Elements>
                )}
              </>
            </div>
          </>
        ) : (
          <>
            {/* CARD FORM */}
            <div className="px-1 md:px-48">
              <form onSubmit={handleSubmit(submit)}>
                <div className="mb-4">
                  <div className="text-lg font-bold flex flex-row gap-5 mb-8">
                    <img src={one} alt="one" />
                    Billing Info
                  </div>
                  <div className="gap-3 mb-5 text-start">
                    <label>
                      Fullname{" "}
                      <span className="text-primary-red text-xs"> *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your fullname"
                      className={`p-3 rounded-lg border w-full focus:shadow-lg !outline-none ${
                        errors.fullname
                          ? "border-primary-red"
                          : "border-primary-grey "
                      }`}
                      {...register("fullname", {
                        required: "Fullname field is required",
                      })}
                    />
                    <p className="text-primary-red text-xs mt-2">
                      {errors.fullname?.message}
                    </p>
                  </div>
                  <div className="gap-3 mb-5 text-start">
                    <label>
                      Email <span className="text-primary-red text-xs"> *</span>
                    </label>
                    <input
                      placeholder="Enter your email"
                      type="email"
                      className={`p-3 rounded-lg border w-full focus:shadow-lg !outline-none ${
                        errors.email
                          ? "border-primary-red"
                          : "border-primary-grey "
                      }`}
                      {...register("email", {
                        required: "Email field is required",
                      })}
                    />
                    <p className="text-primary-red text-xs mt-2">
                      {errors.email?.message}
                    </p>
                  </div>
                  <div className="gap-3 mb-5 text-start">
                    <label>
                      Address{" "}
                      <span className="text-primary-red text-xs"> *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your address"
                      className={`p-3 rounded-lg border w-full focus:shadow-lg !outline-none ${
                        errors.address
                          ? "border-primary-red"
                          : "border-primary-grey "
                      }`}
                      {...register("address", {
                        required: "Address field is required",
                      })}
                    />
                    <p className="text-primary-red text-xs mt-2">
                      {errors.address?.message}
                    </p>
                  </div>
                  <div className="text-start">
                    <label>
                      State <span className="text-primary-red text-xs"> *</span>
                    </label>
                    <div className="flex flex-row gap-3 mb-5 ">
                      <input
                        type="text"
                        placeholder="State"
                        defaultValue={sState}
                        className={`p-3 rounded-lg border w-full focus:shadow-lg !outline-none ${
                          errors.state
                            ? "border-primary-red"
                            : "border-primary-grey "
                        }`}
                        {...register("state", {
                          required: "State field is required",
                        })}
                      />
                      <span className="text-primary-red text-xs mt-2">
                        {errors.state?.message}
                      </span>

                      <input
                        type="text"
                        placeholder="Zip Code"
                        className={`p-3 rounded-lg border w-full focus:shadow-lg !outline-none ${
                          errors.zipcode
                            ? "border-primary-red"
                            : "border-primary-grey "
                        }`}
                        {...register("zipcode", {
                          required: "Zipcode field is required",
                        })}
                      />

                      <span className="text-primary-red text-xs mt-2">
                        {errors.zipcode?.message}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-auto">
                  <Link to={"/payments/order"}>
                    <button className="bg-black p-2 px-4 rounded-lg mr-2 text-white">
                      Back
                    </button>
                  </Link>

                  <>
                    <button
                      className="bg-primary-green p-2 px-4 rounded-lg mr-2 text-white"
                      type="submit"
                    >
                      Confirm
                    </button>
                  </>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PaymentProcessCard;
