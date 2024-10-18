import Banner from "../../components/Banner/HeroBanner";
import CardsTemplate from "../../components/cards/CardsTemplate";
import React, { useEffect, useState } from "react";
import { useGetRequest } from "../../mutation";
import Swal from "sweetalert2";
import Metatags from "../../components/Metatags";
import { BiCategory } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaUndoAlt } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CareerHome = () => {
  const [initialJobs, setInitialJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [type, setType] = useState([]);
  const { createPost, isLoading, errorResp, success } =
    useGetRequest("api/career/get");
  useEffect(() => {
    window.scrollTo(0, 0);
    createPost({});
  }, [createPost]);

  useEffect(() => {
    if (success) {
      setJobs(success?.data);
      setInitialJobs(success?.data);
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

  //GET UNIQUE LOCATIONS AND JOBTYPE
  const uniqueLocations = () => {
    let uniqueItems = [];
    initialJobs.map((item) =>
      item.location.map((val) => uniqueItems.push(val))
    );
    let unique = [...new Set(uniqueItems)];
    setLocations(unique);
  };
  const uniqueJobType = () => {
    let uniqueItems = [];
    initialJobs.map((item) => item.jobType.map((val) => uniqueItems.push(val)));
    let unique = [...new Set(uniqueItems)];
    setType(unique);
  };

  const filteredJobs = initialJobs.filter((item) => {
    return item.jobType.includes(searchVal);
  });

  useEffect(() => {
    setJobs(filteredJobs);
  }, [searchVal]);

  const refresh = () => {
    setJobs(initialJobs);
  };

  useEffect(() => {
    uniqueLocations();
    uniqueJobType();
  }, [jobs]);

  const cards = jobs.map((data) => {
    return (
      <CardsTemplate
        data={data}
        key={data._id}
        styles="rounded-md bg-black text-justify text-white text-sm shadow shadow-primary-grey p-2 capitalize"
      />
    );
  });

  const DummyData = (
    <div className="px-2 py-4 max-w-sm shadow-md shadow-primary-grey">
      <div className="p-1 space-y-2">
        <div className="mx-8">
          <Skeleton width={80} height={40} />
        </div>

        <div className="space-y-4 mx-8">
          <span className="text-gray-500 text-sm md:text-base text-justify leading-9 ">
            <Skeleton height={10} />
          </span>
        </div>

        <div className="px-4">
          <Skeleton count={3.5} height={5} />
        </div>
        <div className="grid grid-cols-2 justify-items-center">
          <Skeleton height={10} width={40} circle={true} />
          <Skeleton height={10} width={40} circle={true} />
        </div>
        <Skeleton height={1} />
        <div className="grid justify-items-center">
          <Skeleton height={40} width={70} />
        </div>
      </div>
    </div>
  );
  return (
    <>
      <Metatags
        pageTitle="Job Openings in Wolburg | Join Our Team"
        description="Explore exciting job openings at Wolburg and join our team of talented professionals. Apply now to start your career with us and achieve your goals."
      />
      {/* <Banner starts */}
      <div className="w-full bg-bgCareer bg-cover h-96 max-md:h-44 flex flex-col justify-center items-center text-white">
        <div className="flex flex-col text-white mt-12 max-xl:-mt-2">
          <p className="font-semibold text-end text-xs md:text-xl mt-8">
            Search for Jobs
          </p>
          <h1 className="text-4xl md:text-7xl font-extrabold">Careers</h1>
        </div>
        <div className="bg-white rounded-lg shadow p-4 py-2 px-2 w-9/12 max-xl:w-11/12 mx-auto flex justify-between mt-10 items-center">
          {/* <div className="flex items-center rounded p-4 py-2 bg-primary-lightGrey justify-between max-sm:hidden">
            <FaUndoAlt size={20} className="text-black" />
            <input
              type="text"
              className="focus:border-grey text-black ml-2 p-2 bg-primary-lightGrey focus:ml-2 !outline-none"
              placeholder="Job Title, Any words..."
            />
          </div> */}
          <div className="flex items-center text-black rounded p-1 bg-primary-lightGrey justify-between w-3/4 mx-2">
            <BiCategory size={20} />
            <select
              className="focus:border-grey text-grey ml-2 p-2 bg-primary-lightGrey focus:ml-2 !outline-none"
              onChange={(e) => setSearchVal(e.target.value)}
            >
              <option>Categories</option>
              {type.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="flex items-center text-black rounded p-1 bg-primary-lightGrey justify-between w-2/4 mx-2">
            <MdOutlineLocationOn size={20} />
            <select
              className="focus:border-grey text-grey ml-4 p-2 bg-primary-lightGrey focus:ml-2 !outline-none"
              onChange={(e) => setSearchVal(e.target.value)}
            >
              <option>Locations</option>
              {locations.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div> */}
          <button
            className="bg-primary-green shadow shadow-primary-grey rounded p-2 md:w-32 w-12 h-12 border-none capitalize text-base max-lg:text-sm"
            onClick={refresh}
          >
            <FaUndoAlt
              size={20}
              className="text-white visible mx-auto"
              onClick={refresh}
            />
          </button>
        </div>
      </div>
      {/* <Banner ends */}
      {jobs.length > 0 ? (
        <>
          {" "}
          <>
            <div className="space-y-6 my-6">
              <p className="lg:text-4xl text-2xl font-semibold text-center max-lg:mt-16 ">
                Current Job Opening
              </p>
              <div className="w-2/6 lg:w-1/6 mx-auto border-b-2 border-b-primary-green"></div>
              {isLoading ? (
                <>
                  <div className="grid grid-col-1 md:grid-cols-4 gap-4 md:gap-6 px-8 md:px-16">
                    {DummyData}
                    {DummyData}
                    {DummyData}
                    {DummyData}
                  </div>
                </>
              ) : (
                <div className="grid grid-col-1 md:grid-cols-4 gap-4 md:gap-6 px-8 md:px-16">
                  {cards}
                </div>
              )}
            </div>
          </>
        </>
      ) : (
        <>
          <div className="space-y-6  h-full my-16">
            {isLoading ? (
              <>
                <div className="grid grid-col-1 md:grid-cols-4 gap-4 md:gap-6 px-8 md:px-16">
                  {DummyData}
                  {DummyData}
                  {DummyData}
                  {DummyData}
                </div>
              </>
            ) : (
              <p className="lg:text-2xl text-sm text-center max-lg:mt-16 ">
                No Available Jobs
              </p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CareerHome;
