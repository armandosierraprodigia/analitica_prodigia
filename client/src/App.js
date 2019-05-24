import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import PrivateLayout from "./layouts/PrivateLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import { publicRoutes, privateRoutes } from "./routes";

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
        </Router>
      </Provider>
    );
  }
}

export default App;
