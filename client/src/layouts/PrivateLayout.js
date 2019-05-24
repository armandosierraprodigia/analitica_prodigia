import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class DefaultLayout extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { auth } = this.props;

    if (auth.isAuthenticated)
      return (
        <div>
          <navbar />
          <section>
            {/* Body del layout, aqui se representa todo lo que este dentro de las etiquetas <DefaultLaypout> </DefaultLaypout>*/}
            {this.props.children}
          </section>
          <footer />
        </div>
      );
    else return <Redirect to="/login" />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
