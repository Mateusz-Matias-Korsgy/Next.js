import React from "react";
import ExpectationCard from "./ExpectationCard";
import professionalImg from "./../../assets/images/customer-expectation/icon professional services.png";
import businessImg from "./../../assets/images/customer-expectation/iconbusinessservices.png";
import commImg from "./../../assets/images/customer-expectation/icon Communication.png";
import multiImg from "./../../assets/images/customer-expectation/icon Multimedia.png";

export default function TestimonialContainer() {
  const testimonies = [
    {
      icon: professionalImg,
      title: "Professional services",
      testimony:
        "Our professional services include business intelligence, data science, data analytics,and data mining.",
      link: "/services/professional",
      first: true,
    },
    {
      icon: businessImg,
      title: "Business services",
      testimony:
        "Among our array of business services are technical support, customer care, billing and collection, business templates, talent management, brand and ecommerce management .",
      link: "/services/business",
    },
    {
      icon: commImg,
      title: "Communication",
      testimony:
        "We help businesses reach their target market through effective marketing,social media management, digital marketing,and visual design solutions.",
      link: "/services/communication",
    },
    {
      icon: multiImg,
      title: "Multimedia",
      testimony:
        "You can broadcast and distribute your business content globally with WOLBURG multimedia solutions. We offer live streaming, broadcasting, and post-production services.",
      link: "/services/multimedia",
    },
  ];
  return (
    <>
      <div className="py-8">
        <h1 className="mb-16 text-2xl md:text-3xl tracking-wider font-sans leading-normal font-bold  text-center mt-5 bg-arrow bg-no-repeat bg-bottom pb-6 px-2 md:items-center">
          We strive to exceed <br /> our customers' expectations
        </h1>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:px-10 py-10 gap-6">
          {testimonies.map((testimony, idx) => {
            return (
              <ExpectationCard
                key={idx}
                title={testimony.title}
                testimony={testimony.testimony}
                icon={testimony.icon}
                first={testimony?.first}
                link={testimony?.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
