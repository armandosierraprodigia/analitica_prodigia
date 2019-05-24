import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import PrivateLayout from "./layouts/PrivateLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import { publicRoutes, privateRoutes } from "./routes";

import Login from "./views/Login";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          {publicRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={props => (
                  <DefaultLayout>
                    <route.component {...props} />
                  </DefaultLayout>
                )}
              />
            );
          })}
          {/* 
          {privateRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={props => (
                  <PrivateLayout>
                    <route.component {...props} />
                  </PrivateLayout>
                )}
              />
            );
          })} */}
        </Router>
      </Provider>
    );
  }
}

export default App;
