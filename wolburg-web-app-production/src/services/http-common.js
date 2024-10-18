import axios from "axios";
import { config } from "../Constant";

export default axios.create({
  baseURL: config.url.API_URL,
  headers: {
    "Content-type": "application/json"
  }
});
