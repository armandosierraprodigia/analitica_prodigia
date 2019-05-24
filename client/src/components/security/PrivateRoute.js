import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PrivateLayout from "../../layouts/PrivateLayout";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
   <Route
      {...rest}
      render={props =>
         auth.isAuthenticated === true ?
             (
                <PrivateLayout>
                    <Component {...props} />
                </PrivateLayout>
                
            )
          : (
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

export default connect(mapStateToProps, () => {})(PrivateRoute);
