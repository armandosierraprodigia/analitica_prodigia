import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DefaultLayout from "../../layouts/DefaultLayout";

const PublicRoute = ({ component: Component, auth, ...rest }) => (
   <Route
      {...rest}
      render={props =>
         auth.isAuthenticated === true ?
             (
                <DefaultLayout>
                    <Component {...props} />
                </DefaultLayout>
            )
          : (
            <Redirect to="/login" />
         )
      }
   />
);

PublicRoute.propTypes = {
   auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth
});

export default connect(mapStateToProps, () => {})(PublicRoute);
