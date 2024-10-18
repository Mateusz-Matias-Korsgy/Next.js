import Metatags from "../components/Metatags";
import { useEffect } from "react";
import { usePostRequest } from "../mutation";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ChangePassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let user = sessionStorage.getItem("user");
  user = JSON.parse(user);
  if (user) window.location.href = "/";
  let navigate = useNavigate();
  const { createPost, isLoading, errorResp, success } = usePostRequest(
    "api/change_password_no_auth"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      return Swal.fire({
        title: "Error!",
        text: "Password does not match!",
        icon: "error",
        confirmButtonText: "ok",
        confirmButtonColor: "#08AC04",
      });
    }
    data.email = sessionStorage.getItem("email");
    createPost(data);
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
      navigate("/login");
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
      <Metatags pageTitle="Wolburg  - Change Password" description="Sign up" />
      <div className="flex items-center container mx-auto ">
        <div className="flex-1  mx-auto bg-white  ">
          <div className="  flex flex-col md:flex-row  ">
            <div className="md:w-1/2 bg-login bg-no-repeat bg-cover invisible md:visible order-last lg:order-first backdrop-opacity-0 md:backdrop-opacity-10 backdrop-invert bg-black/0 md:bg-black/60 bg-blend-color-burn">
              <img
                className="p-6 sm:hidden  "
                src="./assets/images/logo/wolburg_cor.png"
                alt="img"
              />
              {/* <p className="text-center p-6 item-center lg:pt-20 lg:mt-20 text-white invisible md:visible leading-9">
                WOLBURG seeks to provide integrated business support services to
                small and midsize enterprises to improve our customers'
                perf-ormance in Strategic Marketing & Social Media Management,
                Bu-siness Intelligence, Public Relations, Advertising, data
                science, and accounting & Finance Management.
              </p> */}
            </div>
            <div className="flex items-center justify-center p-6 sm:p-6  md:w-1/2 mb-6">
              <div className="lg:w-4/5 md:w-full sm:w-full">
                <div className="float-right flex justify-between items-center lg:-mt-5 text-xs">
                  {/* <MdKeyboardArrowLeft /> */}
                  {/* <a href="/"> Back To Home </a> */}
                </div>
                <h1 className="mb-4 text-2xl font-bold text-center uppercase text-gray-700">
                  Change Password
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        errors.confirmPassword && "border-primary-red"
                      } `}
                      placeholder=""
                      type="password"
                      {...register("confirmPassword", { required: true })}
                    />
                    {errors.confirmPassword && (
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
                      {isLoading ? "Saving..." : "Change Password"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
