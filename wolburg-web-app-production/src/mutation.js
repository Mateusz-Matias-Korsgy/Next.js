import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { config } from "./Constant";

let token = sessionStorage.getItem("authToken");

export const usePostRequest = (endpoint) => {
  const [errorResp, setErrorResp] = useState();
  const [success, setSuccess] = useState();
  const createRequest = async (formData) => {
    try {
      const res = await axios.post(
        `${config.url.API_URL}/${endpoint}`,
        formData,
        {
          headers: {
            Authorization: token ? token : "",
          },
        }
      );
      setErrorResp();
      setSuccess(res.data);
    } catch (error) {
      setErrorResp({
        errorStatus: error.response.status,
        errorResponse: error.response.data.msg,
      });
    }
  };

  const { mutateAsync: createPost, isLoading } = useMutation(createRequest);

  return { createPost, isLoading, errorResp, success };
};

//POST REQUEST TO UPLOAD FILE
export const usePutRequestWithFile = (endpoint) => {
  const [errorResp, setErrorResp] = useState();
  const [success, setSuccess] = useState();
  const createRequest = async (formData) => {
    try {
      const res = await axios.post(
        `${config.url.API_URL}/${endpoint}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data,application/json",
          },
        }
      );
      setErrorResp();
      setSuccess(res.data);
    } catch (error) {
      setErrorResp({
        errorStatus: error.response.status,
        errorResponse: error.response.data.msg,
      });
    }
  };

  const { mutateAsync: createPost, isLoading } = useMutation(createRequest);

  return { createPost, isLoading, errorResp, success };
};

export const useGetRequest = (endpoint) => {
  const [errorResp, setErrorResp] = useState();
  const [success, setSuccess] = useState();
  const createRequest = async (formData) => {
    try {
      const res = await axios.get(
        `${config.url.API_URL}/${endpoint}`,
        formData,
        {
          headers: {
            Authorization: token ? token : "",
          },
        }
      );
      setErrorResp();
      setSuccess(res?.data);
    } catch (error) {
      setErrorResp({
        errorStatus: error.response.data.statusCode,
        errorResponse: error.response.data.message,
      });
    }
  };

  const { mutateAsync: createPost, isLoading } = useMutation(createRequest);

  return { createPost, isLoading, errorResp, success };
};
