import PolicyHero from "../../components/hero/PolicyHero";
import Metatags from "../../components/Metatags";
import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import React from "react";
import parse from "html-react-parser";
import qs from "qs";
import axios from "axios";

const Demo = () => {
  const [detail, setDetail] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const addContent = () => {
    setLoading(true);
    const formData = {
      details: detail,
      category: category,
    };

    const url = `${process.env.REACT_APP_API_URL}/api/admin/add_policy`;
    try {
      const options = {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: qs.stringify(formData),
        url,
      };
      axios(options).then(() => {
        setLoading(false);
      });
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Metatags pageTitle="Wolburg  - Our Policy  " description="Our Policy" />
      <PolicyHero category={"Demo"} />
      <select
        className="mt-2 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" tw="font-medium">
          Select
        </option>
        <option value="privacynotice" className="font-medium">
          Privacy Notice
        </option>
        <option value="cookiespreferences" className="font-medium">
          Cookies Preferences
        </option>
        <option value="termsofservice" className="font-medium">
          Terms of Services
        </option>
      </select>
      <Editor
        apiKey={process.env.REACT_APP_API_KEY}
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 500,
          menubar: "insert",
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "image |insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
        }}
        onChange={(e, editor) => {
          const data = e.target.getContent();
          setDetail(data);
        }}
      />
      <button onClick={addContent}>
        <span>Add Policy</span>
        <span>{loading ? "loading" : <></>}</span>
      </button>
      <p className="mt-24"></p>
      <article className="sm:text-sm md:text-base lg:text-lg leading-8 my-5">
        <p>{parse(`${detail}`)}</p>
      </article>
    </>
  );
};

export default Demo;
