import axios from "axios";
import { FETCH_API_DATA, isAPIready } from "../types";

const URL = "https://restcountries.eu/rest/v2/all";

export const GetData = () => {
  return function (dispatch) {
    return axios
      .get(URL)
      .then((res) => {
        dispatch({ type: FETCH_API_DATA, payload: res.data });
        dispatch({ type: isAPIready, payload: true });
      })
      .catch((error) => {
        console.log("problem with connecting to API " + error);
      });
  };
};

export default GetData;
