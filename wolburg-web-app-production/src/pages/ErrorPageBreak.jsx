import Error404 from "../assets/images/404 Error.png";
import Metatags from "../components/Metatags";
import { Link } from "react-router-dom";

const ErrorPageBreak = () => {
  return (
    <>
      <Metatags pageTitle="Wolburg  - Error " description="Error" />
      <div
        className="
       
        items-center
        justify-center
        w-screen
        h-screen
        bg-primary-lightGrey
         mx-auto grid grid-flow-row-dense  grid-col-1 
      "
      >
        <div className="lg:px-40 lg:py-12 ">
          <div className="flex flex-col items-center">
            <img src={Error404} alt="Error 404" className="w-[400px]" />
            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              WE ARE SORRY, OUR APP CRASHED!
            </h6>
            <p className="text-center">
              we are working to resolve the situation
              <br />
              Please check back later.
            </p>
            <Link
              to={"/"}
              className="bg-primary-grey mt-5 text-black rounded p-4"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPageBreak;