const prod = {
  url: {
    API_URL: process.env.REACT_APP_API_URL,
  },
};
const dev = {
  url: {
    API_URL: process.env.REACT_APP_API_URL_DEV,
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
