import React from "react";
import Testimonial from "./Testimonial";

export default function TestimonialContainer() {
  const testimonies = [
    {
      title: "AMAZING JOB!",
      testimony: `“ Prior to discovering Wolburg, it was difficult for my organization to obtain precise data insights. The services provided by Wolburg have tremendously benefited my business. ”`,
      testimonial: "Jonathan Adams",
      starCount: 5,
    },
    {
      title: "HELPFUL!",
      testimony: `“ We are always pleased with Wolburg's attention to detail, their creative approach to customers, and their management of our business data. Their dedication is evident in all aspects of our revenue ”`,
      testimonial: "Sandy Moore ",
      starCount: 5,
    },
    {
      title: "EXPERTS!",
      testimony: `“ A challenging aspect of our business is customer service. Through Wolburg technical support and customer care services, our company has managed customer traffic smoothly. We hope to maintain our mutually beneficial relationship for a long time” `,
      testimonial: "Allen Richards ",
      starCount: 5,
    },
  ];
  return (
    <>
      <div className="pt-5" style={{ backgroundColor: "#F8F8FA" }}>
        <h4 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold text-center mt-5">
          What our clients say
        </h4>
        <p className="text-black text-sm leading-loose font-normal text-center  mt-1">
          Some kind words from our respected clients
        </p>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-10 py-10 gap-6 mb-24">
          {testimonies.map((testimony, idx) => {
            return (
              <Testimonial
                key={idx}
                title={testimony.title}
                testimony={testimony.testimony}
                testimonial={testimony.testimonial}
                starCount={testimony.starCount}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
