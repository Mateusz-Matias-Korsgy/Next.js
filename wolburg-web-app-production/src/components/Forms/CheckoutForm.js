import { PaymentElement } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import two from "../../assets/images/payments/02.svg";
import qs from "qs";
import axios from "axios";

export default function CheckoutForm({ total, customerInfo }) {
  const stripe = useStripe();
  const elements = useElements();
  let data = customerInfo

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return <>stripe did not load</>;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe
      .confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: `${window.location.origin}/payments/success/${data.email}`,
        },
      })
      .then(function (result) {

        if (result.error.message) {
          setIsError(true)
          setErrorMsg(result.error.message)
          setTimeout(() => setIsError(false), 5000)
        }

        setIsProcessing(false);
      });

    if (paymentIntent && paymentIntent.status === "succeeded") {
      // Handle successful payment here
      setIsSuccessful(true)

    }
    setIsProcessing(false);
  };

  useEffect(() => {
    console.log("here")
  }, [errorMsg])


  return (
    <div className="mb-4 border-t-2 md:border-t-0 border-primary-grey md:border-l-2 py-8 px-0 md:px-8 md:py-0">
      <div className="text-lg font-bold flex flex-row gap-5 mb-8">
        <img src={two} alt="one" />
        Credit Card Info{" "}
      </div>
      {/* alert */}

      {isError && (
        <div className="flex w-full shadow-lg rounded-lg mb-8">
          <div className="bg-primary-red py-4 px-4 rounded-l-lg flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="fill-current text-white" width="20" height="20"><path fill-rule="evenodd" d="M4.47.22A.75.75 0 015 0h6a.75.75 0 01.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 01-.22.53l-4.25 4.25A.75.75 0 0111 16H5a.75.75 0 01-.53-.22L.22 11.53A.75.75 0 010 11V5a.75.75 0 01.22-.53L4.47.22zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5H5.31zM8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"></path></svg>
          </div>
          <div class="px-4 py-4 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
            <div>{errorMsg}</div>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-700" viewBox="0 0 16 16" width="20" height="20"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
            </button>
          </div>
        </div>
      )}
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <button disabled={isProcessing || !stripe || !elements} id="submit">
          <span id="button-text">
            {isProcessing ? (
              <>
                <div className="flex justify-end pt-4 md:pt-12">
                  <button className="bg-black text-white p-2 px-4 rounded-lg">
                    Processing
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-end pt-4 md:pt-12">
                  {/* <button className="bg-gray-300 p-2 px-4 rounded-lg mr-2">
                    Cancel
                  </button> */}
                  <button className="bg-black text-white p-2 px-4 rounded-lg">
                    Pay €{total} Now
                  </button>
                </div>
              </>
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}
