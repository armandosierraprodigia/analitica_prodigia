import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class FooterDefault extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <footer style={{ bottom: 0 }}>
        <h1>footer</h1>
      </footer>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterDefault);
