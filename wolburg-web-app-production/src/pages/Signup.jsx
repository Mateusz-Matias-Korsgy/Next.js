import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import Metatags from "../components/Metatags";
import { useState, useEffect } from "react";
import { usePostRequest } from "../mutation";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AllService from "../services/index";
import axios from "axios";
import qs from "qs";

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let user = sessionStorage.getItem("user");
  user = JSON.parse(user);
  if (user) window.location.href = "/";
  let navigate = useNavigate();
  const [enableVerify, setEnableVerifyBtn] = useState(false);
  const [userEmail, setUserEmail] = useState();
  const [notVerify, setNotVerify] = useState(false);
  const { createPost, isLoading, errorResp, success } =
    usePostRequest("api/signup");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.cpassword) {
      return Swal.fire({
        title: "Error!",
        text: "Password does not match!",
        icon: "error",
        confirmButtonText: "ok",
        confirmButtonColor: "#08AC04",
      });
    }
    createPost(data);
    setUserEmail(data.email);
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
              title: "Account Verified!",
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
          navigate("/login");
        }
      })
      .catch((e) => {
        Swal.fire({
          title: "Error!",
          text:
            "An error occured: " +
            e.response.data.msg +
            ", Please login and verify your account",
          icon: "error",
          confirmButtonText: "ok",
          confirmButtonColor: "#08AC04",
        });
        setEnableVerifyBtn(false);
        navigate("/login");
      });
    return;
  };

  useEffect(() => {
    if (success) {
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
  }, [success, errorResp]);

  //THE GOOGLE AUTH
  const googleAuth = (token) => {
    const formData = {
      token,
    };
    const url = `${process.env.REACT_APP_API_URL}/api/googleAuth`;
    try {
      const options = {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: qs.stringify(formData),
        url,
      };
      axios(options)
        .then(async (result) => {
          console.log(result);
          sessionStorage.setItem("authToken", result.data.token);
          sessionStorage.setItem("user", JSON.stringify(result.data.user));
          window.location.href = "/";
        })
        .catch(function (error) {
          console.log("Error Msg ax:", error);
        });
    } catch (error) {
      console.log("Error Msg:", error);
    }
  };

  const handleCallbackResponse = (response) => {
    googleAuth(response.credential);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
      context: "signup",
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <>
      <Metatags pageTitle="Wolburg  - Sign Up " description="Sign up" />
      <div className="flex items-center container mx-auto ">
        <div className="flex-1  mx-auto bg-white  ">
          <div className="  flex flex-col md:flex-row  ">
            <div className="md:w-1/2 bg-login bg-no-repeat bg-cover invisible md:visible order-last lg:order-first backdrop-opacity-0 md:backdrop-opacity-10 backdrop-invert bg-black/0 md:bg-black/60 bg-blend-color-burn">
              <img
                className="p-6 sm:hidden  "
                src="./assets/images/logo/wolburg_cor.png"
                alt="img"
              />
              <p className="text-center p-6 item-center lg:pt-20 lg:mt-20 text-white invisible md:visible leading-9">
                WOLBURG seeks to provide integrated business support services to
                small and midsize enterprises to improve our customers'
                perf-ormance in Strategic Marketing & Social Media Management,
                Bu-siness Intelligence, Public Relations, Advertising, data
                science, and accounting & Finance Management.
              </p>
            </div>
            <div className="flex items-center justify-center p-6 sm:p-6  md:w-1/2 mb-6">
              <div className="lg:w-4/5 md:w-full sm:w-full">
                <div className="float-right flex justify-between float-right items-center lg:-mt-5 text-xs">
                  <MdKeyboardArrowLeft />
                  <Link to={"/"}> Back To Home </Link>
                </div>
                <h1 className="mb-4 text-2xl font-bold text-center uppercase text-gray-700">
                  Sign Up
                </h1>
                {notVerify ? (
                  <form onSubmit={handleSubmit(verifyCode)}>
                    <div>
                      <label className="block text-sm">Verification Code</label>
                      <input
                        type="number"
                        className={`w-full px-4 py-2 text-sm border border-grey rounded-md focus:border-grey focus:outline-none ${
                          errors.verifyCode && "border-primary-red"
                        }`}
                        placeholder="Verification Code"
                        autocomplete="off"
                        {...register("verifyCode", { required: true })}
                      />
                      {errors.verifyCode && (
                        <small className="text-primary-red text-xs">
                          Please enter your verification code
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
                  </form>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <label className="block text-sm">Email Address</label>
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
                    <div>
                      <label className="block mt-4 text-sm">Password</label>
                      <input
                        className={`w-full px-4 py-2 text-sm border border-grey rounded-md focus:border-grey focus:outline-none ${
                          errors.password && "border-primary-red"
                        } `}
                        placeholder=""
                        type="password"
                        {...register("password", { required: true })}
                      />
                      {errors.password && (
                        <small className="text-primary-red text-xs">
                          Please enter your password
                        </small>
                      )}
                    </div>

                    <div>
                      <label className="block mt-4 text-sm">
                        Confirm Password
                      </label>
                      <input
                        className={`w-full px-4 py-2 text-sm border border-grey rounded-md focus:border-grey focus:outline-none ${
                          errors.cpassword && "border-primary-red"
                        } `}
                        placeholder=""
                        type="password"
                        {...register("cpassword", { required: true })}
                      />
                      {errors.cpassword && (
                        <small className="text-primary-red text-xs">
                          Please enter your password
                        </small>
                      )}
                    </div>

                    <div className="w-full flex items-center justify-center mt-10">
                      <button
                        className="block w-4/5 px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white bg-black rounded"
                        type="submit"
                        disabled={isLoading ? true : false}
                      >
                        {isLoading ? "Saving..." : "Sign Up"}
                      </button>
                    </div>
                  </form>
                )}
                <div className="w-full flex  items-center justify-center">
                  <div className=" block flex py-5 items-center w-4/5 ">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400">Or</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div id="signInDiv"></div>
                </div>

                <div className="float-right flex justify-between items-center mt-20 lg:mt-20 bottom-0 text-xs mt-5">
                  <p>
                    Do you have an account?{" "}
                    <Link to="/login" className="text-primary-green underline">
                      {" "}
                      Login{" "}
                    </Link>{" "}
                    here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
