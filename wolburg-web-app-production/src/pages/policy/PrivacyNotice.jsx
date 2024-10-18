import PolicyHero from "../../components/hero/PolicyHero";
import Metatags from "../../components/Metatags";
import { useEffect, useState } from "react";
import React from "react";
import parse from "html-react-parser";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PrivacyNotice = () => {
  const [detail, setDetail] = useState("");
  const [category, setCategory] = useState("privacynotice");
  const [loading, setLoading] = useState(false);

  const getContent = () => {
    setLoading(true);
    const url = `${process.env.REACT_APP_API_URL}/api/admin/get_policy?key=${category}`;
    try {
      const options = {
        method: "GET",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        url,
      };
      axios(options).then((item) => {
        setLoading(false);
        setDetail(item.data.data.details);
      });
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getContent();
  }, []);
  return (
    <>
      <Metatags pageTitle="Wolburg  - Our Policy  " description="Our Policy" />
      <PolicyHero category={"Our Policy"} />
      <h1 className="text-2xl md:text-3xl lg:text-5xl leading-loose font-bold my-8 text-center capitalize text-primary-blue">
        Our Policy
      </h1>
      <article className="text-sm md:text-base lg:text-lg leading-loose font-normal my-8">
        {loading ? (
          <div className="mx-8 md:mx-24">
            <p>
              <Skeleton count={12} />
            </p>
          </div>
        ) : (
          <div className="mx-4 md:mx-24">
            {" "}
            <p>{parse(`${detail}`)}</p>
          </div>
        )}
      </article>
    </>
  );
};

export default PrivacyNotice;
