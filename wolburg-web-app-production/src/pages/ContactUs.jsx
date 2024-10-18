import Button from "../components/Button/Button";
import { MdOutlineNavigateNext } from "react-icons/md";
import logoImgTwo from "./../assets/images/logo/wolburg_cor.png";
import Metatags from "../components/Metatags";
import { useEffect, useState } from "react";
import { usePostRequest } from "../mutation";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CheckMark from "../assets/images/Check.png";
import SubmissionModal from "../components/Modal/ContactFormSubmission";

const Contact = () => {
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
      <Metatags pageTitle="Wolburg  - Contact Us" description="Contact Us" />
      {showModal ? (
        <SubmissionModal
          message={
            "Your message has been sent. Our contact team will reachout soon"
          }
          icon={CheckMark}
          withComfirmation={false}
        />
      ) : null}
      <div className="flex container mx-auto shadow-lg mt-5 ">
        <div className="flex-1  mx-auto bg-white  ">
          <div className="  flex flex-col md:w-[50vw] mx-auto  ">
            <div className="lg:p-6 sm:p-12 w-full">
              <div className=" p-5 w-full">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p className="text-secondary-green text-base font-semibold">
                    Get in Touch
                  </p>
                  <h1 className="mb-8 text-2xl md:text-4xl capitalize font-bold ">
                    contact us
                  </h1>
                  <div className="mt-4 ">
                    <label className="block text-sm font-semibold">
                      Firstname
                      <small className="text-primary-red text-xs">*</small>
                    </label>
                    <input
                      type="text"
                      className={`p-3 rounded-lg border border-primary-grey w-full focus:shadow-lg !outline-none mt-2  ${
                        errors.firstname && "border-primary-red"
                      }`}
                      placeholder="Enter your firstname"
                      {...register("firstname", { required: true })}
                    />
                    {errors.firstname && (
                      <small className="text-primary-red text-xs">
                        Please enter your firstname
                      </small>
                    )}
                  </div>
                  <div className="mt-4 ">
                    <label className="block text-sm font-semibold">
                      Lastname
                      <small className="text-primary-red text-xs">*</small>
                    </label>
                    <input
                      type="text"
                      className={`p-3 rounded-lg border border-primary-grey w-full focus:shadow-lg !outline-none mt-2  ${
                        errors.lastname && "border-primary-red"
                      }`}
                      placeholder="Enter your lastname"
                      {...register("lastname", { required: true })}
                    />
                    {errors.lastname && (
                      <small className="text-primary-red text-xs">
                        Please enter your lastname
                      </small>
                    )}
                  </div>
                  <div className="mt-4 ">
                    <label className="block text-sm font-semibold">
                      Email<small className="text-primary-red text-xs">*</small>
                    </label>
                    <input
                      type="email"
                      className={`p-3 rounded-lg border border-primary-grey w-full focus:shadow-lg !outline-none mt-2  ${
                        errors.email && "border-primary-red"
                      }`}
                      placeholder="Enter your email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <small className="text-primary-red text-xs">
                        Please enter your email
                      </small>
                    )}
                  </div>

                  <div className="mt-4 ">
                    <label className="block text-sm font-semibold">
                      Phone number
                      <small className="text-primary-red text-xs">*</small>
                    </label>
                    <input
                      type="text"
                      className={`p-3 rounded-lg border border-primary-grey w-full focus:shadow-lg !outline-none mt-2  ${
                        errors.phone && "border-primary-red"
                      }`}
                      placeholder="Enter your phone number"
                      {...register("phone", { required: true })}
                    />
                    {errors.phone && (
                      <small className="text-primary-red text-xs">
                        Please enter your phone number
                      </small>
                    )}
                  </div>

                  <div className="mt-4 ">
                    <label className="block text-sm font-semibold">
                      Website
                    </label>
                    <input
                      type="text"
                      className={`p-3 rounded-lg border border-primary-grey w-full focus:shadow-lg !outline-none mt-2  ${
                        errors.email && "border-primary-red"
                      }`}
                      placeholder="https:// ..."
                      {...register("website")}
                    />
                  </div>
                  <div className="mt-4 ">
                    <label className="block text-sm mb-4 font-semibold">
                      Services you require:
                    </label>
                    <input
                      type="checkbox"
                      id="Business"
                      name="Business"
                      value="Business"
                      className="accent-primary-green h-4 w-4 shadow"
                      {...register("Business")}
                    />
                    <label htmlFor="Business" className="text-sm px-2">
                      Business services
                    </label>
                    <br />
                    <input
                      type="checkbox"
                      id="Professional"
                      name="Professional"
                      value="Professional"
                      className="accent-primary-green h-4 w-4 shadow"
                      {...register("Professional")}
                    />
                    <label htmlFor="Professional" className="text-sm  px-2">
                      Professional services
                    </label>
                    <br />
                    <input
                      type="checkbox"
                      id="Multimedia"
                      name="Multimedia"
                      value="Multimedia"
                      className="accent-primary-green h-4 w-4 shadow"
                      {...register("Multimedia")}
                    />
                    <label htmlFor="Multimedia" className="text-sm px-2">
                      Multimedia services
                    </label>{" "}
                    <br />
                    <input
                      type="checkbox"
                      id="Communication"
                      name="Communication"
                      value="Communication"
                      className="accent-primary-green h-4 w-4 shadow"
                      {...register("Communication")}
                    />
                    <label htmlFor="Communication" className="text-sm px-2">
                      Communication services
                    </label>
                  </div>

                  <div className="mt-4 ">
                    <label className="block text-sm font-semibold">
                      Quick overview of your project
                      <small className="text-primary-red text-xs">*</small>
                    </label>
                    <textarea
                      className={`p-3 rounded-lg border border-primary-grey w-full focus:shadow-lg !outline-none mt-2  ${
                        errors.message && "border-primary-red"
                      }`}
                      rows="10"
                      {...register("message", { required: true })}
                    />
                  </div>
                  {errors.message && (
                    <small className="text-primary-red text-xs">
                      Please provide an overview of the project
                    </small>
                  )}
                  <div className="space-y-2 mt-4 float-right">
                    <Button
                      type="submit"
                      value={isLoading ? "Sending..." : "Submit"}
                      Icon={MdOutlineNavigateNext}
                      className="bg-black rounded text-white mb-10 p-1"
                      processing={isLoading ? true : false}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="md:w-1/2 bg-bgContactUs bg-no-repeat bg-contain hidden md:block order-last my-24">
              <img className="p-6 hidden" src={logoImgTwo} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
