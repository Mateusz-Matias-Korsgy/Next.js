import React from "react";
import { BiArrowToRight } from "react-icons/bi";
import { CgArrowRight } from "react-icons/cg";
import Button from "../Button/Button";

const ContactForm = () => {
  return (
    <form
      action="#"
      className="space-y-2 p-2 max-w-4xl mx-auto lg:px-12 max-md:max-w-sm bg-white  shadow shadow-primary-grey"
    >
      <div className="space-y-2">
        <span className="text-2xl font-bold block">Get in touch</span>
        <span className="text-4xl font-bold block">Contact Us</span>
      </div>
      <div className="space-y-2">
        <label htmlFor="fname" className="font-base text-lg block">
          Firstname
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="p-3 rounded-lg border border-primary-grey w-full"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="lname" className="font-base text-lg block">
          Lastname
        </label>
        <input
          type="text"
          placeholder="Enter your last name"
          className="p-3 rounded-lg border border-primary-grey w-full"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="font-base text-lg block">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="p-3 rounded-lg border border-primary-grey w-full"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="font-base text-lg block">
          Subject
        </label>
        <input
          type="text"
          placeholder="Enter your subject"
          className="p-3 rounded-lg border border-primary-grey w-full"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="font-base text-lg block">
          Message
        </label>
        <textarea className="w-full h-32 p-3 rounded-lg border border-primary-grey"></textarea>
      </div>
      <div className="space-y-2">
        <Button
          value="submit"
          type="button"
          className="bg-black text-white"
          Icon={CgArrowRight}
        />
      </div>
    </form>
  );
};

export default ContactForm;
