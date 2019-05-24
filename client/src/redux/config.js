import axios from "axios";

export const setAuthToken = token => {
  if (token) {
    //apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
