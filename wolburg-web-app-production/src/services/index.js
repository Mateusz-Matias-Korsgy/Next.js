import http from "./http-common";

const verifyUser = (data) => {
  return http.post("api/verify_email", data);
};

const payments = (data) => {
  return http.post("/payment/intent", data);
};

const exportedObject = {
  verifyUser,
  payments,
};

export default exportedObject;
