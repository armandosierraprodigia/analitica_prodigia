import {
    SET_CURRENT_USER,
    LOGIN_LOADING,
    SET_CURRENT_USER_FROM_TOKEN,
    SIGN_OUT_USER,
    GET_ERRORS
  } from "./../types";
  
  const initialState = {
    token: "",
    user: null,
    loading: false,
    isAuthenticated: false,
    error: ""
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_LOADING:
        return {
          ...state,
          loading: true
        };
        
  
      case SET_CURRENT_USER:
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          isAuthenticated: true,
          loading: false
        };
        
      case SET_CURRENT_USER_FROM_TOKEN:
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          isAuthenticated: true,
          loading: false
        };
        
  
      case SIGN_OUT_USER:
        return {
          ...state,
          token: "",
          user: null,
          isAuthenticated: false
        };
  
      case GET_ERRORS:
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
       
    }
  };
  
  export default authReducer;
  