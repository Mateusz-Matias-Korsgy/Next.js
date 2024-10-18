import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SubscribeButton from "../Button/SubscribeButton";
import { MdOutlineNavigateNext } from "react-icons/md";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  return (
    <form className="my-4 md:my-8" onSubmit={(e) => handleSubmit(e)} >
      {status === "sending" && <div className="text-black">sending...</div>}
      {status === "error" && (
        <div
          className="text-red"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="text-green"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div className="flex">
        <div className="flex-auto w-3/5"> <input
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="rounded-full w-full px-3 py-2 bg-white  focus:border-primary-green"
          placeholder="Enter your email address"
          value={email}
          isrequired
        /></div>

        <div className="flex-auto w-1/5 mx-1 md:mx-4">
          <SubscribeButton
            label="subscribe"
            type="submit"
            value={email}
            className="bg-primary-green text-white rounded-full text-xs capitalize py-3"
            text={"Subscribe"}
            Icon={MdOutlineNavigateNext}
          /></div></div>

    </form>
  );
};

const SubscribeForm = (props) => {
  const postUrl = `https://korsgy.us21.list-manage.com/subscribe/post?u=2d256d44369997f6c90a8e0d9&id=d3d03e1671`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default SubscribeForm;
