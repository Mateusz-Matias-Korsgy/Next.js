import React, { useState, useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import Button from "../Button/Button";
import ContactFormSubmission from "../Modal/ContactFormSubmission";
import CheckMark from "../../assets/images/Check.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { usePutRequestWithFile } from "../../mutation";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import parse from "html-react-parser";

const ApplyForm = ({ data, id }) => {
  const [showModal, setShowModal] = useState(false);
  const user = JSON.parse(sessionStorage.getItem('user'));
  const { createPost, isLoading, errorResp, success } = usePutRequestWithFile(
    `api/career/apply/${id}`
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sumitFrom = async (data) => {
    let file = data.cvUpload[0];
    console.log(file);
    if (file.size > 5242880) {
      Swal.fire({
        title: "Error!",
        text: "File is larger than 5MB",
        icon: "error",
        confirmButtonText: "ok",
        confirmButtonColor: "#08AC04",
      });
    } else {
      delete data.cvUpload;
      const newData = { ...data, cvUpload: file };
      createPost(newData);
    }

  };

  useEffect(() => {
    if (success) {
      setShowModal(true);
    }
    if (errorResp) {
      setShowModal(false);
      console.log(errorResp);
      Swal.fire({
        title: "Error!",
        text: errorResp.errorResponse,
        icon: "error",
        confirmButtonText: "ok",
        confirmButtonColor: "#08AC04",
      });
    }
  }, [success, errorResp]);
  return (
    <>
      {showModal ? (
        <ContactFormSubmission
          message={"Your Application has been received"}
          icon={CheckMark}
          withComfirmation={false}
        />
      ) : null}
      <form
        onSubmit={handleSubmit(sumitFrom)}
        method="POST"
        encType="multipart/form-data"
        className="space-y-2 p-10 max-w-5xl pb-20 mx-2 lg:mx-auto bg-primary-lightGrey rounded-lg shadow shadow-primary-grey -mt-16 mb-12 lg:z-50"
      >
        <div className="space-y-2 mb-5">
          <div className="space-y-4  mb-5">
            <div className="flex justify-between">
              <span className="text-2xl md:text-3xl font-medium mb-4 md:mb-8 ">
                {!data ? <Skeleton /> : <>{data.title}</>}
              </span>
            </div>
            <span className="text-xs md:text-sm font-medium mb-8 leading-normal">
              {!data ? <Skeleton /> : <>{parse(`${data.description}`)}</>}
            </span>
            <span className="block text-xs font-medium">
              Job Type:{" "}
              {!data.jobType ? (
                <Skeleton />
              ) : (
                <>
                  {data.jobType.map((item, index) => (
                    <span key={index} className="text-primary-green px-2">
                      {item} ,
                    </span>
                  ))}
                </>
              )}
            </span>
            <span className="block text-xs font-medium">
              Location:{" "}
              {!data.location ? (
                <Skeleton />
              ) : (
                <>
                  {data.location.map((item, index) => (
                    <span key={index} className="text-primary-green px-2">
                      {item} ,
                    </span>
                  ))}
                </>
              )}
            </span>
          </div>
          <span className="text-1xl font-medium block ">
            Complete This form:
          </span>
        </div>
        <div className="space-y-2 mt-20">
          <label htmlFor="name" className="font-medium text-sm block">
            Fullname
            <span className="text-primary-red text-xs"> *</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className={`p-3 rounded-lg border w-full focus:shadow-lg !outline-none ${errors.fullname ? "border-primary-red" : "border-primary-grey "
              }`}
            {...register("fullname", { required: true })}
            defaultValue={!user ? "" : user?.firstName + " " + user?.lastName}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="font-medium text-sm block">
            Email
            <span className="text-primary-red text-xs"> *</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className={`p-3 rounded-lg border w-full focus:shadow-lg !outline-none ${errors.email ? "border-primary-red" : "border-primary-grey "
              } `}
            {...register("email", { required: true })}
            defaultValue={user?.email}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="font-medium text-sm block">
            Phone
            <span className="text-primary-red text-xs"> *</span>
          </label>
          <input
            type="text"
            placeholder="Enter phone number"
            className={`p-3 rounded-lg border  w-full focus:shadow-lg !outline-none ${errors.phone ? "border-primary-red" : "border-primary-grey "
              } `}
            {...register("phone", { required: true })}
            defaultValue={user?.email === user?.phone ? "" : user?.phone}
          />
        </div>
        {data.moreQuestions?.map((item, index) => (
          <div className="space-y-2" key={index}>
            <label htmlFor={item} className="font-medium text-sm block">
              {item}
              <span className="text-primary-red text-xs"> *</span>
            </label>
            <input
              type="text"
              placeholder="Submit response"
              className={`p-3 rounded-lg border w-full focus:shadow-lg !outline-none ${errors[`qtn${index}`]
                ? "border-primary-red"
                : "border-primary-grey "
                } `}
              {...register(`qtn${index}`, { required: true })}
            />
          </div>
        ))}
        <div className="space-y-2">
          <label htmlFor="message" className="font-medium text-sm block">
            Cover Letter
            <span className="text-primary-red text-xs"> *</span>
          </label>
          <textarea
            className={`w-full h-32 p-3 rounded-lg ${errors.coverLetter ? "border-primary-red" : "border-primary-grey "
              } !outline-none `}
            {...register("coverLetter", { required: true })}
          ></textarea>
        </div>
        <div className="space-y-2">
          <label className="block mb-2 text-sm font-medium " htmlFor="file_input">
            Upload CV/Resume
            <span className="text-primary-red text-xs"> *</span>
          </label>
          <input
            className={`block w-full text-sm text-primary-black p-2 border ${errors.cvUpload ? "border-primary-grey " : "border-primary-grey "
              } cursor-pointer bg-primary-lightGrey `}
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            {...register("cvUpload", { required: true })}
            accept=".pdf, .docx, .doc"
          />
          <p
            className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            <span className=" text-xs font-bold">
              {" "}
              Allowed Type(s): .pdf, .docx, .doc
            </span>
            <p className="text-xs mb-4 font-bold">
              {" "}
              Max Size: 5MB
            </p>
          </p>
        </div>
        <div className={`mt-4 lg:mr-20 text-sm font-medium  `}>
          <input
            type="checkbox"
            {...register("policyAccepted", { required: true })}
          />
          <span className="ml-2 text-xs">
            By using this form you agree with the storage and handling of your
            data by this website.
            <span className="text-primary-red text-xs"> *</span>
          </span>
        </div>
        <div className="space-y-2 float-right">
          <Button
            type="submit"
            value={isLoading ? "Submiting" : "Submit"}
            Icon={MdOutlineNavigateNext}
            className="bg-primary-green rounded text-white mb-10 p-1"
            processing={isLoading ? true : false}
          />
        </div>
      </form>
    </>
  );
};

export default ApplyForm;
