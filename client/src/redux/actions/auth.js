import axios from "axios";
import { setAuthToken } from "../config";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "../types";
import { setAlert } from "./alert";

//Register
export const registerUser = (userData, history) => dispatch => {
   axios
      .post("/api/users/register", userData)
      .then(res => history.push("/login"))
      .catch(err => {
         dispatch({
            type: GET_ERRORS,
            payload: err.response.data.errors
         });
      });
};

//Login get user token

export const loginUser = userData => dispatch => {
   axios
      .post("/api/users/login", userData)
      .then(res => {
         const { token } = res.data;
         //set token local storage
         localStorage.setItem("jwtToken", token);
         // set token to auth header
         setAuthToken(token);
         //Decode token to get user data
         const decoded = jwt_decode(token);
         //set current user
         dispatch(setCurrentUser(decoded));
      })
      .catch(err => {
         const errors = err.response.data;

         if (errors) {
            dispatch(setAlert(errors.password, "danger"));
         }

         dispatch({
            type: GET_ERRORS,
            payload: err.response.data
         });
      });
};

//Set logged in user

export const setCurrentUser = decoded => {
   return {
      type: SET_CURRENT_USER,
      payload: decoded
   };
};

//logout user
export const logoutUser = () => dispatch => {
   //remove token from localstorage
   localStorage.removeItem("jwtToken");
   //remove authheader fro future requests
   setAuthToken(false);
   //set current user to {} wich will ser isAuthenticated to false
   dispatch(setCurrentUser({}));
};
