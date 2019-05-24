import React from "./node_modules/react";
import { Route, Redirect } from "./node_modules/react-router-dom";
import { connect } from "./node_modules/react-redux";
import PropTypes from "./node_modules/prop-types";
import PrivateLayout from "../../layouts/PrivateLayout";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <PrivateLayout>
          <Component {...props} />
        </PrivateLayout>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  () => {}
)(PrivateRoute);
