import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";


const rootReducer = combineReducers({
   auth: authReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
   rootReducer,
   initialState,
   compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
         window.__REDUX_DEVTOOLS_EXTENSION__()
   )
);

export default store;
