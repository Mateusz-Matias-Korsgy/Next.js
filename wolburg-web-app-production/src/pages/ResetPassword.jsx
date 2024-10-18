import { MdKeyboardArrowLeft } from "react-icons/md";
import facebookImg from "./../assets/images/login/facebook.png";
import googleImg from "./../assets/images/login/google1.png";
import logoImgTwo from "./../assets/images/logo/wolburg_cor.png";
import { Link } from "react-router-dom";
import Metatags from "../components/Metatags";
import { useEffect, useState } from "react";
import { usePostRequest } from "../mutation";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AllService from "../services/index";

const ResetPassword = () => {
  let user = sessionStorage.getItem("user");
  user = JSON.parse(user);
  if (user) window.location.href = "/";
  const [notVerify, setNotVerify] = useState(false);
  const [enableVerify, setEnableVerifyBtn] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [userEmail, setUserEmail] = useState();
  let navigate = useNavigate();
  const { createPost, isLoading, errorResp, success } =
    usePostRequest("api/resend_otp");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setUserEmail(data.email);
    sessionStorage.setItem("email", data.email);
    createPost(data);
  };
  const verifyCode = (data) => {
    setEnableVerifyBtn(true);
    const dataQ = {
      email: userEmail,
      verifyCode: data.verifyCode,
    };
    AllService.verifyUser(JSON.stringify(dataQ))
      .then((res) => {
        if (res.data.success) {
          setTimeout(
            Swal.fire({
              title: "Valid OTP",
              width: 600,
              padding: "3em",
              icon: "success",
              color: "#87AA62",
              background: "#fff ",
              confirmButtonColor: "#08AC04",
              backdrop: `
                  #87AA62
                  left top
                  no-repeat
                `,
            }),
            100000
          );
          sessionStorage.setItem("email", userEmail);
          navigate("/change-password");
        }
      })
      .catch((e) => {
        setEnableVerifyBtn(false);
        Swal.fire({
          title: "Error!",
          text: e.response.data.msg,
          icon: "error",
          confirmButtonText: "ok",
          confirmButtonColor: "#08AC04",
        });
      });
    return;
  };
  useEffect(() => {
    if (success) {
      setTimeout(
        Swal.fire({
          title: success.msg,
          width: 600,
          padding: "3em",
          icon: "success",
          color: "#08AC04",
          background: "#fff ",
          confirmButtonColor: "#08AC04",
          backdrop: `
              #08AC04
              left top
              no-repeat
            `,
        }),
        100000
      );
      setNotVerify(true);
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
      <Metatags pageTitle="Wolburg  - Login " description="login" />
      <div className="flex items-center container mx-auto  ">
        <div className="flex-1  mx-auto bg-white  ">
          <div className="  flex flex-col md:flex-row  ">
            <div className="md:w-1/2 bg-login bg-no-repeat bg-cover invisible md:visible order-last lg:order-first">
              <img className="p-6 hidden" src={logoImgTwo} alt="img" />
              {/* <p className="text-center p-6 item-center lg:mt-20 text-white ">
                WOLBURG seeks to provide integrated business support services to
                small and midsize enterprises to improve our customers'
                perf-ormance in Strategic Marketing & Social Media Management,
                Bu-siness Intelligence, Public Relations, Advertising, data
                science, and accounting & Finance Management.
              </p> */}
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="lg:w-4/5 md:w-full sm:w-full">
                <div className="float-right flex justify-between items-center lg:-mt-10 text-xs">
                  {/* <MdKeyboardArrowLeft /> */}
                  {/* <Link to="/"> Back To Home </Link> */}
                </div>
                <h1 className="mb-4 text-2xl uppercase font-bold text-center text-gray-700">
                  FORGET PASSWORD
                </h1>
                {notVerify ? (
                  <form onSubmit={handleSubmit(verifyCode)}>
                    <div>
                      <div className=" w-full flex items-center justify-center  ">
                        <div className="mt-4 text-sm lg:mr-20  mb-5 ">
                          <span className="ml-2">
                            Enter the OTP sent to : {userEmail?.slice(0, 3)}
                            ******* {userEmail?.slice(-9)}
                          </span>
                        </div>
                      </div>

                      <input
                        type="number"
                        className={`w-full px-4 py-2 text-sm border border-grey rounded-md focus:border-grey focus:outline-none ${
                          errors.verifyCode && "border-primary-red"
                        }`}
                        placeholder=""
                        {...register("verifyCode", { required: true })}
                      />
                      {errors.verifyCode && (
                        <small className="text-primary-red text-xs">
                          Please enter your OTP
                        </small>
                      )}
                    </div>
                    <div className="w-full flex items-center justify-center mt-10">
                      <button
                        className="block w-4/5 px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white bg-black rounded"
                        type="submit"
                        disabled={enableVerify}
                      >
                        {enableVerify ? "Verifying..." : "Verify"}
                      </button>
                    </div>
                    <div className=" w-full flex items-center justify-center  ">
                      <div className="mt-4 md:text-sm lg:mr-20  text-xs  ">
                        <span className="ml-2">
                          Dont recieve a code? <a href="">Re-send</a>
                        </span>
                      </div>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <div className="mt-2 text-sm lg:mr-20 mb-5 ">
                        <span className="">
                          <p className="text-center">
                            Enter the your email address
                          </p>
                        </span>
                      </div>
                      {/* <label className="block text-sm">Emails</label> */}
                      <input
                        type="email"
                        className={`w-full px-4 py-2 text-sm border border-grey rounded-md focus:border-grey focus:outline-none ${
                          errors.email && "border-primary-red"
                        }`}
                        placeholder=""
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <small className="text-primary-red text-xs">
                          Please enter your email
                        </small>
                      )}
                    </div>
                    <div className="w-full flex items-center justify-center mt-10">
                      <button
                        type="submit"
                        className="block w-4/5 px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white bg-black rounded"
                        disabled={isLoading ? true : false}
                      >
                        {isLoading ? "Loading..." : "Send OTP"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
