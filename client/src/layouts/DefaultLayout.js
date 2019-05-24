import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NavbarDefault from "./../components/Navbar/NavbarDefault";
import FooterDefault from "./../components/Footer/FooterDefault";

export class DefaultLayout extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <NavbarDefault style={styles.header} />
        <section>
          {/* Body del layout, aqui se representa todo lo que este dentro de las etiquetas <DefaultLaypout> </DefaultLaypout>*/}
          {this.props.children}
        </section>
        <FooterDefault />
      </div>
    );
  }
}

const styles = {
  header: {
    marginBottom: "25px"
  }
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
