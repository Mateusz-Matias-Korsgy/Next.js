import FaqHero from "../components/Banner/FaqHero";
import FaqContainer from "../components/Faq/FaqContainer";
import Metatags from "../components/Metatags";
import { useEffect, useState } from "react";
import { useGetRequest } from "../mutation";
import Swal from "sweetalert2";
import Spinner from "../components/Spinner";
import { FaSearch } from 'react-icons/fa';
const Faq = () => {
  const [faq, setFaq] = useState([]);
  const [searchKey, setSearchKey] = useState("")
  const { createPost, isLoading, errorResp, success } =
    useGetRequest("api/faq/get");
  useEffect(() => {
    createPost({});
  }, [createPost]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const search = (key) => {
  //   console.log(faq.question.includes(key))
  //   faq.map((item) => {
  //     const itz = item.question.includes(key) === true
  //     return console.log(itz);
  //   }
  //   )
  // }

  useEffect(() => {
    if (success) {
      console.log(success?.data)
      setFaq(success?.data);
    }
    if (errorResp) {
      if (errorResp.errorStatus === 403)
        Swal.fire({
          title: "Error!",
          text: errorResp.errorResponse,
          icon: "error",
          confirmButtonText: "ok",
          confirmButtonColor: "#08AC04",
        });
    }
  }, [success, errorResp]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <Metatags
        pageTitle="Wolburg  - FAQ "
        description="Most Frequently Asked question"
      />
      <div className="w-full bg-primary-grey rounded-lg-5 h-96 max-md:h-44 flex  p-5 flex-col justify-center items-center space-y-28 text-black">
        <h1 className="text-4xl font-extrabold text-secondary-blue max-lg:font-lg max-lg:text-4xl text-center leading-[100px] max-md:text-xl max-lg:-mt-2">
          Frequently <span className="text-primary-green">Asked Questions</span>
          <p className="text-sm text-black ">
            How can we help you
          </p>
          {/* <form onSubmit={handleSubmit}>
            <div className="flex ">
              <div className="relative w-full">
                <input
                  type="search"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full !outline-none"
                  placeholder="Search... "
                  value={searchKey}
                  onChange={(e) => setSearchKey(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  onClick={() => search(searchKey)}
                  className="absolute top-0 right-0 p-2.5 text-sm text-white bg-primary-green rounded-full "
                >
                  <FaSearch />
                </button>
              </div>
            </div>
          </form> */}
        </h1>
      </div>
      <div>{isLoading ? <Spinner /> : <FaqContainer data={faq} />}</div>
    </>
  );
};

export default Faq;
