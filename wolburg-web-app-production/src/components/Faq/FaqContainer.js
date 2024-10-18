import React from "react";
import FaqCard from "./FaqCard";
// import Line from "./line";

export default function TestimonialContainer({data}) {
  let mid = Math.floor(data.length / 2);
  let firstHalf = data.slice(0, mid);
  let secondHalf = data.slice(mid);

  return (
    <>
      <div className="pt-5 container mx-auto grid grid-flow-row-dense  grid-col-1 md:grid-cols-2 ">
        <div className=" lg:px-10 px-10 py-10  gap-10 max-md:w-full">
          <div className="flex border-b-1 mb-5">
            {/* <p className="font-bold mt-5 text-xl md:text-xl">
              Wolburg and its Position in the Industry
            </p> */}
            {/* <Line color="black" otherStyle="mt-5" /> */}
          </div>
          {
            firstHalf.map( (data) => {
              return(
                <FaqCard
                  title={data?.question}
                  answer={data?.answer}
                />
              )
            })
          }
        </div>
        <div className=" lg:px-10 px-10 py-10 gap-6 max-md:w-full">
          <div className="flex">
            {/* <p className="font-bold mt-5 text-xl md:text-1xl">
              Training, Career Opportunities, and the WOLBURG Lifestyle
            </p> */}
            {/* <Line color="black" otherStyle="mt-5  " /> */}
          </div>
          {
            secondHalf.map( (data) => {
              return(
                <FaqCard
                  title={data?.question}
                  answer={data?.answer}
                />
              )
            })
          }
        </div>
      </div>
    </>
  );
}
