import React, { useEffect, useState } from "react";
import { useGetRequest } from "../../mutation";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import HeroBannerMin from "../../components/Banner/HeroBannerMin";
import ApplyForm from "./../../components/Forms/ApplyForm";

const Apply = () => {
  const [job, setJob] = useState({});
  let career = useParams();
  const { createPost, errorResp, success } = useGetRequest(
    `api/career/get/${career.id}`
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    createPost({});
  }, [createPost]);

  useEffect(() => {
    if (success) {
      setJob(success?.data);
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
  }, [success, errorResp, createPost]);
  return (
    <>
      <HeroBannerMin />
      <ApplyForm data={job} id={career.id} />
    </>
  );
};

export default Apply;
