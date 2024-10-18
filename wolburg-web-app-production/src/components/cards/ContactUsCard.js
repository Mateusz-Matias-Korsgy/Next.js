import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Button from "./../Button/Button";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useEffect, useState } from "react";
import { usePostRequest } from "../../mutation";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CheckMark from "../../assets/images/Check.png";
import SubmissionModal from "../Modal/ContactFormSubmission";

const ContactUsCard = () => {
  const [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();
  const { createPost, isLoading, errorResp, success } =
    usePostRequest("api/contact_us");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createPost(data);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    if (success) {
      setShowModal(true);
    }
    if (errorResp) {
      Swal.fire({
        title: "Error!",
        text: errorResp.errorResponse,
        icon: "error",
        confirmButtonText: "ok",
        confirmButtonColor: "#08AC04",
      });
    }
  }, [success, errorResp, navigate]);
  return (
    <>
      {showModal ? (
        <SubmissionModal
          message={
            "Your message has been sent. Our contact team will reachout soon"
          }
          icon={CheckMark}
          withComfirmation={false}
        />
      ) : (
        <div className=" md:m-8 px-2 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-8 rounded-lg shadow-lg bg-primary-blue bg-bgcontactvector bg-no-repeat">
            <div className="text-white">

              <h2 style={{ lineHeight: "3rem" }} className="text-2xl md:text-3xl tracking-wider leading-8 font-bold text-center md:text-left mb-16 md:px-8">
                Get in touch for any kind of help and Information.
              </h2>

              {/* Adjusting the grid and padding here */}
              <div className="grid grid-rows-3 gap-4 md:px-6 lg:gap-10">
                
                {/* Head Office Address */}
                <div className="flex">
                  <div className="flex-initial">
                    <FaMapMarkerAlt className="text-xl md:text-2xl text-white bg-grey-rgba rounded-lg p-4 w-12 h-12" />
                  </div>
                  <div className="flex-initial ml-4">
                    <p className="text-sm md:text-base font-bold mb-2 md:mb-0">Our head office address</p>
                    <p className="text-xs md:text-base">6, Fern Road, Sandyford Dublin 18</p>
                  </div>
                </div>

                {/* Call for Help */}
                <div className="flex">
                  <div className="flex-initial">
                    <FaPhoneAlt className="text-xl md:text-2xl text-white bg-grey-rgba rounded-lg p-4 w-12 h-12" />
                  </div>
                  <div className="flex-initial ml-4">
                    <p className="text-sm md:text-base font-bold mb-2 md:mb-0">Call for help</p>
                    <p className="text-xs md:text-base">6, Fern Road, Sandyford Dublin 18</p>
                  </div>
                </div>

                {/* Mail Us for Information */}
                <div className="flex">
                  <div className="flex-initial">
                    <FaEnvelope className="text-xl md:text-2xl text-white bg-grey-rgba rounded-lg p-4 w-12 h-12" />
                  </div>
                  <div className="flex-initial ml-4">
                    <p className="text-sm md:text-base font-bold mb-2 md:mb-0">Mail us for information</p>
                    <p className="text-xs md:text-base">Support@wolburg.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form Section */}
            <div className="text-white">
              <h2 className="text-base font-bold text-center tracking-wide leading-normal md:text-left mb-8 mt-4">
                Please contact us via the details below, or enter your request.
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:w-full md:flex md:gap-x-4 justify-between font-semibold">
                  
                  {/* First Name Input */}
                  <div className="mb-5 md:w-full">
                    <label htmlFor="firstname" className="block mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="Enter your first name"
                      {...register("firstname", { required: true })}
                      className={`border border-grey-rgba bg-input-grey-rgba w-full shadow p-3 rounded ${errors.firstname && "border-primary-red"}`}
                    />
                    {errors.firstname && (
                      <small className="text-primary-red text-xs">Please enter your first name</small>
                    )}
                  </div>

                  {/* Last Name Input */}
                  <div className="mb-5 order-last md:w-full">
                    <label htmlFor="LastName" className="block mb-2 text-gray-600">Last Name</label>
                    <input
                      type="text"
                      id="LastName"
                      name="LastName"
                      className={`border border-grey-rgba bg-input-grey-rgba w-full shadow p-3 rounded ${errors.lastname && "border-primary-red"}`}
                      placeholder="Enter your lastname"
                      {...register("lastname", { required: true })}
                    />
                    {errors.lastname && (
                      <small className="text-primary-red text-xs">Please enter your last name</small>
                    )}
                  </div>

                </div>

                {/* Email and Phone Number Section */}
                <div className="md:w-full md:flex md:gap-x-4 justify-between">
                  
                  {/* Email Input */}
                  <div className="mb-5 md:w-full">
                    <label htmlFor="Email" className="block mb-2">Email</label>
                    <input
                      type="email"
                      id="Email"
                      name="Email"
                      className={`border border-grey-rgba bg-input-grey-rgba w-full shadow p-3 rounded text-base ${errors.email && "border-primary-red"}`}
                      placeholder="Enter your email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <small className="text-primary-red text-xs">Please enter your email</small>
                    )}
                  </div>

                  {/* Phone Number Input */}
                  <div className="mb-5 order-last md:w-full">
                    <label htmlFor="subject" className="block mb-2 text-gray-600">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className={`border border-grey-rgba bg-input-grey-rgba w-full shadow p-3 rounded ${errors.subject && "border-primary-red"}`}
                      placeholder="Enter your Phone Number"
                      {...register("phone", { required: true })}
                    />
                    {errors.subject && (
                      <small className="text-primary-red text-xs">Please enter your Phone Number</small>
                    )}
                  </div>
                </div>

                {/* Message Section */}
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 text-gray-600">Comments</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message ..."
                    className={`border border-grey-rgba bg-input-grey-rgba w-full h-32 shadow p-3 rounded ${errors.message && "border-primary-red"}`}
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <small className="text-primary-red text-xs">Please enter your message</small>
                  )}
                </div>

                <Button
                  className="bg-primary-green text-white rounded-md float-right"
                  type="submit"
                  value={isLoading ? "Sending..." : "Send Now"}
                  Icon={MdOutlineNavigateNext}
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUsCard;
