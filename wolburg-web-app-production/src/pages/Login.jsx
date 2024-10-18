import { MdKeyboardArrowLeft } from "react-icons/md";
import logoImgTwo from "./../assets/images/logo/wolburg_cor.png";
import { Link } from "react-router-dom";
import Metatags from "../components/Metatags";
import { useEffect, useState } from "react";
import { usePostRequest } from "../mutation";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AllService from "../services/index";
import axios from "axios";
import qs from "qs";

const Login = () => {
  let user = sessionStorage.getItem("user");
  user = JSON.parse(user);
  if (user) window.location.href = "/";
  const [notVerify, setNotVerify] = useState(false);
  const [enableVerify, setEnableVerifyBtn] = useState(false);
  const [userEmail, setUserEmail] = useState();
  let navigate = useNavigate();
  const { createPost, isLoading, errorResp, success } =
    usePostRequest("api/login");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setUserEmail(data.email);
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
              title: "Account Verified!",
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
          navigate("/");
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
      sessionStorage.setItem("authToken", success.token);
      sessionStorage.setItem("user", JSON.stringify(success.user));
      if (!success.user.emailVerified) {
        return setNotVerify(true);
      }
      setTimeout(
        Swal.fire({
          title: "Login Successful!",
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
      window.location.href = "/";
    }
    if (errorResp) {
      if (errorResp.errorStatus === 403) setNotVerify(true);
      Swal.fire({
        title: "Error!",
        text: errorResp.errorResponse,
        icon: "error",
        confirmButtonText: "ok",
        confirmButtonColor: "#08AC04",
      });
    }
  }, [success, errorResp, navigate]);

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
      <Metatags pageTitle="Wolburg  - Login " description="login" />
      <div className="flex items-center container mx-auto  ">
        <div className="flex-1  mx-auto bg-white  ">
          <div className="  flex flex-col md:flex-row  ">
            <div className="md:w-1/2 bg-login bg-no-repeat bg-cover invisible md:visible order-last lg:order-first backdrop-opacity-0 md:backdrop-opacity-10 backdrop-invert bg-black/0 md:bg-black/60 bg-blend-color-burn">
              <img className="p-6 hidden" src={logoImgTwo} alt="img" />
              <p className="text-center p-6 item-center lg:mt-20 text-white leading-9">
                WOLBURG seeks to provide integrated business support services to
                small and midsize enterprises to improve our customers'
                performance in Strategic Marketing & Social Media Management,
                Business Intelligence, Public Relations, Advertising, data
                science, and accounting & Finance Management.
              </p>
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="lg:w-4/5 md:w-full sm:w-full">
                <div className="float-right flex justify-between items-center lg:-mt-10 text-xs">
                  <MdKeyboardArrowLeft />
                  <Link to="/"> Back To Home </Link>
                </div>
                <h1 className="mb-4 text-2xl uppercase font-bold text-center text-gray-700">
                  Login
                </h1>
                {notVerify ? (
                  <form onSubmit={handleSubmit(verifyCode)}>
                    <div>
                      <label className="block text-sm">Verification Code</label>
                      <input
                        type="text"
                        className={`w-full px-4 py-2 text-sm border border-grey rounded-md focus:border-grey focus:outline-none ${
                          errors.verifyCode && "border-primary-red"
                        }`}
                        placeholder=""
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
                      <label className="block text-sm">Email</label>
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

                    <div className="flex w-full  ">
                      <div className="mt-4 md:text-sm lg:mr-8 text-xs">
                        <input type="checkbox" />
                        <span className="ml-2">Keep me logged In</span>
                      </div>
                      <div className="mt-4 lg:ml-8 text-xs ml-4 ">
                        <Link className="underline " to="/forget-password">
                          Forgot your password?
                        </Link>
                      </div>
                    </div>

                    <div className="w-full flex items-center justify-center mt-10">
                      <button
                        type="submit"
                        className="block w-4/5 px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white bg-black rounded"
                        disabled={isLoading ? true : false}
                      >
                        {isLoading ? "Loading..." : "Login"}
                      </button>
                    </div>
                    <div className="w-full flex  items-center justify-center">
                      <div className=" flex py-5 items-center w-4/5 ">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="flex-shrink mx-4 text-gray-400">
                          Or
                        </span>
                        <div className="flex-grow border-t border-gray-400"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <div id="signInDiv"></div>
                    </div>
                    <div className="float-right flex justify-between items-center mt-20 lg:mt-20 bottom-0 text-xs">
                      <p>
                        Do you have an account?{" "}
                        <Link
                          to="/signup"
                          className="text-primary-green underline"
                        >
                          {" "}
                          Sign Up{" "}
                        </Link>{" "}
                        here
                      </p>
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

export default Login;
